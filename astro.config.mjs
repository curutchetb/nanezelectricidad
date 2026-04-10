import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nanezelectricidad.vercel.app/',
  // Sin base: '/' para Vercel raíz
});
