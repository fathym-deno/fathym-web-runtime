export default function WorkforceCustomization() {
  return (
    <section class='py-16 px-6 bg-[#0E2A5A] text-white'>
      <div class='max-w-4xl mx-auto text-center'>
        <h2 class='text-3xl font-bold text-neon-blue mb-4'>
          AI Workforce Integration & Customization
        </h2>
        <p class='text-lg text-gray-300'>
          Customize, train, and deploy AI execution agents tailored to your industry’s needs.
        </p>
      </div>
      <div class='mt-10 flex flex-col items-center'>
        <label class='text-lg font-semibold mb-2'>Adjust AI Execution Preferences:</label>
        <input
          type='range'
          min='1'
          max='100'
          class='w-1/2 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer'
        />
        <button
          type='button'
          class='mt-6 px-6 py-3 bg-neon-blue text-white font-semibold rounded-lg shadow-md hover:bg-neon-green transition duration-300'
        >
          Configure Your AI Workforce
        </button>
      </div>
    </section>
  );
}
