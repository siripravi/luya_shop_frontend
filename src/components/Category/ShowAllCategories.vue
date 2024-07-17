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

<script setup>
defineProps(["categories"]);
</script>
