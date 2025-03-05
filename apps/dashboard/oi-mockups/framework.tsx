// deno-lint-ignore-file ban-types
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import HeroSection from '../../components/oi-mockup/framework/HeroSection.tsx';
import AIExecutionModel from '../../components/oi-mockup/framework/AIExecutionModel.tsx';
import CustomizingAI from '../../components/oi-mockup/framework/CustomizingAI.tsx';
import APIResources from '../../components/oi-mockup/framework/APIResources.tsx';
import GovernanceSecurity from '../../components/oi-mockup/framework/GovernanceSecurity.tsx';

export type FrameworkOpenIndustrialData = {};

export const handler: EaCRuntimeHandlerSet<EaCWebState, FrameworkOpenIndustrialData> = {
  GET: (_req, ctx) => {
    const data: FrameworkOpenIndustrialData = {};
    return ctx.Render(data);
  },
};

export default function FrameworkOpenIndustrial({}: PageProps<FrameworkOpenIndustrialData>) {
  return (
    <div class='flex flex-col space-y-12 bg-[#0A1F44] text-white'>
      <HeroSection />
      <AIExecutionModel />
      <CustomizingAI />
      <APIResources />
      <GovernanceSecurity />
    </div>
  );
}
