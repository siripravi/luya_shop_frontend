<template>
  <div>
    <button
      class="relative w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"
      :class="{ disabled: state.loading }"
      @click="addProduct(props.product)"      
    >
      ADD TO CART
      <svg
        v-if="state.loading"
        class="absolute -mt-6 -ml-2 animate-spin"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue"

import { addProductToCart } from "../../stores/cartStore.js"
import { addToCart } from "../../graphql/mutations/addToCart.js"

const state = reactive({ loading: false })

const props = defineProps(["product"])

const hardcodedItemInfo = {
  id: "astronaut-figurine",
  name: "Astronaut Figurine",
  imageSrc: "/images/astronaut-figurine.png"
}

const addProduct = product => {
  state.loading = true

  const productId = product.databaseId ? product.databaseId : product
  const productQueryInput = {
    productId
  }

  try {
    addToCart(productQueryInput).then(result => {
      state.loading = false    

      if (!result) {
        localStorage.clear()
      }

     // window.location.reload()
    })
    addProductToCart(hardcodedItemInfo)
  } catch (e) {
    if (import.meta.env.DEV) {
      console.log("Error in dev: ", e)
    }
    state.loading = false
  }
}
</script>

<style scoped>
.disabled {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed;
}
</style>