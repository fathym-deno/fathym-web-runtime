export default function PartnerIntegration() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Seamless Integration for AI Execution & Industrial Automation
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial offers APIs, SDKs, and plug-and-play integrations for AI execution and
          automation workflows.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>API & SDK Access</h3>
          <p class='mt-2 text-gray-300'>
            Developers and system integrators can leverage partner APIs to extend AI execution.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Cloud & Edge Integration</h3>
          <p class='mt-2 text-gray-300'>
            Seamless AI-powered execution across cloud and edge computing models.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/partner-integration'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore Partner APIs & Integration Options
        </a>
      </div>
    </section>
  );
}
