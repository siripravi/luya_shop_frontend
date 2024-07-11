import { fetchAxios } from "../../lib/axios";
import client from "../../lib/apollo-client";
import gql from "graphql-tag";
//import useMutation from '@vue/apollo-composable';
import {  useMutation } from "@vue/apollo-composable";
provideApolloClient(client);
const ADD_TO_CART_MUTATION = gql`
mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
          id
          databaseId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
        variation {
          id
          databaseId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
          attributes {
            nodes {
              id
              attributeId
              name
              value
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`;
const {mutate, onDone, onError, error} = useMutation(ADD_TO_CART_MUTATION);
export function addToCart(product) {
try {
  mutate({
    input : product
  })

  onDone((data) => {
    //formNav.next()
    console.log('data', data)
  })

  onError(() => {
    console.error(error.value)
  })
} catch (error) {
  console.error(error)
}
}

/*export async function addToCart(product) {
  
  const data = await mutate({
    variables:{ input: product }
});
  return data?.addToCart;
}  */
