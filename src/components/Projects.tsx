import { Frame } from '@/components/Frame';
import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
  toHref,
} from '@/data/projects';

import '@/components/projects.css';

export function Projects() {
  return (
    <section className="card-grid">
      {projectKeys.map((key) => {
        const { title, date, blurb, draft, external } = projects[key];
        if (draft) return;

        const href = external || toHref(key);
        const dateTime = toDateTime(date);
        const dateString = toDateString(date);

        return (
          <a
            className="card fancy-hover-effect"
            href={href}
            key={key}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <Frame href={href} />
            <div className="card-contents">
              <h1 className="card-title title-font">{title}</h1>
              <p className="card-description">{blurb}</p>
              <time className="card-date date-font" dateTime={dateTime}>
                {dateString}
              </time>
            </div>
          </a>
        );
      })}
    </section>
  );
}
