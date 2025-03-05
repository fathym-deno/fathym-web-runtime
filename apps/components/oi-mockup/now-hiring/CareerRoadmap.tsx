export default function CareerRoadmap() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Be Part of the Next Generation of Industrial AI Talent
        </h2>
        <p class='text-lg text-gray-300'>
          OpenIndustrial is hiring for AI engineers, solution architects, AI execution researchers,
          and integration specialists.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>AI Execution Engineers</h3>
          <p class='mt-2 text-gray-300'>Develop and optimize AI-powered execution models.</p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Solution Architects</h3>
          <p class='mt-2 text-gray-300'>
            Design AI automation frameworks and industrial integration solutions.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/careers'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore OpenIndustrial Career Paths
        </a>
      </div>
    </section>
  );
}
