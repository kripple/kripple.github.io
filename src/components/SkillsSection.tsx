import { HeaderSpacer } from '@/components/HeaderSpacer';
import { ProjectTags } from '@/components/ProjectTags';
import { ids } from '@/data/config';
import type { Tag } from '@/data/tags';

import '@/components/skills-section.css';

export function SkillsSection() {
  const webDevelopment: Tag[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'RTK Query',
    'Responsive Design',
  ] as const;
  const bundleTestDeployOptimizeMaintain: Tag[] = [
    'Version Control with Git & GitHub',
    'GitHub Actions',
    'CI/CD Pipelines',
    'Unit & Integration Testing',
    'API Mocking',
    'Lighthouse Performance Optimization',
    'Image Manipulation & Optimization',
  ] as const;
  const serverSide: Tag[] = [
    'Node.js',
    'Ruby',
    'Ruby on Rails',
    'AWS',
    'Databases',
    'SQL',
    'NoSQL',
  ] as const;

  return (
    <section className="section skills-section" id={ids.skills}>
      <HeaderSpacer />
      <h3 className="section-title">Skills</h3>

      {/* <p className="paragraph">
        I have a wide range of skills that cover both front-end and back-end
        technologies.
      </p> */}

      <h4 className="section-subtitle">Web Development Areas of Expertise</h4>
      {/* <p className="paragraph">I specialize in the following:</p> */}
      <ProjectTags tags={webDevelopment} />

      <h4 className="section-subtitle">
        Bundle, Test, Deploy, Optimize, and Maintain
      </h4>
      <p className="paragraph">
        {`There's more to web development than writing application code. I also have expertise with the following:`}
      </p>
      <ProjectTags tags={bundleTestDeployOptimizeMaintain} />

      <h4 className="section-subtitle">Server-Side</h4>
      <p className="paragraph">
        I specialize on the front end, but I have experience working across the
        stack. These are the server-side technologies I have experience with:
      </p>
      <ProjectTags tags={serverSide} />
    </section>
  );
}
