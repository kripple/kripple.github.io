import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: 'line',

  testDir: '.',
  testMatch: 'capture.ts',

  snapshotPathTemplate: '{testDir}/snapshots/{arg}{ext}',

  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});
