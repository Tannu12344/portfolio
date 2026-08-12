/**
 * Shared Framer Motion variants.
 *
 * Kept intentionally minimal in the foundation phase: a single restrained
 * entrance treatment used for page load only. Scroll-triggered reveals,
 * hover choreography and game-driven interactions belong to later phases.
 */

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerChildren = (stagger = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});
