import { createHash } from 'crypto';

const sha256 = (data: string) =>
  createHash('sha256').update(data).digest('base64');

const hash = (value: string) => `'sha256-${sha256(value)}'`;

export function renderToString(injected: { script: string }): {
  script: string;
  sha256: string;
};
export function renderToString(injected: { style: string }): {
  style: string;
  sha256: string;
};
export function renderToString(
  injected: { script: string } | { style: string },
):
  | {
      script: string;
      sha256: string;
    }
  | {
      style: string;
      sha256: string;
    } {
  if ('script' in injected) {
    const value = `(${injected.script})()`;
    const script = `<script>${value}</script>`;
    return { script, sha256: hash(value) };
  } else {
    const style = `<style rel="stylesheet">${injected.style}</style>`;
    return { style, sha256: hash(injected.style) };
  }
}
