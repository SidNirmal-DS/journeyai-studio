import React from "react";

const TouchpointAnalyzer = () => (
  <section className="mt-24 px-4 md:px-16 text-white">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
      Touchpoint Analyzer
    </h2>
    <p className="text-center max-w-3xl mx-auto text-gray-400 mb-10">
      Identify which touchpoints drive conversions, and which create drop-offs.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      {["Word of Mouth", "Feature Trial", "Pricing Page"].map((label, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full px-6 py-2 text-sm font-semibold transition-transform duration-300 hover:scale-105 shadow-md"
        >
          {label}
        </div>
      ))}
    </div>
  </section>
);

export default TouchpointAnalyzer; 