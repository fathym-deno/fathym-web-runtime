import { Action, CopyInput } from '@fathym/atomic-design-kit';
import { loadJwtConfig } from '@fathym/common/jwt';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';

interface JWTPageData {
  jwt?: string;
}

export const handler: EaCRuntimeHandlerSet<EaCWebState, JWTPageData> = {
  async GET(_req, ctx) {
    const jwt = await loadJwtConfig().Create({
      EnterpriseLookup: ctx.State.EaC!.EnterpriseLookup,
      Username: ctx.State.Username,
    });

    const data: JWTPageData = { jwt };

    return ctx.Render(data);
  },
};

export default function JWT({ Data }: PageProps<JWTPageData>) {
  return (
    <div class='mx-auto max-w-sm mt-8'>
      <CopyInput id='jwt' name='jwt' type='text' value={Data.jwt} />

      <p class='mt-8'>The token is good for 10 years.</p>

      <form class='mt-8'>
        <Action type='submit'>Create New JWT</Action>
      </form>
    </div>
  );
}
