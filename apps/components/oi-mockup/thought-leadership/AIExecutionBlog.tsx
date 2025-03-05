export default function AIExecutionBlog() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>The AI Execution Knowledge Hub</h2>
        <p class='text-lg text-gray-300'>
          Explore regular blog posts, guest contributions, and community-driven insights into AI
          execution trends.
        </p>
      </div>
      <div class='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-green'>Expert Articles</h3>
          <p class='mt-2 text-gray-300'>
            Stay updated with the latest AI execution developments from industry experts.
          </p>
        </div>
        <div class='p-6 bg-[#112E60] rounded-lg shadow-md text-center'>
          <h3 class='text-xl font-semibold text-neon-blue'>Community Insights</h3>
          <p class='mt-2 text-gray-300'>
            Learn from developers, researchers, and AI professionals contributing to OpenIndustrial.
          </p>
        </div>
      </div>
      <div class='mt-10 text-center'>
        <a
          href='/blog'
          class='px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Read the Latest AI Execution Blog Posts
        </a>
      </div>
    </section>
  );
}
