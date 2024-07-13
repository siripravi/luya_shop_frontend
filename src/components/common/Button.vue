<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
defineProps<{ link?: boolean }>();
/*
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let value = params.some_key;*/
</script>

<template>
     {{ count }}
     <button @click="count++">Count</button>
    <button class="button">
        <slot />
    </button>
    <input
        name="post-input-2"
        class="post-input rounded border border-black bg-slate-200 px-2"
        id="post-input-2"
        type="text"
      />
    <button
      hx-get="/partials/clicked"
     
      hx-target="#chat-container"
      hx-swap="beforeend"
      hx-include=".post-input"
    >
      Click Me
    </button>
</template>