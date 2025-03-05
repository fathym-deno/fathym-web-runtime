// deno-lint-ignore-file ban-types
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import HeroSection from '../../components/oi-mockup/now-hiring/HeroSection.tsx';
import CareerRoadmap from '../../components/oi-mockup/now-hiring/CareerRoadmap.tsx';
import PartnerWithUs from '../../components/oi-mockup/now-hiring/PartnerWithUs.tsx';
import ResearchInnovation from '../../components/oi-mockup/now-hiring/ResearchInnovation.tsx';

export type NowHiringData = {};

export const handler: EaCRuntimeHandlerSet<EaCWebState, NowHiringData> = {
  GET: (_req, ctx) => {
    const data: NowHiringData = {};
    return ctx.Render(data);
  },
};

export default function NowHiring({}: PageProps<NowHiringData>) {
  return (
    <div class='flex flex-col space-y-12 bg-[#0A1F44] text-white'>
      <HeroSection />
      <CareerRoadmap />
      <PartnerWithUs />
      <ResearchInnovation />
    </div>
  );
}
