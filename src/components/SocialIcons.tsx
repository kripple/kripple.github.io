import { CopyButton } from '@/components/CopyButton';
import { Icon } from '@/components/Icon';
import { socialLinks } from '@/data/config';

import '@/components/social-icons.css';

export function SocialIcons({ iconsOnly }: { iconsOnly?: boolean }) {
  return (
    <ul aria-label="Social media icons" className="icon-set">
      {Object.values(socialLinks).map(({ key, href, label, title, value }) => (
        <li className="list-item" key={key}>
          <a
            aria-label={label}
            className="icon-link"
            href={href}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <Icon icon={key} />
            {iconsOnly ? null : (
              <span className="icon-labels">
                <span className="icon-label-title">{title}</span>
                <span className="icon-label-details">{label}</span>
              </span>
            )}
          </a>
          {iconsOnly ? null : <CopyButton value={value} />}
        </li>
      ))}
    </ul>
  );
}
