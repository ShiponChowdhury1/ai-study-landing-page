"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Star, Menu, X } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Quiz", href: "#quiz" },
    { name: "Learners", href: "#learners" },
  ];

  return (
    <section className="relative w-full">
      {/* Background with dripping effect - hidden on mobile, visible on sm+ */}
      <div
        className="hidden sm:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/navbar/navbar.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Mobile solid background */}
      <div
        className="sm:hidden absolute inset-0 w-full h-full -z-10"
        style={{ backgroundColor: "#E8F0FE" }}
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav
          className="w-full flex flex-col border-b px-4 sm:px-8 lg:px-[165px]"
          style={{
            backgroundColor: menuOpen ? "#155DFC" : "#FFFFFF1A",
            borderBottomColor: "rgba(255, 255, 255, 0.2)"
          }}
        >
          <div className="w-full h-[60px] sm:h-[65px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/logo/eiduLogo.png"
                  alt="Learn Fast Logo"
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">Learn Fast</span>
            </div>

            {/* Nav Items - Hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors font-medium text-sm xl:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white hover:bg-white/30 transition-colors text-sm">
                <span>English (US)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="hidden sm:block bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm text-sm sm:text-base">
                Get Started
              </button>
              {/* Hamburger - mobile only */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                style={{ backgroundColor: menuOpen ? "rgba(255,255,255,0.2)" : "#155DFC" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div
              className="lg:hidden w-full py-2 flex flex-col gap-1"
              style={{ backgroundColor: "#155DFC" }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium py-3 px-4 rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-white/20 mt-2 pt-3 flex flex-col gap-2 px-4">
                <button className="flex items-center gap-1 text-white text-sm py-2">
                  <span>English (US)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="bg-white text-[#155DFC] px-4 py-2.5 rounded-full font-semibold text-sm w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-6 sm:pt-8 lg:pt-16 pb-10 sm:pb-24 lg:pb-32">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

            {/* Right Content - Hero Image (on top for mobile) */}
            <div className="relative flex justify-center lg:justify-end lg:order-last w-full">
              <div className="relative w-full max-w-[260px] sm:max-w-md lg:max-w-lg">
                <Image
                  src="/images/navbar/right-image.png"
                  alt="Happy student learning"
                  width={600}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left lg:order-first">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Learn Faster.</span>
                <br />
                <span className="text-[#1E6FFF]">Practice</span>
                <br />
                <span className="text-[#1E6FFF]">Smarter.</span>
                <span className="text-[#1E6FFF]">Quiz</span>
                <br />
                <span className="text-[#1E6FFF]">Better.</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-lg max-w-md mx-auto lg:mx-0">
                Master any subject with interactive quizzes, smart learning
                paths, and instant feedback. Your personal learning companion
                for academic excellence.
              </p>

              {/* Email Subscription */}
              <div className="flex max-w-md mx-auto lg:mx-0">
                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base min-w-0"
                  />
                  <button className="bg-white text-gray-800 px-4 sm:px-6 py-2.5 sm:py-3 font-semibold hover:bg-gray-50 transition-colors border-l border-gray-200 text-sm sm:text-base whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm sm:text-base">
                  Rated 4.8 by 10,000+ learners
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop/tablet background fallback */}
      <div
        className="hidden sm:block absolute inset-0 w-full h-full -z-10"
        style={{ backgroundColor: "#E8F0FE" }}
      />
    </section>
  );
}
