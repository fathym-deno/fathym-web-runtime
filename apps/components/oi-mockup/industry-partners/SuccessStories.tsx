export default function SuccessStories() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Real-World AI Execution Powered by Industry Partnerships
        </h2>
        <p class='text-lg text-gray-300'>
          See how industry leaders are leveraging OpenIndustrial partnerships to optimize execution.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Predictive Maintenance</h3>
          <p class='mt-2 text-gray-300'>AI-powered execution for equipment reliability.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Manufacturing Automation</h3>
          <p class='mt-2 text-gray-300'>AI-driven analytics for production optimization.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Supply Chain Optimization</h3>
          <p class='mt-2 text-gray-300'>
            Seamless AI execution for logistics and energy efficiency.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/partner-success'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          See OpenIndustrial Partners in Action
        </a>
      </div>
    </section>
  );
}
