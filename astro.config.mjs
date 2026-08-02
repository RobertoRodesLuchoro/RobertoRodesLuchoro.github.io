import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    open: true,
    /* Permite que el preview asigne otro puerto si 4321 está ocupado. */
    port: Number(process.env.PORT) || 4321,
  },
  output: 'static',
  site: 'https://robertorodesluchoro.github.io/',
  base: '/',
});
