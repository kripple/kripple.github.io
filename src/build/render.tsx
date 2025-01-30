import { renderToStaticMarkup } from 'react-dom/server';

import { App } from '@/components/App';

export function render() {
  return renderToStaticMarkup(<App />);
}
