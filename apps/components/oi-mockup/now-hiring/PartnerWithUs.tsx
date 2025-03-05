export default function PartnerWithUs() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Integrate Your Solution with OpenIndustrial’s Virtual Workforce
        </h2>
        <p class='text-lg text-gray-300'>
          Startups and AI developers can propose execution agents, automation models, and industrial
          AI solutions.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>AI Solution Developers</h3>
          <p class='mt-2 text-gray-300'>
            Propose new AI execution models and integrate automation solutions.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Industry Partners</h3>
          <p class='mt-2 text-gray-300'>
            Collaborate with OpenIndustrial to expand AI-powered execution.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/partners'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Submit Your AI Execution Solution
        </a>
      </div>
    </section>
  );
}
