'use client';
import { motion } from 'framer-motion';

export default function AIChat() {
    return (

        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black text-white py-20 px-4 text-center"
        >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Ask My AI Assistant</h2>
            <p className="text-gray-400 mb-6">
                Have questions about my experience, skills, or projects? Ask away!
            </p>
            <a
                href="https://chat.openai.com/gpts/YOUR-CUSTOM-GPT-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
                Chat with My GPT
            </a>
        </motion.section>

  )}