import { type Union } from '@/types';

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
const machineReadableMonths = {
  [Month.January]: '01',
  [Month.February]: '02',
  [Month.March]: '03',
  [Month.April]: '04',
  [Month.May]: '05',
  [Month.June]: '06',
  [Month.July]: '07',
  [Month.August]: '08',
  [Month.September]: '09',
  [Month.October]: '10',
  [Month.November]: '11',
  [Month.December]: '12',
} as const;

const repos = ['concentration', 'hangman', 'map-slicer', 'web-colors'] as const;
type Key = Union<typeof repos>;

type ProjectDate = [Month, number];
type Project = {
  title: string;
  date: ProjectDate;
  blurb: string;
  description?: string;
  // tags?: // an optional array of Tag types
};

export const projects: { [key in Key]: Project } = {
  concentration: {
    title: 'Concentration',
    date: [Month.October, 2019] as const,
    blurb: 'A Pokémon themed memory game.',
  },
  hangman: {
    title: 'Hangman',
    date: [Month.July, 2015] as const,
    blurb: 'I made this game while I was first learning how to use Javascript.',
    description:
      'I made this game while I was first learning how to use Javascript. This is, in fact, the first JavaScript application I ever completed. Many of the target words were sourced from the Dictionary of Obscure Sorrows.',
  },
  'map-slicer': {
    title: 'Map Slicer',
    date: [Month.September, 2024] as const,
    blurb:
      'Map Slicer allows you to print images that are too large to fit on a single page.',
    description:
      'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
  },
  'web-colors': {
    title: 'Web Colors',
    date: [Month.November, 2024] as const,
    blurb:
      'Web Colors showcases all available CSS color names along with their HEX and RGB values.',
    description:
      'Web Colors is a sleek, responsive web app that showcases all available CSS color names with their HEX and RGB values in a clean, visually appealing grid layout.',
  },
};

const toNumber = ([month, year]: ProjectDate) => year * 100 + month;
const sorted = [...repos].sort((keyA, keyB) => {
  const showAFirst = -1;
  const showBFirst = 1;

  // sort by most recent
  const dateA = toNumber(projects[keyA].date);
  const dateB = toNumber(projects[keyB].date);
  if (dateA > dateB) return showAFirst;
  if (dateB < dateA) return showBFirst;

  // sort alphabetically
  // github enforces (case-insensitive) unique repo names
  return keyA < keyB ? showAFirst : showBFirst;
});

export const toDateTime = ([month, year]: ProjectDate) =>
  `${year}-${machineReadableMonths[month]}`;

export const toDateString = ([month, year]: ProjectDate) =>
  `${Month[month]} ${year}`;

export const toHref = (key: Key) => `https://kellyripple.com/${key}`;

export { sorted as projectKeys };