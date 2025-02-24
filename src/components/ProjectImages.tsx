import type { ProjectKey } from '@/data/project-images';
import { urls } from '@/data/project-images';

import '@/components/project-colors.css';
import '@/components/project-images.css';

export function ProjectImages({
  loadingStrategy = 'lazy',
  projectKey,
}: {
  loadingStrategy?: 'eager' | 'lazy';
  projectKey: ProjectKey;
}) {
  const theme = 'dark';
  const screenSize = 'desktop';
  const images = urls[projectKey];
  const fallback = images[screenSize].dark || images[screenSize].light;
  const { src, compressedSrc } = images[screenSize][theme] || fallback;

  return (
    <div className="project-images" key={theme}>
      <div className="project-images-frame-absolute">
        <div className="project-images-frame-relative">
          <span className={`${theme} ${projectKey} project-color`}></span>
          <img
            alt={`screenshot of project: ${projectKey}`}
            aria-label="Project screenshot"
            className="project-image"
            height={400}
            loading={loadingStrategy}
            src={compressedSrc}
            srcSet={`${compressedSrc}, ${src} 2x`}
            width={576}
          ></img>
        </div>
      </div>
    </div>
  );
}
