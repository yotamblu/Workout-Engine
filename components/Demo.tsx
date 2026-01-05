"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const sampleWorkoutText = `5 min warmup
3x (1 mile @ 6:30 pace, 2 min rest)
5 min cooldown`;

const structuredWorkout = {
  warmup: "5 min easy",
  intervals: [
    { distance: "1 mile", pace: "6:30", rest: "2 min" },
    { distance: "1 mile", pace: "6:30", rest: "2 min" },
    { distance: "1 mile", pace: "6:30", rest: "2 min" },
  ],
  cooldown: "5 min easy",
};

export default function Demo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Watch your workout text transform into structured training
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          {/* Top: Workout Text */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Your Workout Text</h3>
              <pre className="text-gray-800 dark:text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap bg-gray-100 dark:bg-black/20 rounded-lg p-6 border border-gray-200 dark:border-white/5">
                {sampleWorkoutText}
              </pre>
            </div>
          </motion.div>

          {/* Arrow pointing down */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ArrowDown className="w-12 h-12 text-blue-500" />
          </motion.div>

          {/* Bottom: Structured Workout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-300 dark:border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Structured Workout</h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 dark:bg-black/20 rounded-lg p-4 border border-gray-200 dark:border-white/10"
                >
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Warmup</div>
                  <div className="text-gray-800 dark:text-gray-200">{structuredWorkout.warmup}</div>
                </motion.div>

                {structuredWorkout.intervals.map((interval, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                    className="bg-gray-100 dark:bg-black/20 rounded-lg p-4 border border-gray-200 dark:border-white/10"
                  >
                    <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">Interval {index + 1}</div>
                    <div className="text-gray-800 dark:text-gray-200">
                      {interval.distance} @ {interval.pace} pace
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{interval.rest} rest</div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-gray-100 dark:bg-black/20 rounded-lg p-4 border border-gray-200 dark:border-white/10"
                >
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">Cooldown</div>
                  <div className="text-gray-800 dark:text-gray-200">{structuredWorkout.cooldown}</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

