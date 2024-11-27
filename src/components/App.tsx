import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Subtitle } from '@/components/Subtitle';
import { Theme } from '@/components/Theme';
import { Title } from '@/components/Title';

import '@/components/app.css';

export function App() {
  return (
    <Theme>
      <div className="body">
        <Header />
        <main className="main">
          <hgroup className="title-block">
            <Title />
            <Subtitle />
          </hgroup>
          <Projects />
        </main>
        <Footer />
      </div>
    </Theme>
  );
}
