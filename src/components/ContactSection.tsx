// import { CopyButton } from '@/components/CopyButton';

import { socialLinks } from '@/data/config';
import { ids } from '@/data/sections';

import '@/components/contact-section.css';

export function ContactSection() {
  const email = socialLinks.email;

  return (
    <section className="section contact-section" id={ids.contact}>
      <div>
        <h3 className="section-title">Contact</h3>
        <p className="paragraph add-punctuation">
          {`I’m actively seeking my next full-time role and am available to start immediately. If you know of any opportunities that might be a good fit, I’d love to hear from you! I can be reached by email at `}
          <a
            aria-label={email.label}
            className="email-text-link"
            href={email.href}
            rel="noreferrer"
            target="_blank"
          >
            {email.value}
          </a>
        </p>

        {/* <p className="paragraph">
          {`Click "Email" to send an email using your default email client`}
          <span className="copy-instructions">{`, or click "Copy" to copy the address`}</span>
          .
        </p>

        <div className="button-set">
          <a className="button-link" href={`mailto:${config.email}`}>
            <span className="label">Email</span>
          </a>

          <CopyButton label="Copy" value={config.email} />
        </div> */}

        {/* <div>
        <SocialIcon icon="github" />
        <SocialIcon icon="linkedin" />
        <SocialIcon icon="email" />
      </div> */}
      </div>
    </section>
  );
}
