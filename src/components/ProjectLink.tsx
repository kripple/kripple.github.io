import '@/components/project-link.css';

export function ProjectLink({
  ariaLabel,
  children,
  label,
  placeholder,
  url,
}: {
  ariaLabel: string;
  children?: ReactNode;
  label: string;
  placeholder?: boolean;
  url: string | undefined;
}) {
  const className = 'project-link';
  const contents = (
    <>
      {children} <span className="project-link-label">{label}</span>
    </>
  );

  return !url ? null : placeholder ? (
    <div className={`${className} placeholder`}>{contents}</div>
  ) : (
    <a
      aria-label={ariaLabel}
      className={className}
      href={url}
      rel="noreferrer"
      tabIndex={0}
      target="_blank"
    >
      {contents}
    </a>
  );
}
