"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#0F172A] py-10 sm:py-16">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: "1216px" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {/* Left - Logo & Description */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2">
              <Image src="/logo/eiduLogo.png" alt="Learn Fast Logo" width={36} height={36} className="rounded-lg" />
              <span className="text-base font-bold text-white">{t.brandName}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Middle - Product Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">{t.footer.product}</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.links.features}</a></li>
              <li><a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#quiz" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.links.quiz}</a></li>
            </ul>
          </motion.div>

          {/* Right - Email Subscribe */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">{t.footer.stayUpdated}</h4>
            <div className="flex items-center rounded-lg overflow-hidden shadow-sm w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                className="h-10 flex-1 min-w-0 border-0 bg-gray-800 px-4 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button className="h-10 px-4 sm:px-5 text-sm font-semibold text-white bg-[#2b67e9] hover:bg-[#0a4ff0] transition-colors shrink-0">
                {t.footer.subscribe}
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-10 sm:mt-14 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
