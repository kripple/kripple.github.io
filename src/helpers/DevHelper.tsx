import {
  detectDisabledJavascript,
  loadImages,
  saveThemePreference,
  setDataTheme,
} from '@/build/injectedScripts';
import { App } from '@/components/App';

export function DevHelper() {
  if (!import.meta.env.DEV) throw Error('No.');

  setTimeout(() => {
    detectDisabledJavascript();
    setDataTheme();
    saveThemePreference();
    loadImages();
  });

  return <App />;
}
