/**
 * Tiny classnames joiner. Accepts strings, and falsy values are skipped.
 * Usage: cn('card', isActive && 'card--active', className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
