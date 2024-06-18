import { getAllCategories } from "../graphql/queries/getAllCategories";
import { getProductsFromCategory } from "../graphql/queries/getProductsFromCategory";

export async function getAllProductPaths() {
    const groups = await getAllCategories();
    const paths = [];
 
    for (const group of groups.nodes) {
      console.log("loop");
      console.log(group.slug);
      const catProducts = await getProductsFromCategory(group.id);
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { slug: group.slug }, props: { catProducts } });
    }
  
    return paths;
  }