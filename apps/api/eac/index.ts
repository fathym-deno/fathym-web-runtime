import { EaCRuntimeHandlers } from '@fathym/eac/runtime/pipelines';

export default {
  GET(_req, ctx) {
    return Response.json(ctx.State.EaC);
  },
} as EaCRuntimeHandlers;
