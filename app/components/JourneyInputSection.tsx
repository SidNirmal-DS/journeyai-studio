export default function JourneyInputSection() {
  return (
    <>
      <div className="w-full flex justify-center mb-6">
        <img src="/assets/journey-map.svg" alt="Journey Map Illustration" className="w-full max-w-md" />
      </div>
      <section className="w-full max-w-3xl mx-auto mt-24 px-6 text-white">
        <div className="text-center my-12">
          <h2 className="text-4xl font-bold text-[#F97316] mb-4">
            Describe Your Journey
          </h2>
          <p className="text-[#09090B] text-base mb-1">
            Enter a simple story, like:
          </p>
          <p className="text-[#71717A] italic text-sm max-w-2xl mx-auto">
            "A user discovers us via search, visits our website, watches a demo, and signs up for a free trial."
          </p>
        </div>

        <textarea
          rows={5}
          placeholder="e.g. A user discovers us via search, visits our pricing page..."
          className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-5 py-4 mb-6 placeholder:text-gray-500 text-sm"
        />

        <div className="text-center">
          <button
            className="group inline-flex items-center justify-center bg-gradient-to-r from-[#F97316] to-[#FFB56B] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Generate Journey Map
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </div>
      </section>
    </>
  );
} 