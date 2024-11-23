import { type Union } from '@/types';

import '@/components/Projects.css';

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export function Projects() {
  const keys = ['concentration', 'hangman', 'mapSlicer', 'webColors'] as const;
  type Key = Union<typeof keys>;
  type Project = {
    title: string;
    date: [Month, number];
    blurb: string;
    description?: string;
    link: string;
    // tags?: // an optional array of Tag types
  };

  const projects: { [key in Key]: Project } = {
    concentration: {
      title: 'Concentration',
      date: [Month.October, 2019] as const,
      blurb: 'A Pokémon themed memory game.',
      link: 'concentration',
    },
    hangman: {
      title: 'Hangman',
      date: [Month.July, 2015] as const,
      blurb:
        'I made this game while I was first learning how to use Javascript.',
      description:
        'I made this game while I was first learning how to use Javascript. This is, in fact, the first JavaScript application I ever completed. Many of the target words were sourced from the Dictionary of Obscure Sorrows.',
      link: 'hangman',
    },
    mapSlicer: {
      title: 'Map Slicer',
      date: [Month.September, 2024] as const,
      blurb:
        'Map Slicer allows you to print images that are too large to fit on a single page.',
      description:
        'Map Slicer is a powerful tool that lets you print poster size images at home using a standard printer. With configurable settings for page size, margins, and DPI, it automatically selects the best layout (portrait or landscape) to minimize page usage. In just a few clicks, you can generate a ready-to-print PDF—whether for your next game, art project, or other creative pursuit.',
      link: 'map-slicer',
    },
    webColors: {
      title: 'Web Colors',
      date: [Month.November, 2024] as const,
      blurb:
        'Web Colors showcases all available CSS color names along with their HEX and RGB values.',
      description:
        'Web Colors is a sleek, responsive web app that showcases all available CSS color names with their HEX and RGB values in a clean, visually appealing grid layout.',
      link: 'web-colors',
    },
  };

  // Function used to determine the order of the elements. It is expected to return a negative value if the first argument (A) is less than the second argument (B), zero if they're equal, and a positive value otherwise.
  const sortedKeys = [...keys].sort((keyA, keyB) => {
    const {
      title: titleA,
      date: [monthA, yearA],
    } = projects[keyA];
    const {
      title: titleB,
      date: [monthB, yearB],
    } = projects[keyB];

    // most recent first
    if (yearA > yearB) return -1;
    if (yearA < yearB) return 1;

    if (monthA > monthB) return -1;
    if (monthA < monthB) return 1;

    // if month & year are equal, sort alphabetically
    return titleA.toLowerCase() < titleB.toLowerCase() ? -1 : 1;
  });

  return (
    <section className="card-grid">
      {sortedKeys.map((key) => {
        const {
          title,
          date: [month, year],
          blurb,
          link,
        } = projects[key];
        const style = {
          order: 0,
        };
        const href = `https://kellyripple.com/${link}`;
        return (
          <a
            className="card"
            href={href}
            key={key}
            rel="noreferrer"
            style={style}
            tabIndex={0}
            target="_blank"
          >
            <article>
              <hgroup>
                <h1 className="card-title">{title}</h1>
                <p className="card-description">{blurb}</p>
              </hgroup>
              <time className="card-date">{`${Month[month]} ${year}`}</time>
            </article>
          </a>
        );
      })}
    </section>
  );
}
