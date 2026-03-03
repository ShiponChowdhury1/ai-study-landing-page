"use client";

import Image from "next/image";
import { FiClock, FiCheckCircle, FiXCircle, FiBarChart2 } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { ElementType } from "react";
import { motion } from "framer-motion";

const practiceIcons: ElementType[] = [FiClock, FiCheckCircle, FiXCircle, FiBarChart2];

const MasterPracticeSection = () => {
  const { t } = useLanguage();

  return (
    <section id="quiz" className="relative w-full bg-[#EEF3FF] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Planet/World decoration */}
      <motion.div
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 lg:left-10 top-20 lg:top-1/2 lg:-translate-y-1/2 select-none pointer-events-none hidden lg:block"
      >
        <Image src="/master/world.png" alt="World" width={160} height={160} className="object-contain w-24 lg:w-40" />
      </motion.div>
      {/* Pen decoration */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 lg:right-10 top-4 lg:top-8 select-none pointer-events-none hidden lg:block"
      >
        <Image src="/master/pen.png" alt="Pen" width={180} height={180} className="object-contain w-28 lg:w-44" />
      </motion.div>

      <div className="mx-auto px-5 sm:px-6 lg:px-8 max-w-[1216px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">
            {t.masterPractice.heading}
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            {t.masterPractice.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.masterPractice.items.map((practice, index) => {
            const Icon = practiceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(21,93,252,0.10)" }}
                className="flex flex-col items-center text-center rounded-2xl bg-white p-6 sm:p-8 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#DBEAFE" }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#155DFC]" />
                </motion.div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900">{practice.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">{practice.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MasterPracticeSection;
