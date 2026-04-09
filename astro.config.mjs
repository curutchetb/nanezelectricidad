import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://curutchetb.github.io', // Tu usuario
  //base: '/nanezelectricidad',         // El nombre de tu repo
  integrations: [tailwind()],
});