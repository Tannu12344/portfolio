import { experience } from '@/data/experience';
import { Section } from '@/components/Section/Section';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import styles from './Experience.module.css';
import { BackToWorld } from '@/features/developer-world/BackToWorld';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've worked"
    >
      <BackToWorld/>
      <div className={styles.list}>
        {experience.map((role) => (
          <Card key={role.id} className={styles.card}>
            <div className={styles.head}>
              <div>
                <h3 className={styles.role}>{role.role}</h3>
                <p className={styles.company}>
                  {role.company} · {role.location}
                </p>
              </div>
              <span className={styles.period}>{role.period}</span>
            </div>

            <p className={styles.summary}>{role.summary}</p>

            <ul className={styles.highlights}>
              {role.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={styles.stack}>
              {role.stack.map((tech) => (
                <Badge key={tech} tone="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
