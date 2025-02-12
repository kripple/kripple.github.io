import { Tag } from '@/data/tags';

import '@/components/project-tags.css';

export function ProjectTags({ tags }: { tags: Tag[] }) {
  return (
    <ul className="project-tags">
      {tags.map((tag) => {
        const start = Tag[tag].indexOf('(');
        const end = Tag[tag].indexOf(')');
        const shortTag =
          start !== -1 && end !== -1
            ? Tag[tag].substring(start + 1, end)
            : Tag[tag];

        return (
          <li className="project-skill-tag" key={tag}>
            {shortTag !== Tag[tag] ? (
              <span className="collapsible">
                <span className="collapse">{`${Tag[tag].split(' (')[0]} (`}</span>
                <span>{shortTag}</span>
                <span className="collapse">)</span>
              </span>
            ) : (
              Tag[tag]
            )}
          </li>
        );
      })}
    </ul>
  );
}
