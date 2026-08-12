import styles from './AmbientBackground.module.css';

/**
 * Fixed, decorative background layer: a faint pixel-grid (game "world"
 * reference) plus two soft amber/violet glows (arcade-marquee lighting).
 * Pure CSS — no canvas/particle engine — to stay cheap to paint and
 * scroll. Any motion is a slow ambient drift and is fully disabled under
 * prefers-reduced-motion (see global.css).
 */
export function AmbientBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <div className={cx(styles.glow, styles.glowAccent)} />
      <div className={cx(styles.glow, styles.glowSecondary)} />
      <div className={styles.scanlines} />
      <div className={styles.vignette} />
    </div>
  );
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}
