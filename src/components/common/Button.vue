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
   
</template>