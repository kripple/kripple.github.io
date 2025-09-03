import { ids } from '@/data/sections';
import { skills } from '@/data/skills';

import '@/components/skills-section.css';

export function SkillsSection() {
  return (
    <div className="skills-section" id={ids.skills}>
      <h3 className="section-title skills-section-title">Skills</h3>
      {skills.map(({ title, skills: list }) => (
        <div
          className={`skills-list-section skills-list-${title.toLowerCase()}`}
          key={title}
        >
          <p className="section-subtitle">{title}</p>
          <ul className="skills-list">
            {list.map(({ label, tags }) => {
              return (
                <li className="skill-item-list" key={label}>
                  <span className="skill-label">{label}</span>
                  {tags.map((tag) => (
                    <span className="skill-item" key={tag}>
                      {tag}
                    </span>
                  ))}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
