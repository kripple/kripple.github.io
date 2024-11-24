import { Icon } from '@/components/Icon';
import { icons } from '@/data/icons';

import '@/components/Header.css';

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
            tabIndex={0}
            target="_blank"
          >
            <Icon drawPath={drawPath} id={id} viewBox={viewBox} />
          </a>
        ),
      )}
      <label
        aria-hidden={true}
        className="header-item theme-toggle-label"
        htmlFor="theme-toggle"
        tabIndex={0}
      >
        {[icons.sun, icons.moon].map(({ id, drawPath, viewBox }) => (
          <Icon drawPath={drawPath} id={id} key={id} viewBox={viewBox} />
        ))}
      </label>
    </header>
  );
}
