import { type RefObject, useEffect } from 'react';

import { isDevEnv } from '@/utils/env';

if (!isDevEnv) throw Error('size utilities are for use in development only');

/**
 *
 * Usage Example (App.tsx):
 *
 * import { useSize } from '@/hooks/useSize';
 * import { useRef } from 'react';
 *
 * export function App() {
 *   const ref = useRef<HTMLDivElement>(null);
 *   useSize(ref);
 *
 *   return (
 *     <div className="body" ref={ref}>
 *     ...
 *
 */

export function useSize(ref: RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!ref.current) return;

    const collection = [...ref.current.getElementsByClassName('font')];
    const style =
      'position: absolute; padding: 0px; margin: 0px; overflow: visible; white-space: nowrap;';

    collection.map((element) => {
      // const initialStyle = element.getAttribute('style');
      element.setAttribute('style', style);
      const bounds = element.getBoundingClientRect();
      const height = element.getAttribute('data-height');
      const width = element.getAttribute('data-width');

      const elementInfo = {
        text: element.textContent,
        bounds,
        id: element.id,
        data: { height, width },
      };

      if (
        bounds.height.toString() !== height ||
        bounds.width.toString() !== width
      ) {
        console.warn(
          `please update size information:

            '${element.id}' : { height: ${bounds.height}, width: ${bounds.width} },

            `,
          elementInfo,
        );
      }
    });
  }, [ref]);
}
