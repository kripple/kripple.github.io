import { Font } from '@/components/Font';
import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
  toHref,
} from '@/data/projects';
import { isDevEnv } from '@/env';

import '@/components/Projects.css';

export function Projects() {
  return (
    <section className="card-grid">
      {projectKeys.map((key) => {
        const { title, date, blurb, draft } = projects[key];
        // if (draft && !isDevEnv) return;
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

// 16px padding on .main (--page-margin?) * 2
// 16px padding on .card-grid * 2
// 28px padding on a.card
// --> max content width is 180px for screen width 300px

// --min-column-width: calc(
//   var(--min-page-width) - (4 * var(--page-margin))
// ); /* 236px */

// grid-template-columns: repeat(auto-fit, minmax(var(--min-column-width), 1fr));
