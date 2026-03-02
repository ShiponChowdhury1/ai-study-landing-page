import { FiUserPlus, FiFileText, FiBook, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    number: "1",
    icon: FiUserPlus,
    title: "Create Account",
    description: "Sign up in seconds with email or social login",
  },
  {
    number: "2",
    icon: FiFileText,
    title: "Upload a document",
    description: "Select from a wide range of topics and courses",
  },
  {
    number: "3",
    icon: FiBook,
    title: "AI Creates Quizzes and Flashcards",
    description: "Study lessons and test your knowledge instantly",
  },
  {
    number: "4",
    icon: FiTrendingUp,
    title: "Track your progress",
    description: "Monitor your improvement with detailed analytics",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#F8FAFF] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-[1216px]">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">How It Works</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            Get started in four simple steps
          </p>
        </div>

        {/* Steps - Responsive grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-5 justify-items-center">
          {/* Connector line - hidden on mobile/tablet */}
          <div
            className="absolute hidden lg:block"
            style={{
              top: "95px",
              left: "160px",
              right: "160px",
              height: "2px",
              backgroundColor: "#BFDBFE",
              zIndex: 0
            }}
          />
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-full max-w-[280px] rounded-2xl border border-[#F3F4F6] bg-white pt-10 pb-6 px-4"
              style={{ zIndex: 1 }}
            >
              {/* Number Badge - positioned at top center */}
              <div 
                className="absolute flex items-center justify-center rounded-full bg-[#155DFC] font-bold text-white shadow-md w-10 h-10 sm:w-12 sm:h-12 -top-5 sm:-top-6 left-1/2 -translate-x-1/2 text-sm sm:text-lg"
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl" style={{ backgroundColor: "#EFF6FF" }}>
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#155DFC]" />
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug px-2 sm:px-4">{step.title}</h3>
              <p className="mt-2 text-[10px] sm:text-xs leading-relaxed text-gray-500 px-2 sm:px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
