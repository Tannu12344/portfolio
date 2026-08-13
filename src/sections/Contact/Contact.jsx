import { profile } from '@/data/profile';
import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';
import styles from './Contact.module.css';
import { BackToWorld } from '@/features/developer-world/BackToWorld';

export function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's work together">
      <BackToWorld/>
      <div className={styles.wrap}>
        <p className={styles.copy}>
          I'm currently {profile.status.toLowerCase()}. The fastest way to reach me is email —
          I read every message.
        </p>
        <div className={styles.actions}>
          <Button as="a" href={`mailto:${profile.email}`} variant="primary">
            {profile.email}
          </Button>
          {profile.socials.map((social) => (
            <Button
              key={social.id}
              as="a"
              href={social.url}
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
            >
              {social.label}
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
