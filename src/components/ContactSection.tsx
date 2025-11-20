import { Link } from '@/components/Link';
import { socialLinks } from '@/content/config';
import { ids } from '@/content/sections';

import '@/components/contact-section.css';

export function ContactSection() {
  const email = socialLinks.email;

  return (
    <section className="section contact-section" id={ids.contact}>
      <div>
        <h3 className="section-title contact-section-title show-for-desktop">
          Contact
        </h3>

        <p className="paragraph">
          {`I'm a full-stack software engineer specializing in frontend development.  I'm not actively looking for new opportunities right now, but I'd love to hear from you about anything else.`}
        </p>

        <p className="paragraph add-punctuation">
          Email:{' '}
          <Link
            aria-label={email.label}
            className="email-text-link"
            href={email.href}
          >
            {email.value}
          </Link>
        </p>
      </div>
    </section>
  );
}
