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

  const savedTheme = document.documentElement.getAttribute('data-theme');
  if (savedTheme) {
    if (savedTheme === 'light') {
      checkbox.click();
    }
    document.documentElement.removeAttribute('data-theme');
  }

  checkbox.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      console.info('unexpected input');
      return;
    }

    setItem('theme', target.checked ? 'light' : 'dark');
  });
}

type Injected = typeof setDataTheme & typeof saveThemePreference;

export function injectScripts(html: string) {
  const toHtml = (injected: Injected) =>
    `<script>(${injected.toString()})()</script>`;

  return html
    .replace('<!--inject-script-head-->', toHtml(setDataTheme))
    .replace('<!--inject-script-body-->', toHtml(saveThemePreference));
}
