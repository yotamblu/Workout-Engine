"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/20 border-b border-gray-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/workout_engine_logo.png?v=2"
              alt="Workout Engine"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
              unoptimized
            />
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Workout Engine
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#how-it-works"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
            >
              Try it Free
            </motion.button>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium"
            >
              Try it Free
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

