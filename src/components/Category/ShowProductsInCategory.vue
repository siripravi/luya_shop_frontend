<template>
  <div class="row product_item_inner">
    <template v-for="product in allProducts" :key="product.databaseId">    
      
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
              <a class="" :href="`/products/${product.productId}/${product.slug}`">
                {{ product.name }} 
              </a>
            </h3>
            <button @click="handleClick" v-bind:data-product-id="product.databaseId">Add to Cart</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<!--
<template>
   <section class="mt-100">
  <div class="container">
    <div v-if="allProducts">
      <h1 class="h-10 p-6 text-3xl font-bold text-center">
        {{ allProducts.name }}
      </h1>
      <br />
      <ShowAllProductsCategory :allProducts="allProducts" />
      <div v-if="!allProducts.length" class="mt-10">
        <h2 class="h-10 text-2xl font-bold text-center">
          No products to display
        </h2>
      </div>
    </div>
  </div>
</section>
</template>
-->
<script setup>
import ProductImage from "../Products/ProductImage.vue";
import ProductPrice from "../Products/ProductPrice.vue";
//import ShowAllProductsCategory from "../Products/ShowAllProductsCategory.vue"
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
