import React from "react";

const stages = [
  {
    title: "1. Awareness",
    description: "User hears about the product from a friend or ad.",
    touchpoints: ["Word of Mouth", "Google Search"],
    emotion: "🤔 Curious",
    painPoint: "No major issues – Working well",
  },
  {
    title: "2. Consideration",
    description: "User evaluates different options and compares features.",
    touchpoints: ["Website", "Social Media"],
    emotion: "🤔 Evaluative",
    painPoint: "Overwhelmed by choices",
  },
  {
    title: "3. Decision",
    description: "User commits and takes action to sign up or purchase.",
    touchpoints: ["Signup Form", "Checkout Page"],
    emotion: "🎉 Excited",
    painPoint: "Signup process is a bit long",
  },
  {
    title: "4. Onboarding",
    description: "User goes through onboarding and invites teammates.",
    touchpoints: ["Welcome Email", "Product Tour"],
    emotion: "🧭 Guided",
    painPoint: "Unclear setup instructions",
  },
  {
    title: "5. Exploration",
    description: "User explores features and hits usage limits or trials.",
    touchpoints: ["Dashboard", "Feature Trial"],
    emotion: "🔍 Interested",
    painPoint: "Too many options – Feature overload",
  },
  {
    title: "6. Conversion",
    description: "User talks to sales, negotiates pricing, or upgrades plan.",
    touchpoints: ["Sales Call", "Pricing Page"],
    emotion: "💰 Committed",
    painPoint: "Pricing not transparent",
  },
];

export default function StagesCards() {
  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-10">
        User Journey Stages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-lg p-6 transition-colors duration-300"
          >
            <h3 className="text-orange-500 font-bold text-lg">{stage.title}</h3>
            <p className="text-gray-100">
              {stage.description}
            </p>

            <p className="text-sm text-gray-500 font-medium mb-1">Touchpoints</p>
            <p className="text-sm text-gray-500 mb-4">
              {stage.touchpoints.join("   ")}
            </p>

            <p className="text-sm text-gray-500 font-medium mb-1">Customer Emotion</p>
            <span className="font-semibold text-orange-500">{stage.emotion}</span>

            <p className="text-sm text-gray-500 font-medium mb-1 mt-4">Pain Points</p>
            <div className="bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 px-3 py-1 rounded-md inline-block mt-2">
              {stage.painPoint}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 