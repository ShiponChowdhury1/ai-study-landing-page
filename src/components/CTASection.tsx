"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="w-full py-20"
      style={{
        background: "linear-gradient(135deg, #155DFC 0%, #1248D6 50%, #0D3BA8 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto text-center px-5 sm:px-6 lg:px-8"
        style={{ maxWidth: "1216px" }}
      >
        <h2 className="text-[36px] font-bold text-white leading-tight">
          {t.cta.heading}
        </h2>
        <p className="mt-4 text-base text-white/80">
          {t.cta.subheading}
        </p>

        {/* App Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Image src="/logo/appleStore.png" alt="Download on App Store" width={200} height={50} className="border-none" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <Image src="/logo/appStore.png" alt="Get it on Google Play" width={200} height={50} className="border-none" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
