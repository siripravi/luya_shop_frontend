import{P as u,a as p}from"./ProductPrice.BTmuMWYS.js";import{_ as L}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as d,F as m,r as P,o as n,a as t,d as l,t as I}from"./runtime-core.esm-bundler.BG7tPlu0.js";import"./functions.CWYI3Lvm.js";const h={__name:"ShowProductsInCategory",props:["allProducts"],setup(s,{expose:r}){r();const{PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:a}={PUBLIC_GRAPHQL_URL:"http://yiiwp.local/wordpress/graphql",PUBLIC_GRAPHQL_URL_NM:"http://crater.local/graphql",PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:"https://via.placeholder.com/500",PUBLIC_CURRENCY:"NOK",PUBLIC_CURRENCY_LOCALE:"nb-NO",PUBLIC_ALGOLIA_INDEX_NAME:"change me",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0},c={PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:a,productLink:e=>({path:"/products/"+e.slug,query:{id:e.databaseId}}),productImage:e=>e.image?e.image.sourceUrl:a,ProductImage:u,ProductPrice:p};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},C={class:"row product_item_inner"},E={class:"cake_feature_item"},f={class:"cake_text"},g=["href"],R=["data-product-id"];function A(s,r,a,o,_,c){return n(),d("div",C,[(n(!0),d(m,null,P(a.allProducts,e=>(n(),d("div",{key:e.databaseId,class:"col-lg-4 col-md-4 col-6"},[t("div",E,[l(o.ProductImage,{alt:e.name,src:o.productImage(e),width:270},null,8,["alt","src"]),t("div",f,[l(o.ProductPrice,{product:e,priceFontSize:"normal",shouldCenterPrice:!0},null,8,["product"]),t("h3",null,[t("a",{class:"",href:`/products/${e.productId}/${e.slug}`},I(e.name),9,g)]),t("button",{onClick:r[0]||(r[0]=(...i)=>s.handleClick&&s.handleClick(...i)),"data-product-id":e.databaseId},"Add to Cart",8,R)])])]))),128))])}const N=L(h,[["render",A]]);export{N as default};
