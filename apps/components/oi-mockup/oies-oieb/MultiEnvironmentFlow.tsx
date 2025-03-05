export default function MultiEnvironmentFlow() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>Multi-Environment Flow</h2>
        <p class='text-lg text-gray-300'>
          Seamlessly transition AI execution across development, testing, and production
          environments.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Test Environment</h3>
          <p class='mt-2 text-gray-300'>Safely experiment with AI models and automation logic.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Integration Environment</h3>
          <p class='mt-2 text-gray-300'>Ensure seamless compatibility with industrial systems.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Production Environment</h3>
          <p class='mt-2 text-gray-300'>
            Deploy live AI execution with rollback options if needed.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/ai-deployment'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Deploy AI Execution Safely
        </a>
      </div>
    </section>
  );
}
