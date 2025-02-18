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
const width = 6;
const height = 7;
const drawPath =
  'M12.014 0A12 10.294 90 0 0 1.72 12a12 10.294 90 0 0 10.294 12A12 10.294 90 0 0 22.28 11.972 12 10.294 90 0 0 12.014 0zm0 3.44A8.56 6.853 90 0 1 18.867 12a8.56 6.853 90 0 1-6.853 8.56 8.56 6.853 90 0 1-6.853-8.532 8.56 6.853 90 0 1 6.853-8.587z';
const viewBox = '0 0 24 24';
console.log(
  `Draw SVG for desired viewBox: "${viewBox}" ⭢  "${minX} ${minY} ${width} ${height}"`,
);
console.log(`
  ${draw({ drawPath, viewBox, width, height })}
`);
