<template>
  <div class="row product_item_inner">
    <template v-for="product in allProducts" :key="product.id">
      <div class="col-lg-4 col-md-4 col-6">
        <div class="cake_feature_item">
          <ProductImage :alt="product.name" :src="productImage(product)" :width="270"/>
          <div class="cake_text">
            <ProductPrice
              :product="product"
              priceFontSize="normal"
              :shouldCenterPrice="true"
            />
            <h3>
              <a class="" :href="`/products/${product.slug}`">
                {{ product.name }} {{  product.id }}
              </a>
            </h3>
            <button v-bind:data-product-id="product.id">Add to Cart</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
//import { filteredVariantPrice } from "../utils/functions";
import { computed } from "vue";
import ProductImage from "./ProductImage.vue";
import ProductPrice from "./ProductPrice.vue";
//defineProps(["allProducts", "allCategoryProducts"]);
const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = import.meta.env;
defineProps(["allProducts"]);
const productLink = (product) => {
  return {
    path: "/products/" + product.slug,
    query: { id: product.databaseId },
  };
};

const productImage = (product) =>
  product.image ? product.image.sourceUrl : PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
</script>
