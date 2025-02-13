import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../src/state/EaCWebState.ts';
import { MainLayoutData } from './_layout.tsx';
import { PageProps } from '@fathym/eac-applications/runtime/preact';

export type GettingStartedPageData = {
  dashboards?: [];
};

export const handler: EaCRuntimeHandlerSet<
  EaCWebState,
  GettingStartedPageData & MainLayoutData
> = {
  GET: (_req, ctx) => {
    const userGettingStartedChat = `Getting-Started|${ctx.State.EaC!.EnterpriseLookup}`;

    const data: GettingStartedPageData & MainLayoutData = {
      ...ctx.Data,
      ActiveChat: userGettingStartedChat,
      Chats: {
        ...ctx.Data.Chats,
        [userGettingStartedChat]: {
          Name: 'Getting Started',
          CircuitLookup: 'thinky-getting-started',
        },
      },
    };

    return ctx.Render(data);
  },
};

export default function GettingStarted({}: PageProps<GettingStartedPageData>) {
  return (
    <div class='flex flex-row'>
      Begin typing to load your getting started...
    </div>
  );
}
