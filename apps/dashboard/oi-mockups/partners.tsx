// deno-lint-ignore-file ban-types
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import HeroSection from '../../components/oi-mockup/industry-partners/HeroSection.tsx';
import PartnerContributions from '../../components/oi-mockup/industry-partners/PartnerContributions.tsx';
import PartnerIntegration from '../../components/oi-mockup/industry-partners/PartnerIntegration.tsx';
import SuccessStories from '../../components/oi-mockup/industry-partners/SuccessStories.tsx';

export type IndustryPartnersData = {};

export const handler: EaCRuntimeHandlerSet<EaCWebState, IndustryPartnersData> = {
  GET: (_req, ctx) => {
    const data: IndustryPartnersData = {};
    return ctx.Render(data);
  },
};

export default function IndustryPartners({}: PageProps<IndustryPartnersData>) {
  return (
    <div class='flex flex-col space-y-12 bg-[#0A1F44] text-white'>
      <HeroSection />
      <PartnerContributions />
      <PartnerIntegration />
      <SuccessStories />
    </div>
  );
}
