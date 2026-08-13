import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Tracks pointer position relative to a container element and exposes it
 * as CSS custom properties (--parallax-x / --parallax-y, range -0.5..0.5)
 * on that element, so descendant layers can read them for a subtle
 * depth/parallax effect via CSS transforms.
 *
 * Purely decorative and additive:
 *  - No-ops entirely under `prefers-reduced-motion: reduce`.
 *  - No-ops on devices without a fine pointer (touch), since mouse
 *    parallax has no meaningful touch equivalent and must never be
 *    required to use the page.
 *  - Always removes its listeners and cancels any pending animation
 *    frame on unmount.
 *
 * Usage:
 *   const heroRef = useRef(null);
 *   useMouseParallax(heroRef);
 *   <section ref={heroRef}>...</section>
 */
export function useMouseParallax(ref) {
  const reducedMotion = useReducedMotion();
  const frame = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return undefined;
    if (typeof window === 'undefined') return undefined;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return undefined;

    const setParallax = (x, y) => {
      node.style.setProperty('--parallax-x', x.toFixed(3));
      node.style.setProperty('--parallax-y', y.toFixed(3));
    };

    const handlePointerMove = (event) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        setParallax(x, y);
      });
    };

    const handlePointerLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      setParallax(0, 0);
    };

    node.addEventListener('pointermove', handlePointerMove, { passive: true });
    node.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', handlePointerLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [ref, reducedMotion]);
}
