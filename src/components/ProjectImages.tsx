import { projects } from '@/data/projects';
import type { ProjectKey } from '@/images/index';
import { isImageVariant } from '@/images/index';

import '@/components/project-images.css';

export function ProjectImages({
  projectKey,
  title,
}: {
  projectKey: ProjectKey;
  title: string;
}) {
  const { images } = projects[projectKey];

  if (!images) return null;
  return (
    <div className="frame">
      <div className="image-container">
        {['desktop', 'tablet', 'mobile'].map((screenSize) => (
          <span className={`image-${screenSize}`} key={screenSize}>
            {['dark', 'light'].map((theme) => (
              <span className={`image-${theme}`} key={theme}>
                {['eager', 'lazy'].map((loadingStrategy) => {
                  const imageKey = `${screenSize}-${theme}${loadingStrategy === 'eager' ? '-small' : ''}`;
                  if (!isImageVariant(imageKey)) {
                    console.warn(`missing image variant '${imageKey}'`);
                    return null;
                  }
                  return (
                    <span
                      className={`image-${loadingStrategy}`}
                      key={loadingStrategy}
                    >
                      <img
                        className={`${screenSize} ${theme} ${loadingStrategy}${import.meta.env.DEV ? ' dev' : ''}`}
                        loading="lazy"
                        src={images[imageKey]}
                        title={title}
                      ></img>
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
