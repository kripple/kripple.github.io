import { App } from '@/components/App';
import { MoonIcon } from '@/components/MoonIcon';
import { SunIcon } from '@/components/SunIcon';

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
        <label
          aria-hidden={true}
          className="theme-toggle-label"
          htmlFor="theme-toggle"
        >
          <SunIcon />
          <MoonIcon />
        </label>
        
        <App />
      </div>
    </>
  );
}
