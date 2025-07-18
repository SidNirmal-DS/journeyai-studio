import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-left mb-6 sm:mb-0">
          <h2 className="text-xl font-bold text-gray-900">
            Journey<span className="text-orange-500">AI</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-sm">
            Redefining how product teams map and optimize customer journeys using AI.
          </p>
          <p className="text-gray-400 text-sm mt-4">© 2025 JourneyAI · All rights reserved</p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex space-x-6 text-gray-600">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">About</a>
          </div>
          <img
            src="/assets/footer-illustration.svg"
            alt="Illustration"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>
      </div>
    </footer>
  );
} 