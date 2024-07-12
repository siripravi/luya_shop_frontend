---
---

<template>
  <div v-if="categories">
    <div class="categories">
      <div class="container">
       
        <div class="row">
          <template v-for="category in categories.nodes" :key="category.id">
            <div
              class="categories__item"
              v-if="category.slug !== undefined"
              :key="category.id"
            >
              <a
                class="text-black cursor-pointer hover:underline"
                :href="`/category/${category.slug}`"
              >
                <div class="categories__item__icon">
                  <span class="flaticon-030-cupcake-2"></span>
                  <h5>{{ category.name }}</h5>
                </div>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<!--
<template>
  <div class="wrapper">
    <section class="container category">
      <h3 class="title">Experience Flavours</h3>
      <div v-if="categories">
        <ul class="category__list">
          <li v-for="category in categories.extras.elements.categories">
            <div v-if="category.slug" :key="category.id">
              <div
                class="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg"
              >
                <a
                  class="text-black cursor-pointer hover:underline"
                  :href="`/category/${category.id}/${category.slug}`"
                >
                  <div class="relative">
                    <img v-bind:src="category.imageSrc.source" class="w-full" />

                    <div
                      class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium"
                    >
                      SALE
                    </div>
                  </div>
                  <div class="p-4">
                    <h3 class="text-lg font-medium mb-2">
                      {{ category.name }}
                    </h3>
                    <p class="text-gray-600 text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vitae ante vel eros fermentum faucibus sit amet
                      euismod lorem.
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-lg">$19.99</span>
                      <button
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        <button>DETAIL</button>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
-->
<script setup>
defineProps(["categories"]);
</script>

<style>
@import "../../assets/scss/home.scss";
</style>
