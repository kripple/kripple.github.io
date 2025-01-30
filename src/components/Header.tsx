import { Icon } from '@/components/Icon';
import { icons } from '@/data/icons';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header">
      {[icons.github, icons.linkedin, icons.email].map(
        ({ id, href, viewBox, drawPath }) => (
          <a
            aria-label={id}
            className="header-item"
            href={href}
            key={id}
            rel="noreferrer"
            role="link"
            tabIndex={0}
            target="_blank"
          >
            <Icon drawPath={drawPath} id={id} viewBox={viewBox} />
          </a>
        ),
      )}
      <label
        aria-label="theme toggle"
        className="header-item theme-toggle-label"
        htmlFor="theme-toggle"
        id="theme-toggle-label"
        role="button"
        tabIndex={0}
      >
        {[icons.sun, icons.moon].map(({ id, drawPath, viewBox }) => (
          <Icon drawPath={drawPath} id={id} key={id} viewBox={viewBox} />
        ))}
      </label>
    </header>
  );
}
