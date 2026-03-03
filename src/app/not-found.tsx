"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#E8F0FE] flex flex-col items-center justify-center px-5 text-center">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-10"
      >
        <div className="w-10 h-10 bg-[#155DFC] rounded-xl flex items-center justify-center shadow-md">
          <Image
            src="/logo/logo.png"
            alt="Learn Fast Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <span className="text-[#155DFC] font-bold text-xl">Learn Fast</span>
      </motion.div>

      {/* 404 Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative mb-6"
      >
        <span className="text-[120px] sm:text-[160px] lg:text-[200px] font-extrabold leading-none text-[#155DFC] opacity-10 select-none">
          404
        </span>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-[80px] sm:text-[110px] lg:text-[140px] font-extrabold leading-none text-[#155DFC]">
            404
          </span>
        </motion.div>
      </motion.div>

      {/* Message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-500 text-base sm:text-lg max-w-md mb-10"
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#155DFC] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#1249d6] transition-colors duration-200 text-base"
        >
          ← Back to Home
        </Link>
      </motion.div>

      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-48 h-48 bg-[#155DFC] rounded-full blur-3xl opacity-15 -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-[#155DFC] rounded-full blur-3xl opacity-10 -z-10 pointer-events-none"
      />
    </div>
  );
}
