import { Image } from '@/components/Image';
import { projects } from '@/data/projects';
import type { ProjectKey } from '@/images/index';

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
    <div className="project-images">
      <div className="image-container">
        <Image
          imgClass="desktop dark"
          title={title}
          urls={[images['desktop-dark-small'], images['desktop-dark']]}
        />
        <Image
          imgClass="desktop light"
          title={title}
          urls={[images['desktop-light-small'], images['desktop-light']]}
        />
        
        <Image
          imgClass="mobile dark"
          title={title}
          urls={[images['mobile-dark-small'], images['mobile-dark']]}
        />
        <Image
          imgClass="mobile light"
          title={title}
          urls={[images['mobile-light-small'], images['mobile-light']]}
        />

        <Image
          imgClass="tablet dark"
          title={title}
          urls={[images['tablet-dark-small'], images['tablet-dark']]}
        />
        <Image
          imgClass="tablet light"
          title={title}
          urls={[images['tablet-light-small'], images['tablet-light']]}
        />
      </div>
    </div>
  );
}
