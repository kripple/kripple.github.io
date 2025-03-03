import { ProjectFilters } from '@/components/ProjectFilters';
import { ProjectImages } from '@/components/ProjectImages';
import { ProjectLinks } from '@/components/ProjectLinks';
import { projects, toDateString, toDateTime } from '@/data/projects';
import { ids } from '@/data/sections';

import '@/components/projects-section.css';

export function ProjectsSection() {
  return (
    <section className="section projects-section" id={ids.projects}>
      <h3 className="section-title">Portfolio</h3>
      <ProjectFilters />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const {
            title,
            subtitle,
            date,
            blurb,
            websiteUrl,
            githubUrl,
            apiUrl,
            apiSrcUrl,
            tags,
            key,
          } = project;
          const loadingStrategy = index === 0 || index === 1 ? 'eager' : 'lazy';

          const dateTime = toDateTime(date);
          const dateString = toDateString(date);

          return (
            <div className="project-container" key={key}>
              <a
                aria-label={title}
                className="project-card-link"
                href={websiteUrl}
                rel="noreferrer"
                tabIndex={0}
                target="_blank"
              >
                <figure className="project">
                  <ProjectImages
                    loadingStrategy={loadingStrategy}
                    projectKey={key}
                  />

                  <div className="project-contents">
                    <div className="project-title">
                      <span>{title}</span>
                      {subtitle ? <span>{subtitle}</span> : null}
                    </div>
                    <time className="project-date" dateTime={dateTime}>
                      {dateString}
                    </time>
                    <p className="project-description">{blurb}</p>
                  </div>

                  <ProjectLinks
                    apiSrcUrl={apiSrcUrl}
                    apiUrl={apiUrl}
                    githubUrl={githubUrl}
                    placeholder={true}
                    tags={tags}
                    title={title}
                  />
                </figure>
              </a>
              <ProjectLinks
                apiSrcUrl={apiSrcUrl}
                apiUrl={apiUrl}
                githubUrl={githubUrl}
                placeholder={false}
                tags={tags}
                title={title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
