import React from "react";

const Footer = () => (
  <footer className="mt-32 px-6 py-10 bg-black/30 backdrop-blur-md text-gray-300 text-sm text-center rounded-t-2xl">
    <div className="max-w-6xl mx-auto space-y-4">
      <h3 className="text-white text-xl font-semibold tracking-wide">JourneyAI</h3>
      <p className="text-gray-400">Redefining how product teams map and optimize customer journeys using AI.</p>
      <div className="flex justify-center gap-6 text-sm">
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition duration-300">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition duration-300">
          LinkedIn
        </a>
        <a href="#about" className="hover:underline hover:text-white transition duration-300">
          About
        </a>
      </div>
      <div className="pt-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} JourneyAI · All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer; 