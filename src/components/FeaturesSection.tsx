import Image from "next/image";

const features = [
  {
    image: "/images/man/baby.png",
    title: "Smart Learning",
    description:
      "Structured lessons and guided pathways to your learning goals and style.",
  },
  {
     image: "/images/man/child.png",
    title: "Interactive Quizzes",
    description:
      "Multiple choice questions with instant feedback and detailed explanations.",
  },
  {
    image: "/images/man/women.png",
    title: "Personal Library",
    description:
      "Store and organize your favourite content for quick reference anytime.",
  },
  {
   
    image: "/images/man/baby1.png",
    title: "Secure Login",
    description:
      "Safe authentication and password recovery for complete account security.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-[1216px]">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-gray-900">
            Everything You Need to Excel
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500">
            Powerful features designed to accelerate your learning journey
          </p>
        </div>

        {/* Feature Cards - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full max-w-[280px] rounded-2xl border border-[#F3F4F6] bg-white p-4 sm:p-6"
            >
              {/* Blob Shape Image */}
              <div className="mb-4 sm:mb-5 relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]">
                {/* Main blob with image */}
                <div 
                  className="relative overflow-hidden w-[140px] h-[160px] sm:w-[180px] sm:h-[200px] mx-auto"
                  style={{
                    borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%"
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-[#710A85]">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500 px-1 sm:px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
