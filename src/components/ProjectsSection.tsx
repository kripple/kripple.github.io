import { Icon } from '@/components/Icon';
import { ProjectFilters } from '@/components/ProjectFilters';
import { ProjectImages } from '@/components/ProjectImages';
import { ProjectLink } from '@/components/ProjectLink';
import { ProjectTags } from '@/components/ProjectTags';
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
            <figure className="project" key={key}>
              <a
                aria-label={title}
                href={websiteUrl}
                rel="noreferrer"
                tabIndex={0}
                target="_blank"
              >
                <ProjectImages
                  loadingStrategy={loadingStrategy}
                  projectKey={key}
                />
              </a>

              <div className="project-contents">
                <figcaption aria-label="Project name" className="project-title">
                  {title}
                </figcaption>
                <time className="project-date" dateTime={dateTime}>
                  {dateString}
                </time>
                <p className="project-description">{blurb}</p>
              </div>

              <div className="project-links">
                <ProjectLink
                  ariaLabel={`Link to source code: ${title}`}
                  label="Source"
                  url={githubUrl}
                >
                  <Icon icon="github" />
                </ProjectLink>

                <ProjectLink
                  ariaLabel={`Link to API: ${title}`}
                  label="API"
                  url={apiUrl}
                >
                  <Icon icon="api" />
                </ProjectLink>

                <ProjectLink
                  ariaLabel={`Link to API source code: ${title}`}
                  label="API Source"
                  url={apiSrcUrl}
                >
                  <Icon icon="github" />
                </ProjectLink>
              </div>

              <ProjectTags tags={tags} />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
