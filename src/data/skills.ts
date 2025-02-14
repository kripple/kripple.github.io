export const skills = [
  {
    title: 'Languages',
    skills: [
      {
        label: 'Client-Side Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      },
      {
        label: 'Server-Side Technologies',
        items: ['Node.js', 'Ruby', 'Ruby on Rails'],
      },
      {
        label: 'Command Line',
        items: ['Shell Scripting'],
      },
      {
        label: 'Databases',
        items: ['SQL', 'NoSQL'],
      },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      {
        label: 'JavaScript Frameworks',
        items: ['React', 'Angular', 'Vue'],
      },
      {
        label: 'React Ecosystem',
        items: [
          'Redux',
          'RTK Query',
          'React Router',
          'React Hooks',
          'React Context API',
        ],
      },
      {
        label: 'CSS Frameworks',
        items: ['Bootstrap', 'Tailwind', 'Material UI'],
      },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {
        label: 'Version Control',
        items: ['Git', 'Github'],
      },
      {
        label: 'CI/CD',
        items: ['GitHub Actions'],
      },
      {
        label: 'Cloud Service Providers',
        items: ['AWS'],
      },
      {
        label: 'Build Tools',
        items: ['Vite', 'Rollup', 'NPM'],
      },
      {
        label: 'Image Manipulation',
        items: ['Sharp', 'Inkscape'],
      },
    ],
  },
  {
    title: 'Testing',
    skills: [
      {
        label: 'Performance Optimization',
        items: ['Lighthouse'],
      },
      {
        label: 'Web Accessibility (a11y)',
        items: ['WAVE'],
      },
      {
        label: 'Unit & Integration Testing',
        items: ['Jest', 'Vitest', 'React Testing Library'],
      },
      {
        label: 'API Mocking',
        items: ['Mock Service Worker (MSW)'],
      },
    ],
  },
] as const;
