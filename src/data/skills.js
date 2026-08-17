/**
 * Skill categories used throughout the portfolio.
 *
 * `level` is kept for future visualisations such as
 * the interactive skill tree.
 */

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend Engineering',

    skills: [
      { name: 'React.js', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Material UI', level: 90 },
      { name: 'jQuery', level: 70 },
    ],
  },

  {
    id: 'architecture',
    label: 'State & Architecture',

    skills: [
      { name: 'Frontend Architecture', level: 90 },
      { name: 'Design Systems', level: 90 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'Zustand', level: 80 },
      { name: 'TanStack React Query', level: 80 },
    ],
  },

  {
    id: 'ai',
    label: 'Generative AI',

    skills: [
      { name: 'OpenAI API Integration', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'RAG', level: 75 },
      { name: 'LLM Application Development', level: 85 },
      { name: 'AI Workflow Automation', level: 85 },
    ],
  },

  {
    id: 'backend',
    label: 'Backend & APIs',

    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'GraphQL', level: 70 },
      { name: 'JWT Authentication', level: 75 },
      { name: 'Middleware', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Mongoose', level: 70 },
      { name: 'MySQL', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'Redis', level: 65 },
    ],
  },

  {
    id: 'tools',
    label: 'Tools, Testing & Cloud',

    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 85 },
      { name: 'Jest', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'Agile/Scrum', level: 85 },
    ],
  },
];