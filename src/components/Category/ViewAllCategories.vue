<template>
  <div v-if="catData">
    <div class="categories">
      <div class="container">
        <div class="row">
          <div class="categories__slider owl-carousel">
            <template v-for="nodes in catData">
              <template v-for="category in nodes">
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
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["catData"]);
</script>
