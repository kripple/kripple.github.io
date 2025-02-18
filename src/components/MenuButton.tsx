import { ids } from '@/data/sections';

import '@/components/menu-button.css';

export function MenuButton() {
  return (
    <label
      aria-label="Menu button"
      className="menu-button"
      htmlFor={ids.menuButton}
      role="button"
      tabIndex={0}
    >
      <span className="menu-toggle"></span>
    </label>
  );
}
