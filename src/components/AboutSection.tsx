// import { Fragment } from 'react';

import { Photo } from '@/components/Photo';
import { SkillsSection } from '@/components/SkillsSection';
import { config } from '@/content/config';
import { ids } from '@/content/sections';

import '@/components/about-section.css';

export function AboutSection() {
  // const hobbies = [
  //   ['🖥️', 'Writing Code'],
  //   ['🌱', 'Tending House Plants'],
  //   ['🍿', 'Watching Anime'],
  //   ['🎲', 'Playing Tabletop Games'],
  //   ['📚', 'Reading Books'],
  // ] as const;

  return (
    <section className="section about-section" id={ids.about}>
      <h3 className="section-title">About</h3>

      <div className="about-section-content">
        <p className="paragraph">
          {`I'm a fullstack software engineer with over ${config.yearsOfExperience} years of professional experience. I specialize in frontend web development using React and TypeScript. While looking for my next full-time role, I'm staying active by strengthening my skills through freelance and personal projects.`}
        </p>

        {/* <p className="paragraph">
          I live and work in Northern Virginia and I often spend my free time{' '}
          {hobbies.map(([emoji, hobby], index) => (
            <Fragment key={index}>
              {index === 0
                ? ''
                : index === hobbies.length - 1
                  ? ', and '
                  : ', '}
              <span className="emoji">{emoji}</span>&nbsp;{hobby.toLowerCase()}
            </Fragment>
          ))}
          .
        </p> */}

        <Photo />
      </div>

      <SkillsSection />
    </section>
  );
}
