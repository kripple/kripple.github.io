import photo from '@/assets/kelly-ripple-circle.png';

const startYear = 2016; /* Started in December 2015, use 2016 as start year. */
const currentYear =
  new Date().getFullYear() - 1; /* Don't include current year. */
const yearsOfExperience = currentYear - startYear;
/**
 * 3 years @ BTI360
 * 1 year @ Capital One
 * 4 years @ Custom Ink
 * ~ 3 mos freelance (Nov 2024 - Feb 2025)
 */

export const config = {
  photo,
  name: 'Kelly Ripple',
  // jobTitle: 'Frontend Engineer',
  jobTitle: 'Fullstack Engineer',
  yearsOfExperience,
  email: 'hello@kellyripple.com',
  github: 'kripple',
  linkedin: 'kellymripple',
} as const;

const github = `https://github.com/${config.github}` as const;
const linkedin = `https://www.linkedin.com/in/${config.linkedin}` as const;
export const socialLinks = {
  github: {
    key: 'github',
    href: github,
    label: `@${config.github}`,
    title: 'GitHub',
    value: github,
  },
  linkedin: {
    key: 'linkedin',
    href: linkedin,
    label: `/in/${config.linkedin}`,
    title: 'LinkedIn',
    value: linkedin,
  },
  email: {
    key: 'email',
    href: `mailto:${config.email}`,
    label: config.email,
    title: 'Email',
    value: config.email,
  },
} as const;
