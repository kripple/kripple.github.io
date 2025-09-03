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
  category: 'fullstack' | 'frontend' | 'squarespace' | 'wordpress' | 'next.js';
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
  category: 'wordpress',
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
  category: 'fullstack',
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
  color: '#880088',
  category: 'fullstack',
};

const mapSlicer: Project = {
  title: 'Map Slicer',
  date: [Month.Sep, 2024],
  blurb:
    'Divides large images into printable sections for multi-page printing. Features configurable page sizes, tile dimensions, and margin settings for precise layout control. Built using React, TypeScript, HTML Canvas, and Material UI.',
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
  category: 'frontend',
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
  category: 'frontend',
};

const repos: Project = {
  title: 'Repo Gallery',
  date: [Month.Jan, 2025],
  blurb:
    'A dynamic portfolio showcase that fetches and displays my GitHub projects with real-time filtering and sorting capabilities. Built with React and TypeScript to demonstrate external API integration and interactive data presentation.',
  sourceUrl: 'https://github.com/kripple/repos',
  url: 'https://kripple.github.io/repos',
  tags: [
    tags.React,
    tags.TypeScript,
    tags['Node.js'],
    tags['RTK Query'],
    tags['GitHub API'],
  ],
  category: 'fullstack',
};

const tntLaserWorks: Project = {
  title: 'TNT Laser Works',
  date: [Month.Feb, 2025],
  blurb:
    'Complete e-commerce redesign for a family-owned tabletop gaming business looking to expand their reach. TNT Laser Works is the home of Sage Stones, a strategic board game played on a laser-engraved wooden game board.',
  url: 'https://tntlaserworks.com',
  tags: [tags.JavaScript, tags.CSS, tags.Squarespace, tags.eCommerce],
  color: '#fef366',
  category: 'squarespace',
};

const klinky: Project = {
  title: 'klinky.link',
  date: [Month.Aug, 2025],
  blurb:
    'A minimalist link shortener that requires no account creation and performs no user analytics or click tracking. Built with React, TypeScript, Node.js, PostgreSQL, and daisyUI to showcase full-stack application architecture and API design.',
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
  category: 'fullstack',
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
