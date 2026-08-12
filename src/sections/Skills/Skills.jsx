import { skillCategories } from '@/data/skills';
import { Section } from '@/components/Section/Section';
import { Card } from '@/components/Card/Card';
import { Badge } from '@/components/Badge/Badge';
import styles from './Skills.module.css';

/**
 * Static grid render of skill categories. The richer "skill tree"
 * visualisation is a later, dedicated feature — this establishes only
 * the content structure and grid layout.
 */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Tools of the trade"
      description="A snapshot of what I work with day to day."
    >
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <Card key={category.id} className={styles.card}>
            <h3 className={styles.categoryTitle}>{category.label}</h3>
            <ul className={styles.list}>
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <Badge tone="neutral">{skill.name}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
