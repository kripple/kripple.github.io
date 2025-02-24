type ScreenSize = 'desktop' | 'tablet' | 'mobile';
type ImageData = { src: string; compressedSrc: string };

export type ProjectUrls = {
  [key in ScreenSize]:
    | { dark: ImageData; light: undefined }
    | { dark: undefined; light: ImageData }
    | { dark: ImageData; light: ImageData };
};

import cckbDesktop from '/src/assets/project-images/cckb-desktop.avif';
import cckbDesktopCompressed from '/src/assets/project-images/cckb-desktop-compressed.avif';
import cckbMobile from '/src/assets/project-images/cckb-mobile.avif';
import cckbMobileCompressed from '/src/assets/project-images/cckb-mobile-compressed.avif';
import cckbTablet from '/src/assets/project-images/cckb-tablet.avif';
import cckbTabletCompressed from '/src/assets/project-images/cckb-tablet-compressed.avif';
//
import guessTheWordDesktopDark from '/src/assets/project-images/guess-the-word-desktop-dark.avif';
import guessTheWordDesktopDarkCompressed from '/src/assets/project-images/guess-the-word-desktop-dark-compressed.avif';
import guessTheWordDesktopLight from '/src/assets/project-images/guess-the-word-desktop-light.avif';
import guessTheWordDesktopLightCompressed from '/src/assets/project-images/guess-the-word-desktop-light-compressed.avif';
import guessTheWordMobileDark from '/src/assets/project-images/guess-the-word-mobile-dark.avif';
import guessTheWordMobileDarkCompressed from '/src/assets/project-images/guess-the-word-mobile-dark-compressed.avif';
import guessTheWordMobileLight from '/src/assets/project-images/guess-the-word-mobile-light.avif';
import guessTheWordMobileLightCompressed from '/src/assets/project-images/guess-the-word-mobile-light-compressed.avif';
import guessTheWordTabletDark from '/src/assets/project-images/guess-the-word-tablet-dark.avif';
import guessTheWordTabletDarkCompressed from '/src/assets/project-images/guess-the-word-tablet-dark-compressed.avif';
import guessTheWordTabletLight from '/src/assets/project-images/guess-the-word-tablet-light.avif';
import guessTheWordTabletLightCompressed from '/src/assets/project-images/guess-the-word-tablet-light-compressed.avif';
//
import mapSlicerDesktop from '/src/assets/project-images/map-slicer-desktop.avif';
import mapSlicerDesktopCompressed from '/src/assets/project-images/map-slicer-desktop-compressed.avif';
import mapSlicerMobile from '/src/assets/project-images/map-slicer-mobile.avif';
import mapSlicerMobileCompressed from '/src/assets/project-images/map-slicer-mobile-compressed.avif';
import mapSlicerTablet from '/src/assets/project-images/map-slicer-tablet.avif';
import mapSlicerTabletCompressed from '/src/assets/project-images/map-slicer-tablet-compressed.avif';
//
import pokematchDesktopDark from '/src/assets/project-images/pokematch-desktop-dark.avif';
import pokematchDesktopDarkCompressed from '/src/assets/project-images/pokematch-desktop-dark-compressed.avif';
import pokematchDesktopLight from '/src/assets/project-images/pokematch-desktop-light.avif';
import pokematchDesktopLightCompressed from '/src/assets/project-images/pokematch-desktop-light-compressed.avif';
import pokematchMobileDark from '/src/assets/project-images/pokematch-mobile-dark.avif';
import pokematchMobileDarkCompressed from '/src/assets/project-images/pokematch-mobile-dark-compressed.avif';
import pokematchMobileLight from '/src/assets/project-images/pokematch-mobile-light.avif';
import pokematchMobileLightCompressed from '/src/assets/project-images/pokematch-mobile-light-compressed.avif';
import pokematchTabletDark from '/src/assets/project-images/pokematch-tablet-dark.avif';
import pokematchTabletDarkCompressed from '/src/assets/project-images/pokematch-tablet-dark-compressed.avif';
import pokematchTabletLight from '/src/assets/project-images/pokematch-tablet-light.avif';
import pokematchTabletLightCompressed from '/src/assets/project-images/pokematch-tablet-light-compressed.avif';
//
import reposDesktopDark from '/src/assets/project-images/repos-desktop-dark.avif';
import reposDesktopDarkCompressed from '/src/assets/project-images/repos-desktop-dark-compressed.avif';
import reposDesktopLight from '/src/assets/project-images/repos-desktop-light.avif';
import reposDesktopLightCompressed from '/src/assets/project-images/repos-desktop-light-compressed.avif';
import reposMobileDark from '/src/assets/project-images/repos-mobile-dark.avif';
import reposMobileDarkCompressed from '/src/assets/project-images/repos-mobile-dark-compressed.avif';
import reposMobileLight from '/src/assets/project-images/repos-mobile-light.avif';
import reposMobileLightCompressed from '/src/assets/project-images/repos-mobile-light-compressed.avif';
import reposTabletDark from '/src/assets/project-images/repos-tablet-dark.avif';
import reposTabletDarkCompressed from '/src/assets/project-images/repos-tablet-dark-compressed.avif';
import reposTabletLight from '/src/assets/project-images/repos-tablet-light.avif';
import reposTabletLightCompressed from '/src/assets/project-images/repos-tablet-light-compressed.avif';
//
import webColorsDesktopDark from '/src/assets/project-images/web-colors-desktop-dark.avif';
import webColorsDesktopDarkCompressed from '/src/assets/project-images/web-colors-desktop-dark-compressed.avif';
import webColorsDesktopLight from '/src/assets/project-images/web-colors-desktop-light.avif';
import webColorsDesktopLightCompressed from '/src/assets/project-images/web-colors-desktop-light-compressed.avif';
import webColorsMobileDark from '/src/assets/project-images/web-colors-mobile-dark.avif';
import webColorsMobileDarkCompressed from '/src/assets/project-images/web-colors-mobile-dark-compressed.avif';
import webColorsMobileLight from '/src/assets/project-images/web-colors-mobile-light.avif';
import webColorsMobileLightCompressed from '/src/assets/project-images/web-colors-mobile-light-compressed.avif';
import webColorsTabletDark from '/src/assets/project-images/web-colors-tablet-dark.avif';
import webColorsTabletDarkCompressed from '/src/assets/project-images/web-colors-tablet-dark-compressed.avif';
import webColorsTabletLight from '/src/assets/project-images/web-colors-tablet-light.avif';
import webColorsTabletLightCompressed from '/src/assets/project-images/web-colors-tablet-light-compressed.avif';

const cckb: ProjectUrls = {
  desktop: {
    dark: undefined,
    light: {
      src: cckbDesktop,
      compressedSrc: cckbDesktopCompressed,
    },
  },
  mobile: {
    dark: undefined,
    light: {
      src: cckbMobile,
      compressedSrc: cckbMobileCompressed,
    },
  },
  tablet: {
    dark: undefined,
    light: {
      src: cckbTablet,
      compressedSrc: cckbTabletCompressed,
    },
  },
};
const guessTheWord: ProjectUrls = {
  desktop: {
    dark: {
      src: guessTheWordDesktopDark,
      compressedSrc: guessTheWordDesktopDarkCompressed,
    },
    light: {
      src: guessTheWordDesktopLight,
      compressedSrc: guessTheWordDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      src: guessTheWordMobileDark,
      compressedSrc: guessTheWordMobileDarkCompressed,
    },
    light: {
      src: guessTheWordMobileLight,
      compressedSrc: guessTheWordMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      src: guessTheWordTabletDark,
      compressedSrc: guessTheWordTabletDarkCompressed,
    },
    light: {
      src: guessTheWordTabletLight,
      compressedSrc: guessTheWordTabletLightCompressed,
    },
  },
};
const mapSlicer: ProjectUrls = {
  desktop: {
    dark: {
      src: mapSlicerDesktop,
      compressedSrc: mapSlicerDesktopCompressed,
    },
    light: undefined,
  },
  mobile: {
    dark: {
      src: mapSlicerMobile,
      compressedSrc: mapSlicerMobileCompressed,
    },
    light: undefined,
  },
  tablet: {
    dark: {
      src: mapSlicerTablet,
      compressedSrc: mapSlicerTabletCompressed,
    },
    light: undefined,
  },
};
const pokematch: ProjectUrls = {
  desktop: {
    dark: {
      src: pokematchDesktopDark,
      compressedSrc: pokematchDesktopDarkCompressed,
    },
    light: {
      src: pokematchDesktopLight,
      compressedSrc: pokematchDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      src: pokematchMobileDark,
      compressedSrc: pokematchMobileDarkCompressed,
    },
    light: {
      src: pokematchMobileLight,
      compressedSrc: pokematchMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      src: pokematchTabletDark,
      compressedSrc: pokematchTabletDarkCompressed,
    },
    light: {
      src: pokematchTabletLight,
      compressedSrc: pokematchTabletLightCompressed,
    },
  },
};
const repos: ProjectUrls = {
  desktop: {
    dark: {
      src: reposDesktopDark,
      compressedSrc: reposDesktopDarkCompressed,
    },
    light: {
      src: reposDesktopLight,
      compressedSrc: reposDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      src: reposMobileDark,
      compressedSrc: reposMobileDarkCompressed,
    },
    light: {
      src: reposMobileLight,
      compressedSrc: reposMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      src: reposTabletDark,
      compressedSrc: reposTabletDarkCompressed,
    },
    light: {
      src: reposTabletLight,
      compressedSrc: reposTabletLightCompressed,
    },
  },
};
const webColors: ProjectUrls = {
  desktop: {
    dark: {
      src: webColorsDesktopDark,
      compressedSrc: webColorsDesktopDarkCompressed,
    },
    light: {
      src: webColorsDesktopLight,
      compressedSrc: webColorsDesktopLightCompressed,
    },
  },
  mobile: {
    dark: {
      src: webColorsMobileDark,
      compressedSrc: webColorsMobileDarkCompressed,
    },
    light: {
      src: webColorsMobileLight,
      compressedSrc: webColorsMobileLightCompressed,
    },
  },
  tablet: {
    dark: {
      src: webColorsTabletDark,
      compressedSrc: webColorsTabletDarkCompressed,
    },
    light: {
      src: webColorsTabletLight,
      compressedSrc: webColorsTabletLightCompressed,
    },
  },
};

export const urls = {
  cckb,
  'guess-the-word': guessTheWord,
  'map-slicer': mapSlicer,
  pokematch,
  repos,
  'web-colors': webColors,
} as const;

export type ProjectKey = keyof typeof urls;
