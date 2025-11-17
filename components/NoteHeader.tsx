'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NoteHeader() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    setTime(formatted);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/5 pb-6 mb-8"
    >
      <div className="flex items-center justify-between text-sm text-white/40 mb-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {time}
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-green-400/60 animate-pulse" />
          <span>Available</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
