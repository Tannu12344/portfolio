import { cn } from '@/utils/cn';
import { Container } from '@/components/Container/Container';
import styles from './Section.module.css';

/**
 * Structural wrapper for a page section: consistent vertical rhythm,
 * an id for navigation/scroll-spy, and an optional eyebrow + title header.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}) {
  return (
    <section id={id} className={cn(styles.section, className)}>
      <Container className={contentClassName}>
        {(eyebrow || title) && (
          <header className={styles.header}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
