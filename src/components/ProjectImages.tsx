import type { ProjectKey } from '@/data/project-images';
import { projects } from '@/data/projects';

import '@/components/project-images.css';

export function ProjectImages({
  loadingStrategy = 'lazy',
  projectKey,
}: {
  loadingStrategy?: 'eager' | 'lazy';
  projectKey: ProjectKey;
}) {
  const { images } = projects[projectKey];

  const theme = 'dark';
  const screenSize = 'desktop';
  // const data = images[screenSize][theme];
  // if (!data) throw Error('unexpected.');

  // const src = data.src;
  // const backgroundColor = data.color;

  const fallback = images[screenSize].dark || images[screenSize].light;
  const {
    // color: backgroundColor,
    src,
    compressedSrc,
  } = images[screenSize][theme] || fallback;

  return (
    <div
      // className={`project-images image-${theme}`}
      className="project-images"
      key={theme}
    >
      <div className="project-images-frame-absolute">
        <div className="project-images-frame-relative">
          {/* <style
        data-background-color={backgroundColor}
        data-selector={`.${screenSize}.${theme}.${projectKey}`}
      ></style> */}
          {/* <span
        aria-label="Project screenshot loading placeholder"
        className={`${screenSize} ${theme} ${projectKey} image-placeholder`}
      ></span> */}
          {/* <img
        alt={`screenshot of project: ${projectKey}, screen size: ${screenSize}, theme: ${theme}, standard resolution`}
        aria-label="Project screenshot"
        className={`${screenSize} ${theme} ${projectKey} image hide-for-mobile`}
        loading={loadingStrategy}
        src={src}
      ></img> */}
          <img
            alt={`screenshot of project: ${projectKey}, screen size: ${screenSize}, theme: ${theme}, lower resolution`}
            aria-label="Project screenshot"
            // className={`project-image ${screenSize} ${theme} ${projectKey} image hide-for-desktop`}
            className="project-image"
            loading={loadingStrategy}
            src={compressedSrc}
          ></img>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="frame">
  //     <div className="image-container">
  //       {(['desktop', 'tablet', 'mobile'] as const).map((screenSize) => (
  //         <span className={`image-${screenSize}`} key={screenSize}>
  //           {(['dark', 'light'] as const).map((theme) => {
  //             const fallback =
  //               images[screenSize].dark || images[screenSize].light;
  //             const {
  //               color: backgroundColor,
  //               src,
  //               compressedSrc,
  //             } = images[screenSize][theme] || fallback;

  //             return (
  //               <span className={`image-${theme}`} key={theme}>
  //                 <style
  //                   data-background-color={backgroundColor}
  //                   data-selector={`.${screenSize}.${theme}.${projectKey}`}
  //                 ></style>
  //                 <span
  //                   aria-label="Project screenshot loading placeholder"
  //                   className={`${screenSize} ${theme} ${projectKey} image-placeholder`}
  //                 ></span>
  //                 <img
  //                   alt={`screenshot of project: ${projectKey}, screen size: ${screenSize}, theme: ${theme}, standard resolution`}
  //                   aria-label="Project screenshot"
  //                   className={`${screenSize} ${theme} ${projectKey} image hide-for-mobile`}
  //                   loading={loadingStrategy}
  //                   src={src}
  //                 ></img>
  //                 <img
  //                   alt={`screenshot of project: ${projectKey}, screen size: ${screenSize}, theme: ${theme}, lower resolution`}
  //                   aria-label="Project screenshot"
  //                   className={`${screenSize} ${theme} ${projectKey} image hide-for-desktop`}
  //                   loading={loadingStrategy}
  //                   src={compressedSrc}
  //                 ></img>
  //               </span>
  //             );
  //           })}
  //         </span>
  //       ))}
  //     </div>
  //   </div>
  // );
}
