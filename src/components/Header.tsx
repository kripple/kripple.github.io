import photo from '@/assets/kelly-ripple-circle.png';
import { SocialIcon } from '@/components/SocialIcon';
import { config } from '@/data/config';
import { sections } from '@/data/sections';

import '@/components/header.css';

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="header">
      <div>
        <div className="header-image-container">
          <div className="header-image-frame">
            <img
              alt={config.name}
              className="header-image-circle"
              src={photo}
            ></img>
          </div>
        </div>
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
          {children}
        </div>
      </div>

      <div className="icon-set">
        <SocialIcon icon="github" />
        <SocialIcon icon="linkedin" />
        <SocialIcon icon="email" />
      </div>
    </header>
  );
}
