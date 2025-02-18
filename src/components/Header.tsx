import { MenuButton } from '@/components/MenuButton';
import { SocialIcons } from '@/components/SocialIcons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from '@/data/config';
import { ids, sections } from '@/data/sections';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <a
          className="app-title click-to-close-menu click-to-scroll"
          href={`#${ids.home}`}
        >
          <h1 className="name">{config.name}</h1>
          <h2 className="job-title">{config.jobTitle}</h2>
        </a>
        <MenuButton />
      </div>

      <nav className="header-nav" role="navigation">
        <div className="nav-container">
          {Object.values(sections).map((section) => {
            return (
              <a
                className="nav-link click-to-close-menu click-to-scroll"
                href={`#${section.id}`}
                key={section.id}
              >
                <span className="nav-indicator"></span>
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
