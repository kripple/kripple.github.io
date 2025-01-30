import type { ReactNode } from 'react';

import '@/components/theme-font-regular.css';
import '@/components/theme-font-italic.css';
import '@/components/theme-font.css';
import '@/components/theme.css';

export function Theme({ children }: { children: ReactNode }) {
  return (
    <>
      <input
        aria-hidden={true}
        id="theme-toggle"
        tabIndex={-1}
        type="checkbox"
      />
      <div className="theme">{children}</div>
    </>
  );
}
