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
            <div className="project" key={key}>
              <ProjectImages
                loadingStrategy={loadingStrategy}
                projectKey={key}
              />

              <div className="project-contents">
                <h4 aria-label="Project name" className="project-title">
                  <a
                    aria-label={title}
                    className="project-title-link"
                    href={websiteUrl}
                    rel="noreferrer"
                    tabIndex={0}
                    target="_blank"
                  >
                    {title}
                  </a>
                </h4>
                <time className="project-date" dateTime={dateTime}>
                  {dateString}
                </time>
                <p className="project-description">{blurb}</p>
              </div>

              <div className="project-links">
                <ProjectLink
                  ariaLabel={`Link to project: ${title}`}
                  label="App"
                  url={websiteUrl}
                >
                  <Icon icon="internet" />
                </ProjectLink>

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
            </div>
          );
        })}
      </div>
    </section>
  );
}
