import type { Tag } from '@/data/tags';

import '@/components/project-tags.css';

export function ProjectTags({ tags }: { tags: Tag[] }) {
  return (
    <ul className="project-tags">
      {tags.map((tag) => {
        const start = tag.indexOf('(');
        const end = tag.indexOf(')');
        const shortTag =
          start !== -1 && end !== -1 ? tag.substring(start + 1, end) : tag;

        return (
          <li className="project-skill-tag" key={tag}>
            {shortTag !== tag ? (
              <span className="collapsible">
                <span className="collapse">{`${tag.split(' (')[0]} (`}</span>
                <span>{shortTag}</span>
                <span className="collapse">)</span>
              </span>
            ) : (
              tag
            )}
          </li>
        );
      })}
    </ul>
  );
}
