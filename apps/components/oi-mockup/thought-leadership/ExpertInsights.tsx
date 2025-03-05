export default function ExpertInsights() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Meet the Experts Driving Industrial AI Execution
        </h2>
        <p class='text-lg text-gray-300'>
          Explore thought leadership articles, keynote presentations, and expert panels featuring
          OpenIndustrial executives and industry pioneers.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Industry Leaders</h3>
          <p class='mt-2 text-gray-300'>
            Insights from AI execution experts revolutionizing automation.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Conference Highlights</h3>
          <p class='mt-2 text-gray-300'>
            Presentations and discussions from global industrial AI summits.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/expert-insights'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Meet OpenIndustrial’s AI Execution Experts
        </a>
      </div>
    </section>
  );
}
