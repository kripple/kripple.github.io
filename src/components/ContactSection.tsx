import { socialLinks } from '@/data/config';
import { ids } from '@/data/sections';

import '@/components/contact-section.css';

export function ContactSection() {
  const email = socialLinks.email;

  return (
    <section className="section contact-section" id={ids.contact}>
      <div>
        <h3 className="section-title contact-section-title">Contact</h3>

        <p className="paragraph">
          {`I'm actively seeking my next full-time role and available to start immediately. If you know of opportunities that might be a good fit, I'd love to connect!`}
        </p>

        <p className="paragraph add-punctuation">
          Email:{' '}
          <a
            aria-label={email.label}
            className="email-text-link"
            href={email.href}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            {email.value}
          </a>
        </p>
      </div>
    </section>
  );
}
