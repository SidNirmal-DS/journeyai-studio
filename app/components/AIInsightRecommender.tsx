import React from "react";

const AIInsightRecommender = () => (
  <section className="mt-24 px-4 md:px-16 text-white">
    <div className="w-full max-w-md mx-auto">
      <img src="/assets/emotional_triggers.svg" alt="Emotional Triggers" />
    </div>
    <h2 className="text-3xl font-bold text-orange-500 text-center mt-16 mb-2">
      AI-Powered Suggestions
    </h2>
    <p className="text-center text-black/80 text-lg mb-8">
      Smart insights generated from user pain points and journey data.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
      <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4">
        <div className="text-3xl mb-2">🌙</div>
        <p className="text-black font-medium">
          Simplify decision-making and reduce user drop-off at conversion.
        </p>
      </div>
      <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4">
        <div className="text-3xl mb-2">💡</div>
        <p className="text-black font-medium">
          Add tooltips or highlight walkthroughs during feature trials.
        </p>
      </div>
      <div className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-4">
        <div className="text-3xl mb-2">📋</div>
        <p className="text-black font-medium">
          Guide users through a clear, goal-oriented first session.
        </p>
      </div>
    </div>
  </section>
);

export default AIInsightRecommender; 