import { Projects } from '@/components/Projects';

import '@/components/App.css';

export function App() {
  const creator = 'Kelly Ripple';
  const subTitle = 'Web Developer Extraordinaire';
  // const description = '???';
  const currentYear = new Date().getFullYear();

  return (
    <div className="body">
      <header className="header"></header>
      <main className="main">
        <hgroup className="title-block">
          <h1 className="title">{creator}</h1>
          <h2 className="subtitle">{subTitle}</h2>
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
