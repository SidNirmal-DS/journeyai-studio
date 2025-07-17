import HeroSection from "./components/HeroSection";
import JourneyInputSection from "./components/JourneyInputSection";
import EmotionExplorer from "./components/EmotionExplorer";
import TouchpointAnalyzer from "./components/TouchpointAnalyzer";
import AIInsightRecommender from "./components/AIInsightRecommender";
import ExportJourneySection from "./components/ExportJourneySection";
import Footer from "./components/Footer";
import React from "react";

const cards = [
  {
    key: 1,
    title: "Awareness",
    description: "User hears about the product from a friend or ad.",
    touchpoints: ["Word of Mouth", "Google Search"],
    emotion: "🥱 Curious",
    painPoint: "No major issues – Working well",
  },
  {
    key: 2,
    title: "Consideration",
    description: "User evaluates different options and compares features.",
    touchpoints: ["Website", "Social Media"],
    emotion: "🤔 Evaluative",
    painPoint: "Overwhelmed by choices",
  },
  {
    key: 3,
    title: "Decision",
    description: "User commits and takes action to sign up or purchase.",
    touchpoints: ["Signup Form", "Checkout Page"],
    emotion: "🎉 Excited",
    painPoint: "Signup process is a bit long",
  },
  {
    key: 4,
    title: "Onboarding",
    description: "User goes through onboarding and invites teammates.",
    touchpoints: ["Welcome Email", "Product Tour"],
    emotion: "🧭 Guided",
    painPoint: "Misses product features",
  },
  {
    key: 5,
    title: "Exploration",
    description: "User explores features and hits usage limits or trials.",
    touchpoints: ["Dashboard", "Feature Trial"],
    emotion: "🔍 Interested",
    painPoint: "Feature limits confusing",
  },
  {
    key: 6,
    title: "Conversion",
    description: "User talks to sales, negotiates pricing, or upgrades plan.",
    touchpoints: ["Sales Call", "Pricing Page"],
    emotion: "💰 Committed",
    painPoint: "Unclear pricing tiers",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <HeroSection />
      <JourneyInputSection />

      {/* User Journey Stages Section */}
      <section className="py-16 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-6 text-center">User Journey Stages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="w-[280px] min-h-[420px] rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h2 className="text-white text-xl font-semibold mb-2">
                {card.key}. {card.title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="mb-2">
                <p className="text-white font-medium mb-1">Touchpoints</p>
                <div className="flex flex-wrap gap-2">
                  {card.touchpoints.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-xs px-3 py-1 rounded-full font-medium transition-transform duration-200 hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white font-medium">Customer Emotion</p>
                <p className="text-gray-300 text-sm mt-1">{card.emotion}</p>
              </div>
              <div className="mt-4">
                <p className="text-white font-medium">Pain Points</p>
                <div className="mt-1 bg-green-800/90 border border-green-400 text-green-200 text-sm px-3 py-2 rounded-lg">
                  {card.painPoint}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emotion Explorer Section */}
      <EmotionExplorer />

      {/* Touchpoint Analyzer Section */}
      <TouchpointAnalyzer />

      <AIInsightRecommender />

      <ExportJourneySection />

      <Footer />

      {/* Add back other sections here if needed */}
    </main>
  );
}
