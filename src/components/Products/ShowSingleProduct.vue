<!-- Shop Details Section Begin -->
<template>
  <div v-if="product">
    <section class="product-details spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product__details__img">
              <div class="product__details__big__img">
                <!-- <img class="big_img" src="/images/shop/details/product-big-1.jpg" alt="">  -->
                <img
                  v-if="product.image"
                  id="product-image"
                  class="big_img"
                  :alt="product.name"
                  :src="product.image.sourceUrl"
                />
                <img
                  v-else
                  id="product-image"
                  class="big_img"
                  :alt="product.name"
                  :src="process.env.placeholderSmallImage"
                />
              </div>
              <div class="product__details__thumb">
                <div class="pt__item active">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-2.jpg"
                    src="/images/shop/details/product-big-2.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-1.jpg"
                    src="/images/shop/details/product-big-1.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-4.jpg"
                    src="/images/shop/details/product-big-4.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-3.jpg"
                    src="/images/shop/details/product-big-3.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-5.jpg"
                    src="/images/shop/details/product-big-5.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product__details__text">
              <div class="product__label">Cupcake</div>
              <h4>{{ product.name }}</h4>
              <!--<h5>$26.41</h5> -->
              <div v-if="product.onSale" class="flex">
                <h5 class="pt-1 mt-4 text-3xl text-gray-900">
                  <span v-if="product.variations"> {{ product.price }}</span>
                  <span v-else>{{ product.salePrice }}</span>
                </h5>
                <h5 class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">
                  <span v-if="product.variations"> {{ product.price }}</span>
                  <span v-else>{{ product.regularPrice }}</span>
                </h5>
              </div>
              <h5 v-else class="pt-1 mt-4 text-2xl text-gray-900">
                {{ product.price }}
              </h5>
              <br />
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
                    {{ variation.name }} ({{ variation.stockQuantity }} in
                    stock)
                  </option>
                </select>
              </p>
              <p>
                {{ product.description }}
              </p>
              <ul>
                <li>SKU: <span>17</span></li>
                <li>Category: <span>Biscuit cake</span></li>
                <li>Tags: <span>Gadgets, minimalisstic</span></li>
              </ul>
              <div class="product__details__option">
                <div class="quantity">
                  <div class="pro-qty">
                    <input type="text" value="2" />
                  </div>
                </div>
                <!-- <AddToCartButton v-else :product="product" client:visible /> -->
                <!--<AddToCart :product-id="product.id" />-->
                <button
                  data-product-id="`${product.id}`"
                  v-bind:id="product.id"
                >
                  Add to Cart
                </button>
                <AddToCartForm item="{product}" client:load>
                  <!--<button type="submit">Add to cart</button> -->
                  <CommonButton
                  @common-button-click="addProductToCart(product)"
                  :is-loading="isLoading"
                >
                  ADD TO CART</CommonButton
                >
                </AddToCartForm>
                
                <!--  <a href="#" class="primary-btn">Add to cart</a> -->
                <a href="#" class="heart__btn"
                  ><span class="icon_heart_alt"></span
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="product__details__tab">
          <div class="col-lg-12">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  >Description</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  >Additional information</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                  >Previews(1)</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab1:Description:This delectable Strawberry Pie is an
                      extraordinary treat filled with sweet and tasty chunks of
                      delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tabs-2" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab2-Additional Information:This delectable Strawberry Pie
                      is an extraordinary treat filled with sweet and tasty
                      chunks of delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!2
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tabs-3" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab3-Reviews:This delectable Strawberry Pie is an
                      extraordinary treat filled with sweet and tasty chunks of
                      delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- Shop Details Section End -->
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
import gql from "graphql-tag";
import client from "../../lib/apollo-client";
import AddToCartForm from '../../components/AddToCartForm';
//import GET_SINGLE_PRODUCT_QUERY from "../../apollo/queries/GET_SINGLE_PRODUCT_QUERY.gql";
//import ADD_TO_CART_MUTATION from "../../apollo/mutations/ADD_TO_CART_MUTATION.gql";

//import ProductImage from "@/components/Products/ProductImage.vue";
//import ProductPrice from "@/components/Products/ProductPrice.vue";

import { filteredVariantPrice, stripHTML } from "../../utils/functions";

//import { useCart } from "../../stores/useCart";

//const cart = useCart();

//const isLoading = computed(() => cart.loading);

//const selectedVariation = ref(); // TODO Pass this value to addProductToCart()

/*const props2 = defineProps({
  id: { type: String, required: true },
  slug: { type: String, required: true },
});*/

//const variables = { id: props2.id, slug: props2.slug };
const variables = { id: 24, slug: "along-sleeve-tee" };
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
  `,
  variables,
});
//console.log(props);
/*watch(
  () => data,
  (dataValue) => {
    if (dataValue && dataValue.product?.variations?.nodes?.length > 0) {
      selectedVariation.value =
        dataValue.product?.variations?.nodes[0].databaseId;
    }
  },
  { immediate: true }
);*/

/**
 * Adds a product to the cart by calling the addToCart mutation with the given product.
 *
 * @param {object} product - The product to add to the cart.
 * @return {Promise<void>} A Promise that resolves when the product has been successfully added to the cart.
 */
/*
const addProductToCart = async (data) => {
  await cart.addToCart(data);

  watchEffect(() => {
    if (isLoading.value === false) {
      window.location.reload();
    }
  });
};  */
</script>
