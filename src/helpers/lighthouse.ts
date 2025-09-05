import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

const url =
  process.env.LIGHTHOUSE_URL || ('https://kripple.github.io' as const);
const port = 9222 as const;
const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-gpu',
    '--disable-infobars',
    '--disable-setuid-sandbox',
    '--no-sandbox',
    '--no-zygote',
    `--remote-debugging-port=${port}`,
  ],
});
const result = await lighthouse(url, { port });
if (!result) throw Error('failed to create lighthouse report');

for (const category in result.lhr.categories) {
  const draft = result.lhr.categories[category].score;
  if (!draft) throw Error(`missing score for '${category}' category`);

  const defaultThreshold = 100 as const;
  const performanceThreshold = 99 as const;

  const score = draft * 100;
  if (
    (category !== 'performance' && score < defaultThreshold) ||
    (category === 'performance' && score < performanceThreshold)
  ) {
    throw Error(`failed ${category} audit with a score of ${score}`);
  }
  console.info(`${category}: ${score}`);
}

await browser.close();
