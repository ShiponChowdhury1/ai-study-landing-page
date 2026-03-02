import { FiBookOpen, FiUsers, FiMonitor, FiAward } from "react-icons/fi";

const learners = [
  {
    icon: FiBookOpen,
    title: "Students",
    description: "Master school subjects and ace your exams with confidence.",
  },
  {
    icon: FiUsers,
    title: "Self Learners",
    description: "Explore new topics and expand your knowledge at your own pace.",
  },
  {
    icon: FiMonitor,
    title: "Exam Preparation",
    description: "Prepare for competitive exams with targeted practice.",
  },
  {
    icon: FiAward,
    title: "Teachers & Tutors",
    description: "Create and share quizzes to engage your students.",
  },
];

const BuiltForLearnersSection = () => {
  return (
    <section id="learners" className="w-full bg-white py-20">
      <div className="mx-auto px-6" style={{ maxWidth: "1216px" }}>
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-[32px] font-bold text-gray-900">
            Built for Every Learner
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Whether you&apos;re a student, professional, or educator &mdash; we&apos;ve got you covered
          </p>
        </div>

        {/* Learner Cards - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {learners.map((learner, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <learner.icon className="h-7 w-7 text-[#155DFC]" />
              </div>

              <h3 className="text-base font-bold text-gray-900">
                {learner.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {learner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForLearnersSection;
