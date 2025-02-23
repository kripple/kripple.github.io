import { Icon } from '@/components/Icon';
import { ids } from '@/data/sections';

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
      <span className="theme-toggle-icon">
        <Icon icon="sun" />
        <Icon icon="moon" />
      </span>
    </label>
  );
}
