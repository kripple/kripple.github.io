import { Link } from '@/components/Link';
import { sections } from '@/content/sections';

import '@/components/header-nav.css';

export function HeaderNav() {
  return (
    <nav className="header-nav">
      <div className="nav-container" data-testid="menu">
        {Object.values(sections).map((section) => {
          return (
            <Link
              className="nav-link click-to-scroll"
              href={`#${section.id}`}
              id={section.navId}
              key={section.id}
              newTab={false}
            >
              <span className="nav-link-indicator"></span>
              <span className="nav-link-text">{section.id}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
