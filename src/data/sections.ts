import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';

export const ids = {
  themeToggle: 'theme-toggle',
  menuButton: 'menu-button',
  home: 'home',
  about: 'about',
  contact: 'contact',
  projects: 'portfolio',
  skills: 'skills',
} as const;

export const sections = {
  [ids.projects]: {
    Component: ProjectsSection,
    id: ids.projects,
  },
  [ids.about]: {
    Component: AboutSection,
    id: ids.about,
  },
  [ids.skills]: {
    Component: SkillsSection,
    id: ids.skills,
  },
  [ids.contact]: {
    Component: ContactSection,
    id: ids.contact,
  },
} as const;
export type Section = keyof typeof sections;
