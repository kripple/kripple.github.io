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
    '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    '--lang=en-US,en',
  ],
});
const result = await lighthouse(url, { port });
if (!result) throw Error('failed to create lighthouse report');

// Debug SEO specifically
const seoCategory = result.lhr.categories.seo;
if (seoCategory.score !== 1) {
  console.log('SEO issues found:');
  for (const auditRef of seoCategory.auditRefs) {
    const audit = result.lhr.audits[auditRef.id];
    if (audit.score !== 1 && audit.score !== null) {
      console.log(`❌ ${audit.title}: ${audit.description}`);
      if (audit.details) {
        console.log('Details:', JSON.stringify(audit.details, null, 2));
      }
    }
  }
}

for (const category in result.lhr.categories) {
  const draft = result.lhr.categories[category].score;
  if (!draft) throw Error(`missing score for '${category}' category`);

  const perfectScore = 100 as const;
  const score = draft * 100;

  if (score < perfectScore) {
    throw Error(`failed ${category} audit with a score of ${score}`);
  }
  console.info(`${category}: ${score}`);
}

await browser.close();
