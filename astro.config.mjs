import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    open: true,
  },
  output: 'static',
  site: 'https://robertorodesluchoro.github.io/',
  base: '/',
});
