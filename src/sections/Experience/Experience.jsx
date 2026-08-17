import { useState } from 'react';
import { experience } from '@/data/experience';
import { Section } from '@/components/Section/Section';
import { Badge } from '@/components/Badge/Badge';
import { BackToWorld } from '@/features/developer-world/BackToWorld';
import styles from './Experience.module.css';

export function Experience() {
  const [activeId, setActiveId] = useState(experience[0]?.id);

  const handleToggle = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've worked"
    >
      <BackToWorld />

      <div className={styles.timeline}>
        {experience.map((role, index) => {
          const isActive = activeId === role.id;

          return (
            <article
              key={role.id}
              className={`${styles.item} ${
                isActive ? styles.active : ''
              }`}
            >
              <div className={styles.marker}>
                <span className={styles.dot} />

                {index < experience.length - 1 && (
                  <span
                    className={styles.line}
                    aria-hidden="true"
                  />
                )}
              </div>

              <button
                type="button"
                className={styles.trigger}
                onClick={() => handleToggle(role.id)}
                aria-expanded={isActive}
              >
                <span className={styles.period}>
                  {role.period}
                </span>

                <span className={styles.heading}>
                  <strong className={styles.role}>
                    {role.role}
                  </strong>

                  <span className={styles.company}>
                    {role.company} · {role.location}
                  </span>
                </span>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  {isActive ? '−' : '+'}
                </span>
              </button>

              <div
                className={`${styles.details} ${
                  isActive ? styles.detailsOpen : ''
                }`}
              >
                <div className={styles.detailsInner}>
                  <p className={styles.summary}>
                    {role.summary}
                  </p>

                  <ul className={styles.highlights}>
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.stack}>
                    {role.stack.map((tech) => (
                      <Badge
                        key={tech}
                        tone="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}