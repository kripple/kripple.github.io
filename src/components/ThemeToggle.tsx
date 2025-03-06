import { ids } from '@/data/sections';

import '@/components/theme-toggle.css';

export function ThemeToggle() {
  return (
    <label
      aria-label="theme toggle"
      className="theme-toggle glow-icon-clickable"
      data-testid="theme-toggle"
      htmlFor={ids.themeToggle}
      id="theme-toggle-label"
      tabIndex={0}
    >
      <span className="theme-toggle-icon glow-icon">
        <span className="theme-toggle-inset"></span>
        <i className="font-icon icon-sun"></i>
        <i className="font-icon icon-moon"></i>
      </span>
    </label>
  );
}
