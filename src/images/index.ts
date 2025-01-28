const imageVariants = [
  'desktop-dark-small',
  'desktop-light-small',
  'desktop-dark',
  'desktop-light',
  'mobile-dark-small',
  'mobile-light-small',
  'mobile-dark',
  'mobile-light',
  'tablet-dark-small',
  'tablet-light-small',
  'tablet-dark',
  'tablet-light',
] as const;
export type ImageVariant = (typeof imageVariants)[number] & PropertyKey;
export const isImageVariant = (value: unknown): value is ImageVariant => {
  if (typeof value !== 'string') return false;
  return (imageVariants as readonly string[]).includes(value);
};
export type ProjectUrls = { [key in ImageVariant]: string };

import cckbDesktopSmall from '/src/images/cckb-desktop-small.jpg';
import cckbDesktop from '/src/images/cckb-desktop.jpg';
import cckbMobileSmall from '/src/images/cckb-mobile-small.jpg';
import cckbMobile from '/src/images/cckb-mobile.jpg';
import cckbTabletSmall from '/src/images/cckb-tablet-small.jpg';
import cckbTablet from '/src/images/cckb-tablet.jpg';
import hangmanDesktopSmall from '/src/images/hangman-desktop-small.jpg';
import hangmanDesktop from '/src/images/hangman-desktop.jpg';
import hangmanMobileSmall from '/src/images/hangman-mobile-small.jpg';
import hangmanMobile from '/src/images/hangman-mobile.jpg';
import hangmanTabletSmall from '/src/images/hangman-tablet-small.jpg';
import hangmanTablet from '/src/images/hangman-tablet.jpg';
import mapSlicerDesktopSmall from '/src/images/map-slicer-desktop-small.jpg';
import mapSlicerDesktop from '/src/images/map-slicer-desktop.jpg';
import mapSlicerMobileSmall from '/src/images/map-slicer-mobile-small.jpg';
import mapSlicerMobile from '/src/images/map-slicer-mobile.jpg';
import mapSlicerTabletSmall from '/src/images/map-slicer-tablet-small.jpg';
import mapSlicerTablet from '/src/images/map-slicer-tablet.jpg';
import pokematchDesktopDarkSmall from '/src/images/pokematch-desktop-dark-small.jpg';
import pokematchDesktopDark from '/src/images/pokematch-desktop-dark.jpg';
import pokematchDesktopLightSmall from '/src/images/pokematch-desktop-light-small.jpg';
import pokematchDesktopLight from '/src/images/pokematch-desktop-light.jpg';
import pokematchMobileDarkSmall from '/src/images/pokematch-mobile-dark-small.jpg';
import pokematchMobileDark from '/src/images/pokematch-mobile-dark.jpg';
import pokematchMobileLightSmall from '/src/images/pokematch-mobile-light-small.jpg';
import pokematchMobileLight from '/src/images/pokematch-mobile-light.jpg';
import pokematchTabletDarkSmall from '/src/images/pokematch-tablet-dark-small.jpg';
import pokematchTabletDark from '/src/images/pokematch-tablet-dark.jpg';
import pokematchTabletLightSmall from '/src/images/pokematch-tablet-light-small.jpg';
import pokematchTabletLight from '/src/images/pokematch-tablet-light.jpg';
import reposDesktopDarkSmall from '/src/images/repos-desktop-dark-small.jpg';
import reposDesktopDark from '/src/images/repos-desktop-dark.jpg';
import reposDesktopLightSmall from '/src/images/repos-desktop-light-small.jpg';
import reposDesktopLight from '/src/images/repos-desktop-light.jpg';
import reposMobileDarkSmall from '/src/images/repos-mobile-dark-small.jpg';
import reposMobileDark from '/src/images/repos-mobile-dark.jpg';
import reposMobileLightSmall from '/src/images/repos-mobile-light-small.jpg';
import reposMobileLight from '/src/images/repos-mobile-light.jpg';
import reposTabletDarkSmall from '/src/images/repos-tablet-dark-small.jpg';
import reposTabletDark from '/src/images/repos-tablet-dark.jpg';
import reposTabletLightSmall from '/src/images/repos-tablet-light-small.jpg';
import reposTabletLight from '/src/images/repos-tablet-light.jpg';
import webColorsDesktopDarkSmall from '/src/images/web-colors-desktop-dark-small.jpg';
import webColorsDesktopDark from '/src/images/web-colors-desktop-dark.jpg';
import webColorsDesktopLightSmall from '/src/images/web-colors-desktop-light-small.jpg';
import webColorsDesktopLight from '/src/images/web-colors-desktop-light.jpg';
import webColorsMobileDarkSmall from '/src/images/web-colors-mobile-dark-small.jpg';
import webColorsMobileDark from '/src/images/web-colors-mobile-dark.jpg';
import webColorsMobileLightSmall from '/src/images/web-colors-mobile-light-small.jpg';
import webColorsMobileLight from '/src/images/web-colors-mobile-light.jpg';
import webColorsTabletDarkSmall from '/src/images/web-colors-tablet-dark-small.jpg';
import webColorsTabletDark from '/src/images/web-colors-tablet-dark.jpg';
import webColorsTabletLightSmall from '/src/images/web-colors-tablet-light-small.jpg';
import webColorsTabletLight from '/src/images/web-colors-tablet-light.jpg';

const cckb: ProjectUrls = {
  'desktop-dark-small': cckbDesktopSmall,
  'desktop-light-small': cckbDesktopSmall,
  'desktop-dark': cckbDesktop,
  'desktop-light': cckbDesktop,
  'mobile-dark-small': cckbMobileSmall,
  'mobile-light-small': cckbMobileSmall,
  'mobile-dark': cckbMobile,
  'mobile-light': cckbMobile,
  'tablet-dark-small': cckbTabletSmall,
  'tablet-light-small': cckbTabletSmall,
  'tablet-dark': cckbTablet,
  'tablet-light': cckbTablet,
};
const hangman: ProjectUrls = {
  'desktop-dark-small': hangmanDesktopSmall,
  'desktop-light-small': hangmanDesktopSmall,
  'desktop-dark': hangmanDesktop,
  'desktop-light': hangmanDesktop,
  'mobile-dark-small': hangmanMobileSmall,
  'mobile-light-small': hangmanMobileSmall,
  'mobile-dark': hangmanMobile,
  'mobile-light': hangmanMobile,
  'tablet-dark-small': hangmanTabletSmall,
  'tablet-light-small': hangmanTabletSmall,
  'tablet-dark': hangmanTablet,
  'tablet-light': hangmanTablet,
};
const mapSlicer: ProjectUrls = {
  'desktop-dark-small': mapSlicerDesktopSmall,
  'desktop-light-small': mapSlicerDesktopSmall,
  'desktop-dark': mapSlicerDesktop,
  'desktop-light': mapSlicerDesktop,
  'mobile-dark-small': mapSlicerMobileSmall,
  'mobile-light-small': mapSlicerMobileSmall,
  'mobile-dark': mapSlicerMobile,
  'mobile-light': mapSlicerMobile,
  'tablet-dark-small': mapSlicerTabletSmall,
  'tablet-light-small': mapSlicerTabletSmall,
  'tablet-dark': mapSlicerTablet,
  'tablet-light': mapSlicerTablet,
};
const pokematch: ProjectUrls = {
  'desktop-dark-small': pokematchDesktopDarkSmall,
  'desktop-dark': pokematchDesktopDark,
  'desktop-light-small': pokematchDesktopLightSmall,
  'desktop-light': pokematchDesktopLight,
  'mobile-dark-small': pokematchMobileDarkSmall,
  'mobile-dark': pokematchMobileDark,
  'mobile-light-small': pokematchMobileLightSmall,
  'mobile-light': pokematchMobileLight,
  'tablet-dark-small': pokematchTabletDarkSmall,
  'tablet-dark': pokematchTabletDark,
  'tablet-light-small': pokematchTabletLightSmall,
  'tablet-light': pokematchTabletLight,
};
const repos: ProjectUrls = {
  'desktop-dark-small': reposDesktopDarkSmall,
  'desktop-dark': reposDesktopDark,
  'desktop-light-small': reposDesktopLightSmall,
  'desktop-light': reposDesktopLight,
  'mobile-dark-small': reposMobileDarkSmall,
  'mobile-dark': reposMobileDark,
  'mobile-light-small': reposMobileLightSmall,
  'mobile-light': reposMobileLight,
  'tablet-dark-small': reposTabletDarkSmall,
  'tablet-dark': reposTabletDark,
  'tablet-light-small': reposTabletLightSmall,
  'tablet-light': reposTabletLight,
};
const webColors: ProjectUrls = {
  'desktop-dark-small': webColorsDesktopDarkSmall,
  'desktop-dark': webColorsDesktopDark,
  'desktop-light-small': webColorsDesktopLightSmall,
  'desktop-light': webColorsDesktopLight,
  'mobile-dark-small': webColorsMobileDarkSmall,
  'mobile-dark': webColorsMobileDark,
  'mobile-light-small': webColorsMobileLightSmall,
  'mobile-light': webColorsMobileLight,
  'tablet-dark-small': webColorsTabletDarkSmall,
  'tablet-dark': webColorsTabletDark,
  'tablet-light-small': webColorsTabletLightSmall,
  'tablet-light': webColorsTabletLight,
};

export const urls = {
  cckb,
  hangman,
  'map-slicer': mapSlicer,
  pokematch,
  repos,
  'web-colors': webColors,
  concentration: {},
  example: {},
} as const;

export type ProjectKey = keyof typeof urls;
