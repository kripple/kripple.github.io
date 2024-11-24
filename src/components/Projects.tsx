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
        const { title, date, blurb } = projects[key];

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
            <article>
              <hgroup>
                <h1 className="card-title">{title}</h1>
                <p className="card-description">{blurb}</p>
              </hgroup>
              <time className="card-date" dateTime={dateTime}>
                {dateString}
              </time>
            </article>
          </a>
        );
      })}
    </section>
  );
}
