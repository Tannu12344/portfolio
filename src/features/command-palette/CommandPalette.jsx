import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SECTIONS } from '@/utils/constants';
import styles from './CommandPalette.module.css';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const results = SECTIONS.filter((section) =>
    section.label
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const handleClose = () => {
    setOpen(false);
    setQuery('');
  };

  // Keyboard Escape
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [open]);

  const navigateTo = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      console.log(`Section #${id} not found`);
      return;
    }

    handleClose();

    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  return (
    <>
      {/* Command Palette Trigger */}
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
      >
        ⌘ K
      </button>

      {/* Command Palette */}
      {open &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={handleClose}
          >
            <div
              className={styles.palette}
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* Search */}
              <div className={styles.search}>
                <span
                  className={styles.searchIcon}
                  aria-hidden="true"
                >
                  ⌕
                </span>

                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Search portfolio..."
                  aria-label="Search portfolio"
                />

                {/* ESC Button */}
                <button
                  type="button"
                  className={styles.close}
                  onClick={handleClose}
                  aria-label="Close command palette"
                >
                  ESC
                </button>
              </div>

              {/* Results */}
              <div className={styles.results}>
                {results.length > 0 ? (
                  results.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      className={styles.command}
                      onClick={() =>
                        navigateTo(section.id)
                      }
                    >
                      <span>{section.label}</span>

                      <span
                        className={styles.arrow}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  ))
                ) : (
                  <p className={styles.empty}>
                    No results found.
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}