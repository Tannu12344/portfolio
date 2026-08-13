import { projects } from '@/data/projects';
import { Section } from '@/components/Section/Section';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import styles from './Projects.module.css';
import { BackToWorld } from '@/features/developer-world/BackToWorld';

/**
 * Static project grid. The interactive "project explorer" is a future
 * feature (see src/features) — this establishes content structure only.
 */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Selected work"
      description="A few things I've built recently."
    >
      <BackToWorld/>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.id} className={styles.card}>
            <div className={styles.thumb} aria-hidden="true">
              <span className="text-mono text-faint">{project.title.slice(0, 2).toUpperCase()}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.headRow}>
                <h3 className={styles.title}>{project.title}</h3>
                <Badge tone={project.status === 'Live' ? 'success' : 'neutral'}>
                  {project.status}
                </Badge>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <Badge key={tech} tone="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className={styles.links}>
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer noopener">
                    Live demo →
                  </a>
                )}
                {project.links.repo && (
                  <a href={project.links.repo} target="_blank" rel="noreferrer noopener">
                    Source →
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
