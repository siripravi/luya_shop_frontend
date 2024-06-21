import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as renderSlot, f as addAttribute } from './astro_Bmrxir9W.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './pages/currencies_Dxnc1htO.mjs';
import { createSchema, createYoga } from 'graphql-yoga';
import 'clsx';
import gql from 'graphql-tag';
import { useSSRContext, defineComponent, mergeProps, ref, onBeforeMount, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, computed, reactive, resolveComponent, resolveDynamicComponent } from 'vue';
import axios from 'axios';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
/* empty css                            */
import { Form, Field, ErrorMessage } from 'vee-validate';
import { object, string, number } from 'yup';
/* empty css                          */
import 'uid';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
/* empty css                         */

const $$Astro$h = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Page not found</h1> <ul role="list">There was an error locating the page</ul> </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/404.astro", void 0);

const $$file$c = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/404.astro";
const $$url$c = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const post = async ({ request }) => {
  const result = await request.formData();
  if (result) {
    return new Response(null, { status: 200 });
  } else {
    return new Response(
      JSON.stringify({
        message: "Data is mal-form-ed (hehe)"
      }),
      { status: 400 }
    );
  }
};

const checkout$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const ShoppingCart = [
  {
    id: 1,
    name: "Apple",
    price: 0.59,
    qty: 4
  },
  {
    id: 2,
    name: "Shampoo",
    price: 1.2,
    qty: 3
  },
  {
    id: 3,
    name: "Wholemeal bread",
    price: 0.75,
    qty: 1
  },
  {
    id: 4,
    name: "Dozen eggs - large",
    price: 2.95,
    qty: 2
  },
  {
    id: 5,
    name: "Large mayonnaise",
    price: 1.43,
    qty: 100
  }
];

const schema = createSchema({
  typeDefs: `
    type CartItem {
      id: Int!
      name: String!
      price: Float!
      qty: Int!
    }
    type Query {
      cart: [CartItem!]
    }    
  `,
  resolvers: {
    Query: {
      cart: () => ShoppingCart
    }
  }
});
const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Request,
    Response
  }
});
const POST = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};

const graphql = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$g = createAstro();
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Cart;
  return renderTemplate`<template></template>`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/cart.astro", void 0);

const $$file$b = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/cart.astro";
const $$url$b = "/cart";

const cart = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const { PUBLIC_GRAPHQL_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
const client = new ApolloClient({
  uri: PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache()
});

/**
 * Checks if the given data object has any variations by accessing the product's variations nodes array.
 *
 * @param {Object} data - The data object to check for variations
 * @return {Boolean} Returns true if there are any variations, false otherwise.
 */
function hasVariations(data) {
  // Use optional chaining to access the nodes array safely, and nullish coalescing to default to an empty array
  const variationsNodes = data?.product?.variations?.nodes ?? [];
  return variationsNodes.length > 0;
}

/**
 * Formats a given price into a string with a currency symbol and locale.
 *
 * @param {string} price - The price to format.
 * @param {string} currency - The currency to use. Defaults to "NOK".
 * @param {string} currencyLocale - The locale to use for the currency symbol. Defaults to "nb-NO".
 * @return {string} The formatted price as a string with the currency symbol and locale.
 */
function formatPrice(price, currency, currencyLocale) {
  // Set default values
  const currencyPrice = currency || "NOK";
  const currencySymbol = currencyLocale || "nb-NO";

  if (!price) {
    return;
  }

  // Convert the price string to a numerical float value
  const numericPrice = parseFloat(price.replace(/[^\d.]/g, ""));

  return new Intl.NumberFormat(currencySymbol, {
    style: "currency",
    currency: currencyPrice,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

/**
 * Filter variant price. Changes "kr198.00 - kr299.00" to kr299.00 or kr198 depending on the side variable
 * @param {String} side Which side of the string to return (which side of the "-" symbol)
 * @param {String} price The inputted price that we need to convert
 */
const filteredVariantPrice = (price, side) => {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "");
  }
  return price.substring(0, price.indexOf("-")).replace("-", "");
};

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ButtonComponent",
  props: {
    type: {},
    variant: {},
    size: {},
    disabled: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: $props.type ?? "button",
    class: [
      "btn",
      {
        "btn--primary": $props.variant === "primary",
        "btn--secondary": $props.variant === "secondary",
        "btn--sm": $props.size === "sm",
        "btn--md": $props.size === "md",
        "btn--lg": $props.size === "lg"
      }
    ],
    disabled: $props.disabled
  }, _attrs))} data-v-442194c8>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/UI/ButtonComponent.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ButtonComponent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-442194c8"]]);

const FormatToVND = (price) => {
  return price.toLocaleString("rs", { style: "currency", currency: "INR" });
};

const _sfc_main$f = {
  __name: 'ShowAllProductsCategory',
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
  __expose();




const productImage = product =>
  product.image ? product.image.sourceUrl : process.env.placeholderSmallImage;


const __returned__ = { productImage, get filteredVariantPrice() { return filteredVariantPrice }, ButtonComponent, get FormatToVND() { return FormatToVND } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container mt-100" }, _attrs))}><div class="flex flex-wrap items-center"><!--[-->`);
  ssrRenderList($props.allProducts, (product) => {
    _push(`<!--[-->`);
    if (product.slug) {
      _push(`<div class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4"><a${
        ssrRenderAttr("href", `/products/${product.slug}`)
      }><img id="product-image" class="container mx-auto transition duration-700 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-95"${
        ssrRenderAttr("alt", product.name)
      }${
        ssrRenderAttr("src", $setup.productImage(product))
      }></a><div class="flex justify-center pt-3"><p class="text-xl font-bold text-center cursor-pointer">${
        ssrInterpolate(product.name)
      }</p></div>`);
      if (product.onSale) {
        _push(`<div class="flex justify-center mt-2"><div class="text-lg text-gray-900 line-through">`);
        if (product.variations) {
          _push(`<span>${ssrInterpolate($setup.filteredVariantPrice(product.price, "right"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(product.regularPrice)}</span>`);
        }
        _push(`</div><div class="ml-4 text-xl text-gray-900">`);
        if (product.variations) {
          _push(`<span>${ssrInterpolate($setup.filteredVariantPrice(product.price))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(product.salePrice)}</span>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div><p class="mt-2 text-xl text-center text-gray-900">${ssrInterpolate(product.price)}</p></div>`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--]-->`);
  });
  _push(`<!--]--></div></section>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Products/ShowAllProductsCategory.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : undefined
};
const ShowAllProductsCategory = /*#__PURE__*/_export_sfc(_sfc_main$f, [['ssrRender',_sfc_ssrRender$f]]);

const _sfc_main$e = {
  __name: 'ShowProductsInCategory',
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
  __expose();




const __returned__ = { ShowAllProductsCategory };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mt-100" }, _attrs))}><div class="container">`);
  if ($props.allProducts) {
    _push(`<div><h1 class="h-10 p-6 text-3xl font-bold text-center">${ssrInterpolate($props.allProducts.name)}</h1><br>`);
    _push(ssrRenderComponent($setup["ShowAllProductsCategory"], { allProducts: $props.allProducts }, null, _parent));
    if (!$props.allProducts.length) {
      _push(`<div class="mt-10"><h2 class="h-10 text-2xl font-bold text-center"> No products to display </h2></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Category/ShowProductsInCategory.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : undefined
};
const ShowProductsInCategory = /*#__PURE__*/_export_sfc(_sfc_main$e, [['ssrRender',_sfc_ssrRender$e]]);

async function fetchAxios(params) {
  Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { OS: process.env.OS, PUBLIC: process.env.PUBLIC });
  const url = "http://localhost:3030/api/page";
  const { data } = await axios.get(url, { params });
  return data.placeholders.content;
}

async function getAllCategories() {
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

async function getProductsFromCategory(tag,key) {
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

async function getAllProductPaths() {
    const groups = await getAllCategories();
    const paths = [];
 
    for (const group of groups.nodes) {
      console.log("loop");
      console.log(group.slug);
      const catProducts = await getProductsFromCategory(group.id,group.databaseId);
      console.log(([group.slug,catProducts.productCategory.products.nodes.length]).join(" and "));
      paths.push({ params: { slug: group.slug }, props: { catProducts } });
    }
  
    return paths;
  }

const $$Astro$f = createAstro();
async function getStaticPaths$1() {
  const paths = await getAllProductPaths();
  console.log(paths);
  return paths;
}
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$slug$1;
  Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path, PUBLIC: process.env.PUBLIC });
  Astro2.params;
  const productVariables = { limit: 99 };
  await client.query({
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
  `,
    variables: productVariables
  });
  const { catProducts } = Astro2.props;
  console.log(catProducts.productCategory?.products?.nodes.length);
  const products = catProducts.productCategory?.products?.nodes || [];
  return renderTemplate`<!--
<Layout title="Categories">
    <ViewAllCategories catData={groups} client:load />
</Layout>
 -->${renderComponent($$result, "Layout", $$Layout, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-3xl text-center font-bold p-6">Products page</h1> ${renderComponent($$result2, "ShowProductsInCategory", ShowProductsInCategory, { "allProducts": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Category/ShowProductsInCategory.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/category/[slug].astro", void 0);
const $$file$a = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/category/[slug].astro";
const $$url$a = "/category/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$a,
  getStaticPaths: getStaticPaths$1,
  url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

async function getCart() {
  const data = await fetchAxios(`
  {
    cart {
      contents {
        nodes {
          key
          product {
            id
            databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
          variation {
            id
            databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            attributes {
              nodes {
                id
                name
                value
              }
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      appliedCoupons {
        nodes {
          id
          databaseId
          discountType
          amount
          dateExpiry
          products {
            nodes {
              id
            }
          }
          productCategories {
            nodes {
              id
            }
          }
        }
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
  }
    `);

  return data?.cart;
}

async function updateCart(product) {
  const data = await fetchAxios(
    `
    mutation ($input: UpdateItemQuantitiesInput!) {
        updateItemQuantities(input: $input) {
          items {
            key
            product {
              id
              databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
            variation {
              id
              databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
              attributes {
                nodes {
                  id
                  attributeId
                  name
                  value
                }
              }
            }
            quantity
            total
            subtotal
            subtotalTax
          }
          removed {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
          updated {
            key
            product {
              id
              databaseId
            }
            variation {
              id
              databaseId
            }
          }
        }
      }    

    `);

  return data?.items;
}

const _sfc_main$d = {
  __name: 'CartCheckoutButton',
  props: ["type"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${
    ssrRenderAttrs(mergeProps({ href: "/checkout" }, _attrs))
  }><button class="w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800 ease-in-out duration-300"${
    ssrRenderAttr("type", $setup.props.type)
  }> Checkout </button></a>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Cart/CartCheckoutButton.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : undefined
};
const CartCheckoutButton = /*#__PURE__*/_export_sfc(_sfc_main$d, [['ssrRender',_sfc_ssrRender$d]]);

const _sfc_main$c = {};

function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "xsvg",
    xmlns: "https://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "red",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    class: "cursor-pointer"
  }, _attrs))}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/UI/BaseXSVG.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : undefined
};
const BaseXSVG = /*#__PURE__*/_export_sfc(_sfc_main$c, [['ssrRender',_sfc_ssrRender$c]]);

const _sfc_main$b = {
  __name: 'Cart',
  props: ["showCheckoutButton"],
  setup(__props, { expose: __expose }) {
  __expose();

let cartContent = ref();
let subTotal = ref();
let cartLength = ref(0);



const handleProductRemove = (product) => {
  let updatedItems = [];
  updatedItems.push({
    key: product.key,
    quantity: 0,
  });

  updateCart().then(() => window.location.reload());
};

onBeforeMount(async () => {
  const cart = await getCart();

  if (cart && cart.contents.nodes[0]) {
    cartContent.value = cart.contents.nodes;
    cartLength.value = cart.contents.nodes[0].quantity;
    subTotal.value = cart.contents.nodes[0].total;
  }
});

const __returned__ = { get cartContent() { return cartContent }, set cartContent(v) { cartContent = v; }, get subTotal() { return subTotal }, set subTotal(v) { subTotal = v; }, get cartLength() { return cartLength }, set cartLength(v) { cartLength = v; }, handleProductRemove, ref, onBeforeMount, get getCart() { return getCart }, get updateCart() { return updateCart }, CartCheckoutButton, BaseXSVG };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($setup.cartContent) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0110599><!--[-->`);
    ssrRenderList($setup.cartContent, (products) => {
      _push(`<div class="mx-auto mt-4 flex-container" data-v-c0110599>`);
      if ($props.showCheckoutButton) {
        _push(`<div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Remove: <br data-v-c0110599></span><span class="item-content" data-v-c0110599><button data-v-c0110599>`);
        _push(ssrRenderComponent($setup["BaseXSVG"], null, null, _parent));
        _push(`</button></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Name: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.product.name)
      }</span></div><div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Quantity: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.quantity)
      }</span></div><div class="item" data-v-c0110599><span class="block mt-2 font-extrabold" data-v-c0110599>Subtotal: <br data-v-c0110599></span><span class="item-content" data-v-c0110599>${
        ssrInterpolate(products.total)
      }</span></div></div>`);
    });
    _push(`<!--]-->`);
    if ($props.showCheckoutButton) {
      _push(`<div class="container mx-auto flex justify-end mt-2 max-w-[1380px]" data-v-c0110599>`);
      _push(ssrRenderComponent($setup["CartCheckoutButton"], null, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-c0110599><h2 class="m-4 text-3xl text-center" data-v-c0110599>Cart is currently empty</h2></div>`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Cart/Cart.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : undefined
};
const Cart = /*#__PURE__*/_export_sfc(_sfc_main$b, [['ssrRender',_sfc_ssrRender$b],['__scopeId',"data-v-c0110599"]]);

const _sfc_main$a = {
  __name: 'BaseButton',
  props: ["type"],
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "px-4 py-2 font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400 ease-in-out duration-300",
    type: $setup.props.type
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/UI/BaseButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : undefined
};
const BaseButton = /*#__PURE__*/_export_sfc(_sfc_main$a, [['ssrRender',_sfc_ssrRender$a]]);

const BILLING_FIELDS = [
  {
    inputId: "firstName",
    label: "First name",
  },
  {
    inputId: "lastName",
    label: "Last name",
  },
  {
    inputId: "address1",
    label: "Address",
  },
  {
    inputId: "postcode",
    label: "Postcode",
  },
  {
    inputId: "city",
    label: "City",
  },
  {
    inputId: "email",
    label: "Email",
  },
  {
    inputId: "phone",
    label: "Phone",
  },
];

const BILLING_SCHEMA = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  address1: string().required(),
  postcode: number().required().moreThan(1111),
  city: string().required(),
  email: string().required().email(),
  phone: number().required().moreThan(11111111),
});

async function checkoutOrder(order) {
  const data = await fetchAxios(
    `
    mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
        checkout(input: $input) {
          result
          redirect
          order {
            databaseId
          }
        }
      }
    `);

  return data?.checkout.result;
}

const _sfc_main$9 = {
  __name: "Checkout",
  setup(__props, { expose: __expose }) {
    __expose();
    const upperCaseFirstChar = (input) => input.charAt(0).toUpperCase() + input.slice(1);
    const handleSubmit = (values) => {
      const paymentMethod = "cod";
      const billing = {
        firstName: values.firstName,
        lastName: values.lastName,
        address1: values.address1,
        address2: values.address2,
        city: values.city,
        country: values.country,
        state: values.state,
        postcode: values.postcode,
        email: values.email,
        phone: values.phone,
        company: values.company
      };
      const checkoutData = {
        //clientMutationId: uid(),
        clientMutationId: "12345678abcdef",
        billing,
        shipping: billing,
        shipToDifferentAddress: false,
        paymentMethod,
        isPaid: false,
        transactionId: "hjkhjkhsdsdiui"
      };
      try {
        checkoutOrder(checkoutData).then((result) => {
          if (result === "success") {
            location.href = "/success";
          } else {
            location.href = "/error";
          }
        });
      } catch (e) {
      }
    };
    const __returned__ = { upperCaseFirstChar, handleSubmit, get Form() {
      return Form;
    }, get Field() {
      return Field;
    }, get ErrorMessage() {
      return ErrorMessage;
    }, BaseButton, get BILLING_FIELDS() {
      return BILLING_FIELDS;
    }, get BILLING_SCHEMA() {
      return BILLING_SCHEMA;
    }, get checkoutOrder() {
      return checkoutOrder;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-gray-700 container p-4 py-2 mx-auto" }, _attrs))}>`);
  _push(ssrRenderComponent($setup["Form"], {
    "validation-schema": $setup.BILLING_SCHEMA,
    onSubmit: $setup.handleSubmit
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mx-auto lg:w-1/2 flex flex-wrap"${_scopeId}><!--[-->`);
        ssrRenderList($setup.BILLING_FIELDS, (field) => {
          _push2(`<div class="w-1/2 p-2"${_scopeId}><label${ssrRenderAttr("for", field.inputId)}${_scopeId}>${ssrInterpolate(field.label)}</label>`);
          _push2(ssrRenderComponent($setup["Field"], {
            name: field.inputId
          }, {
            default: withCtx(({ field: field2, meta }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<input${ssrRenderAttrs(mergeProps(field2, {
                  class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                    meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                  ]]
                }))}${_scopeId2}>`);
              } else {
                return [
                  createVNode("input", mergeProps(field2, {
                    class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                      meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                    ]]
                  }), null, 16)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent($setup["ErrorMessage"], {
            name: field.inputId
          }, {
            default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span class="text-lg text-red-500 font-bold"${_scopeId2}>${ssrInterpolate($setup.upperCaseFirstChar(message))}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-lg text-red-500 font-bold" }, toDisplayString($setup.upperCaseFirstChar(message)), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--><div class="w-full flex justify-center mt-6"${_scopeId}>`);
        _push2(ssrRenderComponent($setup["BaseButton"], { type: "submit" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Submit`);
            } else {
              return [
                createTextVNode("Submit")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "mx-auto lg:w-1/2 flex flex-wrap" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($setup.BILLING_FIELDS, (field) => {
              return openBlock(), createBlock("div", {
                key: field.inputId,
                class: "w-1/2 p-2"
              }, [
                createVNode("label", {
                  for: field.inputId
                }, toDisplayString(field.label), 9, ["for"]),
                createVNode($setup["Field"], {
                  name: field.inputId
                }, {
                  default: withCtx(({ field: field2, meta }) => [
                    createVNode("input", mergeProps(field2, {
                      class: ["w-full px-4 py-2 mt-2 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-black", [
                        meta.valid ? "border-green-700 border-2" : "border-red-500 border-2"
                      ]]
                    }), null, 16)
                  ]),
                  _: 2
                }, 1032, ["name"]),
                createVNode($setup["ErrorMessage"], {
                  name: field.inputId
                }, {
                  default: withCtx(({ message }) => [
                    createVNode("span", { class: "text-lg text-red-500 font-bold" }, toDisplayString($setup.upperCaseFirstChar(message)), 1)
                  ]),
                  _: 2
                }, 1032, ["name"])
              ]);
            }), 128)),
            createVNode("div", { class: "w-full flex justify-center mt-6" }, [
              createVNode($setup["BaseButton"], { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode("Submit")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Checkout/Checkout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Checkout = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);

const $$Astro$e = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Checkout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Checkout</h1> ${renderComponent($$result2, "Cart", Cart, { "showCheckoutButton": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Cart/Cart.vue", "client:component-export": "default" })} ${renderComponent($$result2, "Checkout", Checkout, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Checkout/Checkout.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/checkout.astro", void 0);

const $$file$9 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/checkout.astro";
const $$url$9 = "/checkout";

const checkout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Error;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1>Error page</h1> <ul role="list">There was an error processing the order</ul> </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/error.astro", void 0);

const $$file$8 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/error.astro";
const $$url$8 = "/error";

const error = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Search</h1> <div id="app"> ${renderComponent($$result2, "router-view", "router-view", {})} </div> </main> ` })} `;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/menu.astro", void 0);

const $$file$7 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/menu.astro";
const $$url$7 = "/menu";

const menu = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Menu,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$Pricelist = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Pricelist;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Menu" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!--================End Main Header Area =================--> <section class="banner_area" style="margin-top:135px;"> <div class="container"> <div class="banner_text"> <h3>Menu &#128073; &#127874; &#x20B9;</h3> <ul> <li><a href="index.html">Home</a></li> <li><a href="menu.html">Menu</a></li> </ul> </div> </div> </section> <!--================End Main Header Area =================--> <!--================Recipe Menu list Area =================--> <section class="price_list_area p_100"> <div class="container"> <div class="price_list_inner"> <div class="single_pest_title"> <h2>Our Price List</h2> <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> </div> <div class="row"> <div class="col-lg-6"> <div class="discover_item_inner"> <div class="discover_item"> <h4>Double Chocolate Pie</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Zabaglione Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Blueberry Muffin</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Box of Delight</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;7.99</span></p> </div> <div class="discover_item"> <h4>Classic French Croissant</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;6.79</span></p> </div> <div class="discover_item"> <h4>Macarons & Tea</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;5.99</span></p> </div> <div class="discover_item"> <h4>Strawberry Sweet Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Cupcake of Vanela</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;20.00</span></p> </div> </div> </div> <div class="col-lg-6"> <div class="discover_item_inner"> <div class="discover_item"> <h4>Fried Egg Sandwich</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Multigrain Hot Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Branch Special Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;8.99</span></p> </div> <div class="discover_item"> <h4>Bialy Egg Sandwich with Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam milk <span>&#x20B9;7.99</span></p> </div> <div class="discover_item"> <h4>Strawberry Sweet Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;6.79</span></p> </div> <div class="discover_item"> <h4>Double Chocolate Pie</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;5.99</span></p> </div> <div class="discover_item"> <h4>Blueberry Muffin</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;12.99</span></p> </div> <div class="discover_item"> <h4>Classic Chocolate Cake</h4> <p>Chocolate puding, vanilla, fruite rasberry jam evporate milk <span>&#x20B9;20.00</span></p> </div> </div> </div> </div> <div class="row our_bakery_image"> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-1.jpg" alt=""> </div> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-2.jpg" alt=""> </div> <div class="col-md-4 col-6"> <img class="img-fluid" src="/images/our-bakery/bakery-3.jpg" alt=""> </div> </div> </div> </div> </section> <!--================End Main Header Area =================--> <!--================Newsletter Area =================--> <section class="newsletter_area"> <div class="container"> <div class="row newsletter_inner"> <div class="col-lg-6"> <div class="news_left_text"> <h4>Join our Newsletter list to get all the latest offers, discounts and other benefits</h4> </div> </div> <div class="col-lg-6"> <div class="newsletter_form"> <div class="input-group"> <input type="text" class="form-control" placeholder="Enter your email address"> <div class="input-group-append"> <button class="btn btn-outline-secondary" type="button">Subscribe Now</button> </div> </div> </div> </div> </div> </div> </section> <!--================End Newsletter Area =================--> </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/pricelist.astro", void 0);

const $$file$6 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/pricelist.astro";
const $$url$6 = "/pricelist";

const pricelist = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricelist,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Detail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Detail;
  const { id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1>Product Detail: ${{ id }}</h1>`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products/detail.astro", void 0);

const $$file$5 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products/detail.astro";
const $$url$5 = "/products/detail";

const detail = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Detail,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
async function getStaticPaths() {
  const paths = await getAllProductPaths();
  console.log(paths);
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$slug;
  Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path, PUBLIC: process.env.PUBLIC });
  Astro2.params;
  const { catProducts } = Astro2.props;
  console.log(catProducts.productCategory?.products?.nodes.length);
  const products = catProducts.productCategory?.products?.nodes || [];
  return renderTemplate`<!--
<Layout title="Categories">
    <ViewAllCategories catData={groups} client:load />
</Layout>
 -->${renderComponent($$result, "Layout", $$Layout, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-3xl text-center font-bold p-6">Products page</h1> ${renderComponent($$result2, "ShowProductsInCategory", ShowProductsInCategory, { "allProducts": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Category/ShowProductsInCategory.vue", "client:component-export": "default" })} </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products/[slug].astro", void 0);
const $$file$4 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products/[slug].astro";
const $$url$4 = "/products/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file$4,
  getStaticPaths,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Banner;
  return renderTemplate`${maybeRenderHead()}<section class="banner_area"> <div class="container"> <div class="banner_text"> <h3>Shop</h3> <ul> <li><a href="index.html">Home</a></li> <li><a href="shop.html">Shop</a></li> </ul> </div> </div> </section>`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/layouts/Banner.astro", void 0);

const $$Astro$7 = createAstro();
const $$LeftMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LeftMenu;
  return renderTemplate`${maybeRenderHead()}<div class="product_left_sidebar"> <aside class="left_sidebar search_widget"> <div class="input-group"> <input type="text" class="form-control" placeholder="Enter Search Keywords"> <div class="input-group-append"> <button class="btn" type="button"> <i class="icon icon-Search"></i> </button> </div> </div> </aside> <aside class="left_sidebar p_catgories_widget"> <div class="p_w_title"> <h3>Product Categories</h3> </div> <ul class="list_style"> <li><a href="#">Cupcake (17)</a></li> <li><a href="#">Chocolate (15)</a></li> <li><a href="#">Celebration (14)</a></li> <li><a href="#">Wedding Cake (8)</a></li> <li><a href="#">Desserts (11)</a></li> </ul> </aside> <aside class="left_sidebar p_price_widget"> <div class="p_w_title"> <h3>Filter By Price</h3> </div> <div class="filter_price"> <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"> <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 2%; width: 48%"></div> <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 2%"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 50%"></span> </div> <label for="amount">Price range:</label> <input type="text" id="amount" readonly=""> <a href="#">Filter</a> </div> </aside> <aside class="left_sidebar p_sale_widget"> <div class="p_w_title"> <h3>Top Sale Products</h3> </div> <div class="media"> <div class="d-flex"> <img src="img/product/sale-product/s-product-1.jpg" alt=""> </div> <div class="media-body"> <a href="#"><h4>Brown Cake</h4></a> <ul class="list_style"> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> </ul> <h5>$29</h5> </div> </div> <div class="media"> <div class="d-flex"> <img src="img/product/sale-product/s-product-2.jpg" alt=""> </div> <div class="media-body"> <a href="#"><h4>Brown Cake</h4></a> <ul class="list_style"> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> </ul> <h5>$29</h5> </div> </div> <div class="media"> <div class="d-flex"> <img src="img/product/sale-product/s-product-3.jpg" alt=""> </div> <div class="media-body"> <a href="#"><h4>Brown Cake</h4></a> <ul class="list_style"> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> </ul> <h5>$29</h5> </div> </div> <div class="media"> <div class="d-flex"> <img src="img/product/sale-product/s-product-4.jpg" alt=""> </div> <div class="media-body"> <a href="#"><h4>Brown Cake</h4></a> <ul class="list_style"> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> <li> <a href="#"><i class="fa fa-star-o"></i></a> </li> </ul> <h5>$29</h5> </div> </div> </aside> </div>`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/layouts/LeftMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$ShopFilter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ShopFilter;
  return renderTemplate(_a || (_a = __template(["", `<div class="row m0 product_task_bar"> <div class="product_task_inner"> <div class="float-left"> <a class="active" href="#"><i class="fa fa-th-large" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-th-list" aria-hidden="true"></i></a> <span>Showing 1 - 10 of 55 results</span> </div> <div class="float-right"> <h4>Sort by :</h4> <select class="short" style="display: none"> <option data-display="Default">Default</option> <option value="1">Default</option> <option value="2">Default</option> <option value="4">Default</option> </select> <div class="nice-select short" tabindex="0"> <span class="current">Default</span> <ul class="list"> <li data-value="Default" data-display="Default" class="option selected">
Default
</li> <li data-value="1" class="option">Default</li> <li data-value="2" class="option">Default</li> <li data-value="4" class="option">Default</li> </ul> </div> </div> </div> </div> <script setup>
   /* $(document).ready(function() {
	  $('.product_select, .short').niceSelect();
	});*/
<\/script>`])), maybeRenderHead());
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/layouts/ShopFilter.astro", void 0);

const $$Astro$5 = createAstro();
const $$ShopLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ShopLayout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Banner", $$Banner, {})} ${maybeRenderHead()}<section class="product_area p_100"> <div class="container"> <div class="row product_inner_row"> <div class="col-lg-9"> ${renderComponent($$result2, "ShopFilter", $$ShopFilter, {})} <div class="row product_item_inner"> ${renderSlot($$result2, $$slots["default"])} </div> </div> <div class="col-lg-3"> ${renderComponent($$result2, "LeftMenu", $$LeftMenu, {})} </div> </div> </div> </section> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/layouts/ShopLayout.astro", void 0);

const _sfc_main$8 = {
  __name: "ProductImage",
  props: {
    alt: { type: String, required: true },
    src: { type: String, required: true },
    width: { type: String, required: false },
    height: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
    const displayedImage = computed(() => {
      return props.src || PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
    });
    const __returned__ = { props, PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL, displayedImage, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cake_img" }, _attrs))}><img${ssrRenderAttr("alt", $props.alt)}${ssrRenderAttr("src", $setup.displayedImage)}${ssrRenderAttr("width", $props.width)}${ssrRenderAttr("height", $props.height)}></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Products/ProductImage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ProductImage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);

const _sfc_main$7 = {
  __name: 'ProductPrice',
  props: {
  product: Object,
  priceFontSize: String,
  shouldCenterPrice: Boolean,
},
  setup(__props, { expose: __expose }) {
  __expose();

/**
 * Displays the price of a product, with support for sale prices and variations.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product to display the price for.
 * @param {string} [props.priceFontSize="normal"] - The font size for the price display.
 * @param {boolean} [props.shouldCenterPrice=false] - Whether to center the price display.
 */
const props = __props;

const onSale = computed(() => props.product.onSale);

const productHasVariations = computed(() => hasVariations(props.product));

const basePrice = computed(() => {
  if (productHasVariations.value) {
    return filteredVariantPrice(props.product.price);
  } else {
    return props.product.regularPrice;
  }
});

const displayPrice = computed(() => {
  if (onSale.value) {
    return productHasVariations.value
      ? filteredVariantPrice(props.product.price)
      : props.product.salePrice;
  } else {
    return props.product.price;
  }
});

const getFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-2xl";
    case "big":
      return "text-2xl";
    default:
      return "text-xl";
  }
});

const getSaleFontSizeClass = computed(() => {
  switch (props.priceFontSize) {
    case "small":
      return "text-lg";
    case "normal":
      return "text-xl";
    case "big":
      return "text-xl";
    default:
      return "text-xl";
  }
});

const __returned__ = { props, onSale, productHasVariations, basePrice, displayPrice, getFontSizeClass, getSaleFontSizeClass, computed, get formatPrice() { return formatPrice }, get filteredVariantPrice() { return filteredVariantPrice }, get hasVariations() { return hasVariations } };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($setup.onSale) {
    _push(`<div class="${
      ssrRenderClass([$props.shouldCenterPrice ? 'justify-center' : '', "flex"])
    }"><p class="${
      ssrRenderClass([$setup.getFontSizeClass, "pt-1 mt-4 text-gray-900"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.displayPrice))
    }</p><p class="${
      ssrRenderClass([$setup.getSaleFontSizeClass, "pt-1 pl-4 mt-4 text-gray-900 line-through"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.basePrice))
    }</p></div>`);
  } else {
    _push(`<p class="${
      ssrRenderClass([$props.shouldCenterPrice ? 'justify-center' : '', "flex pt-1 mt-4 text-2xl text-gray-900"])
    }">${
      ssrInterpolate($setup.formatPrice($setup.displayPrice))
    }</p>`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Products/ProductPrice.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : undefined
};
const ProductPrice = /*#__PURE__*/_export_sfc(_sfc_main$7, [['ssrRender',_sfc_ssrRender$7]]);

const _sfc_main$6 = {
  __name: "ShowAllProducts",
  props: ["allProducts"],
  setup(__props, { expose: __expose }) {
    __expose();
    const { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
    const productLink = (product) => {
      return {
        path: "/products/" + product.slug,
        query: { id: product.databaseId }
      };
    };
    const productImage = (product) => product.image ? product.image.sourceUrl : PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL;
    const __returned__ = { PUBLIC_PLACEHOLDER_SMALL_IMAGE_URL, productLink, productImage, computed, ProductImage, ProductPrice };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row product_item_inner" }, _attrs))}><!--[-->`);
  ssrRenderList($props.allProducts, (product) => {
    _push(`<div class="col-lg-4 col-md-4 col-6"><div class="cake_feature_item">`);
    _push(ssrRenderComponent($setup["ProductImage"], {
      alt: product.name,
      src: $setup.productImage(product),
      width: 270
    }, null, _parent));
    _push(`<div class="cake_text">`);
    _push(ssrRenderComponent($setup["ProductPrice"], {
      product,
      priceFontSize: "normal",
      shouldCenterPrice: true
    }, null, _parent));
    _push(`<h3><a class=""${ssrRenderAttr("href", `/products/${product.slug}`)}>${ssrInterpolate(product.name)}</a></h3></div></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Products/ShowAllProducts.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ShowAllProducts = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);

const $$Astro$4 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Products;
  Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { PUBLIC: process.env.PUBLIC });
  Astro2.props;
  const productVariables = { limit: 99 };
  const { data: allProducts } = await client.query({
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
  `,
    variables: productVariables
  });
  const categoryVariables = { id: "dGVybToyMA==" };
  await client.query({
    query: gql`
    query ProductsFromCategory($id: ID!) {
      productCategory(id: $id, idType: ID) {
        id
        name
        products(first: 50) {
          nodes {
            id
            databaseId
            onSale
            averageRating
            slug
            description
            image {
              id
              uri
              title
              srcSet
              sourceUrl
            }
            name
            ... on SimpleProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on VariableProduct {
              salePrice
              regularPrice
              onSale
              price
              id
            }
            ... on ExternalProduct {
              price
              id
              externalUrl
            }
            ... on GroupProduct {
              products {
                nodes {
                  ... on SimpleProduct {
                    id
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
    variables: categoryVariables
  });
  const products = (
    //  allCategoryProducts.productCategory?.products?.nodes ||
    allProducts.products?.nodes || []
  );
  return renderTemplate`${renderComponent($$result, "ShopLayout", $$ShopLayout, { "title": "Products" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ShowAllProducts", ShowAllProducts, { "allProducts": products, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Products/ShowAllProducts.vue", "client:component-export": "default" })} ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products.astro", void 0);
const $$file$3 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/products.astro";
const $$url$3 = "/products";

const products = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Search</h1>
SEARCH
</main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/search.astro", void 0);

const $$file$2 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/search.astro";
const $$url$2 = "/search";

const search = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Order placed" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-3xl font-bold p-4">Order placed</h1> </main> ` })}`;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/success.astro", void 0);

const $$file$1 = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/success.astro";
const $$url$1 = "/success";

const success = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

reactive({
    count: 0,
    increment() {
      this.count++;
    }
});

const _sfc_main$5 = {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      onSlideChange: () => {},
      modules: [Autoplay],
    };
  },
  methods: {
    onSwiper(swiper) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      observer.observe(swiper.el);
    },
  },
};

function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");

  _push(ssrRenderComponent(_component_swiper, mergeProps({
    modules: $setup.modules,
    "slides-per-view": 1.5,
    "space-between": 15,
    onActiveIndexChange: $setup.onSlideChange,
    onSwiper: $options.onSwiper
  }, _attrs), {
    default: withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner1.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner1.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner2.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner2.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
        _push(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img src="/images/cakebanner3.jpg"${_scopeId}>`);
            } else {
              return [
                createVNode("img", { src: "/images/cakebanner3.jpg" })
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner1.jpg" })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner2.jpg" })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", { src: "/images/cakebanner3.jpg" })
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/HomeCarousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : undefined
};
const HomeSlider = /*#__PURE__*/_export_sfc(_sfc_main$5, [['ssrRender',_sfc_ssrRender$5]]);

const _sfc_main$4 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(_attrs)
  }>${
    $props.block.values.html
  }</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaCmsFrontendBlocksHtmlBlock.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : undefined
};
const HtmlBlock = /*#__PURE__*/_export_sfc(_sfc_main$4, [['ssrRender',_sfc_ssrRender$4]]);

const _sfc_main$3 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: $props.block.extras.image.source
  }, _attrs))}>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaBootstrap4BlocksImageBlock.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const ImageBlock = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

// Import Swiper styles

const _sfc_main$2 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))}><div class="swiper-wrapper"><div class="swiper-slide">Slide 1</div><div class="swiper-slide">Slide 2</div><div class="swiper-slide">Slide 3</div> ... </div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div><div class="swiper-scrollbar"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaBootstrap4BlocksCarouselBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const CarouselBlock = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {
  props: {
    block: Object,
  },
};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row service_main_item_inner" }, _attrs))}><!--[-->`);
  ssrRenderList($props.block.extras.elements.categories, (category) => {
    _push(`<div class="col-lg-4 col-sm-6"><div class="service_m_item"><a${
      ssrRenderAttr("href", `/category/${category.id}/${category.slug}`)
    }><div class="service_img_inner"><img class="rounded-circle"${
      ssrRenderAttr("src", category.imageSrc.source)
    }${
      ssrRenderAttr("alt", category.alt)
    }></div><div class="service_text"><h4>${
      ssrInterpolate(category.name)
    }</h4></div><p class="category__item-description">${
      ssrInterpolate(category.text)
    }</p></a></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/SiripraviEcommerceFrontendBlocksCategoryBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const CategoryBlock = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

axios.create({
  baseURL: "http://localhost:3030/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const _sfc_main = {
  components: { HtmlBlock, ImageBlock, CarouselBlock, CategoryBlock },

  data: () => ({
    isLoaded: false,
    response: null,
  }),
  computed: {
    contentPlaceholder() {
      return this.isLoaded ? this.response.placeholders.content : [];
    },
  },
  async mounted() {
    const url = "http://localhost:3030/api/page?id=1";
    //const { data } = await this.$axios('page?id=' + this.$route.params.slug)
    const { data } = await axios(url);
    // axios.get(url).then((response) => {
    this.response = data;
    this.isLoaded = true;
    console.log("rsp:", this.response);
    //});
  },

  // this.response = data
};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.isLoaded) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h3>Data Loaded Successfully</h3><!--[-->`);
    ssrRenderList($options.contentPlaceholder, (item) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.block_name), {
        key: item.id,
        block: item
      }, null), _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Index/LuyaHtmlBlockList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const HtmlBlockList = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$1 = createAstro();
const $$FigureDesctiption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FigureDesctiption;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-z5imlbxh>Astronaut Figurine</h1> <p class="limited-edition-badge" data-astro-cid-z5imlbxh>Limited Edition</p> <p data-astro-cid-z5imlbxh>
The limited edition Astronaut Figurine is the perfect gift for any Astro contributor. This
	fully-poseable action figurine comes equipped with:
</p> <ul data-astro-cid-z5imlbxh> <li data-astro-cid-z5imlbxh>A fabric space suit with adjustible straps</li> <li data-astro-cid-z5imlbxh>Boots lightly dusted by the lunar surface *</li> <li data-astro-cid-z5imlbxh>An adjustable space visor</li> </ul> <p data-astro-cid-z5imlbxh> <sub data-astro-cid-z5imlbxh>* Dust not actually from the lunar surface</sub> </p> `;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/FigureDesctiption.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const item = {
    id: "astronaut-figurine",
    name: "Astronaut Figurine",
    imageSrc: "/images/chococake.jpg"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Index", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- <Hero />  --> ${renderComponent($$result2, "HomeSlider", HomeSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Index/HomeCarousel.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <h1 class="text-center text-3xl font-bold p-4" data-astro-cid-j7pv25f6>Categories</h1> <!--   <ShowAllCategories categories={categories} client:load />  --> <!--  <ShowAllProducts allProducts={allProducts} />  --> ${renderComponent($$result2, "HtmlBlockList", HtmlBlockList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/components/Index/LuyaHtmlBlockList.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <div class="product-layout" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FigureDescription", $$FigureDesctiption, { "data-astro-cid-j7pv25f6": true })} <!--	<AddToCartForm item={item} client:load>
					<button type="submit">Add to cart</button>
				</AddToCartForm>  --> </div> <img${addAttribute(item.imageSrc, "src")}${addAttribute(item.name, "alt")} data-astro-cid-j7pv25f6> </div> <section id="banner" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Up to <span data-astro-cid-j7pv25f6>30% Off</span> on All Cakes &amp; Decoratives</h2> <button class="button-normal" data-astro-cid-j7pv25f6>EXPLORE MORE</button> </section> <form id="example-form" hx-post="/test" data-astro-cid-j7pv25f6> <input name="example" title="example" placeholder="Type" onkeyup="this.setCustomValidity('') // reset the validation on keyup" hx-on:htmx:validation:validate="if(this.value != \'foo\') {
                      this.setCustomValidity('Please enter the value foo')
                      htmx.find(\'#foo-form\').reportValidity()
                  }" data-astro-cid-j7pv25f6> </form> <button hx-get="http://localhost:3030/api/page?id=4&slug=8" hx-target="#joke-container" data-astro-cid-j7pv25f6>
Make me laugh!
</button> <label data-astro-cid-j7pv25f6>Keyword:
<input type="text" placeholder="Enter a keyword..." hx-trigger="keyup" hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode" hx-get="https://dicr.org/proxer/api/load" hx-target="#joke-container" hx-indicator=".loader" name="contains" data-astro-cid-j7pv25f6> </label> <span class="loader htmx-indicator" data-astro-cid-j7pv25f6></span> <button hx-get="https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode" hx-swap="innerHTML transition:true" hx-target="#joke-container" data-astro-cid-j7pv25f6>
Load new joke
</button> <div id="joke-container" class="bounce-it" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Initial joke content goes here...</p> </div> <form hx-post="http://localhost:3030/contact" data-astro-cid-j7pv25f6> <div hx-target="this" hx-swap="outerHTML" data-astro-cid-j7pv25f6> <label data-astro-cid-j7pv25f6>Email:
<input type="email" name="email" required hx-post="http://localhost:3030/contact/email" data-astro-cid-j7pv25f6> </label> </div> <button data-astro-cid-j7pv25f6>Submit</button> </form> </main> ` })} `;
}, "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/index.astro", void 0);

const $$file = "C:/gitrepos/luya_shop_admin/luya_shop_frontend/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, cart as a, _slug_$1 as b, checkout$1 as c, checkout as d, error as e, detail as f, graphql as g, _slug_ as h, products as i, success as j, index as k, menu as m, pricelist as p, search as s };
