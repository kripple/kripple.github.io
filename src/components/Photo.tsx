import photo from '@/assets/kelly-ripple-circle.png';
import { config } from '@/data/config';

import '@/components/photo.css';

export function Photo() {
  return (
    <div className="photo-container">
      <div className="photo-frame">
        <img alt={config.name} className="photo" src={photo}></img>
      </div>
    </div>
  );
}
