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
          {`I'm a full-stack software engineer specializing in frontend development. I'm not seeking new opportunities at this time, but for all other inquiries, please use the contact information below:`}
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
