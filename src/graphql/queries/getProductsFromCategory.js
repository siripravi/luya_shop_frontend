import { fetchAxios } from "../../lib/axios";
import gql from "graphql-tag";
import client from "../../lib/apollo-client";
export async function getProductsFromCategory(slug) {
  const categoryVariables = { slug: slug };
  const { data: allCategoryProducts } = await client.query({
    query: gql`
      query ProductsFromCategory($slug: ID!) {
        productCategory(id: $slug, idType: SLUG) {
          id
          name
          products(first: 50) {
            nodes {
              id
              productId: databaseId
              averageRating
              slug
              description
              name
              image {
                id
                uri
                title
                srcSet
                sourceUrl
              }
              ... on SimpleProduct {
                price
                regularPrice
                id
              }
              ... on VariableProduct {
                price
                regularPrice
                id
              }
              ... on ExternalProduct {
                price
                id
                regularPrice
                externalUrl
              }
              ... on GroupProduct {
                products {
                  nodes {
                    ... on SimpleProduct {
                      id
                      regularPrice
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
