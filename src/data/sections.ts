import { AboutSection } from '@/components/AboutSection';
// import { ContactSection } from '@/components/ContactSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ids } from '@/data/config';

export const sections = {
  [ids.projects]: ProjectsSection,
  [ids.skills]: SkillsSection,
  [ids.about]: AboutSection,
  // [ids.contact]: ContactSection,
} as const;
export type Section = keyof typeof sections;
// export function isSection(value?: string): value is Section {
//   if (!value) return false;
//   return (sections as readonly string[]).includes(value);
// }
