import { Header } from '@/components/Header';
import { HomeSection } from '@/components/HomeSection';
import { Theme } from '@/components/Theme';
import { config, ids } from '@/data/config';
import { sections } from '@/data/sections';

import '@/components/global.css';
import '@/components/app.css';

export function App() {
  const currentYear = new Date().getFullYear();
  const themeToggle = (
    <label
      aria-label="theme toggle"
      className="theme-toggle click-to-close-menu"
      htmlFor={ids.themeToggle}
      // id="theme-toggle-label"
      // onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      change theme
    </label>
  );

  return (
    <>
      {/* <a className="skip-to-content" href="#content">
        Skip to Content
      </a> */}
      <Theme>
        <div className="app">
          <Header>{themeToggle}</Header>
          <main className="main">
            <HomeSection />
            {Object.values(sections).map((Section) => (
              <Section key={Section.name} />
            ))}
          </main>
          <footer className="footer">
            © {currentYear} {config.name}
          </footer>
        </div>
      </Theme>
    </>
  );
}
