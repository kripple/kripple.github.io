import { projects } from '@/data/projects';

/**
 *
 * Generate/update project images. For use in development only.
 * To use, replace contents of root.tsx with the following:
 *
  import { createRoot } from 'react-dom/client';
  import { ImagesHelper } from '@/helpers/ImagesHelper';
  createRoot(document.getElementById('root') as HTMLElement).render(<ImagesHelper />);
 *
 */

export function ImagesHelper() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexShrink: 0,
        height: '100%',
        width: '100%',
        gap: '10px',
        position: 'relative',
        transform: 'scale(0.2)',
        transformOrigin: 'top left',
        overflow: 'visible',
      }}
    >
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <iframe
              frameBorder="none"
              height={1000}
              src={project.websiteUrl}
              style={{ aspectRatio: 1440 / 1000 }}
              width={1440}
            ></iframe>
            <iframe
              frameBorder="none"
              height={644}
              src={project.websiteUrl}
              style={{ aspectRatio: 360 / 644 }}
              width={360}
            ></iframe>
            <iframe
              frameBorder="none"
              height={1024}
              src={project.websiteUrl}
              style={{ aspectRatio: 768 / 1024 }}
              width={768}
            ></iframe>
          </div>
        );
      })}
    </div>
  );
}
