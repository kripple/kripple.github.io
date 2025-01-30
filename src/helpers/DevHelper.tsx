import { injectedScripts } from '@/build/injectedScripts';
import { App } from '@/components/App';

export function DevHelper() {
  if (!import.meta.env.DEV) throw Error('No.');

  // use timeout to wait for app to render before calling scripts
  setTimeout(() => {
    injectedScripts.map((script) => {
      script();
    });
  });

  return <App />;
}
