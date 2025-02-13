import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../../src/state/EaCWebState.ts';
import { loadEaCStewardSvc } from '@fathym/eac/steward/clients';

export const handler: EaCRuntimeHandlerSet<EaCWebState> = {
  async GET(_req, ctx) {
    const eacSvc = await loadEaCStewardSvc(ctx.State.EaCJWT!);

    const connections = await eacSvc.EaC.Connections(ctx.State.EaC!);

    return Response.json(connections);
  },
};
