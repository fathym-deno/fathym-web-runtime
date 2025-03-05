export default function DeveloperEngagement() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Integrate, Customize & Extend OpenIndustrial’s AI Execution Framework
        </h2>
        <p class='text-lg text-gray-300'>
          Access OpenIndustrial’s API, SDKs, and integration tools to build and extend AI-powered
          execution workflows.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>API & SDK Access</h3>
          <p class='mt-2 text-gray-300'>
            Developers and system integrators can leverage our APIs to extend AI execution
            capabilities.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Partner Integrations</h3>
          <p class='mt-2 text-gray-300'>
            Collaborate with OpenIndustrial’s partner network to deploy AI execution solutions
            seamlessly.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/developer-integration'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore Developer & Partner Integration Options
        </a>
      </div>
    </section>
  );
}
