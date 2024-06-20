import { getSingleProduct } from "../graphql/queries/getSingleProduct";

export async function getProductDetail(id,slug) {
    const product = await getSingleProduct(id);
    const paths = [];
 
    for (const group of groups.nodes) {
      console.log("loop");
      console.log(group.slug);
      const catProducts = await getProductsFromCategory(group.id,group.databaseId);
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { slug: group.slug }, props: { product } });
    }
  
    return paths;
  }