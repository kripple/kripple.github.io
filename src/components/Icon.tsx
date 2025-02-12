import { CopyButton } from '@/components/CopyButton';
import { SvgIcon } from '@/components/SvgIcon';
import { config } from '@/data/config';

import '@/components/icon.css';

const github = `https://github.com/${config.github}` as const;
const linkedin = `https://www.linkedin.com/in/${config.linkedin}` as const;

const icons = {
  email: {
    href: `mailto:${config.email}`,
    label: config.email,
    title: 'Email',
    value: config.email,
  },
  github: {
    href: github,
    label: `@${config.github}`,
    title: 'GitHub',
    value: github,
  },
  linkedin: {
    href: linkedin,
    label: `/in/${config.linkedin}`,
    title: 'LinkedIn',
    value: linkedin,
  },
} as const;

export function Icon({ icon: key }: { icon: keyof typeof icons }) {
  const icon = icons[key];

  return (
    <div className="social-icons">
      <a
        aria-label={key}
        className="icon-link"
        href={icon.href}
        rel="noreferrer"
        target="_blank"
      >
        <SvgIcon icon={key} />
        <span className="icon-labels">
          <span className="icon-label-title">{icon.title}</span>
          <span className="icon-label-details">{icon.label}</span>
        </span>
      </a>
      <CopyButton value={icon.value} />
    </div>
  );
}
