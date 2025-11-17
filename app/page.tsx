'use client';

import { motion } from 'framer-motion';
import NoteHeader from '@/components/NoteHeader';
import AnimatedText from '@/components/AnimatedText';
import Ouroboros from '@/components/Ouroboros';
import NoteProject from '@/components/NoteProject';

const projects = [
  {
    title: 'Shepherd',
    description: 'Duolingo for Bible study, concept to 100k users in 2 weeks, >50k rev in 1 month',
    period: 'april 2025 - july 2025',
    metrics: ['100k users in 2 weeks', '>$50k revenue in 1 month'],
    highlight: true,
  },
  {
    title: 'Arise',
    description: 'the system from solo leveling irl',
    period: 'march 2025 - april 2025',
    metrics: ['$100k/mo'],
    highlight: true,
  },
  {
    title: 'Dimension Studios',
    description: 'Agents for TikTok Shop, cracked organic strategies that led to millions per month for brands like final boss sour.',
    period: 'july 2024 - jan 2025',
    metrics: ['millions per month'],
  },
  {
    title: 'Mailsplash',
    description: 'run an email marketing solo with AI - >10k sign-ups in 4 weeks. >50k rev, acquired.',
    period: 'jan 2024 - aug 2024',
    metrics: ['10k signups', 'acquired'],
  },
  {
    title: 'Conch',
    description: 'my first start-up, the first to market AI writing that\'s undetectable 1.7m users. >2m rev, acquired.',
    period: 'feb 2023 - july 2024',
    metrics: ['1.7m users', '>$2m revenue', 'acquired'],
    highlight: true,
  },
  {
    title: 'crossroads',
    description: 'a capsule collection.',
    period: 'mar 2022 - may 2022',
    metrics: ['capsule collection'],
  },
];

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/k1d', icon: '𝕏' },
  { name: 'GitHub', url: 'https://github.com/k1d', icon: '⚡' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/k1d', icon: '💼' },
  { name: 'Email', url: 'mailto:hello@k1d.com', icon: '✉️' },
];

export default function Home() {
  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        {/* Note Container */}
        <div className="note-paper p-8 sm:p-12 lg:p-16">
          <NoteHeader />

          {/* Header with Ouroboros */}
          <div className="flex flex-col items-start mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <Ouroboros />
            </motion.div>

            <AnimatedText delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-4">
                Daniel Kwon
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <p className="text-xl sm:text-2xl text-white/60 mb-6 font-light">
                3 viral app exits
              </p>
            </AnimatedText>
          </div>

          {/* Bio Section */}
          <AnimatedText delay={0.4}>
            <div className="mb-12">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-8">
                just a kid telling stories, no matter the medium. sometimes it&apos;s
                essays, poems, pictures, movies, music, sometimes it&apos;s an app.
              </p>
            </div>
          </AnimatedText>

          {/* Social Links */}
          <AnimatedText delay={0.5}>
            <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-white/5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 cursor-interact"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </AnimatedText>

          {/* Projects Section */}
          <AnimatedText delay={0.6}>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-light mb-3 tracking-tight">
                Past Projects
              </h2>
              <p className="text-white/50 text-base font-light mb-8">
                A collection of ventures and experiments
              </p>
            </div>
          </AnimatedText>

          {/* Project List */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <NoteProject key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-sm font-light"
          >
            <p>Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
