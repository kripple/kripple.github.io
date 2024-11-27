import { HeadingIcon } from '@/components/HeadingIcon';
import { headings } from '@/data/headings';

export function Title() {
  return (
    <hgroup className="title-block">
      {[headings.title, headings.subtitle].map(({ component, svgs, label }) => (
        <HeadingIcon
          component={component}
          key={label}
          label={label}
          svgs={svgs}
        />
      ))}
    </hgroup>
  );
}
