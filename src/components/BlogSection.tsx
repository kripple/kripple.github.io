import { meta as firstPost } from '@/blog-posts/2025-11-20-first-post';
// import FirstPost from '@/blog-posts/2025-11-20-first-post.mdx';
import { ids } from '@/content/sections';

import '@/components/blog-section.css';
import '@/assets/markdown.css';

export function BlogSection() {
  const featured = [firstPost] as const;

  return (
    <section className="section blog-section" id={ids.blog}>
      <div>
        <h3 className="section-title blog-section-title">Blog</h3>

        <div className="blog-list">
          {featured.map(({ title, publishDate, tags }) => (
            <article className="blog-item" key={title}>
              <h4 className="blog-title">{title}</h4>
              <time className="blog-date">{publishDate}</time>
              <div className="blog-tags">
                {tags.map((tag) => (
                  <span className="blog-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* <div className="markdown">
          <FirstPost />
        </div> */}
      </div>
    </section>
  );
}
