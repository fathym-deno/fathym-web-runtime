export default function CommunityCollaboration() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Shape the Future of AI Execution—Contribute, Collaborate & Innovate
        </h2>
        <p class='text-lg text-gray-300'>
          Join OpenIndustrial’s open-source initiatives, research collaborations, and hackathons to
          advance AI execution technology.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>
            Open Source Contributions
          </h3>
          <p class='mt-2 text-gray-300'>
            Help improve and expand OpenIndustrial’s AI execution models and governance frameworks.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>
            Research & Hackathons
          </h3>
          <p class='mt-2 text-gray-300'>
            Collaborate with developers, researchers, and enterprises to shape the future of AI
            execution.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/community'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Join OpenIndustrial’s Open Source & Research Community
        </a>
      </div>
    </section>
  );
}
