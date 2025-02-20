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

function addLinkStyles() {
  function throttle(fn: () => void) {
    const interval = 200;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let throttled: (() => void) | null = null;
    function wrapper() {
      let callNow = !timeout;
      throttled = function () {
        return fn();
      };
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          return throttled?.();
        }, interval);
      }
      if (callNow) {
        callNow = false;
        return throttled?.();
      }
    }
    return wrapper;
  }

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

  const prefix = 'nav-link';
  const portfolioLink = document.getElementById(`${prefix}-portfolio`);
  const portfolioSection = document.getElementById('portfolio');
  const aboutLink = document.getElementById(`${prefix}-about`);
  const aboutSection = document.getElementById('about');
  const contactLink = document.getElementById(`${prefix}-contact`);
  const contactSection = document.getElementById('contact');
  if (
    !portfolioSection ||
    !aboutSection ||
    !contactSection ||
    !portfolioLink ||
    !aboutLink ||
    !contactLink
  ) {
    console.info('missing elements');
    return;
  }

  function isVisible(element: HTMLElement) {
    const box = element.getBoundingClientRect();
    const height = document.documentElement.clientHeight;
    return box.top >= 0 && box.bottom <= height;
  }

  function setLinksState() {
    if (
      !portfolioSection ||
      !aboutSection ||
      !contactSection ||
      !portfolioLink ||
      !aboutLink ||
      !contactLink
    ) {
      console.info('missing elements');
      return;
    }
    const style = getComputedStyle(document.documentElement);
    const rem = parseFloat(
      style.getPropertyValue('--scroll-margin').replace('rem', ''),
    );
    const fontSize = parseFloat(style.fontSize);
    const scrollMargin = rem * fontSize;
    const scrollTop = document.documentElement.scrollTop + scrollMargin;
    function removeActiveClass(links: HTMLElement[]) {
      links.map((link) => link.classList.remove('active'));
    }
    if (scrollTop >= contactSection.offsetTop || isVisible(contactSection)) {
      contactLink.classList.add('active');
      removeActiveClass([portfolioLink, aboutLink]);
    } else if (scrollTop >= aboutSection.offsetTop) {
      aboutLink.classList.add('active');
      removeActiveClass([portfolioLink, contactLink]);
    } else {
      portfolioLink.classList.add('active');
      removeActiveClass([aboutLink, contactLink]);
    }
  }
  const handler = throttle(setLinksState);
  document.addEventListener('scroll', handler, { passive: true });
  setLinksState();
}

// TODO
function showHeaderOnScroll() {
  function throttle(fn: () => void) {
    const interval = 200;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let throttled: (() => void) | null = null;
    function wrapper() {
      let callNow = !timeout;
      throttled = function () {
        return fn();
      };
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          return throttled?.();
        }, interval);
      }
      if (callNow) {
        callNow = false;
        return throttled?.();
      }
    }
    return wrapper;
  }

  let lastScrollTop = 0;
  const handler = throttle(() => {
    const currentScrollTop = document.documentElement.scrollTop;
    if (lastScrollTop - currentScrollTop > 50) {
      console.log('show header');
    }
    lastScrollTop = currentScrollTop;
  });
  document.addEventListener('scroll', handler, { passive: true });
}

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
