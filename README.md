# kripple.github.io

A personal portfolio built with React, TypeScript, and Vite.

## Getting Started

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The dev server opens automatically at `http://localhost:5173`.

## Building

Build the site for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch. The workflow runs when changes are made to the `docs/` directory or by triggering the build manually using the GitHub UI.

See `.github/workflows/deploy.yml` for details.

## Site Generation

This website is built using Vite as a static site generator (SSG). Files are compiled at build time, and the resulting HTML is output to the `docs/` directory for hosting via GitHub Pages + my custom domain. The site is designed to function with or without JavaScript, though some features may require it in the future.

## Available Scripts

- `npm start` - Start the dev server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint, Stylelint, and Prettier checks
- `npm test` - Run Playwright tests
- `npm run update` - Update Playwright test snapshots
- `npm run lighthouse` - Run Lighthouse audits

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **MDX** - Markdown with React components
- **Playwright** - Testing
- **ESLint, Prettier, Stylelint** - Code quality

## Project Structure

- `src/` - Source code (React components, styles, helpers)
- `docs/` - Generated static site (output from build)
- `public/` - Static assets
- `tests/` - Playwright test files
