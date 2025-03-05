export default function RoleOfAI() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          The Role of AI in Industrial Execution
        </h2>
        <p class='text-lg text-gray-300'>
          AI execution enhances operations—AI doesn’t replace engineers, it works alongside them to
          optimize workflows and reduce complexity.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Human-AI Collaboration</h3>
          <p class='mt-2 text-gray-300'>
            Engineers work with AI to make better, data-driven decisions.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Real-Time Optimization</h3>
          <p class='mt-2 text-gray-300'>
            AI continuously learns and refines execution pathways for peak efficiency.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/ai-execution'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Learn More About AI Execution Agents
        </a>
      </div>
    </section>
  );
}
