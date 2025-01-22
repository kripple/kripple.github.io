import { ProjectImages } from '@/components/ProjectImages';
import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
  toHref,
} from '@/data/projects';

import '@/components/projects.css';

// TODO: add button to view source code on github

export function Projects() {
  return (
    <section className="card-grid">
      {projectKeys.map((key) => {
        const { title, date, blurb, hide, websiteUrl } = projects[key];
        if (hide) return;

        const href = websiteUrl || toHref(key);
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
            <ProjectImages projectKey={key} title={title} />
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
