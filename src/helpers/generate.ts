import fs from 'fs';

import { Vibrant } from 'node-vibrant/node';
import tinify from 'tinify';

import { tinifyApiKey } from '@/helpers/secrets';

/**
 * `npm run g`
 * `rm src/helpers/output/*`
 */

tinify.key = tinifyApiKey;
const inputPath = 'src/helpers/input' as const;
const outputPath = 'src/helpers/output' as const;

function generateImages() {
  console.debug(fs.readdirSync('src/images'));
  const filePaths = fs.readdirSync(inputPath);

  filePaths.map(async (filePath) => {
    if (filePath.includes('.DS_Store')) return;
    const fromPath = `${inputPath}/${filePath}`;
    const toPath = `${outputPath}/${filePath}`;
    console.debug(`from: '${fromPath}', to: '${toPath}'`);

    Vibrant.from(fromPath)
      .getPalette()
      .then((palette) => console.log(filePath, ':', palette.Vibrant?.hex));

    // 'image/avif' | 'image/jpeg' | 'image/png' | 'image/webp'
    // await tinify
    //   .fromFile(fromPath)
    //   .convert({ type: 'image/avif' })
    //   .toFile(toPath.replace('.jpg', '.avif'));

    // await tinify
    //   .fromFile(fromPath)
    //   .resize({ height: 234, method: 'scale' })
    //   .toFile(toPath.replace('.avif', '-compressed.avif'));
  });
}

generateImages();
