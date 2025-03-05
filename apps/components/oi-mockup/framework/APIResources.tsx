export default function APIResources() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Seamlessly Integrate AI Execution with OpenIndustrial’s APIs
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial offers robust APIs for AI model deployment, execution monitoring, and
          system integration.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>AI Execution Endpoints</h3>
          <p class='mt-2 text-gray-300'>
            Deploy and manage AI execution workflows with powerful API capabilities.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>System Integration</h3>
          <p class='mt-2 text-gray-300'>
            Seamlessly connect AI-powered execution with existing industrial systems.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/api-documentation'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore the OpenIndustrial API Documentation
        </a>
      </div>
    </section>
  );
}
