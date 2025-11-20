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
        <h3 className="section-title blog-section-title">
          Featured blog posts
        </h3>

        <div className="blog-card-grid">
          {featured.map(({ title, publishDate, tags }) => (
            <div className="blog-card" key={title}>
              {title}, {publishDate},{' '}
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="markdown">
          <FirstPost />
        </div> */}
      </div>
    </section>
  );
}
