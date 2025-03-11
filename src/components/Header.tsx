import { HeaderNav } from '@/components/HeaderNav';
import { MenuToggle } from '@/components/MenuToggle';
import { SocialIcons } from '@/components/SocialIcons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from '@/data/config';
import { ids } from '@/data/sections';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header" id="header">
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
      <HeaderNav />
      <div className="header-icons">
        <SocialIcons />
        <ThemeToggle />
      </div>
    </header>
  );
}
