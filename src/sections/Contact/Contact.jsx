import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/profile';
import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';
import { BackToWorld } from '@/features/developer-world/BackToWorld';
import styles from './Contact.module.css';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let's build something"
      description="Have an opportunity, project, or idea? I'd love to hear about it."
    >
      <BackToWorld />

      <div className={styles.contactPanel}>
        {/* Status */}
        <div className={styles.statusRow}>
          <span
            className={styles.statusDot}
            aria-hidden="true"
          />

          <span className={styles.status}>
            {profile.status}
          </span>
        </div>

        {/* Main Contact Content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            START A CONVERSATION
          </span>

          <h3 className={styles.heading}>
            Have something in mind?
            <br />
            Let's talk.
          </h3>

          <p className={styles.copy}>
            The fastest way to reach me is by email.
            I read every message and will get back to you
            as soon as I can.
          </p>

          {/* Email Actions */}
          <div className={styles.actions}>
            <Button
              as="a"
              href={`mailto:${profile.email}`}
              variant="primary"
            >
              Email me →
            </Button>

            <button
              type="button"
              className={styles.copyButton}
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? '✓ Copied' : 'Copy email'}
            </button>
          </div>

          {/* Email Display */}
          <a
            href={`mailto:${profile.email}`}
            className={styles.email}
          >
            {profile.email}
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <span className={styles.socialLabel}>
            FIND ME ONLINE
          </span>

          <div className={styles.socials}>
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socialLink}
              >
                <span>{social.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}