export default (function () {
  function storageAvailable(type) {
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
  function setItem(key, value) {
    if (!available) return;
    localStorage.setItem(key, value);
  }
  function setTheme(mode) {
    setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }
  const checkbox = document.getElementById('theme-toggle');
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
}.toString());
