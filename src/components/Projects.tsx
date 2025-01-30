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
  let isFirstImage = true;
  return (
    <section className="card-grid">
      {projectKeys.map((key) => {
        const { title, date, blurb, hide, websiteUrl } = projects[key];
        if (hide) return;
        const loadingStrategy = isFirstImage ? 'eager' : 'lazy';
        if (isFirstImage) isFirstImage = false;

        const href = websiteUrl || toHref(key);
        const dateTime = toDateTime(date);
        const dateString = toDateString(date);

        return (
          <a
            aria-label={`Link to project: ${title}`}
            className="card"
            href={href}
            key={key}
            rel="noreferrer"
            role="link"
            tabIndex={0}
            target="_blank"
          >
            <ProjectImages
              loadingStrategy={loadingStrategy}
              projectKey={key}
              title={title}
            />
            <div className="card-contents">
              <h1 aria-label="Project name" className="card-title title-font">
                {title}
              </h1>
              <p aria-label="Project description" className="card-description">
                {blurb}
              </p>
              <time
                aria-label="Project publication date"
                className="card-date date-font"
                dateTime={dateTime}
              >
                {dateString}
              </time>
            </div>
          </a>
        );
      })}
    </section>
  );
}
