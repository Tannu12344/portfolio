import { cn } from '@/utils/cn';
import styles from './Button.module.css';

/**
 * Primary interactive control.
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: renders as <button> by default, or 'a' for links (pass href).
 */
export function Button({
  as: Tag = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(styles.button, styles[variant], 'notch-sm', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
