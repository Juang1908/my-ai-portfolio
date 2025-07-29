'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-950 text-white py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a question or want to work together? Send me an email or connect below.
        </p>

        <a
          href="mailto:juan_1908@hotmail.com"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition hover:shadow-[0_0_30px_#00ffff]"
        >
          Email Me
        </a>
      </div>
    </motion.section>
  );
}
