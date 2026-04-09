import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nanezelectricidad.com.ar',
  // Sin base: '/' para Vercel raíz
});
