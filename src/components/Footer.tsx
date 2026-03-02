import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] py-10 sm:py-16">
      <div className="mx-auto px-6 sm:px-8" style={{ maxWidth: "1216px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Left - Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/eiduLogo.png"
                alt="Learn Fast Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-base font-bold text-white">Learn Fast</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
              Your ultimate learning companion. Master any subject with
              interactive quizzes, smart learning paths, and personalized
              feedback.
            </p>
          </div>

          {/* Middle - Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">Product</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Email Subscribe */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Stay Updated</h4>
            <div className="flex items-center rounded-lg overflow-hidden shadow-sm w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-10 flex-1 min-w-0 border-0 bg-gray-800 px-4 text-sm text-white outline-none placeholder:text-gray-500"
              />
              <button className="h-10 bg-[#155DFC] px-4 sm:px-5 text-sm font-semibold text-white hover:bg-[#1248d6] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-10 sm:mt-14 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 GoLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
