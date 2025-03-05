// deno-lint-ignore-file ban-types
import { PageProps } from '@fathym/eac-applications/preact';
import { EaCRuntimeHandlerSet } from '@fathym/eac/runtime/pipelines';
import { EaCWebState } from '../../../src/state/EaCWebState.ts';
import HeroSection from '../../components/oi-mockup/oies-oieb/HeroSection.tsx';
import WhatIsOpenIndustrialEdge from '../../components/oi-mockup/oies-oieb/WhatIsOpenIndustrialEdge.tsx';
import MultiEnvironmentFlow from '../../components/oi-mockup/oies-oieb/MultiEnvironmentFlow.tsx';
import AISecurity from '../../components/oi-mockup/oies-oieb/AISecurity.tsx';

export type OIESOIEBData = {};

export const handler: EaCRuntimeHandlerSet<EaCWebState, OIESOIEBData> = {
  GET: (_req, ctx) => {
    const data: OIESOIEBData = {};
    return ctx.Render(data);
  },
};

export default function OIESOIEB({}: PageProps<OIESOIEBData>) {
  return (
    <div class='flex flex-col space-y-12 bg-[#0A1F44] text-white'>
      <HeroSection />
      <WhatIsOpenIndustrialEdge />
      <MultiEnvironmentFlow />
      <AISecurity />
    </div>
  );
}
