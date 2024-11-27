import type { ReactNode } from 'react';

export const Heading = ({
  component,
  ...props
}: {
  'aria-label': string;
  children: ReactNode;
  className: string;
  component: 'h1' | 'h2';
}) => (component === 'h2' ? <h2 {...props} /> : <h1 {...props} />);
