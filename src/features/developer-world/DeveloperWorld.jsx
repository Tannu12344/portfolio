import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container/Container';
import { levels } from './levels';
import styles from './DeveloperWorld.module.css';

export function DeveloperWorld() {
  const [discovered, setDiscovered] = useState([]);

  const handleLevelClick = (level) => {
    setDiscovered((current) =>
      current.includes(level.id)
        ? current
        : [...current, level.id]
    );

    const target = document.getElementById(level.targetId);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="developer-world"
      className={styles.world}
      aria-labelledby="developer-world-title"
    >
      <Container>
        <div className={styles.header}>
          <span className="eyebrow">explore</span>

          <h2 id="developer-world-title" className={styles.title}>
            Developer World
          </h2>

          <p className={styles.description}>
            Explore my journey, skills, experience, and the things I build.
          </p>
        </div>

        <div className={styles.worldMap}>
          {levels.map((level, index) => {
            const isDiscovered = discovered.includes(level.id);

            return (
              <div key={level.id} className={styles.levelWrapper}>
                <motion.button
                  type="button"
                  className={`${styles.level} ${
                    isDiscovered ? styles.discovered : ''
                  }`}
                  onClick={() => handleLevelClick(level)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.number}>
                    {level.number}
                  </span>

                  <span className={styles.content}>
                    <span className={styles.levelTitle}>
                      {level.title}
                    </span>

                    <span className={styles.levelDescription}>
                      {level.description}
                    </span>
                  </span>

                  <span
                    className={styles.status}
                    aria-hidden="true"
                  >
                    {isDiscovered ? '✓' : '○'}
                  </span>
                </motion.button>

                {index < levels.length - 1 && (
                  <span
                    className={styles.connection}
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}