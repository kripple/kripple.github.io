import { SocialIcon } from '@/components/SocialIcon';

import '@/components/home-section.css';

export function HomeSection() {
  return (
    <section className="home-section section" id="home">
      <div className="icon-set">
        <SocialIcon icon="github" />
        <SocialIcon icon="linkedin" />
        <SocialIcon icon="email" />
      </div>
    </section>
  );
}
