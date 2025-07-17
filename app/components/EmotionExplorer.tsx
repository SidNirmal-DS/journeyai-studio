import React from "react";

const EmotionExplorer = () => (
  <section className="mt-24 px-4 md:px-16 text-white">
    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
      Emotion Explorer
    </h2>
    <p className="text-center max-w-3xl mx-auto text-gray-400 mb-12">
      Understand how users feel at each stage. Leverage AI to uncover hidden frustrations and emotional triggers.
    </p>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { emoji: "😠", title: "Frustration", cause: "Too many pricing plans" },
        { emoji: "🤯", title: "Confusion", cause: "Feature overload" },
        { emoji: "😌", title: "Relief", cause: "Product tour helped understand value" }
      ].map((item, idx) => (
        <div
          key={idx}
          className="rounded-xl p-6 bg-white/10 backdrop-blur-md border border-white/10 text-white transition duration-300 hover:scale-105"
        >
          <div className="text-xl font-semibold flex items-center gap-2 mb-2">
            <span className="text-2xl">{item.emoji}</span> {item.title}
          </div>
          <p className="text-sm text-gray-300">
            <strong className="text-white">Cause:</strong> {item.cause}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default EmotionExplorer; 