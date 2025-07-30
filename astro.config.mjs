import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Veda-OuO.github.io',
  base: '/Astro-withthecandlestickmysteries',
  build: {
    assets: '_astro'
  },
  vite: {
    define: {
      __BASE_URL__: '"/Astro-withthecandlestickmysteries/"'
    }
  }
});