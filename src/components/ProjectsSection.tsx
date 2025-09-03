import { Icon } from '@/components/Icon';
import { ProjectLink } from '@/components/ProjectLink';
import {
  projectImageAspectRatio,
  projectImageMaxWidth,
} from '@/data/constants';
import { type ProjectKey, urls } from '@/data/project-images';
import { additionalProjects, featuredProjects } from '@/data/projects';
import { ids } from '@/data/sections';
import { toDateString, toDateTime } from '@/types/dates';

import '@/components/projects-section.css';
import '@/components/project-colors.css';

export function ProjectsSection() {
  return (
    <section className="section projects-section" id={ids.projects}>
      <h3 className="section-title">Portfolio</h3>

      <div className="projects-grid">
        {Object.entries(featuredProjects).map(([key, project], index) => {
          if (!(key in urls)) {
            console.warn(`missing project '${key}'`);
            return null;
          }
          const { title, date, blurb, url, sourceUrl, tags } = project;
          const loadingStrategy = index === 0 || index === 1 ? 'eager' : 'lazy';

          const dateTime = toDateTime(date);
          const dateString = toDateString(date);
          const { src, compressedSrc } = urls[key as ProjectKey];

          const sourceLinkProps = {
            ariaLabel: `Link to source code: ${title}`,
            label: 'Source',
            children: <Icon icon="github" />,
            url: sourceUrl,
          };

          return (
            <div className="project-card" key={key}>
              <a className="project-card-link" href={url}>
                <div className="project-image-container">
                  <img
                    alt={`screenshot of project: ${key}`}
                    className="project-image hide"
                    decoding="async"
                    height={projectImageMaxWidth / projectImageAspectRatio}
                    loading={loadingStrategy}
                    src={compressedSrc}
                    srcSet={`${compressedSrc} 1x, ${src} 2x`}
                    width={projectImageMaxWidth}
                  />
                  <span className={`${key} project-color`}></span>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{title}</h3>
                    <time className="project-date" dateTime={dateTime}>
                      {dateString}
                    </time>
                  </div>
                  <p className="project-description">{blurb}</p>
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* we can't put an anchor inside another anchor */}
                  <ProjectLink {...{ ...sourceLinkProps, placeholder: true }} />
                </div>
              </a>
              {/* so we'll put it on top instead */}
              <ProjectLink {...sourceLinkProps} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
