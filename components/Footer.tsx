"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo/workout_engine_logo.png?v=2"
              alt="Workout Engine"
              width={32}
              height={32}
              className="w-8 h-8"
              unoptimized
            />
            <span className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Workout Engine
            </span>
          </Link>

          <p className="text-gray-600 dark:text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Workout Engine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

