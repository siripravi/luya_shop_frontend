import { defineStore } from "pinia";
import gql from 'graphql-tag';
import client from "../lib/apollo-client";
//import ADD_TO_CART_MUTATION from "../apollo/mutations/ADD_TO_CART_MUTATION.gql";
const ADD_TO_CART_MUTATION = gql`
 mutation addToCart($productId: Int!, $quantity: Int = 1) {
  addToCart(productId: $productId, quantity: $quantity) {
    cart {
      items {
        key
        product {
          name
          image {
            url
          }
        }
      }
      totalItems
    }
  }
}
`;
/**
 * Manages a shopping cart store using the Pinia library.
 *
 * @typedef {Object} CartState
 * @property {Array} cart - The array representing the cart.
 * @property {boolean} loading - The loading status of the cart.
 * @property {string|null} error - The error message, if any.
 */

const state = {
  cart: [],
  loading: false,
  error: null,
};

export const useCart = defineStore("cartState", {
  state: () => state,
  actions: {
    async addToCart(product) {
      this.loading = true;
      try {
        const { mutate } = useMutation(ADD_TO_CART_MUTATION);
        const response = await mutate({
          input: {
            productId: product.databaseId,
            quantity: 1,
          },
        });

        if (response.data && response.data.addToCart) {
          this.loading = false;
          const newCartItem = response.data.addToCart.cartItem;
          const foundProductInCartIndex = this.cart.findIndex(
            (cartProduct) => newCartItem.product.node.slug === cartProduct.slug
          );

          if (foundProductInCartIndex > -1) {
            this.cart[foundProductInCartIndex].quantity += 1;
          } else {
            // We need to construct a cart item that matches the expected structure in `this.cart`
            const productCopy = {
              ...newCartItem.product.node,
              quantity: newCartItem.quantity,
              price: newCartItem.total, // Assuming 'total' is the price for one item
              slug: newCartItem.product.node.slug,
            };

            this.cart.push(productCopy);
          }
        } else {
          // Handle the case where the mutation does not return the expected data
          this.error = "Did not receive expected cart data from the server.";
        }
      } catch (error) {
        this.error = error.message || "An error occurred while adding to cart.";
      } finally {
        this.loading = false;
      }
    },

    removeProductFromCart(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    clearCart() {
      this.cart.length = 0;
    },
  },
  getters: {
    getCartQuantity() {
      if (!this.cart) {
        console.error("Cart is undefined");
        return 0;
      }
      return this.cart.reduce((total, product) => total + product.quantity, 0);
    },

    getCartTotal() {
      const currencySymbol = useRuntimeConfig().public.currencySymbol || "kr";

      const total = this.cart.reduce((total, product) => {
        // Assuming product.price is a string that includes the currency symbol
        const numericPrice = product.price
          .replace(currencySymbol, "")
          .replace(/[^0-9.]+/g, "");

        // Convert the cleaned string to a floating-point number
        const price = parseFloat(numericPrice);

        const productTotal = price * product.quantity;

        return total + productTotal;
      }, 0);

      // Format the total with the currency symbol and return it
      return `${currencySymbol} ${total.toFixed(2)}`;
    },
  },
  persist: true,
});