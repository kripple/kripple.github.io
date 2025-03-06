import { ids } from '@/data/sections';

import '@/components/menu-toggle.css';

export function MenuToggle() {
  return (
    <label
      aria-label="Menu toggle"
      className="menu-toggle glow-icon-clickable"
      data-testid="menu-toggle"
      htmlFor={ids.menuToggle}
      id="menu-toggle-label"
      tabIndex={0}
    >
      <span className="menu-toggle-icon glow-icon">
        <i className="font-icon icon-menu"></i>
      </span>
    </label>
  );
}
