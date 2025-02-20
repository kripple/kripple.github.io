import { ids } from '@/data/sections';

import '@/components/menu-toggle.css';

export function MenuToggle() {
  return (
    <label
      aria-label="Menu toggle"
      className="menu-toggle"
      data-testid="menu-toggle"
      htmlFor={ids.menuToggle}
      id="menu-toggle-label"
      tabIndex={0}
    >
      <span className="menu-toggle-label">Menu</span>
      <span className="menu-toggle-icon"></span>
    </label>
  );
}
