"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-indigo-400">JourneyAI</span>
      </h1>
      <p className="text-xl max-w-2xl">
        Map user journeys with intelligence. Visualize emotions, touchpoints, and pain points using AI.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-indigo-500 px-6 py-2 rounded-xl hover:bg-indigo-600 transition">
          Get Started
        </button>
        <button className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </section>
  );
} 