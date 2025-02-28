import { redirectRequest } from '@fathym/common';
import { EaCWebState } from '../../../../../src/state/EaCWebState.ts';
import { EaCRuntimeHandlers } from '@fathym/eac/runtime/pipelines';
import { EverythingAsCode } from '@fathym/eac';
import { EaCCloudDetails, EverythingAsCodeClouds } from '@fathym/eac-azure';
import { loadEaCStewardSvc } from '@fathym/eac/steward/clients';
import { EaCStatusProcessingTypes, waitForStatus } from '@fathym/eac/steward/status';
import { loadEaCActuators } from '../../../../../configs/eac-actuators.config.ts';

export const handler: EaCRuntimeHandlers<EaCWebState> = {
  async POST(req, ctx) {
    const formData = await req.formData();

    const cloudLookup = (formData.get('cloudLookup') as string) || crypto.randomUUID();

    const eac: EverythingAsCode & EverythingAsCodeClouds = {
      EnterpriseLookup: ctx.State.EaC!.EnterpriseLookup,
      Actuators: loadEaCActuators(),
      Clouds: {
        [cloudLookup]: {
          Token: ctx.State.AzureAccessToken!,
          Details: {
            Name: formData.get('subscription-name') as string,
            Description: formData.get('subscription-name') as string,
            SubscriptionID: formData.get('subscription-id') as string,
            IsDev: !!formData.get('is-dev'),
            BillingScope: formData.get('billing-scope') as string,
            Type: 'Azure',
          } as EaCCloudDetails,
        },
      },
    };

    const eacSvc = await loadEaCStewardSvc(ctx.State.EaCJWT!);

    const commitResp = await eacSvc.EaC.Commit(eac, 60);

    const status = await waitForStatus(
      eacSvc,
      commitResp.EnterpriseLookup,
      commitResp.CommitID,
    );

    if (status.Processing == EaCStatusProcessingTypes.COMPLETE) {
      return redirectRequest('/dashboard/clouds/azure', false, false);
    } else {
      return redirectRequest(
        `/dashboard/clouds/azure?commitId=${commitResp.CommitID}`,
        false,
        false,
      );
    }
  },
};
