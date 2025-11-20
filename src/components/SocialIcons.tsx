import { Link } from '@/components/Link';
import { socialLinks } from '@/content/config';

import '@/components/social-icons.css';

export function SocialIcons() {
  return (
    <ul aria-label="Social media icons" className="social-icons">
      {Object.values(socialLinks).map(({ key, href, label }) => (
        <li key={key}>
          <Link aria-label={label} className="social-icon-link" href={href}>
            <span className="social-icon social-icon-effects"></span>
            <span className="social-icon">
              <i className={`font-icon icon-${key} social-icon-text`}></i>
              <i
                className={`font-icon icon-${key} social-icon-text-effects`}
              ></i>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
