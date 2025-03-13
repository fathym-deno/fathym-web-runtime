import { EaCRuntimeHandler } from '@fathym/eac/runtime/pipelines';
import { buildCurrentEaCMiddleware } from '@fathym/eac-applications/steward/api';
import { EaCWebState } from '../../src/state/EaCWebState.ts';
import { buildCurrentEaCCloudMiddleware } from '../../src/middlewares/buildCurrentEaCCloudMiddleware.ts';

export default [
  buildCurrentEaCMiddleware(),
  buildCurrentEaCCloudMiddleware(),
] as EaCRuntimeHandler<EaCWebState>[];
