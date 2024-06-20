import { fetchAxios } from "../../lib/axios";
import gql from "graphql-tag";
import client from "../../lib/apollo-client";
export async function getSingleProduct(pid) {
  const variables = { id: pid };
  const {data }= await client.query({
    query: gql`
    query Product($id: ID!) {
      product(id: $id, idType: DATABASE_ID) {
        databaseId
        averageRating
        name
        slug
        description
        onSale
        image {
          databaseId
          uri
          title
          srcSet
          sourceUrl
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
          databaseId
          stockQuantity
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
          databaseId
         
          variations {
            nodes {
              databaseId
              name
              stockStatus
              stockQuantity
              purchasable
              onSale
              salePrice
              regularPrice
            }
          }
        }
        ... on ExternalProduct {
          price
          databaseId
          externalUrl
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                databaseId
                price
              }
            }
          }
          id
        }
      }
    }
    `,     variables  });

  return data?.product
}
