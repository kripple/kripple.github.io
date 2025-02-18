import tinyPhoto from '@/assets/kelly-ripple-circle-compressed.avif';
import photo from '@/assets/kelly-ripple-circle.avif';
import { config } from '@/data/config';

import '@/components/photo.css';

/* TODO: use `picture` and add png fallback */

export function Photo() {
  return (
    <div className="photo-container">
      <div className="photo-frame">
        <img
          alt={config.name}
          className="photo"
          height={530}
          loading="lazy"
          src={tinyPhoto}
          srcSet={`${tinyPhoto}, ${photo} 2x`}
          width={530}
        ></img>
      </div>
    </div>
  );
}
