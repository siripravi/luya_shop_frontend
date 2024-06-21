<template>
  <div class="cake_img">
    <img :alt="alt" :src="displayedImage" :width="width" :height="height" />
  </div>
</template>

<script setup>
/**
 * Vue.js component for displaying an image with configurable properties.
 *
 * @param {Object} props - Object containing the component's properties.
 * @param {String} props.alt - The alt text for the image (required).
 * @param {String} props.src - The source URL for the image (required).
 * @param {String} [props.width] - The width of the image.
 * @param {String} [props.height] - The height of the image.
 * @returns {Object} The Vue.js component object.
 */

import { computed } from "vue";

const props = defineProps({
  alt: { type: String, required: true },
  src: { type: String, required: true },
  width: { type: String, required: false },
  height: { type: String, required: false },
});

const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = import.meta.env;

const displayedImage = computed(() => {
  return props.src || PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
});
</script>
