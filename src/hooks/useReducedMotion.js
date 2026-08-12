import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` preference so components can
 * disable or simplify animation. Foundation-level accessibility hook used
 * across future interactive phases.
 */
export function useReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (event) => setReduced(event.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return reduced;
}
