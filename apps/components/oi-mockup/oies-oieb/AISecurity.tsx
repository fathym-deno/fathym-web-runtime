export default function AISecurity() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>AI Security & Zero Trust Execution</h2>
        <p class='text-lg text-gray-300'>
          AI-driven security ensures anomaly detection, encrypted execution, and compliance across
          cloud and edge environments.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Zero Trust Security</h3>
          <p class='mt-2 text-gray-300'>AI-driven anomaly detection and compliance enforcement.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Regulatory Compliance</h3>
          <p class='mt-2 text-gray-300'>
            Meets ISO 27001, NIST AI Risk Management, and industrial cybersecurity standards.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/ai-security'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore OpenIndustrial Security Model
        </a>
      </div>
    </section>
  );
}
