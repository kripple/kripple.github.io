import { Header } from '@/components/Header';
import { Projects } from '@/components/Projects';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';

import '@/components/App.css';

export function App() {
  const creator = 'Kelly Ripple';
  // const description = '???';
  const currentYear = new Date().getFullYear();

  return (
    <div className="body">
      <Header />
      <main className="main">
        <hgroup className="title-block">
          <Title />
          <Subtitle />
          {/* <p>{description}</p> */}
        </hgroup>
        <Projects />
      </main>
      <footer className="footer">
        <small className="copyright">
          © {currentYear} {creator}
        </small>
      </footer>
    </div>
  );
}
