import { ChatSet } from '@fathym/atomic-design-kit';
import { merge } from '@fathym/common';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../src/state/EaCWebState.ts';
import SiteFrame from '../components/SiteFrame.tsx';
import { PageProps } from '@fathym/eac-applications/preact';

export type MainLayoutData = {
  ActiveChat?: string;
  Chats?: Record<string, ChatSet>;
  EaCJWT: string;
  Root: string;
  Username: string;
};

export const handler: EaCRuntimeHandlerSet<EaCWebState, MainLayoutData> = {
  GET: (_req, ctx) => {
    const data: MainLayoutData = {
      EaCJWT: ctx.State.EaCJWT!,
      Root: '/api/thinky/',
      Username: ctx.State.Username!,
    };

    ctx.Data = merge(ctx.Data, data);

    return ctx.Next();
  },
};

export default function Layout({ Component }: PageProps<MainLayoutData>) {
  return (
    <SiteFrame>
      <Component />
    </SiteFrame>
  );
}
