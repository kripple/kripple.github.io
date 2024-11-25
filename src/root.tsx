import { createRoot } from 'react-dom/client';

import { Theme } from '@/components/Theme';

import '@/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(<Theme />);
