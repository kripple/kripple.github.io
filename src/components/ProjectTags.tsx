import type { Tag } from '@/content/tags';

import '@/components/project-tags.css';

export function ProjectTags({ tags }: { tags: Tag[] }) {
  return (
    <ul className="project-tags">
      {tags.map((tag) => {
        return (
          <li className="project-skill-tag" key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
