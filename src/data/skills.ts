import { tags } from '@/data/tags';

export const skills = [
  {
    title: 'Languages',
    skills: [
      {
        label: 'Client-Side Languages',
        tags: [tags.HTML, tags.CSS, tags.JavaScript, tags.TypeScript],
      },
      {
        label: 'Server-Side Technologies',
        tags: [tags['Node.js'], tags.Ruby, tags['Ruby on Rails']],
      },
      {
        label: 'Command Line',
        tags: [tags['Shell Scripting']],
      },
      {
        label: 'Databases',
        tags: [tags.SQL, tags.NoSQL],
      },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      {
        label: 'JavaScript Frameworks',
        tags: [tags.React, tags.Angular, tags.Vue, tags['Next.js']],
      },
      {
        label: 'React Ecosystem',
        tags: [
          tags.Redux,
          tags['RTK Query'],
          tags['React Router'],
          tags['React Hooks'],
          tags['React Context API'],
        ],
      },
      {
        label: 'UI Libraries',
        tags: [tags['Material UI'], tags.daisyUI],
      },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {
        label: 'Version Control',
        tags: [tags.Git, tags.GitHub],
      },
      {
        label: 'CI/CD',
        tags: [tags['GitHub Actions']],
      },
      {
        label: 'Cloud Providers',
        tags: [tags.AWS, tags.Cloudflare],
      },
      {
        label: 'Build Tools',
        tags: [tags.Vite, tags.Rollup, tags.NPM],
      },
      {
        label: 'Image Manipulation',
        tags: [tags.Sharp, tags.Inkscape, tags['D3.js']],
      },
    ],
  },
  {
    title: 'Testing',
    skills: [
      {
        label: 'Performance Optimization',
        tags: [tags.Lighthouse],
      },
      {
        label: 'Web Accessibility (a11y)',
        tags: [tags.WAVE],
      },
      {
        label: 'Unit & Integration Testing',
        tags: [
          tags.Jest,
          tags.Vitest,
          tags['React Testing Library'],
          tags.Playwright,
        ],
      },
      {
        label: 'API Mocking',
        tags: [tags['Mock Service Worker (MSW)']],
      },
    ],
  },
] as const;
