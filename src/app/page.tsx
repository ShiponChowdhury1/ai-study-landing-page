
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FocusedLearningSection from "@/components/FocusedLearningSection";
import MasterPracticeSection from "@/components/MasterPracticeSection";
import BuiltForLearnersSection from "@/components/BuiltForLearnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section with Navbar */}
      <HeroSection />

      {/* Features Section - Everything You Need to Excel */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Focused Learning Section */}
      <FocusedLearningSection />

      {/* Master Through Practice Section */}
      <MasterPracticeSection />

      {/* Built for Every Learner Section */}
      <BuiltForLearnersSection />

      {/* CTA Section - Start Learning Smarter Today */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
