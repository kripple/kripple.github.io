import { createRoot } from 'react-dom/client';

import { App } from '@/components/App';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);

import.meta.env.DEV && document.documentElement.classList.remove('noscript');
