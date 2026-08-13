import { motion } from 'framer-motion';
import styles from './TransitionVeil.module.css';

/**
 * Full-viewport veil used by useStartAdventure to mask the jump to the
 * portfolio content, so the transition reads as "stepping through" into
 * a new scene rather than a hard cut or a raw scroll.
 *
 * Rendered as a sibling of any transformed/animated ancestor (see Hero.jsx)
 * so its `position: fixed` is measured against the viewport, not a
 * transformed parent. Purely visual — decorative only — so it never
 * intercepts pointer events; the buttons that drive `phase` are disabled
 * for the duration instead.
 */
export function TransitionVeil({ phase }) {
  if (phase === 'idle') return null;

  const covered = phase === 'covering';

  return (
    <motion.div
      className={styles.veil}
      initial={{ opacity: 0 }}
      animate={{ opacity: covered ? 1 : 0 }}
      transition={{ duration: 0.42, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <motion.span
        className={styles.ring}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: covered ? 1 : 1.4, opacity: covered ? 0.8 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}
