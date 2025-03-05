export default function HeroSection() {
  return (
    <section class='relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-[#0A1F44] to-[#0E2A5A]'>
      <h1 class='text-4xl font-extrabold text-neon-blue drop-shadow-lg'>
        Customize & Expand Your Virtual Workforce with OpenIndustrial’s AI Execution Model
      </h1>
      <p class='mt-4 text-lg text-gray-300 max-w-2xl'>
        OpenIndustrial’s execution framework enables enterprises and developers to build, train, and
        integrate AI-powered execution agents.
      </p>
      <div class='mt-6 flex space-x-4'>
        <a
          href='/developers'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Start Building AI Execution Agents
        </a>
        <a
          href='/framework'
          class='px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg shadow-md hover:border-neon-green hover:text-neon-green transition duration-300'
        >
          Explore the OpenIndustrial AI Execution Model
        </a>
      </div>
    </section>
  );
}
