import { useRef } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import { Badge } from '@/components/Badge/Badge';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useStartAdventure } from "@/features/start-adventure/useStartAdventure";
import { TransitionVeil } from "@/features/start-adventure/TransitionVeil";
import { fadeInUp, staggerChildren } from '@/animations/variants';
import styles from './Hero.module.css';

/**
 * The landing experience. First screen a visitor sees: identity (name,
 * role, stack), a page-load entrance, subtle mouse-driven depth, and two
 * ways forward — a ceremonial "Start Adventure" (transitions into the
 * portfolio behind a brief veil) and a subtle "Explore Portfolio" plain
 * scroll for anyone who wants to skip the ceremony. Both are real
 * buttons: fully keyboard- and touch-operable, mouse is never required.
 */
export function Hero() {
  const heroRef = useRef(null);
  useMouseParallax(heroRef);
  const reducedMotion = useReducedMotion();

  const { phase, startAdventure, explorePortfolio } =
  useStartAdventure('developer-world');
  const transitioning = phase !== 'idle';

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      <span className={styles.orbAccent} aria-hidden="true" />
      <span className={styles.orbSecondary} aria-hidden="true" />

      <Container>
        <motion.div
          className={styles.content}
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          variants={staggerChildren(0.1)}
        >
          <motion.div variants={fadeInUp}>
            <Badge tone="accent">{profile.status}</Badge>
          </motion.div>

          <motion.span variants={fadeInUp} className="eyebrow">
            whoami
          </motion.span>

          <motion.h1 variants={fadeInUp} className={styles.title}>
            {profile.name}
          </motion.h1>

          <motion.p variants={fadeInUp} className={styles.role}>
            {profile.role}
          </motion.p>

          <motion.p variants={fadeInUp} className={`text-mono ${styles.stackLine}`}>
            {profile.stack.join('  •  ')}
          </motion.p>

          <motion.p variants={fadeInUp} className={styles.tagline}>
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className={styles.actions}>
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
      </Container>

      <TransitionVeil phase={phase} />
    </section>
  );
}
