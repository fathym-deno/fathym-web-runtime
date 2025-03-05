export default function IndustryReports() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Deep Dives into AI Execution—Research-Backed Insights
        </h2>
        <p class='text-lg text-gray-300'>
          Access industry-leading white papers, research studies, and technical reports on AI
          execution methodologies.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Industry Reports</h3>
          <p class='mt-2 text-gray-300'>
            Download AI execution analytics and industrial optimization reports.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Case Studies</h3>
          <p class='mt-2 text-gray-300'>
            Explore real-world AI-powered workflow transformation success stories.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/industry-reports'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Download the Latest AI Execution Research
        </a>
      </div>
    </section>
  );
}
