export default function ResearchInnovation() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          Research, Experiment, and Push the Boundaries of AI Execution
        </h2>
        <p class='text-lg text-gray-300'>
          Join OpenIndustrial’s research collaborations, hackathons, and innovation challenges
          focused on industrial AI automation.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>University Collaborations</h3>
          <p class='mt-2 text-gray-300'>
            Partner with academic institutions to drive AI execution research.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Hackathons & Grants</h3>
          <p class='mt-2 text-gray-300'>
            Participate in hackathons, grants, and research initiatives for AI execution innovation.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/research'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Join OpenIndustrial’s Research & Innovation Network
        </a>
      </div>
    </section>
  );
}
