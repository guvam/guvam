import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  outDir: '../../docs',
  site: 'https://guvam.com',
  integrations: [lit()],
  devToolbar: { enabled: false },
  redirects: {
    '/docs/components': '/docs',
  }
});
