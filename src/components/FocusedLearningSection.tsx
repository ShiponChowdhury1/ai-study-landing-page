"use client";

import Image from "next/image";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const mockups = [
  { src: "/images/mockup/mockup4.png", alt: "App Screen 4" },
  { src: "/images/mockup/mockup1.png", alt: "App Screen 1" },
  { src: "/images/mockup/mockup3.png", alt: "App Screen 3" },
  { src: "/images/mockup/mockup2.png", alt: "App Screen 2" },
];

const FocusedLearningSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: "1216px" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center mb-14"
        >
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
          >
            <HiOutlinePaperAirplane className="h-9 w-9 text-[#155DFC] -rotate-45 opacity-80" />
          </motion.div>
          <h2 className="text-[32px] font-bold text-gray-900">
            {t.focusedLearning.heading}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {t.focusedLearning.subheading}
          </p>
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border-4 border-teal-400"
          />
        </motion.div>

        {/* Mockup Images */}
        <div className="no-scrollbar flex items-end gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 lg:overflow-visible lg:justify-center pl-[10%] sm:pl-[5%] lg:pl-0">
          {mockups.map((mockup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="relative snap-start flex-shrink-0 w-[75vw] sm:w-[42vw] lg:w-auto cursor-pointer"
            >
              <Image
                src={mockup.src}
                alt={mockup.alt}
                width={323}
                height={664}
                className="rounded-3xl object-contain drop-shadow-xl w-full h-auto lg:w-[323px] lg:h-[664px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusedLearningSection;
