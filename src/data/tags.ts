export const tagsList = [
  /* categories */
  'Game Development',

  /* concepts / patterns */
  'Object-Oriented Programming (OOP)',

  /* apis */
  'GitHub API',
  'Dictionary API',

  /* specific */
  'Cloudflare Workers',
  'Cloudflare Pages',
  'GitHub Pages',
  'HTML Canvas',

  /* web development */
  'HTML',
  'CSS',
  'CSS Flexbox',
  'CSS Grid',
  'Media Queries',
  'Responsive Design',
  'Material UI',
  'Design Systems',
  'Web Accessibility (a11y)',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'RTK Query',
  'React Router',
  'React Hooks',
  'React Context API',
  'Client-Side State Management',
  'Web Workers',
  'API Integrations',

  /* server-side */
  'Node.js',
  'Ruby',
  'Ruby on Rails',
  'AWS',
  'Databases',
  'SQL',
  'NoSQL',

  /* bundle, test, deploy, optimize, maintain */
  'Modern Development Tools',
  'GitHub Actions',
  'Version Control with Git & GitHub',
  'CI/CD Pipelines',
  'Static Site Generation (SSG)',
  'Shell Scripting',
  'Unit & Integration Testing',
  'API Mocking',
  'Cross-Browser Compatibility',
  'Lighthouse Performance Optimization',
  'Image Manipulation & Optimization',
  'Human-Readable Code / Domain-Driven Design (DDD)',
  'Infrastructure as Code (IaC)',
] as const;

export type Tag = Union<typeof tagsList>;

// Create a mapped type that enforces key === value
type TagMap = {
  [K in Tag]: K;
};
export const tags = tagsList.reduce<TagMap>((result, tag) => {
  (result as Record<string, string>)[tag] = tag;
  return result;
}, {} as TagMap);
