import { SvgIcon } from '@/components/SvgIcon';

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
      <SvgIcon icon="copy" />
      {label ? <span className="copy-button-label">{label}</span> : null}
    </button>
  );
}
