import { cn } from '@/utils/cn';
import styles from './Container.module.css';

/**
 * Responsive content wrapper. Centers content and applies the global
 * max-width + gutter tokens. Use for every section's inner content.
 */
export function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn(styles.container, className)} {...props}>
      {children}
    </Tag>
  );
}
