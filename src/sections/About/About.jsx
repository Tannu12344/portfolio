import { profile } from '@/data/profile';
import { Section } from '@/components/Section/Section';
import { BackToWorld } from '@/features/developer-world/BackToWorld';
import styles from './About.module.css';

const profileDetails = [
  {
    label: 'Role',
    value: profile.role,
  },
  {
    label: 'Location',
    value: profile.location,
  },
  {
    label: 'Status',
    value: profile.status,
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A little about me"
    >
      <BackToWorld />

      <div className={styles.aboutGrid}>
        <article className={styles.bioPanel}>
          <span className={styles.label}>WHO I AM</span>

          <p className={styles.bio}>
            {profile.bio}
          </p>
        </article>

        <div className={styles.detailsGrid}>
          {profileDetails.map((detail) => (
            <article
              key={detail.label}
              className={styles.detailCard}
            >
              <span className={styles.label}>
                {detail.label}
              </span>

              <strong className={styles.value}>
                {detail.value}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}