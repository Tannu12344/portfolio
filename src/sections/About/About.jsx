import { profile } from '@/data/profile';
import { Section } from '@/components/Section/Section';
import { Card } from '@/components/Card/Card';
import styles from './About.module.css';
import { BackToWorld } from '@/features/developer-world/BackToWorld';

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A little about me">
      <BackToWorld />
      <div className={styles.grid}>
        <Card className={styles.bioCard}>
          <p>{profile.bio}</p>
        </Card>
        <Card className={styles.metaCard}>
          <dl className={styles.metaList}>
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{profile.status}</dd>
            </div>
          </dl>
        </Card>
      </div>
    </Section>
  );
}
