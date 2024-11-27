import type { ReactNode } from 'react';

import '@/styles/theme.css';

export function Theme({ children }: { children: ReactNode }) {
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
      <div className="theme-container">{children}</div>
    </>
  );
}
