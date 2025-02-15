import { Icon } from '@/components/Icon';
import { ids } from '@/data/sections';

import '@/components/theme-toggle.css';

export function ThemeToggle() {
  const themeToggle = (
    <label
      aria-label="theme toggle"
      className="theme-toggle"
      htmlFor={ids.themeToggle}
      // id="theme-toggle-label"
      // TODO:
      // onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      change theme
    </label>
  );
  const otherThemeToggle = (
    <label
      aria-label="theme toggle"
      className="theme-toggle"
      htmlFor={ids.themeToggle}
      // id="theme-toggle-label"
      // TODO:
      // onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      {/* <label className="theme-icon-label">Light</label> */}
      <div className="theme-icons">
        <div className="theme-icon-light">
          <Icon icon="sun" />
        </div>
        <div className="theme-icon-dark">
          <Icon icon="moon" />
        </div>
      </div>
      {/* <label className="theme-icon-label">Dark</label> */}
    </label>
  );

  return otherThemeToggle;
}
