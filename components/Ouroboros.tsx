'use client';

import { motion } from 'framer-motion';

export default function Ouroboros() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="opacity-70 hover:opacity-100 transition-opacity duration-500"
      >
        {/* Outer circle glow */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="url(#gradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Main ouroboros circle */}
        <motion.path
          d="M100,20 A80,80 0 1,1 99.9,20"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Snake head */}
        <motion.circle
          cx="100"
          cy="20"
          r="8"
          fill="url(#gradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />

        {/* Eye */}
        <motion.circle
          cx="102"
          cy="18"
          r="2"
          fill="#000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
        />

        {/* Tail */}
        <motion.circle
          cx="100"
          cy="20"
          r="4"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8, duration: 0.4 }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}
