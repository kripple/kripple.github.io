import { SocialIcons } from '@/components/SocialIcons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from '@/data/config';
import { sections } from '@/data/sections';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="name">{config.name}</h1>
        <h2 className="job-title">{config.jobTitle}</h2>
        <div className="header-actions">
          <nav className="nav" role="navigation">
            {Object.values(sections).map((section) => {
              return (
                <a
                  className="nav-link click-to-scroll"
                  href={`#${section.id}`}
                  key={section.id}
                >
                  <span className="nav-indicator"></span>
                  {section.id}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="header-icon-set">
        <SocialIcons iconsOnly={true} />
        <ThemeToggle />
      </div>
    </header>
  );
}
