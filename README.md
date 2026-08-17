# Tannu Singh — Interactive Portfolio

A modern, interactive developer portfolio built to showcase my frontend engineering experience, projects, technical skills, and approach to building polished user interfaces.

The portfolio is designed around a developer-world concept, combining a professional portfolio with subtle interactive experiences without compromising usability or accessibility.

## Live Portfolio

[Visit Portfolio](https://portfolio-zeta-ashen-5ywmdg36lz.vercel.app/)

---

## About

I'm **Tannu Singh**, a Frontend Engineer specializing in:

- React.js
- TypeScript
- Frontend Architecture
- Design Systems
- Generative AI
- Node.js

I enjoy building interfaces that are not only visually polished but also maintainable, performant, accessible, and scalable.

---

## Features

### Interactive Developer World

A visual introduction to my technical identity and frontend journey.

### Command Palette

A keyboard-friendly command palette for quickly navigating the portfolio.

- `⌘ K` / `Ctrl K` — Open
- Search portfolio sections
- Navigate using search results
- `Esc` — Close

### Responsive Navigation

Responsive navigation with:

- Active section detection
- Mobile menu
- Scroll-based navigation
- Contact CTA

### Project Showcase

A data-driven project section highlighting selected projects with:

- Project descriptions
- Technology stacks
- Project status
- GitHub repositories
- Live demos where available

### Experience

Professional experience presented through reusable, data-driven components.

### Skills

Technical skills organized into categories including:

- Frontend Engineering
- Generative AI
- State Management & Architecture
- Backend & APIs
- Testing & Cloud
- Design Systems

### Resume

A direct resume link from the hero section for quick recruiter access.

### Accessibility & Motion

The portfolio takes accessibility and reduced-motion preferences into consideration while using animation to enhance rather than distract from the experience.

---

## Tech Stack

### Frontend

- React
- JavaScript
- TypeScript
- CSS Modules
- HTML5

### UI & Animation

- Framer Motion
- Custom design system
- Reusable UI components
- Responsive layouts

### Tooling

- Vite
- Git
- GitHub
- ESLint

### Deployment

- Vercel

---

## Project Structure

```text
src/
├── animations/
│
├── assets/
│
├── components/
│   ├── Badge/
│   ├── Button/
│   ├── Card/
│   ├── Container/
│   ├── Footer/
│   ├── Logo/
│   ├── Navigation/
│   └── Section/
│
├── data/
│   ├── experience.js
│   ├── profile.js
│   ├── projects.js
│   └── skills.js
│
├── features/
│   ├── command-palette/
│   ├── developer-world/
│   └── start-adventure/
│
├── hooks/
│
├── sections/
│   ├── About/
│   ├── Contact/
│   ├── Experience/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
│
├── utils/
│
├── App.jsx
└── main.jsx