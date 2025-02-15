import { config } from '@/data/config';
import { ids } from '@/data/sections';

import '@/components/about-section.css';

export function AboutSection() {
  const hobbies = [
    ['🖥️', 'Writing Code'],
    ['🌱', 'Tending House Plants'],
    ['🍿', 'Watching Anime'],
    ['🎲', 'Playing Tabletop Games'],
    ['📚', 'Reading Books'],
  ] as const;

  return (
    <section className="section about-section" id={ids.about}>
      <h3 className="section-title about-section-title">About</h3>

      <div className="about-section-content">
        <p className="paragraph">
          {`I'm a fullstack software engineer with over ${config.yearsOfExperience} years of full-time experience. I specialize in frontend web development using React and TypeScript.`}
        </p>

        <p className="paragraph">
          I am a Maryland native and am currently based in Northern Virginia. I
          often spend my free time{' '}
          {hobbies.map(([emoji, hobby], index) => (
            <span className="hobby" key={index}>
              <span className="emoji">{emoji}</span>&nbsp;{hobby}
            </span>
          ))}
          .
        </p>

        <p className="paragraph">
          {`I have had the privilege of working with many talented professionals over the course of my career. Past teammates have described me as a "highly effective and autonomous engineer." I’m currently spending my time on freelance and personal projects, but I’m actively seeking my next full-time role and am available to start immediately. If you know of any opportunities that might be a good fit, I’d love to hear from you! I can be reached by email at ${config.email}.`}
        </p>
      </div>
    </section>
  );
}
