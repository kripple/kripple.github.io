import { projects } from '@/data/projects';
import type { ProjectKey } from '@/images/index';

import '@/components/project-images.css';

export function ProjectImages({
  loadingStrategy = 'lazy',
  projectKey,
  title,
}: {
  loadingStrategy?: 'eager' | 'lazy';
  projectKey: ProjectKey;
  title: string;
}) {
  const { images } = projects[projectKey];
  if (!images) return null;

  return (
    <div className="frame">
      <div className="image-container">
        {(['desktop', 'tablet', 'mobile'] as const).map((screenSize) => (
          <span className={`image-${screenSize}`} key={screenSize}>
            {(['dark', 'light'] as const).map((theme) => {
              const fallback =
                images[screenSize].dark || images[screenSize].light;
              const {
                color: backgroundColor,
                src,
                compressedSrc,
              } = images[screenSize][theme] || fallback;

              return (
                <span className={`image-${theme}`} key={theme}>
                  <style
                    data-background-color={backgroundColor}
                    data-selector={`.${screenSize}.${theme}.${projectKey}`}
                  ></style>
                  <span
                    className={`${screenSize} ${theme} ${projectKey} image-placeholder`}
                  ></span>
                  <img
                    alt={`${screenSize}-size screenshot, ${title}`}
                    className={`${screenSize} ${theme} ${projectKey} image hide-for-mobile`}
                    loading={loadingStrategy}
                    src={src}
                  ></img>
                  <img
                    alt={`${screenSize}-size screenshot, ${title}`}
                    className={`${screenSize} ${theme} ${projectKey} image hide-for-desktop`}
                    loading={loadingStrategy}
                    src={compressedSrc}
                  ></img>
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </div>
  );
}
