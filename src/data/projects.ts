import type { ProjectKey, ProjectUrls } from '@/data/project-images';
import { urls } from '@/data/project-images';
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
  date: ProjectDate;
  blurb: string;
  description?: string;
  tags: Tag[];
  githubUrl?: string /* undefined for private projects */;
  websiteUrl: string;
  apiUrl?: string;
  apiSrcUrl?: string;
  images: ProjectUrls;
};

const toSrc = (key: ProjectKey) => `https://github.com/kripple/${key}`;
const toHref = (key: ProjectKey) => `https://kellyripple.com/${key}`;

const projects: { [key in ProjectKey]: Project } = {
  cckb: {
    title: 'Cricket Creek Kitchens & Baths',
    date: [Month.December, 2024],
    images: urls['cckb'],
    blurb:
      'Converted a WordPress site into a static single-page app for use with free hosting providers.',
    githubUrl:
      'https://github.com/cricket-creek-kitchens-and-baths/cricket-creek-kitchens-and-baths.github.io',
    websiteUrl: 'https://cckb.net',
    tags: [
      tags.HTML,
      tags.CSS,
      tags.React,
      tags.TypeScript,
      tags['React Router'],
      tags['Static Site Generation (SSG)'],
      tags['Cloudflare Pages'],
    ],
  },
  'guess-the-word': {
    title: 'Mysticabulary',
    date: [Month.February, 2025],
    images: urls['guess-the-word'],
    blurb: 'A word guessing game.',
    githubUrl: toSrc('guess-the-word'),
    websiteUrl: toHref('guess-the-word'),
    tags: [
      tags.HTML,
      tags.CSS,
      tags.React,
      tags.TypeScript,
      tags['Dictionary API'],
      tags['Game Development'],
      tags['React Hooks'],
    ],
  },
  'map-slicer': {
    title: 'Map Slicer',
    date: [Month.September, 2024],
    images: urls['map-slicer'],
    blurb:
      'Map Slicer allows you to print images that are too large to fit on a single page.',
    description:
      'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
    websiteUrl: toHref('map-slicer'),
    tags: [
      tags.HTML,
      tags.CSS,
      tags.React,
      tags.TypeScript,
      tags['React Hooks'],
      tags['React Context API'],
      tags['Web Workers'],
      tags['HTML Canvas'],
      tags['Material UI'],
    ],
  },
  pokematch: {
    title: 'Pokématch',
    date: [Month.January, 2025],
    images: urls['pokematch'],
    blurb: 'A Pokémon themed memory game.',
    githubUrl: toSrc('pokematch'),
    websiteUrl: toHref('pokematch'),
    tags: [
      tags.HTML,
      tags.CSS,
      tags.JavaScript,
      tags['Object-Oriented Programming (OOP)'],
      tags['Game Development'],
    ],
  },
  repos: {
    title: 'Repo Gallery',
    date: [Month.January, 2025],
    images: urls['repos'],
    blurb:
      'A gallery page that dynamically displays all publicly accessible GitHub repositories belonging to a specific user (kripple).',
    githubUrl: toSrc('repos'),
    websiteUrl: toHref('repos'),
    apiUrl: 'https://api.kellyripple.com/profile',
    apiSrcUrl: 'https://github.com/kripple/cloudflare-workers',
    tags: [
      tags.HTML,
      tags.CSS,
      tags.React,
      tags.TypeScript,
      tags['RTK Query'],
      tags['React Hooks'],
      tags['Node.js'],
      tags['Cloudflare Workers'],
      tags['GitHub API'],
    ],
  },
  'web-colors': {
    title: 'Web Colors',
    date: [Month.November, 2024],
    images: urls['web-colors'],
    blurb:
      'Web Colors showcases all available CSS color names along with their HEX and RGB values.',
    description:
      'Web Colors is a sleek, responsive web app that showcases all available CSS color names with their HEX and RGB values in a clean, visually appealing grid layout.',
    websiteUrl: toHref('web-colors'),
    tags: [
      tags.HTML,
      tags.CSS,
      tags.React,
      tags.TypeScript,
      tags['Material UI'],
      tags['Responsive Design'],
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

/* We have a lot of nested loops here. We would not want to run this code in production, but as part of the build process, it's okay. It's also important to note that the looped collection has fewer than 10 items. */
const removed = new Set<Tag>([]);
const projectItems = sorted.reduce((result, key) => {
  const project = projects[key];

  // remove tags that are present in every project
  const tags = project.tags.filter((tag) => {
    const always = Object.values(projects).every((projectInCollection) =>
      projectInCollection.tags.includes(tag),
    );
    if (always) removed.add(tag);
    return !always;
  });

  result.push({ ...project, key, tags });
  return result;
}, [] as ProjectItem[]);

/* Log what was removed. */
if (removed.size > 0)
  console.info(
    `%cRemoved Tags: ${[...removed.values()].join(', ')}.`,
    'color: #f3bb1b',
  );

export { projectItems as projects };
