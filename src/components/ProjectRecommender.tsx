'use client';
import { motion } from "framer-motion";
import { useState } from 'react';

const projects = {
  frontend: {
    title: 'Modern UI Dashboard',
    description: 'A responsive dashboard built with React, Tailwind CSS, and Chart.js.',
  },
  backend: {
    title: 'RESTful API with Node.js',
    description: 'CRUD API with authentication and MongoDB integration.',
  },
  ai: {
    title: 'AI Video Generator',
    description: 'Created short-form videos using Pika Labs and RunwayML for small businesses.',
  },
};

export default function ProjectRecommender() {
  const [category, setCategory] = useState('');
  const [project, setProject] = useState<{ title: string; description: string } | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as keyof typeof projects;
    setCategory(selected);
    setProject(projects[selected]);
  };

  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gray-950 text-white py-20 px-4"
>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Smart Project Recommender</h2>
        <p className="text-gray-400 mb-4">Select a focus area and I’ll show you a project.</p>

        <select
          onChange={handleSelect}
          className="w-full p-3 rounded bg-black border border-purple-500 text-white mb-6"
        >
          <option value="">-- Choose a category --</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="ai">AI</option>
        </select>

        {project && (
          <div className="bg-gray-900 rounded-xl p-6 mt-4 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        )}
      </div>
    </motion.section>
  );
}