import client from "../../lib/apollo-client";
import gql from "graphql-tag";

export async function getAllProducts() {
  const variables = { limit: 99 };
const { data, loading } = await client.query({
  query: gql`
  {
    products(first: 24) {
      nodes {
        databaseId
        name
        onSale
        slug
        image {
          sourceUrl
        }
        ... on SimpleProduct {
          databaseId
          price
          regularPrice
          salePrice
        }
        ... on VariableProduct {
          databaseId
          price
          regularPrice
          salePrice
          variations {
            nodes {
              price
              regularPrice
              salePrice
            }
          }
        }
      }
    }
  }  
    `,variables});

  return data?.products;
}
