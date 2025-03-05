import { socialLinks } from '@/data/config';

import '@/components/social-icons.css';

export function SocialIcons() {
  return (
    <ul aria-label="Social media icons" className="social-icons">
      {Object.values(socialLinks).map(({ key, href, label }) => (
        <li key={key}>
          <a
            aria-label={label}
            className="font-icon-link"
            href={href}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <span className="font-icon-container">
              <i className={`font-icon icon-${key}`}></i>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
