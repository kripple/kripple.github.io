import { Icon } from '@/components/Icon';
import { Link } from '@/components/Link';
import {
  projectImageAspectRatio,
  projectImageMaxWidth,
} from '@/content/constants';
import { type ProjectKey, urls } from '@/content/project-images';
import { featuredProjects } from '@/content/projects';
import { ids } from '@/content/sections';

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
          const { title, blurb, url, sourceUrl, category } = project;
          const loadingStrategy = index === 0 || index === 1 ? 'eager' : 'lazy';

          const { src, compressedSrc } = urls[key as ProjectKey];
          const showSourceLink = sourceUrl !== undefined;

          return (
            <div className="project-card" key={key}>
              <Link className="project-card-link" href={url}>
                <div className="project-image-container">
                  <img
                    alt={`screenshot of project: ${key}`}
                    className="project-image hide"
                    decoding="async"
                    fetchPriority={
                      loadingStrategy === 'eager' ? 'high' : undefined
                    }
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
                    <span className="project-tag">{category}</span>
                  </div>
                  <p className="project-description">{blurb}</p>
                  {showSourceLink ? (
                    <span className="project-link-placeholder"></span>
                  ) : null}
                </div>
              </Link>
              {showSourceLink ? (
                <Link
                  aria-label={`Link to source code: ${title}`}
                  className="project-link"
                  href={sourceUrl}
                >
                  <Icon icon="github" />
                  <span className="project-link-label">Source</span>
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
