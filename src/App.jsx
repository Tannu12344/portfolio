import { AmbientBackground } from '@/components/AmbientBackground/AmbientBackground';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/sections/Hero/Hero';
import { About } from '@/sections/About/About';
import { Skills } from '@/sections/Skills/Skills';
import { Experience } from '@/sections/Experience/Experience';
import { Projects } from '@/sections/Projects/Projects';
import { Contact } from '@/sections/Contact/Contact';
import { DeveloperWorld } from '@/features/developer-world/DeveloperWorld';

/**
 * Foundation-phase page composition. Sections render static, data-driven
 * content. Interactive features (skill tree, project explorer, command
 * palette, "Developer World", etc.) are deliberately out of scope here
 * and will be layered in from src/features in later phases.
 */
export default function App() {
  return (
    <>
      <AmbientBackground />
      <Navigation />
      <main>
        <Hero />
        <DeveloperWorld />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
