import { createHash } from 'crypto';

const sha256 = (data: string) =>
  createHash('sha256').update(data).digest('base64');

const hash = (value: string) => `'sha256-${sha256(value)}'`;

export function renderToString(options: { script: string; inline?: boolean }): {
  script: string;
  sha256: string;
};
export function renderToString(options: { style: string; inline?: boolean }): {
  style: string;
  sha256: string;
};
export function renderToString(
  options:
    | { script: string; inline?: boolean }
    | { style: string; inline?: boolean },
):
  | {
      script: string;
      sha256: string;
    }
  | {
      style: string;
      sha256: string;
    } {
  if ('script' in options) {
    const value = `(${options.script})()`;
    const script = `<script>${value}</script>`;
    return { script, sha256: hash(value) };
  } else {
    const ariaHidden = ` aria-hidden="true"`;
    const style = `<style${options.inline ? ariaHidden : ''} rel="stylesheet">${options.style}</style>`;
    return { style, sha256: hash(options.style) };
  }
}
