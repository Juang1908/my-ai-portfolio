'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Clubessential POS Setup',
    description: 'Full hardware and software integration for a private club using POS terminals, printers, and iPads.',
  },
  {
    title: 'Trackman Golf Range Setup',
    description: 'Networked smart range configuration including backend integration and custom dashboarding.',
  },
  {
    title: 'AI Video Generator',
    description: 'Short-form video creation using Pika Labs and RunwayML for small business marketing.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 shadow-md transition duration-300 hover:shadow-[0_0_25px_#3b82f6]"


            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
