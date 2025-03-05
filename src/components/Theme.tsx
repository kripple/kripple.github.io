import { ids } from '@/data/sections';

import '@/assets/fonts-latin.css';
import '@/assets/icon-fonts.css';
import '@/components/theme-colors.css';
import '@/components/theme.css';

export function Theme({ children }: { children: ReactNode }) {
  return (
    <>
      <input
        aria-hidden={true}
        id={ids.themeToggle}
        tabIndex={-1}
        type="checkbox"
      ></input>
      <input
        aria-hidden={true}
        id={ids.menuToggle}
        tabIndex={-1}
        type="checkbox"
      ></input>
      <div className="theme menu body">{children}</div>
    </>
  );
}
