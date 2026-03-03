"use client";

import { FiUserPlus, FiFileText, FiBook, FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { ElementType } from "react";
import { motion } from "framer-motion";

const stepIcons: ElementType[] = [FiUserPlus, FiFileText, FiBook, FiTrendingUp];
const stepNumbers = ["1", "2", "3", "4"];

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="w-full bg-[#F8FAFF] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-5 sm:px-6 lg:px-8 max-w-[1216px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">{t.howItWorks.heading}</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            {t.howItWorks.subheading}
          </p>
        </motion.div>

        {/* Steps - Responsive grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-5 justify-items-center">
          {/* Connector line - hidden on mobile/tablet */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute hidden lg:block origin-left"
            style={{
              top: "95px",
              left: "160px",
              right: "160px",
              height: "2px",
              backgroundColor: "#BFDBFE",
              zIndex: 0
            }}
          />
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(21,93,252,0.10)" }}
                className="relative flex flex-col items-center text-center w-full rounded-2xl border border-[#F3F4F6] bg-white pt-12 pb-8 sm:pt-10 sm:pb-6 px-5 sm:px-4 cursor-pointer"
                style={{ zIndex: 1 }}
              >
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                  className="absolute flex items-center justify-center rounded-full bg-[#155DFC] font-bold text-white shadow-md w-10 h-10 sm:w-12 sm:h-12 -top-5 sm:-top-6 left-1/2 -translate-x-1/2 text-sm sm:text-lg"
                >
                  {stepNumbers[index]}
                </motion.div>
                {/* Icon */}
                <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#EFF6FF" }}>
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#155DFC]" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug px-2 sm:px-4">{step.title}</h3>
                <p className="mt-2 text-[10px] sm:text-xs leading-relaxed text-gray-500 px-2 sm:px-4">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
