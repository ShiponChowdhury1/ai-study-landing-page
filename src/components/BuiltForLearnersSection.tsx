"use client";

import { FiBookOpen, FiUsers, FiMonitor, FiAward } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { ElementType } from "react";
import { motion } from "framer-motion";

const learnerIcons: ElementType[] = [FiBookOpen, FiUsers, FiMonitor, FiAward];

const BuiltForLearnersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="learners" className="w-full bg-white py-20">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: "1216px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-[32px] font-bold text-gray-900">
            {t.builtForLearners.heading}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {t.builtForLearners.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.builtForLearners.items.map((learner, index) => {
            const Icon = learnerIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, boxShadow: "0 24px 48px rgba(21,93,252,0.12)" }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.18, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50"
                >
                  <Icon className="h-7 w-7 text-[#155DFC]" />
                </motion.div>
                <h3 className="text-base font-bold text-gray-900">{learner.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{learner.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuiltForLearnersSection;
