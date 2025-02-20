import type { minify as imported } from 'uglify-js';

function detectDisabledJavascript() {
  document.documentElement.classList.remove('noscript');
}

function setDataTheme() {
  const storageKey = 'portfolioTheme' as const;
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
  if (getItem(storageKey) === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function saveThemePreference() {
  const storageKey = 'portfolioTheme' as const;
  const themeCheckboxId = 'theme-toggle' as const;

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

  const setTheme = (theme: 'light' | 'dark') => {
    const themeColor =
      theme === 'light'
        ? 'var(--theme-color-light)'
        : 'var(--theme-color-dark)';
    document.documentElement.style.backgroundColor = themeColor;
    setItem(storageKey, theme);
  };

  const checkbox = document.getElementById(themeCheckboxId);
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
  setTheme(savedTheme === 'light' ? 'light' : 'dark');

  checkbox.addEventListener('change', (event) => {
    if (!(event.currentTarget instanceof HTMLInputElement)) {
      console.info('unexpected input');
      return;
    }
    setTheme(event.currentTarget.checked ? 'light' : 'dark');
  });
}

function toggleOnEnter() {
  function addListeners(prefix: 'theme' | 'menu') {
    const checkbox = document.getElementById(`${prefix}-toggle`);
    if (!(checkbox instanceof HTMLInputElement)) {
      console.info(`missing ${prefix} toggle`);
      return;
    }
    // listen for keyboard events
    const label = document.getElementById(`${prefix}-toggle-label`);
    if (!(label instanceof HTMLLabelElement)) {
      console.info(`missing ${prefix} toggle label`);
      return;
    }
    label.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        checkbox.click();
      }
    });
  }
  addListeners('theme');
  addListeners('menu');
}

// TODO
function allowEscape() {
  // allow user to cancel focus with the escape key
  const focusableElements = [...document.querySelectorAll(`[tabindex="0"]`)];
  focusableElements.map((element) => {
    element.addEventListener('keydown', (event) => {
      if (
        !('code' in event) ||
        !(
          event.currentTarget instanceof HTMLAnchorElement ||
          event.currentTarget instanceof HTMLLabelElement
        )
      )
        return;
      if (event.code === 'Escape') {
        event.currentTarget.blur();
      }
    });
  });
}

// TODO
function loadImages() {
  // const lazyImages = [
  //   ...document.querySelectorAll('img'),
  // ] as HTMLImageElement[];
  // lazyImages.map((image) => {
  //   if (image.complete) {
  //     image.style.opacity = '1';
  //   } else {
  //     image.onload = () => {
  //       image.style.opacity = '1';
  //     };
  //   }
  // });
}

function clickToNavigate() {
  const checkbox = document.getElementById('menu-toggle');
  if (!(checkbox instanceof HTMLInputElement)) {
    console.info('missing menu button');
    return;
  }
  const clickToScroll = [...document.querySelectorAll('a.click-to-scroll')];
  clickToScroll.map((element) => {
    element.addEventListener('click', (event) => {
      if (!(event.currentTarget instanceof HTMLAnchorElement)) return;
      const targetId = event.currentTarget.hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView();
      if (checkbox.checked) checkbox.click(); /* close menu */
    });
  });
}

// TODO
function addLinkStyles() {
  // const sections = [...document.querySelectorAll('section')];
  // const sectionLinks = [...document.querySelectorAll('a.click-to-scroll')];
  // sections.map((section) => {
  //   console.log(section.id, {
  //     offsetTop: section.offsetTop,
  //   });
  // });
  // document.addEventListener(
  //   'scroll',
  //   () => {
  //     const test = sections[0].getClientRects()[0];
  //     console.log({ top: Math.abs(test.top) });
  //   },
  //   { passive: true },
  // );
}

// TODO
function showHeaderOnScroll() {}

function allowCopyToClipboard() {
  const buttons = [...document.querySelectorAll('.copy-to-clipboard-button')];
  function copyToClipboard(text: string) {
    if (!navigator?.clipboard) return false;
    try {
      return navigator.clipboard.writeText(text);
    } catch {
      console.debug('Failed to copy');
      return false;
    }
  }
  buttons.map((element) => {
    element.addEventListener('click', (event) => {
      if (!(event.currentTarget instanceof HTMLButtonElement)) return;
      copyToClipboard(event.currentTarget.value);
    });
  });
}

const toString = (script: () => void, minify: typeof imported) => {
  const { code } = minify(script.toString());
  return code;
};

const injectIntoHead = [detectDisabledJavascript, setDataTheme];
export function injectScriptsHead(minify: typeof imported) {
  return injectIntoHead.map((script) => toString(script, minify));
}

const injectIntoBody = [
  saveThemePreference,
  toggleOnEnter,
  allowEscape,
  loadImages,
  clickToNavigate,
  allowCopyToClipboard,
  addLinkStyles,
  showHeaderOnScroll,
];
export function injectScriptsBody(minify: typeof imported) {
  return injectIntoBody.map((script) => toString(script, minify));
}

export const injectedScripts = [...injectIntoHead, ...injectIntoBody];
