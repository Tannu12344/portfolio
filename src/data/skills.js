/**
 * Skill categories. `level` (0-100) is reserved for future visualisations
 * (e.g. a skill tree) — the foundation phase renders these as static lists.
 */

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Redux / Zustand', level: 80 },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling & Workflow',
    skills: [
      { name: 'Vite', level: 90 },
      { name: 'Git', level: 90 },
      { name: 'Testing (Jest/RTL)', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    id: 'design',
    label: 'Design & Craft',
    skills: [
      { name: 'Design Systems', level: 85 },
      { name: 'Motion Design', level: 75 },
      { name: 'Accessibility', level: 80 },
      { name: 'Figma', level: 70 },
    ],
  },
];
