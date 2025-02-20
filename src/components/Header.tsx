import { MenuToggle } from '@/components/MenuToggle';
import { SocialIcons } from '@/components/SocialIcons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from '@/data/config';
import { ids, sections } from '@/data/sections';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h1 className="name">
          <a
            className="header-title-link click-to-scroll"
            href={`#${ids.home}`}
            tabIndex={0}
          >
            {config.name}
          </a>
        </h1>
        <h2 className="job-title">{config.jobTitle}</h2>
      </div>

      <MenuToggle />

      <nav className="header-nav">
        <div className="nav-container" data-testid="menu">
          {Object.values(sections).map((section) => {
            return (
              <a
                className="nav-link click-to-scroll"
                href={`#${section.id}`}
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

      <div className="header-icons">
        <SocialIcons iconsOnly={true} />
        <ThemeToggle />
      </div>
    </header>
  );
}
