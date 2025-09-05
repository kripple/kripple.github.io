import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Theme } from '@/components/Theme';
import { sections } from '@/data/sections';

import '@/components/global.css';
import '@/components/app.css';

export function App() {
  return (
    <Theme>
      <div className="app">
        <Header />
        <main className="main">
          {Object.values(sections).map((section) => (
            <section.Component key={section.id} />
          ))}
          <Footer />
        </main>
      </div>
    </Theme>
  );
}
