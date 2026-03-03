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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.13 }}
                whileHover={{ y: -7, boxShadow: "0 20px 40px rgba(21,93,252,0.10)" }}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
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
