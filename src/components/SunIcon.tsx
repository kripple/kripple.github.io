import { ThemeIcon as Icon } from '@/components/ThemeIcon';

export function SunIcon() {
  return (
    <Icon id="sun">
      <circle className="sun-circle" cx="12" cy="12" r="5"></circle>
      <line x1="12" x2="12" y1="1" y2="3"></line>
      <line x1="12" x2="12" y1="21" y2="23"></line>
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
      <line x1="1" x2="3" y1="12" y2="12"></line>
      <line x1="21" x2="23" y1="12" y2="12"></line>
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
    </Icon>
  );
}