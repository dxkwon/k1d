'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Shepherd',
    description: 'Duolingo for Bible study, concept to 100k users in 2 weeks, >50k rev in 1 month',
    period: 'april 2025 - july 2025',
    metrics: '100k users in 2 weeks',
  },
  {
    title: 'Arise',
    description: 'the system from solo leveling irl, 100k/mo',
    period: 'march 2025 - april 2025',
    metrics: '$100k/mo',
  },
  {
    title: 'Dimension Studios',
    description: 'Agents for TikTok Shop, cracked organic strategies that led to millions per month for brands like final boss sour.',
    period: 'july 2024 - jan 2025',
    metrics: 'millions per month',
  },
  {
    title: 'Mailsplash',
    description: 'run an email marketing solo with AI - >10k sign-ups in 4 weeks. >50k rev, acquired.',
    period: 'jan 2024 - aug 2024',
    metrics: '10k signups, acquired',
  },
  {
    title: 'Conch',
    description: 'my first start-up, the first to market AI writing that\'s undetectable 1.7m users. >2m rev, acquired.',
    period: 'feb 2023 - july 2024',
    metrics: '1.7m users, acquired',
  },
  {
    title: 'crossroads',
    description: 'a capsule collection.',
    period: 'mar 2022 - may 2022',
    metrics: 'capsule collection',
  },
];

export default function ProjectsGrid() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl lg:text-5xl font-light mb-4 tracking-tight">
          Past Projects
        </h2>
        <p className="text-white/60 text-lg font-light">
          A collection of ventures and experiments
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
