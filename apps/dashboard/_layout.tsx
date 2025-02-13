// import { ChatSet } from '@fathym/atomic-design-kit';
import { merge } from '@fathym/common';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../src/state/EaCWebState.ts';
// import DashboardThinky from '../islands/thinky/DashboardThinky.tsx';
import SiteFrame from '../components/SiteFrame.tsx';
import { PageProps } from '@fathym/eac-applications/runtime/preact';

export type MainLayoutData = {
  // ActiveChat?: string;

  // Chats: Record<string, ChatSet>;

  EaCJWT: string;

  Root: string;

  Username: string;
};

export const handler: EaCRuntimeHandlerSet<EaCWebState, MainLayoutData> = {
  GET: (_req, ctx) => {
    const data: MainLayoutData = {
      // ActiveChat: ctx.State.EaC?.EnterpriseLookup,
      // Chats: ctx.State.EaC
      //   ? {
      //       // [ctx.State.Username!]: {
      //       //   Name: 'User Main Chat',
      //       //   CircuitLookup: 'thinky-dashboard',
      //       // },
      //       [ctx.State.EaC.EnterpriseLookup!]: {
      //         Name: 'Enterprise Chat',
      //         CircuitLookup: 'thinky-dashboard',
      //       },
      //     }
      //   : {},
      EaCJWT: ctx.State.EaCJWT!,
      // GroupChats: ,
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

      {
        /* <DashboardThinky
        activeChat={Data.ActiveChat}
        chats={Data.Chats}
        jwt={Data.EaCJWT}
        root={Data.Root}
      >
        <Component />
      </DashboardThinky> */
      }
    </SiteFrame>
  );
}
