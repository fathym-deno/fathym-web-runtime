export default function GovernanceSecurity() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Ensuring Trust & Security in AI Execution
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial follows Zero Trust security models, AI governance frameworks, and industry
          compliance standards.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>AI Governance</h3>
          <p class='mt-2 text-gray-300'>
            Maintain full control over AI execution policies, audit trails, and oversight
            mechanisms.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>
            Security & Compliance
          </h3>
          <p class='mt-2 text-gray-300'>
            Adhering to Zero Trust models and meeting global AI compliance standards.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/security-compliance'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Learn More About AI Execution Security & Compliance
        </a>
      </div>
    </section>
  );
}
