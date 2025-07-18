import React from "react";

const TouchpointAnalyzer = () => (
  <section className="mt-24 px-4 md:px-16 text-white">
    <h2 className="text-3xl font-bold text-orange-500 text-center mb-2">
      Key Conversion Touchpoints
    </h2>
    <p className="text-center text-black/80 text-lg mb-6">
      Explore the most impactful stages in your user journey.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {["Word of Mouth", "Feature Trial", "Pricing Page"].map((label, index) => (
        <button
          key={index}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          {label}
        </button>
      ))}
    </div>
  </section>
);

export default TouchpointAnalyzer; 