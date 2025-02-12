import type { Section } from '@/data/sections';

import '@/components/section.css';

export function Section({
  children,
  title,
}: {
  children: ReactNode;
  title: Section;
}) {
  return (
    <section className="section">
      <h3 className="section-title">{title}</h3>
      {children}
    </section>
  );
}
