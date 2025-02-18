import tinyPhoto from '@/assets/kelly-ripple-circle-compressed.avif';
import photo from '@/assets/kelly-ripple-circle.avif';
import { config } from '@/data/config';

import '@/components/photo.css';

export function Photo() {
  return (
    <div className="photo-container">
      <div className="photo-frame">
        <img
          alt={config.name}
          className="photo"
          height={530}
          src={tinyPhoto}
          srcSet={`${tinyPhoto}, ${photo} 2x`}
          width={530}
        ></img>
      </div>
    </div>
  );
}
