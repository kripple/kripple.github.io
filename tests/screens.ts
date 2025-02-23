export const screens = [
  {
    category: 'mobile',
    device: 'iPhone SE',
    orientation: 'portrait',
    width: 320,
    height: 568,
    menu: true,
  },
  {
    category: 'mobile',
    orientation: 'portrait',
    width: 360,
    height: 640,
    menu: true,
  },
  {
    category: 'mobile',
    device: 'iPhone X/XS/11 Pro',
    orientation: 'portrait',
    width: 375,
    height: 812,
    menu: true,
  },
  {
    category: 'tablet',
    device: 'iPad Mini',
    orientation: 'portrait',
    width: 768,
    height: 1024,
    menu: true,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 1024,
    height: 768,
    menu: true,
  },
  {
    category: 'desktop',
    device: '720p',
    orientation: 'landscape',
    width: 1280,
    height: 720,
    menu: true,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 1440,
    height: 900,
    menu: false,
  },
  {
    category: 'desktop',
    device: '1080p',
    orientation: 'landscape',
    width: 1920,
    height: 1080,
    menu: false,
  },
  {
    category: 'desktop',
    orientation: 'landscape',
    width: 2560,
    height: 1440,
    menu: false,
  },
] as const;


export const breakpoints = [300, 400, 600, 1200] as const;
