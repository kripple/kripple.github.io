import { minify } from 'uglify-js';

function detectDisabledJavascript() {
  document.documentElement.classList.remove('noscript');
}

function setDataTheme() {
  function storageAvailable(type: 'sessionStorage' | 'localStorage') {
    try {
      const storage = window[type];
      const testKey = '__temp';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  function getItem(key: string) {
    return storageAvailable('localStorage') && localStorage.getItem(key);
  }

  if (getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function saveThemePreference() {
  function storageAvailable(type: 'sessionStorage' | 'localStorage') {
    try {
      const storage = window[type];
      const testKey = '__temp';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }
  const available = storageAvailable('localStorage');
  function setItem(key: string, value: string) {
    if (!available) return;
    localStorage.setItem(key, value);
  }

  const checkbox = document.getElementById('theme-toggle');
  if (!(checkbox instanceof HTMLInputElement)) {
    console.info('missing theme toggle');
    return;
  }

  const light = '#ffffff';
  const dark = '#16181d';

  const savedTheme = document.documentElement.getAttribute('data-theme');
  if (savedTheme) {
    if (savedTheme === 'light') {
      checkbox.click();
    }
    document.documentElement.removeAttribute('data-theme');
  }
  document.documentElement.style.backgroundColor =
    savedTheme === 'light' ? light : dark;

  checkbox.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      console.info('unexpected input');
      return;
    }

    setItem('theme', target.checked ? 'light' : 'dark');
    document.documentElement.style.backgroundColor = target.checked
      ? light
      : dark;
  });
}

function loadImages() {
  const lazyImages = [
    ...document.querySelectorAll('img'),
  ] as HTMLImageElement[];
  
  lazyImages.map((image) => {
    if (image.complete) {
      image.style.opacity = '1';
    } else {
      image.onload = () => {
        image.style.opacity = '1';
      };
    }
  });
}

const toString = (script: () => void) => {
  const { code } = minify(script.toString());
  return code;
};

export function injectScriptsHead() {
  const scripts = [detectDisabledJavascript, setDataTheme];
  return scripts.map((script) => toString(script));
}

export function injectScriptsBody() {
  const scripts = [saveThemePreference, loadImages];
  return scripts.map((script) => toString(script));
}
