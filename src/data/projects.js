/**
 * Featured portfolio projects.
 *
 * Detailed project information is stored here so the same data
 * can power cards, project modals, filtering, and the future
 * Project Explorer.
 */

export const projects = [
  {
    id: 'proj-1',

    title: 'AI System Design Explorer',

    shortDescription:
      'An AI-powered system design learning platform that turns natural-language product requirements into structured, Staff Engineer-level architecture breakdowns.',

    description:
      'AI System Design Explorer is an interactive learning and interview-preparation platform designed to help developers understand how large-scale systems are designed. Users can describe a product such as Uber, Netflix, WhatsApp, or Airbnb in natural language and explore an AI-generated architecture covering requirements, services, infrastructure, scalability, databases, caching, messaging, security, fault tolerance, and engineering trade-offs.',

    year: 2026,

    featured: true,

    status: 'Active',

    role: 'Full-stack Frontend / AI Engineer',

    stack: [
      'React',
      'TypeScript',
      'Generative AI',
      'AI APIs',
      'Frontend Architecture',
      'Custom Hooks',
    ],

    highlights: [
      'Built an AI-powered system design exploration platform from the ground up.',

      'Designed a modular React and TypeScript architecture using reusable components and custom hooks.',

      'Implemented AI-driven workflows that analyze product requirements and generate structured architecture recommendations.',

      'Created multiple learning modes including Architecture Explorer, Deep-Dive Analysis, Interview Mode, and Revision Mode.',

      'Built an AI orchestration layer responsible for prompt engineering, report generation, history management, and structured architecture rendering.',

      'Designed architecture analysis covering databases, caching, messaging systems, security, fault tolerance, and scalability strategies.',

      'Designed the experience around progressive exploration so users can move from a high-level architecture to deeper technical reasoning.',
    ],

    problem:
      'System design concepts are often taught through static diagrams and long-form explanations, making it difficult to connect high-level architecture decisions with the underlying engineering trade-offs.',

    solution:
      'Built an interactive AI-driven environment where developers can start with a simple product idea and progressively explore requirements, architecture, infrastructure, trade-offs, and interview-style questions.',

    learnings: [
      'Designing AI-powered frontend workflows',

      'Structuring complex React applications',

      'Prompt engineering for consistent technical output',

      'Managing asynchronous AI workflows',

      'Rendering structured AI-generated content',

      'Designing learning experiences around progressive disclosure',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/SysDesign',
    },

    image: null,
  },

  {
    id: 'proj-2',

    title: 'AI-First Frontend Engineering',

    shortDescription:
      'An AI-powered frontend engineering system containing reusable workflows, prompts, architecture practices, and development resources for scalable React applications.',

    description:
      'AI-First Frontend Engineering is a developer-focused system built around the idea of using AI as an engineering partner rather than simply a code generator. The project organizes reusable prompts, frontend architecture practices, component-development workflows, debugging strategies, and AI-assisted engineering processes into a repeatable development system.',

    year: 2026,

    featured: true,

    status: 'Active',

    role: 'Creator / Frontend Engineer',

    stack: [
      'React',
      'TypeScript',
      'Generative AI',
      'Prompt Engineering',
      'Frontend Architecture',
      'AI Workflow Automation',
    ],

    highlights: [
      'Created a structured AI-first workflow for frontend engineering tasks.',

      'Developed reusable prompts for component generation, debugging, refactoring, architecture review, and code quality analysis.',

      'Focused on using AI to improve engineering workflows rather than blindly generating application code.',

      'Established repeatable patterns for working with AI during frontend architecture and implementation.',

      'Used the system to accelerate component scaffolding and development during portfolio and application work.',

      'Used AI-assisted workflows to investigate CSS-in-JS conflicts and reason about frontend implementation issues.',

      'Explored how AI can support code reviews, architectural decisions, and iterative frontend development.',
    ],

    problem:
      'Using AI for development can become inconsistent when every task starts with a new prompt and there is no repeatable engineering process behind it.',

    solution:
      'Created a reusable AI-first engineering system that turns common frontend development activities into structured workflows with reusable prompts, architectural guidelines, and review processes.',

    learnings: [
      'Prompt engineering for software development',

      'Designing repeatable AI workflows',

      'AI-assisted frontend architecture',

      'Using AI for debugging and code review',

      'Building systems around LLM capabilities rather than isolated prompts',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/ai-first-frontend-engineering',
    },

    image: null,
  },

  {
    id: 'proj-5',

    title: 'Crypto Tracker Dashboard',

    shortDescription:
      'A live cryptocurrency dashboard that tracks market data, supports multi-coin comparison, and visualizes price trends using responsive charts.',

    description:
      'Crypto Tracker Dashboard is a client-side cryptocurrency monitoring application built with React. It consumes the CoinGecko API to display live market information including cryptocurrency prices, 24-hour percentage changes, and market capitalization rankings. The dashboard also supports multi-coin comparison, personalized watchlists, currency preferences, and theme persistence.',

    year: 2025,

    featured: true,

    status: 'Completed',

    role: 'Frontend Engineer',

    stack: [
      'React',
      'JavaScript',
      'Chakra UI',
      'CoinGecko API',
      'Recharts',
      'React Hooks',
      'LocalStorage',
    ],

    highlights: [
      'Built a live cryptocurrency dashboard polling the CoinGecko API at a configurable interval.',

      'Tracked 100+ cryptocurrencies with price, 24-hour percentage change, and market capitalization data.',

      'Built a multi-coin comparison experience supporting side-by-side analysis of up to 5 coins.',

      'Implemented responsive Recharts visualizations with custom tooltips and responsive breakpoints.',

      'Optimized re-render cycles by approximately 35% using useMemo and selective state updates.',

      'Maintained smooth UI updates during high-frequency market-data polling without throttling the visual update rate.',

      'Implemented persistent watchlist, currency, and theme preferences using localStorage.',

      'Designed the application entirely on the client side without requiring a dedicated backend.',
    ],

    problem:
      'Cryptocurrency market data changes frequently, so a dashboard needs to update information without making the interface feel unstable or unnecessarily expensive to render.',

    solution:
      'Built a client-side React dashboard with controlled polling, selective state updates, memoization, responsive charts, and persistent user preferences to keep the experience responsive while handling frequent data updates.',

    learnings: [
      'Working with external REST APIs',

      'Handling frequently changing data in React',

      'Optimizing component re-renders',

      'Building responsive data visualizations',

      'Managing client-side persistence',

      'Designing dashboards around real-time-like data',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/crypto-app',
    },

    image: null,
  },

  {
    id: 'proj-3',

    title: 'Employee Dashboard',

    shortDescription:
      'A modern employee dashboard focused on structured data presentation, reusable UI components, and an interactive frontend experience.',

    description:
      'A TypeScript-based employee dashboard focused on building a clean, structured interface for presenting employee information and dashboard data.',

    year: 2026,

    featured: false,

    status: 'Active',

    role: 'Frontend Engineer',

    stack: [
      'React',
      'TypeScript',
      'Frontend Architecture',
    ],

    highlights: [
      'Built a structured dashboard interface using reusable frontend components.',

      'Focused on maintainable TypeScript-based application structure.',

      'Designed the UI around clear information hierarchy and reusable patterns.',
    ],

    problem:
      'Employee information can become difficult to navigate when presented without clear structure and reusable UI patterns.',

    solution:
      'Built a dashboard experience that organizes employee information into a clear and reusable interface.',

    learnings: [
      'TypeScript application structure',
      'Reusable dashboard components',
      'Information hierarchy',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/Employee-Dashboard',
    },

    image: null,
  },

  {
    id: 'proj-4',

    title: 'Afforro Dashboard',

    shortDescription:
      'A responsive dashboard UI focused on data visualization, reusable components, and polished frontend implementation.',

    description:
      'A frontend dashboard implementation focused on translating a product design into a responsive, interactive interface with reusable components and data visualizations.',

    year: 2026,

    featured: false,

    status: 'Completed',

    role: 'Frontend Engineer',

    stack: [
      'React',
      'JavaScript',
      'Recharts',
      'Dashboard UI',
      'Responsive Design',
    ],

    highlights: [
      'Implemented a responsive dashboard interface.',

      'Built reusable dashboard components and layouts.',

      'Integrated data visualizations using Recharts.',

      'Focused on accurately translating the visual design into a polished frontend experience.',
    ],

    problem:
      'Dashboard interfaces need to communicate large amounts of information while remaining visually clear and easy to navigate.',

    solution:
      'Built a structured dashboard with reusable components, responsive layouts, and visual data representations.',

    learnings: [
      'Dashboard architecture',
      'Data visualization',
      'Responsive UI implementation',
      'Reusable component design',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/afforro-dashboard',
    },

    image: null,
  },

  {
    id: 'proj-6',

    title: 'Workout Phase App',

    shortDescription:
      'A React-based application for tracking workout phases, menstrual cycles, and personalized fitness dashboards.',

    description:
      'A React-based web application designed around personalized workout phases and cycle tracking, with a structured dashboard experience built using Material UI.',

    year: 2025,

    featured: false,

    status: 'Completed',

    role: 'Frontend Engineer',

    stack: [
      'React',
      'JavaScript',
      'Material UI',
    ],

    highlights: [
      'Built a personalized dashboard experience using React.',

      'Implemented structured UI components with Material UI.',

      'Designed interfaces for tracking workout phases and cycle information.',
    ],

    problem:
      'Users need a simple way to understand their current workout phase and organize relevant information in one place.',

    solution:
      'Created a personalized dashboard that organizes workout and cycle information into an accessible interface.',

    learnings: [
      'React component architecture',
      'Material UI',
      'Dashboard design',
      'Personalized UI experiences',
    ],

    links: {
      demo: null,
      repo: 'https://github.com/Tannu12344/workout-phase-app',
    },

    image: null,
  },
];