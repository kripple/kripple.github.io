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
  jobTitle: 'Frontend Engineer',
  yearsOfExperience,
  email: 'email@kellyripple.com',
  github: 'kripple',
  linkedin: 'kellymripple',
} as const;
