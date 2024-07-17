import gql from "graphql-tag";
import client from "../../lib/apollo-client";
export async function getProductsFromCategory(tag,key) {
  console.log(typeof(tag));
  const categoryVariables = { slug: tag ,dbId:key};
  const { data: allCategoryProducts } = await client.query({
    query: gql`
      query ProductsFromCategory($slug:ID!, $dbId: Int) {
        productCategory(id: $slug, idType: ID) {
          id
          name
          products(where: { categoryId: $dbId}) {
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
