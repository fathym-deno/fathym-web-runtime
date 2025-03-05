export default function UseCases() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>AI Execution Use Cases</h2>
        <p class='text-lg text-gray-300'>
          How Enterprises Are Using AI Execution Agents Today.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Automated Logistics</h3>
          <p class='mt-2 text-gray-300'>
            AI-powered execution for warehouse and supply chain optimization.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Predictive Maintenance</h3>
          <p class='mt-2 text-gray-300'>AI-driven insights for proactive equipment maintenance.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Supply Chain Optimization</h3>
          <p class='mt-2 text-gray-300'>
            Enhanced AI-based decision-making for logistics efficiency.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/use-cases'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          See AI Execution in Action
        </a>
      </div>
    </section>
  );
}
