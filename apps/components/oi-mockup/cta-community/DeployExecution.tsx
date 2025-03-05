export default function DeployExecution() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Implement AI-Powered Execution in Your Industrial Workflows
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial provides seamless AI execution deployment across cloud and edge
          environments, ensuring scalability and efficiency.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Scalable AI Models</h3>
          <p class='mt-2 text-gray-300'>
            Customize and deploy AI execution models tailored to industrial needs.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Seamless Integration</h3>
          <p class='mt-2 text-gray-300'>
            Integrate AI workforce solutions into existing automation systems with ease.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/deploy-ai'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Deploy AI Execution Solutions Now
        </a>
      </div>
    </section>
  );
}
