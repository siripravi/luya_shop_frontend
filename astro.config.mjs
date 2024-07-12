import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
/*export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});  */

import { defineConfig } from "astro/config";
import preact from '@astrojs/preact';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import htmx from 'astro-htmx';

export default defineConfig({
  integrations: [vue(),htmx(),react(),preact()] ,
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  //site: "http://localhost:3030",
 // output: 'server',
//  adapter: node({
//    mode: 'standalone',
//  }),
  
});
