import { type ReactNode, useId } from 'react';

import { sizes } from '@/utils/size';

import '@/components/Font.css';

export function Font({
  children,
  className,
  font,
}: {
  children: ReactNode;
  className?: string;
  font?: 'title' | 'body' | 'date' | 'small';
}) {
  // The ID for a specific component instance will remain consistent across re-renders.
  const id = useId();
  const fontClass = font ? `font font-${font}` : 'font';
  const classNames = className ? `${className} ${fontClass}` : fontClass;

  const { height, width } = id in sizes ? sizes[id as keyof typeof sizes] : {};

  return (
    <span
      className={classNames}
      data-height={height}
      data-width={width}
      id={id}
    >
      {children}
    </span>
  );
}
