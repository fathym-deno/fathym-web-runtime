export default function WhyOpenIndustrial() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>Why OpenIndustrial?</h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial enhances, rather than replaces, legacy automation systems. It provides a
          cloud-native control plane for seamless AI-enhanced execution across platforms like
          Ignition, HighByte, Inmation, and Emerson DeltaV.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md'>
          <h3 class='text-xl font-semibold text-neon-green'>Traditional Automation</h3>
          <ul class='mt-2 text-gray-300 space-y-2'>
            <li>- Manual configuration</li>
            <li>- Limited by hardware</li>
            <li>- Static rule-based workflows</li>
          </ul>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md'>
          <h3 class='text-xl font-semibold text-neon-blue'>OpenIndustrial AI Execution</h3>
          <ul class='mt-2 text-gray-300 space-y-2'>
            <li>- AI-driven automation</li>
            <li>- Cloud-native & edge-optimized</li>
            <li>- Dynamic AI-powered decision-making</li>
          </ul>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/solutions'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore How OpenIndustrial Enhances Your Systems
        </a>
      </div>
    </section>
  );
}
