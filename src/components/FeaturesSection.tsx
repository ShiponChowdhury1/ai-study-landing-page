"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const featureImages = [
  "/images/man/baby.png",
  "/images/man/child.png",
  "/images/man/women.png",
  "/images/man/baby1.png",
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-5 sm:px-6 lg:px-8 max-w-[1216px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">
            {t.features.heading}
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            {t.features.subheading}
          </p>
        </motion.div>

        {/* Feature Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {t.features.items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(21,93,252,0.12)" }}
              className="flex flex-col items-center text-center w-full rounded-2xl border border-[#F3F4F6] bg-white p-4 sm:p-6 cursor-pointer"
            >
              {/* Blob Shape Image */}
              <div className="mb-4 sm:mb-5 relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden w-[140px] h-[160px] sm:w-[180px] sm:h-[200px] mx-auto"
                  style={{ borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%" }}
                >
                  <Image
                    src={featureImages[index]}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-[#710A85]">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500 px-1 sm:px-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
