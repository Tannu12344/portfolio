import styles from './BackToWorld.module.css';

export function BackToWorld() {
  const handleBackToWorld = () => {
    const world = document.getElementById('developer-world');

    if (!world) return;

    world.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleBackToWorld}
      aria-label="Back to Developer World"
    >
      <span aria-hidden="true">←</span>
      Developer World
    </button>
  );
}