import type { Tag } from '@/data/tags';
import { tags } from '@/data/tags';
import { Month, type ProjectDate } from '@/types/dates';

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
  color?: string;
};

const cckb: Project = {
  title: 'Cricket Creek',
  subtitle: 'Kitchens & Baths',
  date: [Month.Dec, 2024],
  blurb:
    'Migrated a WordPress site to a modern static React application, eliminating ongoing hosting costs while improving performance and maintainability.',
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
  color: '#019934',
};

const codebreaker: Project = {
  title: 'Code:Breaker',
  date: [Month.Jun, 2025],
  blurb:
    'A daily-play code-breaking game based on the board game Mastermind. Players use deductive reasoning to solve a new code each day through a process of systematic elimination.',
  sourceUrl: 'https://github.com/kripple/codebreaker',
  url: 'https://kripple.github.io/codebreaker',
  tags: [
    tags.React,
    tags.TypeScript,
    tags['Node.js'],
    tags.PostgreSQL,
    tags['Edge Functions'],
  ],
};

const guessTheWord: Project = {
  title: 'Mysticabulary',
  date: [Month.Feb, 2025],
  blurb: 'An interactive word guessing game with a fixed number of guesses.',
  sourceUrl: 'https://github.com/kripple/guess-the-word',
  url: 'https://kripple.github.io/guess-the-word',
  tags: [
    tags.React,
    tags.TypeScript,
    tags['Dictionary API'],
    tags['Game Development'],
  ],
};

const mapSlicer: Project = {
  title: 'Map Slicer',
  date: [Month.Sep, 2024],
  blurb:
    'A web application that divides large images into printable sections for multi-page printing. Features configurable page sizes, tile dimensions, and margin settings for precise layout control.',
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
};

const pokematch: Project = {
  title: 'Pokématch',
  date: [Month.Jan, 2025],
  blurb:
    'A memory game built with object-oriented programming techniques. Can be installed as a Chrome app (or similar) for offline play.',
  sourceUrl: 'https://github.com/kripple/pokematch',
  url: 'https://kripple.github.io/pokematch',
  tags: [
    tags.JavaScript,
    tags['Game Development'],
    tags.Pokémon,
    tags['Available Offline'],
  ],
};

const repos: Project = {
  title: 'Repo Gallery',
  date: [Month.Jan, 2025],
  blurb:
    'A personal GitHub repository gallery that that lists, sorts, and filters my public repositories.',
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
};

const tntLaserWorks: Project = {
  title: 'TNT Laser Works',
  date: [Month.Feb, 2025],
  blurb:
    'Redesigned online store to support and elevate the growing Sage Stones brand. TNT Laser Works are the home of Sage Stones, a strategic board game, and other custom laser-cut gaming accessories.',
  url: 'https://tntlaserworks.com',
  tags: [tags.JavaScript, tags.CSS, tags.Squarespace, tags.eCommerce],
  color: '#fef366',
};

const klinky: Project = {
  title: 'klinky.link',
  date: [Month.Aug, 2025],
  blurb:
    'Link shortener that requires no account and performs no analytics. Built to demo full-stack application architechture.',
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
  color: '#422ad5',
};

export const featuredProjects = {
  repos,
  klinky,
  tntLaserWorks,
  mapSlicer,
} as const;

export const additionalProjects = {
  codebreaker,
  cckb,
  pokematch,
  guessTheWord,
} as const;

export const projects = {
  ...featuredProjects,
  ...additionalProjects,
} as const;
