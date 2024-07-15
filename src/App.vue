<template>
  <div class="about">
    <h1>App Vue</h1>
    <RouterView />
  </div>
</template>
<script>
/*export default {
  name: "App",
};*/

import Layout from "@layouts/Layout.astro";
import { createRouter, createWebHistory } from "vue-router";
import router from "./router/index.js"; // Assuming router configuration is in a separate file
import { createApp } from "vue";
export default {
  created() {
    const app = createApp(this);
    app.use(router);
    app.mount("#app");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
