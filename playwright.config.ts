import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests',

  // Run all tests in parallel.
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.GITHUB_ACTIONS,

  // Retry on CI only.
  retries: process.env.GITHUB_ACTIONS ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.GITHUB_ACTIONS ? 1 : undefined,

  // Reporter to use
  reporter: process.env.GITHUB_ACTIONS ? 'dot' : 'list',

  // Stop the test run after the first failed test
  maxFailures: process.env.GITHUB_ACTIONS ? 1 : undefined,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:5173',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
  },

  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.GITHUB_ACTIONS,
  },
});
