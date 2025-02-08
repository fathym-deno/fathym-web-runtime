import { EaCRuntimeHandler } from '@fathym/eac/runtime/pipelines';
import { CompanyWebState } from '../../src/state/CompanyWebState.ts';

export default ((_req, ctx) => {
  ctx.State.CurrentDate = new Date(Date.now());

  return ctx.Next();
}) as EaCRuntimeHandler<CompanyWebState>;
