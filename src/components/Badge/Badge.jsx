import { cn } from '@/utils/cn';
import styles from './Badge.module.css';

/**
 * Small label for tags, stack pills, and status indicators.
 * tone: 'neutral' | 'accent' | 'secondary' | 'success'
 */
export function Badge({ tone = 'neutral', className, children }) {
  return <span className={cn(styles.badge, styles[tone], className)}>{children}</span>;
}
