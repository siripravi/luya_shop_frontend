import { getAllCategories } from "../graphql/queries/getAllCategories";
import { getProductsFromCategory } from "../graphql/queries/getProductsFromCategory";

export async function getAllProductPaths() {
    const groups = await getAllCategories();
    const paths = [];
 
    for (const group of groups.nodes) {
      console.log("loop");
      
      const catProducts = await getProductsFromCategory(group.id,group.databaseId);
      console.log(catProducts); console.log("*********\n")
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { slug: group.slug }, props: { catProducts } });
    }
  
    return paths;
  }