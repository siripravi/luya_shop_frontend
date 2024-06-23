<template>
  <div v-if="product">
    <section>
      <div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto">
        <div
          class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2"
        >
          <img
            v-if="product.image"
            id="product-image"
            class="h-auto p-8 transition duration-700 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-95"
            :alt="product.name"
            :src="product.image.sourceUrl"
          />
          <img
            v-else
            id="product-image"
            class="h-auto p-8 transition duration-700 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-95"
            :alt="product.name"
            :src="process.env.placeholderSmallImage"
          />
          <div class="ml-8">
            <p class="text-3xl font-bold text-left">{{ product.name }}</p>
            <div v-if="product.onSale" class="flex">
              <p class="pt-1 mt-4 text-3xl text-gray-900">
                <span v-if="product.variations">
                  {{ product.price}}</span
                >
                <span v-else>{{ product.salePrice }}</span>
              </p>
              <p class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">
                <span v-if="product.variations">
                  {{ product.price }}</span
                >
                <span v-else>{{ product.regularPrice }}</span>
              </p>
            </div>
            <p v-else class="pt-1 mt-4 text-2xl text-gray-900">
              {{ product.price }}
            </p>
            <br />
            <p class="pt-1 mt-4 text-2xl text-gray-900">
              {{ product.description }}
            </p>
            <p
              v-if="product.stockQuantity"
              class="pt-1 mt-4 text-2xl text-gray-900"
            >
              {{ product.stockQuantity }} in stock
            </p>
            <p
              v-if="product.variations"
              class="pt-1 mt-4 text-xl text-gray-900"
            >
              <span class="py-2">Variants</span>
              <select
                id="variant"
                name="variant"
                class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                @change="changeVariation()"
              >
                <option
                  v-for="(variation, index) in product.variations.nodes"
                  :key="variation.databaseId"
                  :value="variation.databaseId"
                  :selected="index === 0"
                >
                  {{ variation.name }} ({{ variation.stockQuantity }} in stock)
                </option>
              </select>
            </p>
            <div class="pt-1 mt-2">
              <!-- Doesn't work?`-->
              <AddToCartButton
                v-if="product.variations"
                :product="selectedVariation"
                client:visible
              />
             <!-- <AddToCartButton v-else :product="product" client:visible /> -->
             <!--<AddToCart :product-id="product.id" />-->
            <CommonButton
                @common-button-click="addProductToCart(product)"
                :is-loading="isLoading"
              >
                ADD TO CART</CommonButton
              > 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const props = defineProps(["product"]);
/**
 * Component that displays a single product.
 *
 * @component
 * @example
 * <single-product id="1" slug="example-product"></single-product>
 * @prop {string} id - The ID of the product to display.
 * @prop {string} slug - The slug of the product to display.
 */

import { ref, watch } from "vue";
import gql from 'graphql-tag';
import client from "../../lib/apollo-client";
//import GET_SINGLE_PRODUCT_QUERY from "../../apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";
//import ADD_TO_CART_MUTATION from "../../apollo/mutations/ADD_TO_CART_MUTATION.gql";

//import ProductImage from "@/components/Products/ProductImage.vue";
//import ProductPrice from "@/components/Products/ProductPrice.vue";

import { filteredVariantPrice, stripHTML } from "../../utils/functions";

import { useCart } from "../../stores/useCart";

const cart = useCart();

//const isLoading = computed(() => cart.loading);

//const selectedVariation = ref(); // TODO Pass this value to addProductToCart()

const props2 = defineProps({
  id: { type: String, required: true },
  slug: { type: String, required: true },
});

const variables = { id: props2.id, slug: props2.slug };
//const variables = { id: 24, slug: "along-sleeve-tee"};
//const { data } = await useAsyncQuery(GET_SINGLE_PRODUCT_QUERY, variables);
const { data } = await client.query({
  query: gql`
    query Product($id: ID!) {
  product(id: $id, idType: DATABASE_ID) {
    databaseId
    averageRating
    name
    slug
    description
    onSale
    image {
      databaseId
      uri
      title
      srcSet
      sourceUrl
    }
    ... on SimpleProduct {
      price
      salePrice
      regularPrice
      databaseId
      stockQuantity
    }
    ... on VariableProduct {
      price
      salePrice
      regularPrice
      databaseId
     
      variations {
        nodes {
          databaseId
          name
          stockStatus
          stockQuantity
          purchasable
          onSale
          salePrice
          regularPrice
        }
      }
    }
    ... on ExternalProduct {
      price
      databaseId
      externalUrl
    }
    ... on GroupProduct {
      products {
        nodes {
          ... on SimpleProduct {
            databaseId
            price
          }
        }
      }
      id
    }
  }
}
 
`,variables}); 
//console.log(props);
watch(
  () => data,
  (dataValue) => {
    if (dataValue && dataValue.product?.variations?.nodes?.length > 0) {
      selectedVariation.value =
        dataValue.product?.variations?.nodes[0].databaseId;
    }
  },
  { immediate: true }
);

/**
 * Adds a product to the cart by calling the addToCart mutation with the given product.
 *
 * @param {object} product - The product to add to the cart.
 * @return {Promise<void>} A Promise that resolves when the product has been successfully added to the cart.
 */
const addProductToCart = async (data) => {
  await cart.addToCart(data);

  watchEffect(() => {
    if (isLoading.value === false) {
      window.location.reload();
    }
  });
};
</script>
