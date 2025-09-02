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
  const { src, compressedSrc } = urls[projectKey];
  const label = `screenshot of project: ${projectKey.replaceAll('-', ' ')}`;

  return (
    <div className="project-images">
      <div className="project-images-frame-absolute">
        <div className="project-images-frame-relative">
          <span className={`${projectKey} project-color`}></span>
          <img
            alt={label}
            className="project-image"
            decoding="async" // Allows the browser to decode the image off the main thread, preventing layout blocking
            fetchPriority={loadingStrategy === 'eager' ? 'high' : 'auto'}
            height={400}
            loading={loadingStrategy}
            src={compressedSrc}
            srcSet={`${compressedSrc} 1x, ${src} 2x`}
            width={576}
          />
        </div>
      </div>
    </div>
  );
}
