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

<script setup>
import ShowAllProductsCategory from "../Products/ShowAllProductsCategory.vue"

defineProps(["allProducts"]);

</script>
