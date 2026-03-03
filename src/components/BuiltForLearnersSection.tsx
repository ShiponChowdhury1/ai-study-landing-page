"use client";

import { FiBookOpen, FiUsers, FiMonitor, FiAward } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { ElementType } from "react";

const learnerIcons: ElementType[] = [FiBookOpen, FiUsers, FiMonitor, FiAward];

const BuiltForLearnersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="learners" className="w-full bg-white py-20">
      <div className="mx-auto px-5 sm:px-6 lg:px-8" style={{ maxWidth: "1216px" }}>
        <div className="text-center mb-14">
          <h2 className="text-[32px] font-bold text-gray-900">
            {t.builtForLearners.heading}
          </h2>
          <p className="mt-3 text-base text-gray-500">
            {t.builtForLearners.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.builtForLearners.items.map((learner, index) => {
            const Icon = learnerIcons[index];
            return (
              <div key={index} className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-7 w-7 text-[#155DFC]" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{learner.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{learner.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuiltForLearnersSection;
