import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const src = 'public/logo.jpg';
const outSilhouette = 'public/logo.png';
const outViolet = 'public/logo-violet.png';

const raw = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { data, info } = raw;
const { width, height, channels } = info;

// Silhouette blanche + fond transparent (blanc source -> alpha 0, noir source -> blanc opaque)
const silhouette = Buffer.alloc(width * height * 4);
// Version violette
const violet = Buffer.alloc(width * height * 4);

for (let i = 0; i < width * height; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  const luminance = (r + g + b) / 3;
  // Blanc/clair -> transparent, noir/foncé -> opaque
  const alpha = luminance > 200 ? 0 : 255 - luminance;

  silhouette[i * 4] = 255;
  silhouette[i * 4 + 1] = 255;
  silhouette[i * 4 + 2] = 255;
  silhouette[i * 4 + 3] = alpha;

  violet[i * 4] = 167;   // violet-400 #a78bfa
  violet[i * 4 + 1] = 139;
  violet[i * 4 + 2] = 250;
  violet[i * 4 + 3] = alpha;
}

await sharp(silhouette, { raw: { width, height, channels: 4 } })
  .png()
  .trim()
  .toFile(outSilhouette);

await sharp(violet, { raw: { width, height, channels: 4 } })
  .png()
  .trim()
  .toFile(outViolet);

// Favicon 128px carré à partir de la version violette
await sharp(violet, { raw: { width, height, channels: 4 } })
  .trim()
  .resize(128, 128, { fit: 'contain', background: { r: 10, g: 8, b: 18, alpha: 1 } })
  .png()
  .toFile('public/favicon.png');

console.log('OK ->', outSilhouette, outViolet, 'public/favicon.png');
