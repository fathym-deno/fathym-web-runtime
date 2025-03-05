export default function AIGovernance() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>AI Governance, Security & Compliance</h2>
        <p class='text-lg text-gray-300'>
          Ensuring secure execution with AI-powered anomaly detection & workload authentication.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Zero Trust Security</h3>
          <p class='mt-2 text-gray-300'>AI-driven anomaly detection and compliance measures.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Regulatory Compliance</h3>
          <p class='mt-2 text-gray-300'>
            Adherence to ISO 27001, NIST AI Risk Management, and industrial cybersecurity standards.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/security'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore OpenIndustrial Security & Compliance
        </a>
      </div>
    </section>
  );
}
