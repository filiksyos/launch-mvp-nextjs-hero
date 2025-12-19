'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral via-primary-light/10 to-accent-light/20 dark:from-neutral-darker dark:via-neutral-dark dark:to-neutral-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-light/20 dark:bg-primary-dark/20 text-primary-dark dark:text-primary-light px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Simple. Fast. Beautiful.</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-text dark:text-text-dark mb-6 leading-tight"
          >
            Launch Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-accent-dark">
              Big Idea
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-light dark:text-text-dark/80 mb-12 max-w-2xl mx-auto"
          >
            A minimal Next.js 15 starter template with modern design, dark mode, and smooth animations. Start building in minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group bg-primary-dark hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-hover hover:shadow-lg flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-surface-light dark:bg-surface-dark hover:bg-neutral dark:hover:bg-neutral-dark text-text dark:text-text-dark px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-subtle hover:shadow-hover">
              Learn More
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            {/* Feature 1 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-subtle hover:shadow-hover transition-all duration-300 border border-neutral dark:border-neutral-dark">
              <div className="bg-primary-light/20 dark:bg-primary-dark/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-primary-dark dark:text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Lightning Fast</h3>
              <p className="text-text-light dark:text-text-dark/70">
                Built with Next.js 15 and React 19 for optimal performance and developer experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-subtle hover:shadow-hover transition-all duration-300 border border-neutral dark:border-neutral-dark">
              <div className="bg-accent-light/20 dark:bg-accent-dark/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-accent-dark dark:text-accent-light" />
              </div>
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Beautiful Design</h3>
              <p className="text-text-light dark:text-text-dark/70">
                Modern UI with Tailwind CSS, smooth animations, and dark mode support out of the box.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-subtle hover:shadow-hover transition-all duration-300 border border-neutral dark:border-neutral-dark">
              <div className="bg-danger-light/20 dark:bg-danger-dark/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-danger-dark dark:text-danger-light" />
              </div>
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Easy to Customize</h3>
              <p className="text-text-light dark:text-text-dark/70">
                Clean code structure and TypeScript support make it simple to build your unique vision.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral dark:border-neutral-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-light dark:text-text-dark/70">
            Built with ❤️ using Next.js 15, React 19, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
