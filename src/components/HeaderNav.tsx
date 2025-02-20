import { sections } from '@/data/sections';

import '@/components/header-nav.css';

export function HeaderNav() {
  return (
    <nav className="header-nav">
      <div className="nav-container" data-testid="menu">
        {Object.values(sections).map((section) => {
          return (
            <a
              className="nav-link click-to-scroll"
              href={`#${section.id}`}
              id={section.navId}
              key={section.id}
              tabIndex={0}
            >
              <span className="nav-link-indicator"></span>
              {section.id}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
