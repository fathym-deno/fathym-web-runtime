import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCWebState } from '../../src/state/EaCWebState.ts';

export type DashboardPageData = {
  dashboards?: [];
};

export const handler: EaCRuntimeHandlerSet<EaCWebState, DashboardPageData> = {
  GET: (_req, ctx) => {
    // if (!ctx.State.EaC) {
    //   return redirectRequest('/dashboard/enterprises', false, false);
    // } else if (!ctx.State.CloudLookup) {
    //   return redirectRequest('/dashboard/clouds/azure', false, false);
    // } else if (!ctx.State.ResourceGroupLookup) {
    //   return redirectRequest('/dashboard/clouds/calz', false, false);
    // }

    const data: DashboardPageData = {};

    return ctx.Render(data);
  },
};

export default function Dashboard({}: PageProps<DashboardPageData>) {
  return <div class='flex flex-row'>Begin typing to load your dashboard...</div>;
}
