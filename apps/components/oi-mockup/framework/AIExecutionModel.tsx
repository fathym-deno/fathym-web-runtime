export default function AIExecutionModel() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          The AI-Driven Execution Model for Industrial Automation
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial’s AI execution agents run real-time industrial workloads while continuously
          optimizing their decision-making.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>AI Execution Loop</h3>
          <p class='mt-2 text-gray-300'>
            Data Ingestion → AI Decisioning → Execution → Continuous Optimization.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Human-in-the-Loop</h3>
          <p class='mt-2 text-gray-300'>
            Ensuring transparency and control over AI-powered industrial automation.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/execution-workflow'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore the AI Execution Workflow
        </a>
      </div>
    </section>
  );
}
