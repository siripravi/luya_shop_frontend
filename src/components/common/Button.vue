<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
defineProps<{ link?: boolean }>();
</script>

<template>
     {{ count }}
     <button @click="count++">Count</button>
    <button class="button">
        <slot />
    </button>
</template>