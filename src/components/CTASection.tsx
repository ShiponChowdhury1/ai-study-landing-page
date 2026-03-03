"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="w-full py-20"
      style={{
        background: "linear-gradient(135deg, #155DFC 0%, #1248D6 50%, #0D3BA8 100%)",
      }}
    >
      <div
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
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image src="/logo/appleStore.png" alt="Download on App Store" width={200} height={50} className="border-none" />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <Image src="/logo/appStore.png" alt="Get it on Google Play" width={200} height={50} className="border-none" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
