import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../../src/state/EaCWebState.ts';

export const handler: EaCRuntimeHandlerSet<EaCWebState> = {
  GET(_req, ctx) {
    return Response.json(ctx.State.EaC);
  },
};
