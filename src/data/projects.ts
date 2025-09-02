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
