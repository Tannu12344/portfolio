import { cn } from '@/utils/cn';
import styles from './Card.module.css';

/**
 * Base surface for grouped content (skills, experience, projects).
 * Carries the signature notched-corner motif by default.
 */
export function Card({ as: Tag = 'div', notched = true, className, children, ...props }) {
  return (
    <Tag className={cn(styles.card, notched && 'notch', className)} {...props}>
      {children}
    </Tag>
  );
}
