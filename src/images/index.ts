type ScreenSize = 'desktop' | 'tablet' | 'mobile';
type ImageData = { color: string; src: string; compressedSrc: string };

export type ProjectUrls = {
  [key in ScreenSize]:
    | { dark: ImageData; light: undefined }
    | { dark: undefined; light: ImageData }
    | { dark: ImageData; light: ImageData };
};

import cckbDesktop from '/src/images/cckb-desktop.avif';
import cckbDesktopCompressed from '/src/images/cckb-desktop-compressed.avif';
import cckbMobile from '/src/images/cckb-mobile.avif';
import cckbMobileCompressed from '/src/images/cckb-mobile-compressed.avif';
import cckbTablet from '/src/images/cckb-tablet.avif';
import cckbTabletCompressed from '/src/images/cckb-tablet-compressed.avif';
//
import guessTheWordDesktopDark from '/src/images/guess-the-word-desktop-dark.avif';
import guessTheWordDesktopDarkCompressed from '/src/images/guess-the-word-desktop-dark-compressed.avif';
import guessTheWordDesktopLight from '/src/images/guess-the-word-desktop-light.avif';
import guessTheWordDesktopLightCompressed from '/src/images/guess-the-word-desktop-light-compressed.avif';
import guessTheWordMobileDark from '/src/images/guess-the-word-mobile-dark.avif';
import guessTheWordMobileDarkCompressed from '/src/images/guess-the-word-mobile-dark-compressed.avif';
import guessTheWordMobileLight from '/src/images/guess-the-word-mobile-light.avif';
import guessTheWordMobileLightCompressed from '/src/images/guess-the-word-mobile-light-compressed.avif';
import guessTheWordTabletDark from '/src/images/guess-the-word-tablet-dark.avif';
import guessTheWordTabletDarkCompressed from '/src/images/guess-the-word-tablet-dark-compressed.avif';
import guessTheWordTabletLight from '/src/images/guess-the-word-tablet-light.avif';
import guessTheWordTabletLightCompressed from '/src/images/guess-the-word-tablet-light-compressed.avif';
//
import mapSlicerDesktop from '/src/images/map-slicer-desktop.avif';
import mapSlicerDesktopCompressed from '/src/images/map-slicer-desktop-compressed.avif';
import mapSlicerMobile from '/src/images/map-slicer-mobile.avif';
import mapSlicerMobileCompressed from '/src/images/map-slicer-mobile-compressed.avif';
import mapSlicerTablet from '/src/images/map-slicer-tablet.avif';
import mapSlicerTabletCompressed from '/src/images/map-slicer-tablet-compressed.avif';
//
import pokematchDesktopDark from '/src/images/pokematch-desktop-dark.avif';
import pokematchDesktopDarkCompressed from '/src/images/pokematch-desktop-dark-compressed.avif';
import pokematchDesktopLight from '/src/images/pokematch-desktop-light.avif';
import pokematchDesktopLightCompressed from '/src/images/pokematch-desktop-light-compressed.avif';
import pokematchMobileDark from '/src/images/pokematch-mobile-dark.avif';
import pokematchMobileDarkCompressed from '/src/images/pokematch-mobile-dark-compressed.avif';
import pokematchMobileLight from '/src/images/pokematch-mobile-light.avif';
import pokematchMobileLightCompressed from '/src/images/pokematch-mobile-light-compressed.avif';
import pokematchTabletDark from '/src/images/pokematch-tablet-dark.avif';
import pokematchTabletDarkCompressed from '/src/images/pokematch-tablet-dark-compressed.avif';
import pokematchTabletLight from '/src/images/pokematch-tablet-light.avif';
import pokematchTabletLightCompressed from '/src/images/pokematch-tablet-light-compressed.avif';
//
import reposDesktopDark from '/src/images/repos-desktop-dark.avif';
import reposDesktopDarkCompressed from '/src/images/repos-desktop-dark-compressed.avif';
import reposDesktopLight from '/src/images/repos-desktop-light.avif';
import reposDesktopLightCompressed from '/src/images/repos-desktop-light-compressed.avif';
import reposMobileDark from '/src/images/repos-mobile-dark.avif';
import reposMobileDarkCompressed from '/src/images/repos-mobile-dark-compressed.avif';
import reposMobileLight from '/src/images/repos-mobile-light.avif';
import reposMobileLightCompressed from '/src/images/repos-mobile-light-compressed.avif';
import reposTabletDark from '/src/images/repos-tablet-dark.avif';
import reposTabletDarkCompressed from '/src/images/repos-tablet-dark-compressed.avif';
import reposTabletLight from '/src/images/repos-tablet-light.avif';
import reposTabletLightCompressed from '/src/images/repos-tablet-light-compressed.avif';
//
import webColorsDesktopDark from '/src/images/web-colors-desktop-dark.avif';
import webColorsDesktopDarkCompressed from '/src/images/web-colors-desktop-dark-compressed.avif';
import webColorsDesktopLight from '/src/images/web-colors-desktop-light.avif';
import webColorsDesktopLightCompressed from '/src/images/web-colors-desktop-light-compressed.avif';
import webColorsMobileDark from '/src/images/web-colors-mobile-dark.avif';
import webColorsMobileDarkCompressed from '/src/images/web-colors-mobile-dark-compressed.avif';
import webColorsMobileLight from '/src/images/web-colors-mobile-light.avif';
import webColorsMobileLightCompressed from '/src/images/web-colors-mobile-light-compressed.avif';
import webColorsTabletDark from '/src/images/web-colors-tablet-dark.avif';
import webColorsTabletDarkCompressed from '/src/images/web-colors-tablet-dark-compressed.avif';
import webColorsTabletLight from '/src/images/web-colors-tablet-light.avif';
import webColorsTabletLightCompressed from '/src/images/web-colors-tablet-light-compressed.avif';

const cckb: ProjectUrls = {
  desktop: {
    dark: undefined,
    light: {
      color: '#059c35',
      src: cckbDesktop,
      compressedSrc: cckbDesktopCompressed,
    },
  },
  mobile: {
    dark: undefined,
    light: {
      color: '#449444',
      src: cckbMobile,
      compressedSrc: cckbMobileCompressed,
    },
  },
  tablet: {
    dark: undefined,
    light: {
      color: '#449c45',
      src: cckbTablet,
      compressedSrc: cckbTabletCompressed,
    },
  },
};
const guessTheWord: ProjectUrls = {
  desktop: {
    dark: {
      color: '#3682b0',
      src: guessTheWordDesktopDark,
      compressedSrc: guessTheWordDesktopDarkCompressed,
    },
    light: {
      color: '#ecb012',
      src: guessTheWordDesktopLight,
      compressedSrc: guessTheWordDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      color: '#568cb9',
      src: guessTheWordMobileDark,
      compressedSrc: guessTheWordMobileDarkCompressed,
    },
    light: {
      color: '#ccbc90',
      src: guessTheWordMobileLight,
      compressedSrc: guessTheWordMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      color: '#5082ae',
      src: guessTheWordTabletDark,
      compressedSrc: guessTheWordTabletDarkCompressed,
    },
    light: {
      color: '#deba21',
      src: guessTheWordTabletLight,
      compressedSrc: guessTheWordTabletLightCompressed,
    },
  },
};
const mapSlicer: ProjectUrls = {
  desktop: {
    dark: {
      color: '#b3bc59',
      src: mapSlicerDesktop,
      compressedSrc: mapSlicerDesktopCompressed,
    },
    light: undefined,
  },
  mobile: {
    dark: {
      color: '#5188ad',
      src: mapSlicerMobile,
      compressedSrc: mapSlicerMobileCompressed,
    },
    light: undefined,
  },
  tablet: {
    dark: {
      color: '#b4b864',
      src: mapSlicerTablet,
      compressedSrc: mapSlicerTabletCompressed,
    },
    light: undefined,
  },
};
const pokematch: ProjectUrls = {
  desktop: {
    dark: {
      color: '#ac9b24',
      src: pokematchDesktopDark,
      compressedSrc: pokematchDesktopDarkCompressed,
    },
    light: {
      color: '#fcdc04',
      src: pokematchDesktopLight,
      compressedSrc: pokematchDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      color: '#262d7c',
      src: pokematchMobileDark,
      compressedSrc: pokematchMobileDarkCompressed,
    },
    light: {
      color: '#f9da4e',
      src: pokematchMobileLight,
      compressedSrc: pokematchMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      color: '#e0c84c',
      src: pokematchTabletDark,
      compressedSrc: pokematchTabletDarkCompressed,
    },
    light: {
      color: '#fcdc4c',
      src: pokematchTabletLight,
      compressedSrc: pokematchTabletLightCompressed,
    },
  },
};
const repos: ProjectUrls = {
  desktop: {
    dark: {
      color: '#3a7dc4',
      src: reposDesktopDark,
      compressedSrc: reposDesktopDarkCompressed,
    },
    light: {
      color: '#cc947c',
      src: reposDesktopLight,
      compressedSrc: reposDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      color: '#ac8052',
      src: reposMobileDark,
      compressedSrc: reposMobileDarkCompressed,
    },
    light: {
      color: '#cc9c88',
      src: reposMobileLight,
      compressedSrc: reposMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      color: '#cfa892',
      src: reposTabletDark,
      compressedSrc: reposTabletDarkCompressed,
    },
    light: {
      color: '#36c8c8',
      src: reposTabletLight,
      compressedSrc: reposTabletLightCompressed,
    },
  },
};
const webColors: ProjectUrls = {
  desktop: {
    dark: {
      color: '#efdf05',
      src: webColorsDesktopDark,
      compressedSrc: webColorsDesktopDarkCompressed,
    },
    light: {
      color: '#f7e515',
      src: webColorsDesktopLight,
      compressedSrc: webColorsDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      color: '#dc398e',
      src: webColorsMobileDark,
      compressedSrc: webColorsMobileDarkCompressed,
    },
    light: {
      color: '#ec3c94',
      src: webColorsMobileLight,
      compressedSrc: webColorsMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      color: '#e94024',
      src: webColorsTabletDark,
      compressedSrc: webColorsTabletDarkCompressed,
    },
    light: {
      color: '#eb462a',
      src: webColorsTabletLight,
      compressedSrc: webColorsTabletLightCompressed,
    },
  },
};

export const urls = {
  cckb,
  'guess-the-word': guessTheWord,
  hangman: {},
  'map-slicer': mapSlicer,
  pokematch,
  repos,
  'web-colors': webColors,
  concentration: {},
  example: {},
} as const;

export type ProjectKey = keyof typeof urls;
