import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/components/ThemeProvider';

import '@/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider />,
);
