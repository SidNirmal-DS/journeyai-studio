export default function JourneyInputSection() {
  return (
    <section className="w-full max-w-3xl mx-auto mt-24 px-6 text-white">
      <h2 className="text-3xl font-bold tracking-tight mb-3 text-center">
        Describe Your Journey
      </h2>

      <p className="text-md text-gray-400 mb-6 text-center font-light leading-relaxed">
        Enter a simple story, like: <br />
        <em>"A user discovers us via search, visits our website, watches a demo, and signs up for a free trial."</em>
      </p>

      <textarea
        rows={5}
        placeholder="e.g. A user discovers us via search, visits our pricing page..."
        className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-5 py-4 mb-6 placeholder:text-gray-500 text-sm"
      />

      <div className="text-center">
        <button
          className="group inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     hover:from-pink-600 hover:to-purple-600 text-white px-7 py-3 rounded-xl text-sm font-semibold 
                     shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Generate Journey Map
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </button>
      </div>
    </section>
  );
} 