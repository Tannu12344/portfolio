import { cn } from '@/utils/cn';
import styles from './Logo.module.css';

/**
 * Small wordmark used in the navigation. A single amber pixel-dot stands
 * in for a cursor/blink — a quiet nod to the game/terminal concept.
 */
export function Logo({ className }) {
  return (
    <span className={cn(styles.logo, className)}>
  <span className={styles.bracket}>{'<'}</span>
  TANNU
  <span className={styles.bracket}>{'/>'}</span>
  <span className={styles.dot} aria-hidden="true" />
</span>
  );
}
