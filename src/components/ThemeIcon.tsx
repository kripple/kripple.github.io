import { type ReactNode } from 'react';

export function ThemeIcon({
  children,
  id,
}: {
  children: ReactNode;
  id: 'sun' | 'moon';
}) {
  return (
    <svg
      fill="none"
      id={id}
      role="button"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      tabIndex={0}
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}
