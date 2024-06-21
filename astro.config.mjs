import { defineConfig } from "astro/config";
import node from '@astrojs/node';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import htmx from 'astro-htmx';

export default defineConfig({
  integrations: [vue(),htmx()] 
  //site: "http://localhost:3030",
 // output: 'server',
//  adapter: node({
//    mode: 'standalone',
//  }),
  
});
