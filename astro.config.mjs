import { defineConfig } from 'astro/config';
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import htmx from 'astro-htmx';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  integrations: [vue(),htmx()] ,
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  //site: "http://localhost:3030",
/*  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),*/
 //outDir: "C:/gitrepos/yii-wordpress-integration/data/web"
});
