import React from "react";

const EmotionExplorer = () => (
  <section className="text-center py-12">
    <p className="text-[#09090B] max-w-2xl mx-auto text-base leading-relaxed mb-10">
      Understand how users feel at each stage. Leverage AI to uncover hidden frustrations and emotional triggers.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
      <div className="flex flex-col items-center space-y-2">
        <img src="/assets/angry.svg" alt="Angry Icon" className="w-12 h-12" />
        <p className="text-sm font-medium">Too many pricing plans</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img src="/assets/meh.svg" alt="Meh Icon" className="w-12 h-12" />
        <p className="text-sm font-medium">Feature overload</p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img src="/assets/smiley.svg" alt="Smiley Icon" className="w-12 h-12" />
        <p className="text-sm font-medium">Product tour helped understand value</p>
      </div>
    </div>
  </section>
);

export default EmotionExplorer; 