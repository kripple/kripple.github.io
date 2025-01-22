export const urls = {
  cckb: {
    'desktop-small': new URL('cckb-desktop-small.jpg', import.meta.url).href,
    desktop: new URL('cckb-desktop.jpg', import.meta.url).href,
    'mobile-small': new URL('cckb-mobile-small.jpg', import.meta.url).href,
    mobile: new URL('cckb-mobile.jpg', import.meta.url).href,
    'tablet-small': new URL('cckb-tablet-small.jpg', import.meta.url).href,
    tablet: new URL('cckb-tablet.jpg', import.meta.url).href,
  },
  hangman: {
    'desktop-small': new URL('hangman-desktop-small.jpg', import.meta.url).href,
    desktop: new URL('hangman-desktop.jpg', import.meta.url).href,
    'mobile-small': new URL('hangman-mobile-small.jpg', import.meta.url).href,
    mobile: new URL('hangman-mobile.jpg', import.meta.url).href,
    'tablet-small': new URL('hangman-tablet-small.jpg', import.meta.url).href,
    tablet: new URL('hangman-tablet.jpg', import.meta.url).href,
  },
  'map-slicer': {
    'desktop-small': new URL('map-slicer-desktop-small.jpg', import.meta.url)
      .href,
    desktop: new URL('map-slicer-desktop.jpg', import.meta.url).href,
    'mobile-small': new URL('map-slicer-mobile-small.jpg', import.meta.url)
      .href,
    mobile: new URL('map-slicer-mobile.jpg', import.meta.url).href,
    'tablet-small': new URL('map-slicer-tablet-small.jpg', import.meta.url)
      .href,
    tablet: new URL('map-slicer-tablet.jpg', import.meta.url).href,
  },
  pokematch: {
    'desktop-dark-small': new URL(
      'pokematch-desktop-dark-small.jpg',
      import.meta.url,
    ).href,
    'desktop-dark': new URL('pokematch-desktop-dark.jpg', import.meta.url).href,
    'desktop-light-small': new URL(
      'pokematch-desktop-light-small.jpg',
      import.meta.url,
    ).href,
    'desktop-light': new URL('pokematch-desktop-light.jpg', import.meta.url)
      .href,
    'mobile-dark-small': new URL(
      'pokematch-mobile-dark-small.jpg',
      import.meta.url,
    ).href,
    'mobile-dark': new URL('pokematch-mobile-dark.jpg', import.meta.url).href,
    'mobile-light-small': new URL(
      'pokematch-mobile-light-small.jpg',
      import.meta.url,
    ).href,
    'mobile-light': new URL('pokematch-mobile-light.jpg', import.meta.url).href,
    'tablet-dark-small': new URL(
      'pokematch-tablet-dark-small.jpg',
      import.meta.url,
    ).href,
    'tablet-dark': new URL('pokematch-tablet-dark.jpg', import.meta.url).href,
    'tablet-light-small': new URL(
      'pokematch-tablet-light-small.jpg',
      import.meta.url,
    ).href,
    'tablet-light': new URL('pokematch-tablet-light.jpg', import.meta.url).href,
  },
  repos: {
    'desktop-dark-small': new URL(
      'repos-desktop-dark-small.jpg',
      import.meta.url,
    ).href,
    'desktop-dark': new URL('repos-desktop-dark.jpg', import.meta.url).href,
    'desktop-light-small': new URL(
      'repos-desktop-light-small.jpg',
      import.meta.url,
    ).href,
    'desktop-light': new URL('repos-desktop-light.jpg', import.meta.url).href,
    'mobile-dark-small': new URL('repos-mobile-dark-small.jpg', import.meta.url)
      .href,
    'mobile-dark': new URL('repos-mobile-dark.jpg', import.meta.url).href,
    'mobile-light-small': new URL(
      'repos-mobile-light-small.jpg',
      import.meta.url,
    ).href,
    'mobile-light': new URL('repos-mobile-light.jpg', import.meta.url).href,
    'tablet-dark-small': new URL('repos-tablet-dark-small.jpg', import.meta.url)
      .href,
    'tablet-dark': new URL('repos-tablet-dark.jpg', import.meta.url).href,
    'tablet-light-small': new URL(
      'repos-tablet-light-small.jpg',
      import.meta.url,
    ).href,
    'tablet-light': new URL('repos-tablet-light.jpg', import.meta.url).href,
  },
  'web-colors': {
    'desktop-dark-small': new URL(
      'web-colors-desktop-dark-small.jpg',
      import.meta.url,
    ).href,
    'desktop-dark': new URL('web-colors-desktop-dark.jpg', import.meta.url)
      .href,
    'desktop-light-small': new URL(
      'web-colors-desktop-light-small.jpg',
      import.meta.url,
    ).href,
    'desktop-light': new URL('web-colors-desktop-light.jpg', import.meta.url)
      .href,
    'mobile-dark-small': new URL(
      'web-colors-mobile-dark-small.jpg',
      import.meta.url,
    ).href,
    'mobile-dark': new URL('web-colors-mobile-dark.jpg', import.meta.url).href,
    'mobile-light-small': new URL(
      'web-colors-mobile-light-small.jpg',
      import.meta.url,
    ).href,
    'mobile-light': new URL('web-colors-mobile-light.jpg', import.meta.url)
      .href,
    'tablet-dark-small': new URL(
      'web-colors-tablet-dark-small.jpg',
      import.meta.url,
    ).href,
    'tablet-dark': new URL('web-colors-tablet-dark.jpg', import.meta.url).href,
    'tablet-light-small': new URL(
      'web-colors-tablet-light-small.jpg',
      import.meta.url,
    ).href,
    'tablet-light': new URL('web-colors-tablet-light.jpg', import.meta.url)
      .href,
  },
  concentration: {},
  example: {},
} as const;

type Urls = typeof urls;
export type ImageUrlKeys = keyof Urls;
export type ImageUrls<K extends ImageUrlKeys> = Urls[K];
