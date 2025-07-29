'use client';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white text-center px-4"
    >
      <h1 className="text-5xl font-extrabold mb-4">
        Futuristic AI Portfolio
      </h1>
      <p className="max-w-xl text-lg text-gray-300">
        Showcasing frontend, backend, and AI skills — powered by Next.js, Tailwind, and imagination.
      </p>
    </motion.section>
  );
}
