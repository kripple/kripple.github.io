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

type ProjectDate = [Month, number];
type Project = {
  hide?: boolean;
  title: string;
  date: ProjectDate;
  blurb: string;
  description?: string;
  // tags?: // an optional array of Tag types
  githubUrl?: string;
  websiteUrl?: string;
};

export const projects: { [key: string]: Project } = {
  cckb: {
    title: 'Cricket Creek Kitchens & Baths',
    date: [Month.December, 2024],
    blurb:
      'Converted a WordPress website into a static single-page application, reducing annual hosting costs from $100+ to $0.',
    githubUrl:
      'https://github.com/cricket-creek-kitchens-and-baths/cricket-creek-kitchens-and-baths.github.io',
    websiteUrl: 'https://cckb.net',
  },
  concentration: {
    hide: true,
    title: 'Concentration',
    date: [Month.October, 2019],
    blurb: 'A Pokémon themed memory game. (Pokéflash v1)',
  },
  hangman: {
    title: 'Hangman',
    date: [Month.July, 2015],
    blurb: 'I made this game while I was first learning how to use Javascript.',
    description:
      'I made this game while I was first learning how to use Javascript. This is, in fact, the first JavaScript application I ever completed. Many of the target words were sourced from the Dictionary of Obscure Sorrows.',
  },
  'map-slicer': {
    title: 'Map Slicer',
    date: [Month.September, 2024],
    blurb:
      'Map Slicer allows you to print images that are too large to fit on a single page.',
    description:
      'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
  },
  pokematch: {
    title: 'Pokéflash',
    date: [Month.January, 2025],
    blurb: 'A Pokémon themed memory game.',
  },
  'web-colors': {
    title: 'Web Colors',
    date: [Month.November, 2024],
    blurb:
      'Web Colors showcases all available CSS color names along with their HEX and RGB values.',
    description:
      'Web Colors is a sleek, responsive web app that showcases all available CSS color names with their HEX and RGB values in a clean, visually appealing grid layout.',
  },
  example: {
    hide: true,
    title:
      'This Project Title Encompasses Several Incontrovertibly and Vocabularically Cumbersome Incomprehensibilities. Hippopotomonstrosesquippedaliophobia.',
    date: [Month.November, 2024],
    blurb: `This project card should be listed before 'Web Colors' because it is published in the same month, but its repo url is higher in the alphabet. For purposes of illustration, this blurb is also too long. Hippopotomonstrosesquippedaliophobia.`,
  },
} as const;

type ProjectKey = keyof typeof projects;

const toNumber = ([month, year]: ProjectDate) => year * 100 + month;
const sorted = (Object.keys(projects) as ProjectKey[]).sort((keyA, keyB) => {
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

export const toHref = (key: ProjectKey) => `https://kellyripple.com/${key}`;

export { sorted as projectKeys };
