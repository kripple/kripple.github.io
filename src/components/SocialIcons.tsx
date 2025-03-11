import { socialLinks } from '@/data/config';

import '@/components/social-icons.css';

export function SocialIcons() {
  return (
    <ul aria-label="Social media icons" className="social-icons">
      {Object.values(socialLinks).map(({ key, href, label }) => (
        <li key={key}>
          <a
            aria-label={label}
            className="social-icon-link"
            href={href}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <span className="social-icon social-icon-effects"></span>
            <span className="social-icon">
              <i className={`font-icon icon-${key} social-icon-text`}></i>
              <i
                className={`font-icon icon-${key} social-icon-text-effects`}
              ></i>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
