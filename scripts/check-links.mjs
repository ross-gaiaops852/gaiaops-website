import { LinkChecker } from 'linkinator';
import path from 'path';

const distDir = path.resolve('dist');

console.log(`\nChecking links in ${distDir}...\n`);

const checker = new LinkChecker();

checker.on('pagestart', (url) => {
  process.stdout.write(`  Scanning: ${url}\n`);
});

const result = await checker.check({
  path: distDir,
  recurse: true,
  concurrency: 5,
  timeout: 30000,
  retry: true,
  retryErrors: true,
  retryErrorsCount: 2,
  retryErrorsJitter: 1000,
  linksToSkip: [
    /^mailto:/,
    /^tel:/,
    /^javascript:/,
    // Skip Calendly privacy policy (may block automated requests)
    /calendly\.com\/privacy/,
  ],
});

const broken = result.links.filter((l) => l.state === 'BROKEN');
const ok = result.links.filter((l) => l.state === 'OK');
const skipped = result.links.filter((l) => l.state === 'SKIPPED');

console.log(`\n--- Link Check Results ---`);
console.log(`  Total:   ${result.links.length}`);
console.log(`  OK:      ${ok.length}`);
console.log(`  Broken:  ${broken.length}`);
console.log(`  Skipped: ${skipped.length}`);

if (broken.length > 0) {
  console.log(`\nBroken links:`);
  for (const link of broken) {
    console.log(`  [${link.status || 'ERR'}] ${link.url}`);
    console.log(`    Found on: ${link.parent}`);
  }

  // Only fail the build for internal broken links
  const internalBroken = broken.filter(
    (l) => l.url.includes('gaiaops') || l.url.startsWith('file://')
  );
  if (internalBroken.length > 0) {
    console.log(
      `\n${internalBroken.length} internal broken link(s) found — failing build.`
    );
    process.exit(1);
  } else {
    console.log(
      `\nAll broken links are external — reporting as warnings only.`
    );
  }
} else {
  console.log(`\nNo broken links found!`);
}
