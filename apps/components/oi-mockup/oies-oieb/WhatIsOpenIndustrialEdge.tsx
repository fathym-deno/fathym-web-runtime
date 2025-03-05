export default function WhatIsOpenIndustrialEdge() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>What is OpenIndustrial Edge?</h2>
        <p class='text-lg text-gray-300'>
          AI-powered execution and workload optimization at the edge ensures minimal latency and
          seamless task distribution.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>OIES (Edge Server)</h3>
          <p class='mt-2 text-gray-300'>
            Processes and distributes tasks to OIEBs for real-time execution.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>OIEB (Edge Blade)</h3>
          <p class='mt-2 text-gray-300'>
            Provides additional compute resources, ensuring optimal efficiency.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/edge-ai-execution'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Learn More About OpenIndustrial Edge AI Execution
        </a>
      </div>
    </section>
  );
}
