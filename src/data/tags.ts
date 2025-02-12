export enum Tag {
  'GitHub API',
  'Dictionary API',
  'Cloudflare Workers',
  'Game Development',
  'HTML Canvas',
  'JavaScript',
  'Material UI',
  'Node.js',
  'Object-Oriented Programming (OOP)',
  'PDFs',
  'RTK Query',
  'React',
  'React Router',
  'Responsive Design',
  'Static Site Generation (SSG)',
  'TypeScript',
}

const filters = {
  api: {
    label: 'API',
    hasTags: [Tag['Dictionary API'], Tag['GitHub API']],
  },
};
