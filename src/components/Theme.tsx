import type { ReactNode } from 'react';

import '@/components/theme-font-regular.css';
import '@/components/theme-font-italic.css';
import '@/components/theme-font.css';
import '@/components/theme.css';

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
      <div className="theme">{children}</div>
    </>
  );
}
