"use client";
import React from "react";
import Image from "next/image";

export default function ExportJourneySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-center mt-8">
          <span className="text-black">Export Journey as </span>
          <span className="text-orange-500">PDF / CSV</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Download your mapped customer journey to share with teams or integrate
          with analytics platforms.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md transition-all">
            Export as PDF
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md transition-all">
            Export as CSV
          </button>
        </div>
      </div>
    </section>
  );
} 