<template>
  <div class="row product_item_inner">
    <template v-for="product in allProducts" :key="product.databaseId">
      <div class="col-lg-4 col-md-4 col-6">
        <div class="cake_feature_item">
          <ProductImage
            :alt="product.name"
            :src="productImage(product)"
            :width="270"
          />
          <div class="cake_text">
            <ProductPrice
              :product="product"
              priceFontSize="normal"
              :shouldCenterPrice="true"
            />
            <h3>
              <a
                class=""
                :href="`/products/${product.productId}/${product.slug}`"
              >
                {{ product.name }}
              </a>
            </h3>
            <button
              @click="handleClick"
              v-bind:data-product-id="product.databaseId"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import ProductImage from "../Products/ProductImage.vue";
import ProductPrice from "../Products/ProductPrice.vue";
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
