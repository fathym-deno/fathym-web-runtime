import { EaCManageForm, EnterpriseManagementItem } from '@fathym/atomic-design-kit';
import { redirectRequest } from '@fathym/common';
import { EaCUserRecord, EverythingAsCode } from '@fathym/eac';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { PageProps } from '@fathym/eac-applications/runtime/preact';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import { loadEaCStewardSvc } from '@fathym/eac/steward/clients';
import {
  EaCStatusProcessingTypes,
  waitForStatus,
  waitForStatusWithFreshJwt,
} from '@fathym/eac/steward/status';

type EnterprisePageData = {
  CurrentEnterpriseLookup?: string;

  Enterprises: EaCUserRecord[];
};

export const handler: EaCRuntimeHandlerSet<EaCWebState, EnterprisePageData> = {
  async GET(_req, ctx) {
    const data: EnterprisePageData = {
      CurrentEnterpriseLookup: ctx.State.EaC?.EnterpriseLookup,
      Enterprises: [],
    };

    if (ctx.State.EaC) {
      const eacSvc = await loadEaCStewardSvc();

      data.Enterprises = await eacSvc.EaC.ListForUser(
        ctx.State.Username!,
        ctx.Runtime.EaC.EnterpriseLookup,
      );
    }

    return ctx.Render(data);
  },

  async POST(req, ctx) {
    const formData = await req.formData();

    const newEaC: EverythingAsCode = {
      EnterpriseLookup: crypto.randomUUID(),
      Details: {
        Name: formData.get('name') as string,
        Description: formData.get('description') as string,
      },
    };

    const parentEaCSvc = await loadEaCStewardSvc();

    const createResp = await parentEaCSvc.EaC.Create(
      newEaC,
      ctx.State.Username!,
      60,
    );

    const status = await waitForStatusWithFreshJwt(
      parentEaCSvc,
      createResp.EnterpriseLookup,
      createResp.CommitID,
      ctx.State.Username!,
    );

    const denoKv = await ctx.Runtime.IoC.Resolve(Deno.Kv, 'eac');

    if (status.Processing == EaCStatusProcessingTypes.COMPLETE) {
      await denoKv
        .atomic()
        .set(
          ['User', ctx.State.Username!, 'Current', 'EnterpriseLookup'],
          createResp.EnterpriseLookup,
        )
        .delete(['User', ctx.State.Username!, 'Current', 'CloudLookup'])
        .delete([
          'User',
          ctx.State.Username!,
          'Current',
          'ResourceGroupLookup',
        ])
        .commit();

      return redirectRequest(ctx.Runtime.URLMatch.Base, false, false);
    } else {
      return redirectRequest(
        `${ctx.Runtime.URLMatch.Base}?error=${
          encodeURIComponent(
            status.Messages['Error'] as string,
          )
        }&commitId=${createResp.CommitID}`,
        false,
        false,
      );
    }
  },

  async PUT(req, ctx) {
    const eac: EverythingAsCode = await req.json();

    const denoKv = await ctx.Runtime.IoC.Resolve(Deno.Kv, 'eac');

    await denoKv
      .atomic()
      .set(
        ['User', ctx.State.Username!, 'Current', 'EnterpriseLookup'],
        eac.EnterpriseLookup,
      )
      .delete(['User', ctx.State.Username!, 'Current', 'CloudLookup'])
      .delete(['User', ctx.State.Username!, 'Current', 'ResourceGroupLookup'])
      .commit();

    return Response.json({ Processing: EaCStatusProcessingTypes.COMPLETE });
  },

  async DELETE(req, ctx) {
    const eac: EverythingAsCode = await req.json();

    const eacSvc = await loadEaCStewardSvc(
      eac.EnterpriseLookup!,
      ctx.State.Username!,
    );

    // deno-lint-ignore no-explicit-any
    const deleteResp = await eacSvc.EaC.Delete(eac as any, true, 60);

    const _status = await waitForStatus(
      eacSvc,
      eac.EnterpriseLookup!,
      deleteResp.CommitID,
    );

    if (ctx.State.EaC?.EnterpriseLookup === eac.EnterpriseLookup) {
      const denoKv = await ctx.Runtime.IoC.Resolve(Deno.Kv, 'eac');

      await denoKv
        .atomic()
        .delete(['User', ctx.State.Username!, 'Current', 'EnterpriseLookup'])
        .delete(['User', ctx.State.Username!, 'Current', 'CloudLookup'])
        .delete([
          'User',
          ctx.State.Username!,
          'Current',
          'ResourceGroupLookup',
        ])
        .commit();
    }

    return Response.json({ Processing: EaCStatusProcessingTypes.COMPLETE });
  },
};

export default function Enterprises({ Data }: PageProps<EnterprisePageData>) {
  return (
    <>
      <EaCManageForm action='' />

      <div class='max-w-sm m-auto'>
        <div class='border-b-[1px] border-dotted border-slate-400 dark:border-slate-700'></div>

        {Data.Enterprises &&
          Data.Enterprises.map((enterprise) => {
            return (
              <EnterpriseManagementItem
                active={Data.CurrentEnterpriseLookup === enterprise.EnterpriseLookup}
                enterprise={enterprise}
                manage={false}
                deleteActionPath='./enterprises'
                setActiveActionPath='./enterprises'
              />
            );
          })}
      </div>
    </>
  );
}
