import { useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import { Badge } from '@/components/Badge/Badge';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useStartAdventure } from '@/features/start-adventure/useStartAdventure';
import { TransitionVeil } from '@/features/start-adventure/TransitionVeil';
import { fadeInUp, staggerChildren } from '@/animations/variants';
import profileImage from '@/assets/images/profile.png';
import styles from './Hero.module.css';

export function Hero() {
  const heroRef = useRef(null);

  useMouseParallax(heroRef);

  const reducedMotion = useReducedMotion();

  const { phase, startAdventure, explorePortfolio } =
    useStartAdventure('developer-world');

  const transitioning = phase !== 'idle';

  return (
    <section
      id="hero"
      ref={heroRef}
      className={styles.hero}
    >
      {/* Decorative ambient elements */}
      <span
        className={styles.orbAccent}
        aria-hidden="true"
      />

      <span
        className={styles.orbSecondary}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.heroGrid}>
          {/* Hero Content */}
          <motion.div
            className={styles.content}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            variants={staggerChildren(0.1)}
          >
            <motion.div variants={fadeInUp}>
              <Badge tone="accent">
                {profile.status}
              </Badge>
            </motion.div>

            <motion.span
              variants={fadeInUp}
              className="eyebrow"
            >
              whoami
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className={styles.title}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={styles.role}
            >
              {profile.role}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={`text-mono ${styles.stackLine}`}
            >
              {profile.stack.join('  •  ')}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className={styles.tagline}
            >
              {profile.tagline}
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={fadeInUp}
              className={styles.actions}
            >
              <span className={styles.ctaPrimaryWrap}>
                <Button
                  type="button"
                  variant="primary"
                  onClick={startAdventure}
                  disabled={transitioning}
                  aria-label="Start Adventure — enter the portfolio"
                >
                  Start Adventure
                </Button>
              </span>

              <Button
                type="button"
                variant="ghost"
                onClick={explorePortfolio}
                disabled={transitioning}
                className={styles.exploreBtn}
              >
                Explore Portfolio ↓
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.94,
                  }
            }
            animate={
              reducedMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <div className={styles.imageFrame}>
              {/* Ambient glow behind transparent image */}
              <span
                className={styles.imageGlow}
                aria-hidden="true"
              />

              {/* Transparent profile image */}
              <img
                src={profileImage}
                alt="Tannu Singh"
                className={styles.profileImage}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Start Adventure transition */}
      <TransitionVeil phase={phase} />
    </section>
  );
}