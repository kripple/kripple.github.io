import { CopyButton } from '@/components/CopyButton';
import { HeaderSpacer } from '@/components/HeaderSpacer';
import { config, ids } from '@/data/config';

import '@/components/contact-section.css';

export function ContactSection() {
  return (
    <section className="section contact-section" id={ids.contact}>
      <HeaderSpacer />
      <h3 className="section-title">Contact</h3>
      <p className="paragraph">
        Kelly can be reached by email at {config.email}.
      </p>

      <p className="paragraph">
        {`Click "Email" to send an email using your default email client`}
        <span className="copy-instructions">{`, or click "Copy" to copy the address`}</span>
        .
      </p>

      <div className="button-set">
        <a className="button-link" href={`mailto:${config.email}`}>
          <span className="label">Email</span>
        </a>

        <CopyButton label="Copy" value={config.email} />
      </div>
    </section>
  );
}
