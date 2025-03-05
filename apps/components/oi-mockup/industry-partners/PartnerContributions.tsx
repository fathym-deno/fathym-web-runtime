export default function PartnerContributions() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Industry Leaders Driving AI Execution Innovation
        </h2>
        <p class='text-lg text-gray-300'>
          Each partner plays a critical role in AI execution, industrial automation, or data
          intelligence.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Optimized Execution</h3>
          <p class='mt-2 text-gray-300'>
            Partners integrate AI solutions to enhance efficiency and automation.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Cloud-to-Edge Orchestration</h3>
          <p class='mt-2 text-gray-300'>
            Seamless AI execution from cloud infrastructure to industrial edge systems.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/partner-execution'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          See How Our Partners Power AI Execution
        </a>
      </div>
    </section>
  );
}
