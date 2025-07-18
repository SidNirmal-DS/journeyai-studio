'use client';
import React from 'react';

export default function DescribeYourJourney() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold">
          <span className="text-black">Describe Your </span>
          <span className="text-orange-600">Journey</span>
        </h2>
        <p className="text-xl text-black mt-4">Enter a simple story, like:</p>
        <p className="text-gray-600 italic mt-2">
          "A user discovers us via search, visits our website, watches a demo, and signs up for a free trial."
        </p>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <textarea
          placeholder="e.g. A user discovers us via search, visits our pricing page..."
          className="w-full h-32 p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
        ></textarea>

        <div className="mt-6">
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300">
            Generate Journey Map →
          </button>
        </div>
      </div>
    </section>
  );
} 