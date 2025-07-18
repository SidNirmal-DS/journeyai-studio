import React from "react";

const emotionalData = [
  {
    icon: "/assets/angry.svg",
    label: "Too many pricing plans",
  },
  {
    icon: "/assets/meh.svg",
    label: "Feature overload",
  },
  {
    icon: "/assets/smiley.svg",
    label: "Product tour helped understand value",
  },
];

export default function EmotionalTriggers() {
  return (
    <section className="bg-white py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4">
          Emotional Triggers at Each Stage
        </h2>
        <p className="text-lg text-black text-center mt-2 max-w-4xl mx-auto">
          Understand how users feel at each stage. Leverage AI to uncover hidden frustrations and emotional triggers.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-12 max-w-4xl mx-auto">
        {emotionalData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img src={item.icon} alt={item.label} className="w-14 h-14 mb-4" />
            <p className="mt-2 text-black font-medium text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 