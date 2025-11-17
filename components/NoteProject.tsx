'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  period: string;
  metrics: string[];
  highlight?: boolean;
}

interface NoteProjectProps {
  project: Project;
  index: number;
}

export default function NoteProject({ project, index }: NoteProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className={`glass glass-hover p-6 sm:p-8 rounded-2xl cursor-interact relative overflow-hidden ${
          project.highlight ? 'accent-glow' : ''
        }`}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Highlight indicator */}
        {project.highlight && (
          <motion.div
            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400/60 via-yellow-400/30 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          />
        )}

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: isHovered
              ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 50%)'
              : undefined,
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.h3
              className="text-2xl sm:text-3xl font-medium tracking-tight"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {project.title}
            </motion.h3>
            <motion.span
              className="text-xs sm:text-sm text-white/40 whitespace-nowrap ml-4 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {project.period}
            </motion.span>
          </div>

          {/* Description */}
          <motion.p
            className="text-white/70 mb-5 leading-relaxed font-light text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Metrics */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {project.metrics.map((metric, metricIndex) => (
              <motion.span
                key={metric}
                className="px-3 py-1.5 bg-white/5 rounded-lg text-xs sm:text-sm text-white/60 font-light border border-white/10 group-hover:border-white/20 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.5 + metricIndex * 0.05,
                  duration: 0.4,
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                {metric}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
