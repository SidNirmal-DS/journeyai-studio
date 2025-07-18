"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-20 px-4 text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-black">
        Welcome to <span className="text-orange-500">JourneyAI</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
        Map user journeys with intelligence. Visualize emotions, touchpoints,
        and pain points using AI.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          Get Started
        </button>
        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition">
          Learn More
        </button>
      </div>
    </section>
  );
} 