export const standardScreens = [
  {
    category: 'mobile',
    device: 'iPhone SE',
    orientation: 'portrait',
    width: 320,
    height: 568,
  },
  {
    category: 'mobile',
    device: 'iPhone X/XS/11 Pro',
    orientation: 'portrait',
    width: 375,
    height: 812,
  },
  {
    category: 'tablet',
    device: 'iPad Mini',
    orientation: 'portrait',
    width: 768,
    height: 1024,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 1024,
    height: 768,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 1440,
    height: 900,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 1920,
    height: 1080,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 2560,
    height: 1440,
  },
] as const;

export const menuIsHidden = [
  { width: 2560, height: 1440 },
  { width: 1920, height: 1080 },
  { width: 1440, height: 1000 }, // 1440x900
  { width: 1200, height: 720 },
] as const;
export const menuIsVisible = [
  { width: 1199, height: 720 },
  { width: 768, height: 1024 },
  { width: 600, height: 1024 },
  { width: 599, height: 1024 },
  { width: 400, height: 644 },
  { width: 399, height: 644 },
  { width: 360, height: 644 },
  { width: 300, height: 500 },
  { width: 299, height: 500 },
] as const;
export const screens = [...menuIsHidden, ...menuIsVisible] as const;
