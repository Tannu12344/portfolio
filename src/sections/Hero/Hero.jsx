import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Container } from '@/components/Container/Container';
import { Button } from '@/components/Button/Button';
import { Badge } from '@/components/Badge/Badge';
import { fadeInUp, staggerChildren } from '@/animations/variants';
import styles from './Hero.module.css';

/**
 * Static introduction section. Establishes structure and hierarchy only —
 * scroll/cursor-driven "hero interactions" are a later phase. The single
 * animation here is a restrained page-load entrance.
 */
export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Container>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.12)}
        >
          <motion.div variants={fadeInUp}>
            <Badge tone="accent">{profile.status}</Badge>
          </motion.div>

          <motion.span variants={fadeInUp} className={cxEyebrow()}>
            <span className="eyebrow">whoami — {profile.role}</span>
          </motion.span>

          <motion.h1 variants={fadeInUp} className={styles.title}>
            {profile.name}
          </motion.h1>

          <motion.p variants={fadeInUp} className={styles.tagline}>
            {profile.tagline}
          </motion.p>

          <motion.p variants={fadeInUp} className={styles.bio}>
            {profile.bio}
          </motion.p>

          <motion.div variants={fadeInUp} className={styles.actions}>
            <Button as="a" href="#projects" variant="primary">
              View Work
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function cxEyebrow() {
  return styles.eyebrowWrap;
}
