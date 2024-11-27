import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
  toHref,
} from '@/data/projects';

import '@/components/Projects.css';

export function Projects() {
  return (
    <section className="card-grid">
      {projectKeys.map((key) => {
        const { title, date, blurb, draft } = projects[key];
        if (draft) return;

        const href = toHref(key);
        const dateTime = toDateTime(date);
        const dateString = toDateString(date);

        return (
          <a
            className="card"
            href={href}
            key={key}
            rel="noreferrer"
            tabIndex={0}
            target="_blank"
          >
            <h1 className="card-title">{title}</h1>
            <p className="card-description">{blurb}</p>
            <time className="card-date" dateTime={dateTime}>
              {dateString}
            </time>
          </a>
        );
      })}
    </section>
  );
}
