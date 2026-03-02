// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import mermaid from 'astro-mermaid';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pilosophos.com',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'file',
  },
  integrations: [
    mdx(),
    mermaid({
      theme: 'base',
      autoTheme: false,
      mermaidConfig: {
        fontFamily: "var(--font-sans)",
        themeVariables: {
          primaryColor: '#9eecec07',
          primaryTextColor: '#9eecec',
          primaryBorderColor: '#9eecec',
          lineColor: '#fecb00',
        }
      }
    })
  ],
});