import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ashbardhan.github.io',
  base: '/',
  integrations: [sitemap()],
  
  // Build configuration for optimal performance
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Vite configuration
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap': ['gsap'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['gsap'],
    },
  },
  
  // Output mode - static for GitHub Pages
  output: 'static',
  
  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
