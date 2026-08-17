import { useState } from 'react';
import { projects } from '@/data/projects';
import { Section } from '@/components/Section/Section';
import { Badge } from '@/components/Badge/Badge';
import { BackToWorld } from '@/features/developer-world/BackToWorld';
import styles from './Projects.module.css';

export function Projects() {
  const [selectedId, setSelectedId] = useState(
    projects.find((project) => project.featured)?.id || projects[0]?.id
  );

  const selectedProject = projects.find(
    (project) => project.id === selectedId
  );

  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Selected work"
      description="Explore the projects I've built."
    >
      <BackToWorld />

      <div className={styles.explorer}>
        {/* Project Navigation */}
        <div className={styles.projectList}>
          <span className={styles.listLabel}>
            PROJECT INDEX
          </span>

          {projects.map((project, index) => {
            const isSelected = project.id === selectedId;

            return (
              <button
                key={project.id}
                type="button"
                className={`${styles.projectButton} ${
                  isSelected ? styles.activeProject : ''
                }`}
                onClick={() => setSelectedId(project.id)}
                aria-pressed={isSelected}
              >
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className={styles.projectButtonContent}>
                  <strong>{project.title}</strong>
                  <span>{project.year}</span>
                </span>

                <span className={styles.projectArrow}>
                  {isSelected ? '●' : '○'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Project */}
        {selectedProject && (
          <article className={styles.projectPanel}>
            <div className={styles.projectVisual}>
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt=""
                  className={styles.projectImage}
                />
              ) : (
                <span className={styles.projectInitials}>
                  {selectedProject.title
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
              )}

              <span className={styles.year}>
                {selectedProject.year}
              </span>
            </div>

            <div className={styles.projectBody}>
              <div className={styles.projectHeader}>
                <div>
                  <span className={styles.panelLabel}>
                    SELECTED PROJECT
                  </span>

                  <h3 className={styles.title}>
                    {selectedProject.title}
                  </h3>
                </div>

                <Badge
                  tone={
                    selectedProject.status === 'Live'
                      ? 'success'
                      : 'neutral'
                  }
                >
                  {selectedProject.status}
                </Badge>
              </div>

              <p className={styles.description}>
                {selectedProject.description}
              </p>

              <div className={styles.stack}>
                {selectedProject.stack.map((tech) => (
                  <Badge
                    key={tech}
                    tone="secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className={styles.links}>
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live demo →
                  </a>
                )}

                {selectedProject.links.repo && (
                  <a
                    href={selectedProject.links.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Source →
                  </a>
                )}
              </div>
            </div>
          </article>
        )}
      </div>
    </Section>
  );
}