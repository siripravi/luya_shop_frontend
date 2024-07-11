import { defineConfig } from "astro/config";
import preact from '@astrojs/preact';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import htmx from 'astro-htmx';

export default defineConfig({
  integrations: [vue(),htmx(),react(),preact()] ,
  
  //site: "http://localhost:3030",
 // output: 'server',
//  adapter: node({
//    mode: 'standalone',
//  }),
  
});
