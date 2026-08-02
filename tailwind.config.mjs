import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'static',
  site: 'https://robertorodesluchoro.github.io/',
  base: '/RobertoRodesLuchoro.github.io/',
});
