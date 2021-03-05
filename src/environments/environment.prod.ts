import { env } from './.env';

export const environment = {
  production: true,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: '/api',
  appIcon: 'assets/appicon.svg',
  defaultLanguage: 'tr-TR',
  supportedLanguages: ['tr-TR', 'en-US'],
};
