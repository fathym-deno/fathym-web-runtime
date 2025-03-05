export default function ResearchContributions() {
  return (
    <section class='py-16 px-6 bg-[#0A1F44] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Join the OpenIndustrial Innovation Network
        </h2>
        <p class='text-lg text-gray-300'>
          Contribute to OpenIndustrial's research program by developing models, algorithms, and AI
          governance frameworks.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Research Collaboration</h3>
          <p class='mt-2 text-gray-300'>
            Work with AI developers and automation experts to advance AI execution.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Open Source Contributions</h3>
          <p class='mt-2 text-gray-300'>
            Help build and improve OpenIndustrial’s open-source AI execution platform.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/research'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Become an OpenIndustrial AI Research Partner
        </a>
      </div>
    </section>
  );
}
