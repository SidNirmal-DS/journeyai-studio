import React from "react";

const AIInsightRecommender = () => (
  <section className="mt-24 px-4 md:px-16 text-white">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
      AI Insight Recommender
    </h2>
    <p className="text-center max-w-3xl mx-auto text-gray-400 mb-10">
      Generate actionable suggestions from AI based on user pain points and emotions.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Merge Pricing Tiers",
          description: "Simplify decision-making and reduce user drop-off at conversion.",
          icon: "🪙"
        },
        {
          title: "Clarify Feature Value",
          description: "Add tooltips or highlight walkthroughs during feature trials.",
          icon: "💡"
        },
        {
          title: "Offer Onboarding Checklist",
          description: "Guide users through a clear, goal-oriented first session.",
          icon: "📋"
        }
      ].map((tip, i) => (
        <div
          key={i}
          className="rounded-xl p-6 bg-white/10 backdrop-blur-md border border-white/10 text-white transition duration-300 hover:scale-105"
        >
          <div className="text-xl font-semibold flex items-center gap-2 mb-2">
            <span className="text-2xl">{tip.icon}</span> {tip.title}
          </div>
          <p className="text-sm text-gray-300">
            {tip.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AIInsightRecommender; 