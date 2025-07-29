'use client';

import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'AI', href: '#ai' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">Juan Galvan</h1>

        <nav className="flex gap-8">
  {navItems.map((item) => (
    <motion.div
      key={item.label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative group"
    >
      <a
        href={item.href}
        className="block text-white text-lg font-medium no-underline"
      >
        {item.label}
        <span className="block absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </motion.div>
  ))}
</nav>

      </div>
    </header>
  );
}

