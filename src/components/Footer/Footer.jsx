import { profile } from '@/data/profile';
import { Container } from '@/components/Container/Container';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.name}>
            {profile.name}
          </p>

          <p className={styles.role}>
            {profile.role} · React.js · TypeScript · Generative AI
          </p>
        </div>

        <ul className={styles.socials}>
          {profile.socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socialLink}
              >
                {social.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href={`mailto:${profile.email}`}
              className={styles.socialLink}
            >
              Email
            </a>
          </li>

          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              Resume
            </a>
          </li>
        </ul>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            <span className="text-mono">
              © {year}
            </span>{' '}
            {profile.name}. Built with React.
          </p>

          <a
            href="#hero"
            className={styles.top}
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}