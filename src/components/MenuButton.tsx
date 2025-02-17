import { Icon } from '@/components/Icon';
import { ids } from '@/data/sections';

import '@/components/menu-button.css';

export function MenuButton() {
  return (
    <label
      aria-label="Menu button"
      className="menu-button"
      htmlFor={ids.menuButton}
    >
      <Icon icon="down" />
    </label>
  );
}
