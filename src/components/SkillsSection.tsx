import { HeaderSpacer } from '@/components/HeaderSpacer';
import { ids } from '@/data/config';

import '@/components/skills-section.css';

// HTML, CSS, Flexbox, CSS Grid, Media Queries, Responsive Design, Material UI, Design Systems
// JavaScript, TypeScript, React, Redux, RTK Query, React Router, React Hooks, React Context API
// Git, GitHub, GitHub Actions, Version Control, CI/CD Pipeline, SSG

// OOP
// RESTful APIs
// API Integrations
// Node.js
// Ruby, Ruby on Rails
// AWS Services
// Shell Scripting
// Lighthouse, Performance Optimization, Web Accessibility (a11y)
// Web Workers, Service Workers
// Databases, SQL, NoSQL

export function SkillsSection() {
  return (
    <section className="section skills-section" id={ids.skills}>
      <HeaderSpacer />
      <h3 className="section-title">Skills</h3>
      <div className="skills-list">
        {/* {skills.map(({ title, subtitle, description }, index) => (
          <div className={`skill-block skill-block-${index + 1}`} key={index}>
            <h4 className="skill-title">
              <span>*</span>
              {title} {subtitle}
            </h4>
            <p className="skill-description">{description}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
}
