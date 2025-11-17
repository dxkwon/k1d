'use client';

import { motion } from 'framer-motion';
import Ouroboros from './Ouroboros';

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/k1d', icon: '𝕏' },
  { name: 'GitHub', url: 'https://github.com/k1d', icon: '⚡' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/k1d', icon: '💼' },
  { name: 'Email', url: 'mailto:hello@k1d.com', icon: '✉️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ProfileSection() {
  return (
    <motion.div
      className="sticky top-0 h-screen flex flex-col justify-center p-12 lg:p-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Ouroboros />
      </motion.div>

      <motion.h1
        className="text-5xl lg:text-6xl font-light mb-4 tracking-tight"
        variants={itemVariants}
      >
        Daniel Kwon
      </motion.h1>

      <motion.p
        className="text-xl lg:text-2xl text-white/60 mb-8 font-light"
        variants={itemVariants}
      >
        3 viral app exits
      </motion.p>

      <motion.div
        className="space-y-4 mb-12 max-w-md"
        variants={itemVariants}
      >
        <p className="text-base lg:text-lg text-white/80 leading-relaxed font-light">
          just a kid telling stories, no matter the medium. sometimes it&apos;s
          essays, poems, pictures, movies, music, sometimes it&apos;s an app.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-4"
        variants={itemVariants}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-5 py-2.5 rounded-full text-sm font-medium glass-hover flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
