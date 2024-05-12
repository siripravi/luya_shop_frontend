import { fetchAxios } from "../../lib/axios";
import gql from "graphql-tag";
import client from "../../lib/apollo-client";
export async function getProductsFromCategory(cid) {
  const categoryVariables = { id: cid };
const { data: allCategoryProducts } = await client.query({
  query: gql`
    query ProductsFromCategory($id: ID!) {
      productCategory(id: $id, idType: ID) {
        id
        name
        products(first: 50) {
          nodes {
            id
            databaseId
            onSale
            averageRating
            slug
            description
            image {
              id
              uri
              title
              srcSet
              sourceUrl
            }
            name
            ... on SimpleProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on VariableProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on ExternalProduct {
              price
              id
              externalUrl
            }
            ... on GroupProduct {
              products {
                nodes {
                  ... on SimpleProduct {
                    id
                    price
                  }
                }
              }
              id
            }
          }
        }
      }
    }
  `,
  variables: categoryVariables,
});
  return allCategoryProducts;
}
