import { App } from '@/components/App';


import '@/theme.css';

export function ThemeProvider() {
  const enableDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  return (
    <>
      <input
        aria-hidden={true}
        defaultChecked={enableDarkMode}
        id="theme-toggle"
        type="checkbox"
      />
      <div className="theme-container">

        <App />
      </div>
    </>
  );
}
