import React from "react";

const ExportJourneySection = () => (
  <section className="mt-24 px-4 md:px-16 text-white text-center">
    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
      Export Journey as PDF / CSV
    </h2>
    <p className="text-gray-400 max-w-xl mx-auto mb-10">
      Download your mapped customer journey to share with teams or integrate with analytics platforms.
    </p>
    <div className="flex justify-center gap-6 flex-wrap">
      <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform hover:scale-105">
        Export as PDF
      </button>
      <button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform hover:scale-105">
        Export as CSV
      </button>
    </div>
  </section>
);

export default ExportJourneySection; 