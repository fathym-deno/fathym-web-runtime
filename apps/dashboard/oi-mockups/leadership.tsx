// deno-lint-ignore-file ban-types
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import HeroSection from '../../components/oi-mockup/thought-leadership/HeroSection.tsx';
import ExpertInsights from '../../components/oi-mockup/thought-leadership/ExpertInsights.tsx';
import IndustryReports from '../../components/oi-mockup/thought-leadership/IndustryReports.tsx';
import AIExecutionBlog from '../../components/oi-mockup/thought-leadership/AIExecutionBlog.tsx';
import ResearchContributions from '../../components/oi-mockup/thought-leadership/ResearchContributions.tsx';

export type ThoughtLeadershipData = {};

export const handler: EaCRuntimeHandlerSet<EaCWebState, ThoughtLeadershipData> = {
  GET: (_req, ctx) => {
    const data: ThoughtLeadershipData = {};
    return ctx.Render(data);
  },
};

export default function ThoughtLeadership({}: PageProps<ThoughtLeadershipData>) {
  return (
    <div class='flex flex-col space-y-12 bg-[#0A1F44] text-white'>
      <HeroSection />
      <ExpertInsights />
      <IndustryReports />
      <AIExecutionBlog />
      <ResearchContributions />
    </div>
  );
}
