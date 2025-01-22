import fs from 'fs';

import tinify from 'tinify';

import { tinifyApiKey } from '@/helpers/secrets';

tinify.key = tinifyApiKey;

function compressImages() {
  const inputPath = 'src/helpers/input' as const;
  const outputPath = 'src/helpers/output' as const;
  const filePaths = fs.readdirSync(inputPath);

  filePaths.map(async (filePath) => {
    if (filePath.includes('.DS_Store')) return;
    const fromPath = `${inputPath}/${filePath}`;
    const toPath = `${outputPath}/${filePath}`;

    console.log(`compressing ${fromPath}`);
    tinify.fromFile(fromPath).toFile(toPath);
  });
}

function generateImages() {
  const inputPath = 'src/helpers/input' as const;
  const outputPath = 'src/helpers/output' as const;
  const filePaths = fs.readdirSync(inputPath);

  filePaths.map(async (filePath) => {
    if (filePath.includes('.DS_Store')) return;
    const fromPath = `${inputPath}/${filePath}`;
    const toPath = `${outputPath}/${filePath}`;
    const size = filePath.includes('desktop')
      ? 100
      : filePath.includes('tablet')
        ? 102
        : filePath.includes('mobile')
          ? 64
          : undefined;
    if (!size) return;

    console.log(`resizing ${fromPath}`);
    tinify
      .fromFile(fromPath)
      .resize({
        method: 'scale',
        height: size,
      })
      .toFile(toPath.replace('.jpg', '-small.jpg'));
  });
}

compressImages();
generateImages();
