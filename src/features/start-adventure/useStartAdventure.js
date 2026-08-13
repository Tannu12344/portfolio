import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const VEIL_COVER_MS = 420;
const VEIL_CLEAR_MS = 420;

/**
 * Orchestrates the "Start Adventure" entrance moment: a brief full-screen
 * veil covers the viewport, the page jumps to the target section behind
 * it, then the veil clears — reading as a single smooth transition into
 * "the portfolio experience" rather than an abrupt scroll or page swap.
 *
 * `phase` drives <TransitionVeil>:
 *   'idle'      → veil hidden, nothing in flight
 *   'covering'  → veil fading in to fully cover the viewport
 *   'revealing' → veil fading back out, target section already in view
 *
 * `explorePortfolio` is the subtler alternative: a plain smooth scroll
 * to the same destination, no veil, no ceremony.
 *
 * Fully keyboard/touch operable — both actions are plain functions
 * triggered by button clicks, nothing here depends on mouse movement.
 * Respects `prefers-reduced-motion`: the veil and any scroll animation
 * are skipped in favour of an instant jump.
 */
export function useStartAdventure(targetId = 'about') {
  const [phase, setPhase] = useState('idle');
  const reducedMotion = useReducedMotion();
  const coverTimeout = useRef(null);
  const clearTimeout_ = useRef(null);

  const scrollToTarget = useCallback(
    (smooth) => {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    },
    [targetId]
  );

  const startAdventure = useCallback(() => {
    if (phase !== 'idle') return; // ignore repeat triggers mid-transition

    if (reducedMotion) {
      scrollToTarget(false);
      return;
    }

    setPhase('covering');
    coverTimeout.current = setTimeout(() => {
      scrollToTarget(false); // instant — hidden behind the fully-covered veil
      setPhase('revealing');
      clearTimeout_.current = setTimeout(() => setPhase('idle'), VEIL_CLEAR_MS);
    }, VEIL_COVER_MS);
  }, [phase, reducedMotion, scrollToTarget]);

  const explorePortfolio = useCallback(() => {
    if (phase !== 'idle') return;
    scrollToTarget(!reducedMotion);
  }, [phase, reducedMotion, scrollToTarget]);

  // Always clear any pending timers on unmount.
  useEffect(
    () => () => {
      if (coverTimeout.current) clearTimeout(coverTimeout.current);
      if (clearTimeout_.current) clearTimeout(clearTimeout_.current);
    },
    []
  );

  return { phase, startAdventure, explorePortfolio };
}
