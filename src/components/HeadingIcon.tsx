import { Heading } from '@/components/Heading';

import '@/components/heading.css';

export function HeadingIcon({
  component,
  label,
  svgs,
}: {
  component: 'h1' | 'h2';
  label: string;
  svgs: readonly { drawPath: readonly string[]; viewBox: string }[];
}) {
  return (
    <Heading aria-label={label} className={component} component={component}>
      {svgs.map(({ viewBox, drawPath }, svgIndex) => (
        <svg className="heading-icon-svg" key={svgIndex} viewBox={viewBox}>
          {drawPath.map((d, pathIndex) => (
            <path d={d} key={pathIndex} />
          ))}
        </svg>
      ))}
    </Heading>
  );
}
