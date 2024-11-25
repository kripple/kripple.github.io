import { Font } from '@/components/Font';
import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
  toHref,
} from '@/utils/projects';

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
                <h1 className="card-title">
                  <Font font="title">{title}</Font>
                </h1>
                <p className="card-description">
                  <Font>{blurb}</Font>
                </p>
              </hgroup>
              <time className="card-date" dateTime={dateTime}>
                <Font font="date">{dateString}</Font>
              </time>
            </article>
          </a>
        );
      })}
    </section>
  );
}
