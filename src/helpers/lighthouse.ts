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
const result = await lighthouse(url, {
  port,
  skipAudits: ['robots-txt'],
});
if (!result) throw Error('failed to create lighthouse report');

for (const categoryName in result.lhr.categories) {
  const category = result.lhr.categories[categoryName];
  if (!category.score)
    throw Error(`missing score for '${categoryName}' category`);

  if (category.score !== 1) {
    console.log(`${categoryName.toUpperCase()} issues found:`);
    for (const auditRef of category.auditRefs) {
      const audit = result.lhr.audits[auditRef.id];
      if (audit.score !== 1 && audit.score !== null) {
        console.log(`❌ ${audit.title}: ${audit.description}`);
        if (audit.details) {
          console.log('Details:', JSON.stringify(audit.details, null, 2));
        }
      }
    }
    throw Error(
      `failed ${categoryName} audit with a score of ${category.score * 100}`,
    );
  }
}

await browser.close();
