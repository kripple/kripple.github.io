// import { AboutSection } from '@/components/AboutSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { ProjectsSection } from '@/components/ProjectsSection';

export const ids = {
  themeToggle: 'theme-toggle',
  menuToggle: 'menu-toggle',
  home: 'portfolio',
  about: 'about',
  contact: 'contact',
  projects: 'portfolio',
  skills: 'skills',
  blog: 'blog',
} as const;

export const sections = {
  [ids.projects]: {
    Component: ProjectsSection,
    id: ids.projects,
    navId: `nav-link-${ids.projects}`,
  },
  [ids.blog]: {
    Component: BlogSection,
    id: ids.blog,
    navId: `nav-link-${ids.blog}`,
  },
  // [ids.about]: {
  //   Component: AboutSection,
  //   id: ids.about,
  //   navId: `nav-link-${ids.about}`,
  // },
  [ids.contact]: {
    Component: ContactSection,
    id: ids.contact,
    navId: `nav-link-${ids.contact}`,
  },
} as const;
export type Section = keyof typeof sections;
