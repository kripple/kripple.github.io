import { createRoot } from 'react-dom/client';

import { DevHelper } from '@/helpers/DevHelper';

createRoot(document.getElementById('root') as HTMLElement).render(
  <DevHelper />,
);
