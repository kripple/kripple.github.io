import { ids } from '@/content/sections';

import '@/components/theme-toggle.css';

export function ThemeToggle() {
  return (
    <label
      aria-label="theme toggle"
      className="theme-toggle"
      data-testid="theme-toggle"
      htmlFor={ids.themeToggle}
      id="theme-toggle-label"
      tabIndex={0}
    >
      <span className="theme-toggle-icons">
        <span className="theme-toggle-icon">
          <i className="font-icon icon-sun"></i>
        </span>
        <span className="theme-toggle-icon">
          <i className="font-icon icon-moon"></i>
        </span>
      </span>
      <span className="theme-toggle-icons theme-icon-effects">
        <span className="theme-toggle-icon">
          <i className="font-icon icon-sun theme-icon-text-effects"></i>
        </span>
        <span className="theme-toggle-icon">
          <i className="font-icon icon-moon theme-icon-text-effects"></i>
        </span>
        <span className="theme-toggle-inset"></span>
      </span>
    </label>
  );
}
