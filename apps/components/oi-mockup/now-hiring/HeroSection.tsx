export default function HeroSection() {
  return (
    <section class='relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-[#0A1F44] to-[#0E2A5A]'>
      <h1 class='text-4xl font-extrabold text-neon-blue drop-shadow-lg'>
        Shape the Future of AI-Powered Industrial Execution
      </h1>
      <p class='mt-4 text-lg text-gray-300 max-w-2xl'>
        OpenIndustrial is hiring AI engineers, solution architects, and automation innovators to
        build the next generation of AI execution.
      </p>
      <div class='mt-6 flex space-x-4'>
        <a
          href='/careers'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Explore Open Roles & Collaborations
        </a>
        <a
          href='/partners'
          class='px-6 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg shadow-md hover:border-neon-green hover:text-neon-green transition duration-300'
        >
          Partner with OpenIndustrial
        </a>
      </div>
    </section>
  );
}
