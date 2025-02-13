import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { PageProps } from '@fathym/eac-applications/runtime/preact';
import type { Location } from 'npm:@azure/arm-subscriptions@5.1.0';
import { mergeWithArrays, redirectRequest } from '@fathym/common';
import { CloudCALZForm } from '@fathym/atomic-design-kit';
import {
  EaCCloudAzureDetails,
  EaCCloudResourceFormatDetails,
  EaCServiceDefinitions,
  EverythingAsCodeClouds,
} from '@fathym/eac-azure';
import { loadEaCAzureAPISvc } from '@fathym/eac-azure/steward/clients';
import { EverythingAsCode } from '@fathym/eac';
import { loadEaCStewardSvc } from '@fathym/eac/steward/clients';
import { EaCStatusProcessingTypes, waitForStatus } from '@fathym/eac/steward/status';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';

interface CALZPageData {
  cloudLookup?: string;

  locations: Location[];
}

export const handler: EaCRuntimeHandlerSet<EaCWebState, CALZPageData> = {
  async GET(_req, ctx) {
    const data: CALZPageData = {
      cloudLookup: ctx.State.CloudLookup,
      locations: [],
    };

    const serviceFiles = [
      'https://raw.githubusercontent.com/lowcodeunit/infrastructure/master/templates/eac/calz/services.jsonc',
    ];

    const svcCalls: (() => Promise<void>)[] = [];

    const svcFileCalls = serviceFiles.map(async (sf) => {
      const resp = await fetch(sf);

      return await resp.json();
    });

    svcCalls.push(async () => {
      const svcDefs = await Promise.all<EaCServiceDefinitions>(svcFileCalls);

      const svcDef = mergeWithArrays<EaCServiceDefinitions>(...svcDefs);

      const eacAzureSvc = await loadEaCAzureAPISvc(
        ctx.State.EaC!.EnterpriseLookup!,
        ctx.State.Username!,
      );

      const locationsResp = await eacAzureSvc.Cloud.Locations(
        ctx.State.EaC!.EnterpriseLookup!,
        data.cloudLookup!,
        svcDef,
      );

      data.locations = locationsResp.Locations;
    });

    await await Promise.all(
      svcCalls.map(async (sc) => {
        await sc();
      }),
    );

    return ctx.Render(data);
  },

  async POST(req, ctx) {
    const formData = await req.formData();

    const cloudLookup = formData.get('cloudLookup') as string;

    const resGroupLookup = formData.get('resGroupLookup') as string;

    const resLookup = (formData.get('resLookup') as string) || 'calz';

    const resGroupLocation = formData.get('location') as string;

    const shortName = resGroupLookup
      .split('-')
      .map((p) => p.charAt(0))
      .join('');

    const details = ctx.State.EaC!.Clouds![cloudLookup]
      .Details as EaCCloudAzureDetails;

    const servicePrincipalId = details!.ID;

    const commitEaC: EverythingAsCode & EverythingAsCodeClouds = {
      EnterpriseLookup: ctx.State.EaC!.EnterpriseLookup,
      Clouds: {
        [cloudLookup]: {
          ResourceGroups: {
            [resGroupLookup]: {
              Details: {
                Name: resGroupLookup,
                Description: formData.get('description') as string,
                Location: resGroupLocation,
                Order: 1,
              },
              Resources: {
                [resLookup]: {
                  Details: {
                    Type: 'Format',
                    Name: 'Core CALZ',
                    Description: 'The core CALZ to use for the enterprise.',
                    Order: 1,
                    Template: {
                      Content:
                        'https://raw.githubusercontent.com/lowcodeunit/infrastructure/master/templates/eac/calz/template.jsonc',
                      Parameters:
                        'https://raw.githubusercontent.com/lowcodeunit/infrastructure/master/templates/eac/calz/parameters.jsonc',
                    },
                    Data: {
                      CloudLookup: cloudLookup,
                      Location: resGroupLocation,
                      Name: resGroupLookup,
                      PrincipalID: '', // TODO(mcgear): Pass in actual principal ID (maybe retrievable from MSAL account record? I think can just be the email?)
                      ResourceLookup: resLookup,
                      ServicePrincipalID: servicePrincipalId,
                      ShortName: shortName,
                    },
                    Outputs: {},
                  } as EaCCloudResourceFormatDetails,
                },
              },
            },
          },
        },
      },
    };

    const eacSvc = await loadEaCStewardSvc(
      commitEaC.EnterpriseLookup!,
      ctx.State.Username!,
    );

    const commitResp = await eacSvc.EaC.Commit(commitEaC, 60 * 30);

    const status = await waitForStatus(
      eacSvc,
      commitResp.EnterpriseLookup,
      commitResp.CommitID,
    );

    if (status.Processing == EaCStatusProcessingTypes.COMPLETE) {
      return redirectRequest('/dashboard', false, false);
    } else {
      return redirectRequest(
        `/dashboard?error=${
          encodeURIComponent(
            status.Messages['Error'] as string,
          )
        }&commitId=${commitResp.CommitID}`,
        false,
        false,
      );
    }
  },
};

export default function CALZ({ Data }: PageProps<CALZPageData>) {
  return (
    <CloudCALZForm
      class='px-4'
      cloudLookup={Data.cloudLookup!}
      locations={Data.locations}
      action=''
    />
  );
}
