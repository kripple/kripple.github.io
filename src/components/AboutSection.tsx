import { HeaderSpacer } from '@/components/HeaderSpacer';
import { ids } from '@/data/config';

import '@/components/about-section.css';

export function AboutSection() {
  const startYear = 2016; /* Started in December 2015, use 2016 as start year. */
  const currentYear = new Date().getFullYear() - 1; /* Don't include current year. */
  const yearsOfExperience = currentYear - startYear
  /**
   * 3 years @ BTI360
   * 1 year @ Capital One
   * 4 years @ Custom Ink
   * ~ 3 mos freelance (Nov 2024 - Feb 2025)
   */

  const paragraphs = [
    `Kelly is a full-stack software engineer specializing in front-end web development with React and TypeScript. She has ${yearsOfExperience} years of experience, primarily in the industries of finance and eCommerce.`,

    `Past teammates describe Kelly as a "highly effective and autonomous engineer." "Highly recommended."`,

    'Kelly is a Maryland native and is currently based in Northern Virginia.',
  ] as const;

  const hobbies = [
    ['🖥️', 'Writing Code'],
    ['🌱', 'Tending House Plants'],
    ['🍿', 'Watching Anime'],
    ['🎲', 'Playing Tabletop Games'],
    ['📚', 'Reading Books'],
  ] as const;

  const extras = [
    [
      { emoji: '🐈', text: 'Cats', rating: 0 },
      { emoji: '🐕', text: 'Dogs', rating: 1 },
    ],
    [
      { emoji: '☕', text: 'Coffee', rating: 1 },
      { emoji: '🍵', text: 'Tea', rating: 1 },
    ],
    [
      { emoji: '☀️', text: 'Mornings', rating: 0 },
      { emoji: '🦉', text: 'Evenings', rating: 1 },
    ],
    [
      { emoji: '🍪', text: 'Cookies', rating: 1 },
      { emoji: '🧁', text: 'Cupcakes', rating: 0 },
    ],
  ] as const;

  return (
    <section className="section about-section" id={ids.about}>
      <HeaderSpacer />
      <h3 className="section-title">About</h3>
      {paragraphs.map((content, index) => (
        <p className="paragraph" key={index}>
          {content}
        </p>
      ))}

      <h4 className="section-subtitle">Hobbies & Interests</h4>

      <div className="hobbies-section">
        <div className="hobbies">
          {hobbies.map(([emoji, hobby], index) => (
            <p className="paragraph" key={index}>
              <span className="emoji">{emoji}</span>&nbsp;{hobby}
            </p>
          ))}
        </div>

        <div className="extras">
          {extras.map(([thisOption, thatOption], index) => {
            const result =
              thisOption.rating > thatOption.rating
                ? '>'
                : thisOption.rating < thatOption.rating
                  ? '<'
                  : '===';

            if (result === '===') return null; // TODO
            return (
              <p className="paragraph" key={index}>
                <span className="emoji">{thisOption.emoji}</span>{' '}
                {thisOption.text}{' '}
                <span className="logical-operator">{result}</span>{' '}
                {thatOption.text}
                <span className="emoji-right">{thatOption.emoji}</span>
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
