import { useState } from 'react';
import { cn } from '@/utils/cn';
import { SECTIONS } from '@/utils/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Logo } from '@/components/Logo/Logo';
import { Button } from '@/components/Button/Button';
import { CommandPalette } from '@/features/command-palette/CommandPalette';
import styles from './Navigation.module.css';

export function Navigation() {
  const [open, setOpen] = useState(false);

  const activeId = useScrollSpy(
    SECTIONS.map((section) => section.id)
  );

  return (
    <header className={styles.header}>
      <nav
        className={cn(styles.nav, 'notch-sm')}
        aria-label="Primary"
      >
        <a
          href="#hero"
          className={styles.brand}
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <ul
          className={cn(
            styles.links,
            open && styles.linksOpen
          )}
        >
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  styles.link,
                  activeId === section.id &&
                    styles.linkActive
                )}
                onClick={() => setOpen(false)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>

          {/* Command Palette */}
          <CommandPalette />

          {/* Contact */}
          <Button
            as="a"
            href="#contact"
            variant="primary"
            className={styles.cta}
          >
            Contact
          </Button>

          {/* Mobile Menu */}
          <button
            type="button"
            className={styles.toggle}
            aria-label={
              open ? 'Close menu' : 'Open menu'
            }
            aria-expanded={open}
            onClick={() =>
              setOpen((prev) => !prev)
            }
          >
            <span
              className={cn(
                styles.bar,
                open && styles.barTopOpen
              )}
            />

            <span
              className={cn(
                styles.bar,
                open && styles.barMidOpen
              )}
            />

            <span
              className={cn(
                styles.bar,
                open && styles.barBottomOpen
              )}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}