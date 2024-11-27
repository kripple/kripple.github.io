import { createRoot } from 'react-dom/client';

import { App } from '@/components/App';

import '@/styles/root.css';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);

// import { renderToString } from 'react-dom/server';
// const html = renderToString(<App />);
// const html = renderToStaticMarkup(<App />);
// console.log({ html });
