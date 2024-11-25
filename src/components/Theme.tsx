import { App } from '@/components/App';

import '@/components/Theme.css';

export function Theme() {
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
