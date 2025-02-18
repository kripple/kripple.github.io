import { ids } from '@/data/sections';

import '@/components/menu-toggle.css';

export function MenuToggle() {
  return (
    <label
      aria-label="Menu toggle"
      className="menu-toggle"
      htmlFor={ids.menuToggle}
      tabIndex={0}
    >
      <span className="menu-toggle-icon"></span>
    </label>
  );
}
