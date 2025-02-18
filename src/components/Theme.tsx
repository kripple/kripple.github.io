import { ids } from '@/data/sections';

import '@/components/theme.css';

export function Theme({ children }: { children: ReactNode }) {
  return (
    <>
      <input
        aria-hidden={true}
        id={ids.themeToggle}
        tabIndex={-1}
        type="checkbox"
      />
      <input
        aria-hidden={true}
        id={ids.menuToggle}
        tabIndex={-1}
        type="checkbox"
      />
      <div className="theme menu body">{children}</div>
    </>
  );
}
