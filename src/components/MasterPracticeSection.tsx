import Image from "next/image";
import { FiClock, FiCheckCircle, FiXCircle, FiBarChart2 } from "react-icons/fi";

const practices = [
  {
    icon: FiClock,
    title: "Timed Quizzes",
    description: "Challenge yourself with time-bound assessments",
  },
  {
    icon: FiCheckCircle,
    title: "Instant Feedback",
    description: "See correct and wrong answers immediately",
  },
  {
    icon: FiXCircle,
    title: "Detailed Review",
    description: "Understand mistakes with clear explanations",
  },
  {
    icon: FiBarChart2,
    title: "Performance Analytics",
    description: "Track your score and improvement over time",
  },
];

const MasterPracticeSection = () => {
  return (
    <section id="quiz" className="relative w-full bg-[#EEF3FF] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Planet/World decoration - left side (hidden on mobile/tablet) */}
      <div className="absolute left-4 lg:left-10 top-20 lg:top-1/2 lg:-translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <Image
          src="/master/world.png"
          alt="World"
          width={160}
          height={160}
          className="object-contain w-24 lg:w-40"
        />
      </div>

      {/* Pen + ABC decoration - right side top (hidden on mobile/tablet) */}
      <div className="absolute right-4 lg:right-10 top-4 lg:top-8 select-none pointer-events-none hidden lg:block">
        <Image
          src="/master/pen.png"
          alt="Pen"
          width={180}
          height={180}
          className="object-contain w-28 lg:w-44"
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-6 max-w-[1216px]">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">
            Master Through Practice
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            AI generated interactive quizzes
          </p>
        </div>

        {/* Practice Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center rounded-2xl bg-white p-6 sm:p-8"
            >
              {/* Icon */}
              <div
                className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "#DBEAFE" }}
              >
                <practice.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#155DFC]" />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                {practice.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPracticeSection;
