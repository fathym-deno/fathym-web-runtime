export default function AIWorkforceShowcase() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>Meet Your AI Workforce</h2>
        <p class='text-lg text-gray-300'>
          AI Execution Agents designed for industrial operations, assisting engineers in optimizing
          workflows and improving automation strategies.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Cloud Native Solution Architect</h3>
          <p class='mt-2 text-gray-300'>Optimizes cloud-based AI deployments for efficiency.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Execution Path Optimizer</h3>
          <p class='mt-2 text-gray-300'>Dynamically adjusts workflows to maximize performance.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Security & Compliance Auditor</h3>
          <p class='mt-2 text-gray-300'>
            Ensures AI-driven security enforcement and compliance monitoring.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/ai-workforce'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Meet Your AI Execution Agents
        </a>
      </div>
    </section>
  );
}
