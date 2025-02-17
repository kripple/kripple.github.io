import { Header } from '@/components/Header';
import { Theme } from '@/components/Theme';
import { config } from '@/data/config';
import { sections } from '@/data/sections';

import '@/components/global.css';
import '@/components/app.css';

export function App() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* TODO */}
      {/* <a className="skip-to-content" href="#content">
        Skip to Content
      </a> */}
      <Theme>
        <div className="app">
          <Header />
          <main className="main">
            {Object.values(sections).map((section) => (
              <section.Component key={section.id} />
            ))}
            <footer className="footer">
              © {currentYear} {config.name}
            </footer>
          </main>
        </div>
      </Theme>
    </>
  );
}
