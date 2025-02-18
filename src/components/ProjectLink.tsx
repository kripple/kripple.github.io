import '@/components/project-link.css';

export function ProjectLink({
  ariaLabel,
  children,
  label,
  url,
}: {
  ariaLabel: string;
  children: ReactNode;
  label: string;
  url: string | undefined;
}) {
  return url ? (
    <a
      aria-label={ariaLabel}
      className="project-link"
      href={url}
      rel="noreferrer"
      tabIndex={0}
      target="_blank"
    >
      {children} <span className="project-link-label">{label}</span>
    </a>
  ) : null;
}
