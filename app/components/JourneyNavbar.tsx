"use client";

import Link from "next/link";

export default function JourneyNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-black">Journey<span className="text-orange-500">AI</span></span>
          <img src="/assets/rocket.svg" alt="Rocket Icon" className="w-5 h-5" />
        </Link>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-[#09090B] text-sm font-medium">
          <Link
            href="#describe-form"
            className="hover:text-[#F97316] transition-colors duration-200"
          >
            Describe
          </Link>
          <Link
            href="#awareness"
            className="hover:text-[#F97316] transition-colors duration-200"
          >
            Stages
          </Link>
          <Link
            href="#insights"
            className="hover:text-[#F97316] transition-colors duration-200"
          >
            Insights
          </Link>
          <Link
            href="#export"
            className="hover:text-[#F97316] transition-colors duration-200"
          >
            Export
          </Link>
        </nav>
      </div>
    </header>
  );
} 