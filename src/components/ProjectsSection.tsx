import { HeaderSpacer } from '@/components/HeaderSpacer';
import { ProjectFilters } from '@/components/ProjectFilters';
import { ProjectImages } from '@/components/ProjectImages';
import { ProjectLink } from '@/components/ProjectLink';
import { ProjectTags } from '@/components/ProjectTags';
import { SvgIcon } from '@/components/SvgIcon';
import { ids } from '@/data/config';
import {
  projectKeys,
  projects,
  toDateString,
  toDateTime,
} from '@/data/projects';

import '@/components/projects-section.css';

export function ProjectsSection() {
  return (
    <section className="section projects-section" id={ids.projects}>
      <HeaderSpacer />
      <h3 className="section-title">Projects</h3>
      <ProjectFilters />

      <div className="projects-grid">
        {projectKeys.map((key, index) => {
          const {
            title,
            date,
            blurb,
            websiteUrl,
            githubUrl,
            apiUrl,
            apiSrcUrl,
            tags,
          } = projects[key];
          const loadingStrategy = index === 0 ? 'eager' : 'lazy';

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
                  {title}
                </h4>
                <time
                  aria-label="Project date"
                  className="project-date"
                  dateTime={dateTime}
                >
                  {dateString}
                </time>
                <p
                  aria-label="Project description"
                  className="project-description"
                >
                  {blurb}
                </p>
              </div>
              <div className="project-links">
                <ProjectLink
                  ariaLabel={`Link to project: ${title}`}
                  label="App"
                  url={websiteUrl}
                >
                  <SvgIcon icon="internet" />
                </ProjectLink>

                <ProjectLink
                  ariaLabel={`Link to source code: ${title}`}
                  label="Source"
                  url={githubUrl}
                >
                  <SvgIcon icon="github" />
                </ProjectLink>

                <ProjectLink
                  ariaLabel={`Link to API: ${title}`}
                  label="API"
                  url={apiUrl}
                >
                  <SvgIcon icon="api" />
                </ProjectLink>

                <ProjectLink
                  ariaLabel={`Link to API source code: ${title}`}
                  label="API Source"
                  url={apiSrcUrl}
                >
                  <SvgIcon icon="github" />
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
