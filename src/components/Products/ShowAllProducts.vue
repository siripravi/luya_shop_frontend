<template> 
  <section class="bg-white p_100">
  <div id="product-container" class="container">
    <template v-for="product in products" :key="product.id">
      <div class="flex flex-col mt-6 sm:w-1/2 md:w-1/3 lg:w-1/4 lg:mr-4">
        <a
          class="text-black cursor-pointer hover:underline"
          href="productLink(product)"
        >
          <ProductImage :alt="product.name" :src="productImage(product)" />
          <div class="flex justify-center pt-3">
            <p class="text-2xl font-bold text-center cursor-pointer">
              {{ product.name }}
            </p>
          </div>
        </a>
        <ProductPrice
          :product="product"
          priceFontSize="normal"
          :shouldCenterPrice="true"
        />
      </div>
    </template>
  </div>
</section>
</template>


<script setup>
//import { filteredVariantPrice } from "../utils/functions";
import { computed } from 'vue';
import ProductImage from "./ProductImage.vue";
import ProductPrice from "./ProductPrice.vue";
defineProps(["allProducts", "allCategoryProducts"]);
const {PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL} = import.meta.env;

const productLink = (product) => {
  return {
    path: "/product/" + product.slug,
    query: { id: product.databaseId },
  };
};


const productImage = (product) =>
  product.image ? product.image.sourceUrl : PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;

const products = computed(() => {
  return (
    allCategoryProducts.value?.productCategory?.products?.nodes ||
    allProducts.value?.products?.nodes ||
    []
  );
});

</script>
