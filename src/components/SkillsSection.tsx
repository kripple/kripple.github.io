// import { Icon } from '@/components/Icon';
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
          <h4 className="section-subtitle">{title}</h4>
          <ul className="skills-list">
            {list.map(({ label, tags }) => {
              return (
                <li className="skill-item-list" key={label}>
                  <span className="skill-label">
                    {label}
                    {/* <button className="skill-button">
                      <Icon icon="plus" />
                    </button> */}
                  </span>
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
