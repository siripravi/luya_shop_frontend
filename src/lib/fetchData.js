import { getAllCategories } from "../graphql/queries/getAllCategories";
import { getProductsFromCategory } from "../graphql/queries/getProductsFromCategory";

export async function getAllProductPaths() {
    const groups = await getAllCategories();
    const paths = [];
 
    for (const group of groups.nodes) {
      const catProducts = await getProductsFromCategory(group.slug);
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { id: group.id, slug: group.slug }, props: { catProducts } });
    }
  
    return paths;
  }