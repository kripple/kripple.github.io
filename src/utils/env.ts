export const env = import.meta.env.MODE;

export const isDevEnv = env === 'development';
export const isStagingEnv = env === 'staging';
export const isTestEnv = env === 'test';

export const isNotProdEnv = isDevEnv || isStagingEnv || isTestEnv;

export const version = import.meta.env.APP_VERSION;
