import{_ as P}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{o as s,p as l,q as _,r as i,s as u,t as d,F as S,u as C,v as h}from"./runtime-core.esm-bundler.C5GKnUW7.js";import{h as m,f as p,a as E}from"./functions.CWYI3Lvm.js";const I={__name:"ProductImage",props:{alt:{type:String,required:!0},src:{type:String,required:!0},width:{type:String,required:!1},height:{type:String,required:!1}},setup(o,{expose:n}){n();const e=o,{PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:t}={PUBLIC_GRAPHQL_URL:"https://yiiwp.local/wordpress/graphql",PUBLIC_GRAPHQL_URL_NM:"http://crater.local/graphql",PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:"https://via.placeholder.com/500",PUBLIC_CURRENCY:"NOK",PUBLIC_CURRENCY_LOCALE:"nb-NO",PUBLIC_ALGOLIA_INDEX_NAME:"change me",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0},c=s(()=>e.src||t),a={props:e,PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:t,displayedImage:c,computed:s};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},R={class:"cake_img"},x=["alt","src","width","height"];function A(o,n,e,t,c,a){return l(),_("div",R,[i("img",{alt:e.alt,src:t.displayedImage,width:e.width,height:e.height},null,8,x)])}const U=P(I,[["render",A]]),y={__name:"ProductPrice",props:{product:Object,priceFontSize:String,shouldCenterPrice:Boolean},setup(o,{expose:n}){n();const e=o,t=s(()=>e.product.onSale),c=s(()=>m(e.product)),a=s(()=>c.value?p(e.product.price):e.product.regularPrice),r=s(()=>t.value?c.value?p(e.product.price):e.product.salePrice:e.product.price),f=s(()=>{switch(e.priceFontSize){case"small":return"text-lg";case"normal":return"text-2xl";case"big":return"text-2xl";default:return"text-xl"}}),g=s(()=>{switch(e.priceFontSize){case"small":return"text-lg";case"normal":return"text-xl";case"big":return"text-xl";default:return"text-xl"}}),L={props:e,onSale:t,productHasVariations:c,basePrice:a,displayPrice:r,getFontSizeClass:f,getSaleFontSizeClass:g,computed:s,get formatPrice(){return E},get filteredVariantPrice(){return p},get hasVariations(){return m}};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}};function B(o,n,e,t,c,a){return l(),_("div",null,[t.onSale?(l(),_("div",{key:0,class:u(["flex",e.shouldCenterPrice?"justify-center":""])},[i("p",{class:u(["pt-1 mt-4 text-gray-900",t.getFontSizeClass])},d(t.formatPrice(t.displayPrice)),3),i("p",{class:u(["pt-1 pl-4 mt-4 text-gray-900 line-through",t.getSaleFontSizeClass])},d(t.formatPrice(t.basePrice)),3)],2)):(l(),_("p",{key:1,class:u(["flex pt-1 mt-4 text-2xl text-gray-900",e.shouldCenterPrice?"justify-center":""])},d(t.formatPrice(t.displayPrice)),3))])}const O=P(y,[["render",B]]),v={__name:"ShowAllProducts",props:["allProducts"],setup(o,{expose:n}){n();const{PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:e}={PUBLIC_GRAPHQL_URL:"https://yiiwp.local/wordpress/graphql",PUBLIC_GRAPHQL_URL_NM:"http://crater.local/graphql",PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:"https://via.placeholder.com/500",PUBLIC_CURRENCY:"NOK",PUBLIC_CURRENCY_LOCALE:"nb-NO",PUBLIC_ALGOLIA_INDEX_NAME:"change me",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:void 0,ASSETS_PREFIX:void 0},a={PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL:e,productLink:r=>({path:"/products/"+r.slug,query:{id:r.databaseId}}),productImage:r=>r.image?r.image.sourceUrl:e,computed:s,ProductImage:U,ProductPrice:O};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},N={class:"row product_item_inner"},b={class:"cake_feature_item"},w={class:"cake_text"},M=["href"];function D(o,n,e,t,c,a){return l(),_("div",N,[(l(!0),_(S,null,C(e.allProducts,r=>(l(),_("div",{key:r.id,class:"col-lg-4 col-md-4 col-6"},[i("div",b,[h(t.ProductImage,{alt:r.name,src:t.productImage(r),width:270},null,8,["alt","src"]),i("div",w,[h(t.ProductPrice,{product:r,priceFontSize:"normal",shouldCenterPrice:!0},null,8,["product"]),i("h3",null,[i("a",{class:"",href:`/products/${r.slug}`},d(r.name),9,M)])])])]))),128))])}const G=P(v,[["render",D]]);export{G as default};