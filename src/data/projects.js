/**
 * Project entries. `featured` surfaces a project more prominently in
 * later phases (e.g. a richer project explorer) — the foundation phase
 * renders all projects in a simple grid.
 */

export const projects = [
  {
    id: 'proj-1',
    title: 'Project One',
    description:
      'A short, concrete description of what this project is and the problem it solves.',
    year: 2025,
    featured: true,
    status: 'Live',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    links: { demo: 'https://example.com', repo: 'https://github.com/yourhandle/project-one' },
    image: null,
  },
  {
    id: 'proj-2',
    title: 'Project Two',
    description: 'Another concrete, specific description — what it does and who it is for.',
    year: 2024,
    featured: true,
    status: 'Live',
    stack: ['Next.js', 'Tailwind CSS'],
    links: { demo: 'https://example.com', repo: 'https://github.com/yourhandle/project-two' },
    image: null,
  },
  {
    id: 'proj-3',
    title: 'Project Three',
    description: 'A smaller experiment or side project worth showing.',
    year: 2024,
    featured: false,
    status: 'Archived',
    stack: ['React', 'Three.js'],
    links: { demo: null, repo: 'https://github.com/yourhandle/project-three' },
    image: null,
  },
];
