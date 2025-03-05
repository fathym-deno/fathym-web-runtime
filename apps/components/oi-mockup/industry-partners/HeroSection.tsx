export default function HeroSection() {
  return (
    <section class='relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-[#0A1F44] to-[#0E2A5A]'>
      <h1 class='text-4xl font-extrabold text-neon-blue drop-shadow-lg'>
        A Collaborative Future: AI Execution Powered by Industry Leaders
      </h1>
      <p class='mt-4 text-lg text-gray-300 max-w-2xl'>
        OpenIndustrial partners with leading AI, industrial automation, and cloud technology
        providers to deliver AI-powered execution solutions.
      </p>
      <div class='mt-6 flex space-x-4'>
        <a
          href='/partners'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore OpenIndustrial Partner Solutions
        </a>
        <a
          href='/partner-integration'
          class='px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg shadow-md hover:border-neon-green hover:text-neon-green transition duration-300'
        >
          Join the OpenIndustrial Ecosystem
        </a>
      </div>
    </section>
  );
}
