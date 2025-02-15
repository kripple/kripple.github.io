import { Icon } from '@/components/Icon';

import '@/components/copy-button.css';

export function CopyButton({
  label,
  value,
}: {
  label?: string;
  value: string;
}) {
  return (
    <button className="button copy-to-clipboard-button" value={value}>
      <Icon icon="copy" />
      {label ? <span className="copy-button-label">{label}</span> : null}
    </button>
  );
}
