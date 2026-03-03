"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Star, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "EN" as const, label: "English (US)" },
    { code: "CN" as const, label: "\u4E2D\u6587 (Chinese)" },
  ];

  const navItems = [
    { name: t.nav.features, href: "#features" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.quiz, href: "#quiz" },
    { name: t.nav.learners, href: "#learners" },
  ];

  return (
    <section className="relative w-full pt-[60px] sm:pt-[65px]">
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
          className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col border-b px-5 sm:px-6 lg:px-[165px] transition-colors duration-300"
          style={{
            backgroundColor: menuOpen || scrolled ? "#155DFC" : "#FFFFFF1A",
            borderBottomColor: "rgba(255, 255, 255, 0.2)"
          }}
        >
          <div className="w-full h-[60px] sm:h-[65px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/logo/logo.png"
                  alt="Learn Fast Logo"
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl">{t.brandName}</span>
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
              {/* Language Selector - desktop */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white hover:bg-white/30 transition-colors text-sm"
                >
                  <span>{languages.find(l => l.code === language)?.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {langOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          language === lang.code
                            ? "bg-[#155DFC] text-white font-semibold"
                            : "text-gray-700 hover:bg-blue-50"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="hidden sm:block bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-sm text-sm sm:text-base">
                {t.nav.getStarted}
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
                <p className="text-white/60 text-xs uppercase tracking-wide">{t.nav.language}</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                        language === lang.code
                          ? "bg-white text-[#155DFC]"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      {lang.code === "EN" ? "English" : "\u4E2D\u6587"}
                    </button>
                  ))}
                </div>
                <button className="bg-white text-[#155DFC] px-4 py-2.5 rounded-full font-semibold text-sm w-full">
                  {t.nav.getStarted}
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 pt-6 sm:pt-8 lg:pt-16 pb-10 sm:pb-24 lg:pb-32">
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
                <span className="text-gray-900">{t.hero.heading1}</span>
                <br />
                <span className="text-[#1E6FFF]">{t.hero.heading2} </span>
                <br className="hidden sm:block" />
                <span className="text-[#1E6FFF]">{t.hero.heading3} </span>
                <br className="hidden sm:block" />
                <span className="text-[#1E6FFF]">{t.hero.heading4}</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-lg max-w-md mx-auto lg:mx-0">
                {t.hero.description}
              </p>

              {/* Email Subscription */}
              <div className="flex max-w-md mx-auto lg:mx-0">
                <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.hero.emailPlaceholder}
                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base min-w-0"
                  />
                  <button className=" px-4 sm:px-6 py-2.5 sm:py-3 font-semibold bg-[#2b67e9]  hover:bg-[#0a4ff0]  text-white transition-colors border-l border-gray-200 text-sm sm:text-base whitespace-nowrap">
                    {t.hero.subscribe}
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
                  {t.hero.rating}
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
