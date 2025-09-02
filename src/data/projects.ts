import type { ProjectKey } from '@/data/project-images';
import type { Tag } from '@/data/tags';
import { tags } from '@/data/tags';

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
  title: string;
  subtitle?: string;
  date: ProjectDate;
  blurb: string;
  description?: string;
  tags: Tag[];
  sourceUrl?: string;
  url: string;
  apiUrl?: string;
  apiSrcUrl?: string;
};

const projects: Record<string, Project> = {
  cckb: {
    title: 'Cricket Creek',
    subtitle: 'Kitchens & Baths',
    date: [Month.December, 2024],
    blurb:
      'Rebuilt cckb.net as a static site, eliminating annual hosting costs.',
    sourceUrl:
      'https://github.com/cricket-creek-kitchens-and-baths/cricket-creek-kitchens-and-baths.github.io',
    url: 'https://cckb.net',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['React Router'],
      tags.WordPress,
      tags['Available Offline'],
    ],
  },

  codebreaker: {
    title: 'Code:Breaker',
    date: [Month.June, 2025],
    blurb:
      'A daily-play code-breaking game based on the board game Mastermind.',
    sourceUrl: 'https://github.com/kripple/codebreaker',
    url: 'https://kripple.github.io/codebreaker',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['Node.js'],
      tags.PostgreSQL,
      tags['Edge Functions'],
    ],
  },

  mapSlicer: {
    title: 'Map Slicer',
    date: [Month.September, 2024],
    blurb: 'Map Slicer lets you print large images across multiple pages.',
    description:
      'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
    sourceUrl: 'https://github.com/kripple/map-slicer',
    url: 'http://kripple.github.io/map-slicer',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['HTML Canvas'],
      tags['Material UI'],
      tags['Available Offline'],
    ],
  },

  pokematch: {
    title: 'Pokématch',
    date: [Month.January, 2025],
    blurb: 'A memory game built with object-oriented programming techniques.',
    sourceUrl: 'https://github.com/kripple/pokematch',
    url: 'https://kripple.github.io/pokematch',
    tags: [
      tags.JavaScript,
      tags['Game Development'],
      tags.Pokémon,
      tags['Available Offline'],
    ],
  },

  repos: {
    title: 'Repo Gallery',
    date: [Month.January, 2025],
    blurb:
      'A GitHub repository gallery that lists, sorts, and filters public repos.',
    description:
      'A gallery page that dynamically displays all publicly accessible GitHub repositories belonging to a specific user (kripple).',
    sourceUrl: 'https://github.com/kripple/repos',
    url: 'https://kripple.github.io/repos',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['Node.js'],
      tags['RTK Query'],
      tags['GitHub API'],
    ],
  },

  tntLaserWorks: {
    title: 'TNT Laser Works',
    date: [Month.February, 2025],
    blurb:
      'Redesigned site to support and elevate the growing Sage Stones brand.',
    url: 'https://tntlaserworks.com',
    tags: [tags.JavaScript, tags.CSS, tags.Squarespace, tags.eCommerce],
  },

  klinky: {
    title: 'klinky.link',
    date: [Month.August, 2025],
    blurb:
      'A simple link shortener that requires no account and performs no analytics.',
    sourceUrl: 'https://github.com/kripple/klinky',
    url: 'https://klinky.link',
    tags: [
      tags.React,
      tags.TypeScript,
      tags.daisyUI,
      tags['Node.js'],
      tags.PostgreSQL,
      tags['Edge Functions'],
    ],
  },
} as const;

const toNumber = ([month, year]: ProjectDate) => year * 100 + month;
const sorted = (Object.keys(projects) as ProjectKey[]).sort((keyA, keyB) => {
  const optionA = -1;
  const optionB = 1;

  // sort by most recent
  const dateA = toNumber(projects[keyA].date);
  const dateB = toNumber(projects[keyB].date);
  if (dateA > dateB) return optionA;
  if (dateB < dateA) return optionB;

  // then sort alphabetically
  // github enforces (case-insensitive) unique repo names
  return keyA < keyB ? optionA : optionB;
});

export const toDateTime = ([month, year]: ProjectDate) =>
  `${year}-${machineReadableMonths[month]}`;

export const toDateString = ([month, year]: ProjectDate) =>
  `${Month[month]} ${year}`;

type ProjectItem = Project & { key: ProjectKey };
const projectItems = sorted.reduce((result, key) => {
  const project = projects[key];
  result.push({ ...project, key });
  return result;
}, [] as ProjectItem[]);

export { projectItems as projects };
