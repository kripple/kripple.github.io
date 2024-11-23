import { type ReactNode } from 'react';

import '@/components/HeaderIcon.css';

export function HeaderIcon({
  children,
  href,
  label,
  viewBox,
}: {
  children: ReactNode;
  href: string;
  label: string;
  viewBox: string;
}) {
  return (
    <a
      aria-label={label}
      className="header-link"
      href={href}
      rel="noreferrer"
      tabIndex={0}
      target="_blank"
      title={label}
    >
      <svg
        className="header-icon"
        fill="currentcolor"
        role="link"
        tabIndex={0}
        viewBox={viewBox}
      >
        {children}
      </svg>
    </a>
  );
}
