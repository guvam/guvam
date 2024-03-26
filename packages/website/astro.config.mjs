import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: '../../docs',
  site: 'https://guvam.com',
  integrations: [],
  devToolbar: { enabled: false },
  redirects: {
    '/docs/components': '/docs',
  }
});
