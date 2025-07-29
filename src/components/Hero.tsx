'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4"
      >
        Futuristic AI Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl text-lg text-gray-300"
      >
        Showcasing frontend, backend, and AI skills — powered by Next.js, Tailwind, and imagination.
      </motion.p>
    </section>
  );
}
