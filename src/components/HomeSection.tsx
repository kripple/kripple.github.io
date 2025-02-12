import { HeaderSpacer } from '@/components/HeaderSpacer';
import { Icon } from '@/components/Icon';
import { Image } from '@/components/Image';
import { config } from '@/data/config';

import '@/components/home-section.css';

export function HomeSection() {
  return (
    <section className="home-section section" id="home">
      <HeaderSpacer />
      <Image alt={config.name} src={config.photo} />
      <h1 className="name">{config.name}</h1>
      <h2 className="job-title">{config.jobTitle}</h2>
      <div className="icon-set">
        <Icon icon="github" />
        <Icon icon="linkedin" />
        <Icon icon="email" />
      </div>
    </section>
  );
}
