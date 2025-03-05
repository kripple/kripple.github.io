import { Icon } from '@/components/Icon';
import { ProjectLink } from '@/components/ProjectLink';
import { ProjectTags } from '@/components/ProjectTags';
import type { Tag } from '@/data/tags';

import '@/components/project-links.css';

export function ProjectLinks({
  apiSrcUrl,
  apiUrl,
  githubUrl,
  placeholder,
  tags,
  title,
}: {
  apiSrcUrl: string | undefined;
  apiUrl: string | undefined;
  githubUrl: string;
  placeholder: boolean;
  tags: Tag[];
  title: string;
}) {
  return (
    <div
      className={`project-links-section ${placeholder ? 'placeholder' : ''}`}
    >
      <ProjectTags tags={tags} />

      <div className="project-links">
        <ProjectLink
          ariaLabel={`Link to source code: ${title}`}
          label="Source"
          placeholder={placeholder}
          url={githubUrl}
        >
          <Icon icon="github" />
        </ProjectLink>

        {apiUrl && apiSrcUrl ? (
          <div className="api-links">
            <ProjectLink
              ariaLabel={`Link to API: ${title}`}
              label="API"
              placeholder={placeholder}
              url={apiUrl}
            >
              <Icon icon="api" />
            </ProjectLink>
            |
            <ProjectLink
              ariaLabel={`Link to API source code: ${title}`}
              label="Source"
              placeholder={placeholder}
              url={apiSrcUrl}
            ></ProjectLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
