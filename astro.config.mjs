import { defineConfig } from "astro/config";
import node from '@astrojs/node';

import vue from "@astrojs/vue";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import htmx from 'astro-htmx';
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [vue(),htmx()]
 
  //site: "http://localhost:3030",
 // output: 'server',
//  adapter: node({
//    mode: 'standalone',
//  }),
  
});
