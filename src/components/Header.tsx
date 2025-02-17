import { Icon } from '@/components/Icon';
import { SocialIcons } from '@/components/SocialIcons';
import { config } from '@/data/config';
import { ids, sections } from '@/data/sections';

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
        <label
          aria-label="theme toggle"
          // className="theme-toggle"
          htmlFor={ids.themeToggle}
          // id="theme-toggle-label"
          // TODO:
          // onKeyDown={onKeyDown}
          role="button"
          tabIndex={0}
        >
          <div className="icon sun-icon">
            light
            <div className="circle icon"></div>
          </div>
          <div className="icon moon-icon">
            dark
            <div className="circle icon"></div>
          </div>
          {/* <Icon icon="sun" />
          <Icon icon="moon" /> */}
        </label>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
