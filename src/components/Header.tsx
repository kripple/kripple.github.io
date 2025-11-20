import { HeaderNav } from '@/components/HeaderNav';
import { Link } from '@/components/Link';
import { MenuToggle } from '@/components/MenuToggle';
import { SocialIcons } from '@/components/SocialIcons';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from '@/content/config';
import { ids } from '@/content/sections';

import '@/components/header.css';

export function Header() {
  return (
    <header className="header" id="header">
      <div className="header-title">
        <h1 className="name">
          <Link
            className="header-title-link click-to-scroll"
            href={`#${ids.home}`}
            newTab={false}
          >
            {config.name}
          </Link>
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
