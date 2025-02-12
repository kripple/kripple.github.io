import { config } from '@/data/config';

export function HeaderSpacer() {
  return (
    <div className="header-spacer">
      <div className="app-title-spacer">{config.name}</div>
      <div className="menu-button-spacer">Show Menu</div>
    </div>
  );
}
