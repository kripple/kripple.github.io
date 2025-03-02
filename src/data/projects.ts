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
  githubUrl: string;
  websiteUrl: string;
  apiUrl?: string;
  apiSrcUrl?: string;
};

const toSrc = (key: ProjectKey) => `https://github.com/kripple/${key}`;
const toHref = (key: ProjectKey) => `https://kripple.github.io/${key}`;

const projects: { [key in ProjectKey]: Project } = {
  cckb: {
    title: 'Cricket Creek',
    subtitle: 'Kitchens & Baths',
    date: [Month.December, 2024],
    blurb:
      'Rebuilt cckb.net as a static site, eliminating annual hosting costs.',
    githubUrl:
      'https://github.com/cricket-creek-kitchens-and-baths/cricket-creek-kitchens-and-baths.github.io',
    websiteUrl: 'https://cckb.net',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['React Router'],
      tags['Cloudflare'],
      tags.WordPress,
    ],
  },
  'guess-the-word': {
    title: 'Mysticabulary',
    date: [Month.February, 2025],
    blurb: 'An interactive word guessing game with a fixed number of guesses.',
    githubUrl: toSrc('guess-the-word'),
    websiteUrl: toHref('guess-the-word'),
    tags: [
      tags.React,
      tags.TypeScript,
      tags['Dictionary API'],
      tags['Game Development'],
    ],
  },
  'map-slicer': {
    title: 'Map Slicer',
    date: [Month.September, 2024],
    blurb: 'Map Slicer lets you print large images across multiple pages.',
    description:
      'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
    githubUrl: toSrc('map-slicer'),
    websiteUrl: toHref('map-slicer'),
    tags: [
      tags.React,
      tags.TypeScript,
      tags['HTML Canvas'],
      tags['React Context API'],
      tags['Material UI'],
    ],
  },
  pokematch: {
    title: 'Pokématch',
    date: [Month.January, 2025],
    blurb: 'A memory game built with object-oriented programming techniques.',
    githubUrl: toSrc('pokematch'),
    websiteUrl: toHref('pokematch'),
    tags: [tags.JavaScript, tags['Game Development'], tags.Pokémon],
  },
  repos: {
    title: 'Repo Gallery',
    date: [Month.January, 2025],
    blurb:
      'A GitHub repository gallery that lists, sorts, and filters public repos.',
    description:
      'A gallery page that dynamically displays all publicly accessible GitHub repositories belonging to a specific user (kripple).',
    githubUrl: toSrc('repos'),
    websiteUrl: toHref('repos'),
    apiUrl: 'https://api.kellyripple.com/profile',
    apiSrcUrl: 'https://github.com/kripple/cloudflare-workers',
    tags: [
      tags.React,
      tags.TypeScript,
      tags['GitHub API'],
      tags['Node.js'],
      tags['Cloudflare'],
      tags['RTK Query'],
    ],
  },
  'web-colors': {
    title: 'Web Colors',
    date: [Month.November, 2024],
    blurb: 'Web Colors lists CSS color names with their HEX and RGB values.',
    description:
      'Web Colors is a sleek, responsive web app that showcases all available CSS color names with their HEX and RGB values in a clean, visually appealing grid layout.',
    githubUrl: toSrc('web-colors'),
    websiteUrl: toHref('web-colors'),
    tags: [tags.React, tags.TypeScript, tags['Material UI']],
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
