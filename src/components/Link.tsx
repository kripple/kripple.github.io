import type { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export function Link({
  newTab,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { href: string; newTab?: boolean }) {
  // Opens in new tab unless explicitly disabled.
  const defaultProps =
    newTab === false
      ? {}
      : {
          rel: 'noreferrer',
          target: '_blank',
        };
  return <a {...{ tabIndex: 0, ...defaultProps, ...props }} />;
}
