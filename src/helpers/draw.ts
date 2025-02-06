import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pathfit = require('pathfit');

function draw({
  drawPath,
  viewBox,
  width,
  height,
}: {
  drawPath: string;
  viewBox: string;
  width: number;
  height: number;
}) {
  const pathfit = new Pathfit({ viewBox }, undefined, drawPath);
  return pathfit.scale_with_aspect_ratio(width, height);
}

/**
 * Example Usage: `npm run draw`
 */
const minX = 0;
const minY = 0;
const width = 24;
const height = 24;
const drawPath = 'M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 50 10';
const viewBox = '0 0 100 100';
console.log(
  `Draw SVG for desired viewBox: "${viewBox}" ⭢  "${minX} ${minY} ${width} ${height}"`,
);
console.log(`
  ${draw({ drawPath, viewBox, width, height })}
`);
