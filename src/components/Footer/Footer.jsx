import { profile } from '@/data/profile';
import { Container } from '@/components/Container/Container';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <p className={styles.copy}>
          <span className="text-mono">© {year}</span> {profile.name}. Built with React.
        </p>
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
        </ul>
        <a href="#hero" className={styles.top}>
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
