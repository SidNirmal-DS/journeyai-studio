"use client";
import React from "react";

export default function ConversionTouchpoints() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 mb-4">
          Key Conversion Touchpoints
        </h2>
        <p className="text-lg text-gray-700">
          Explore the most impactful stages in your user journey.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {["Word of Mouth", "Feature Trial", "Pricing Page"].map((label, index) => (
          <button
            key={index}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md transition-all"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
} 