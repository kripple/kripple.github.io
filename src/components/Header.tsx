import { config, ids } from '@/data/config';
import { sections } from '@/data/sections';

import '@/components/header.css';

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="header">
      <div className="app-controls">
        <a
          className="app-title click-to-close-menu click-to-scroll"
          href="#home"
        >
          {config.name}
        </a>
        <label
          aria-label="Menu button"
          className="menu-button"
          htmlFor={ids.menuButton}
        ></label>
      </div>
      <nav className="nav" role="navigation">
        <a
          className="section-link click-to-close-menu click-to-scroll"
          href={`#${ids.home}`}
        >
          {ids.home}
        </a>
        {Object.keys(sections).map((id) => {
          return (
            <a
              className="section-link click-to-close-menu click-to-scroll"
              href={`#${id}`}
              key={id}
            >
              {id}
            </a>
          );
        })}
        {children}
      </nav>
    </header>
  );
}
