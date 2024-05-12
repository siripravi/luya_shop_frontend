import { fetchAxios } from "../../lib/axios";
import client from "../../lib/apollo-client";
import gql from "graphql-tag";
export async function getAllCategories() {
  const variables = { limit: 99 };
const { data, loading } = await client.query({
  query: gql`
     {
      productCategories(first: 20) {
        nodes {
          id
          databaseId
          name
          slug
        }
      }
    }  
`,variables});

return data.productCategories;
}
