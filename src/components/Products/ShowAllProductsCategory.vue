<template>
    <section class="product_area p_100">
    <div class="container">
      <div class="row product_inner_row">
        <div class="col-lg-9">
         
          <div class="row product_item_inner">
            <template v-for="product in allProducts">
              <div
                v-if="product.slug"
                :key="product.databaseId"
                class="cake_feature_item"
              >
                <div class="cake_img">
                  <a :href="`/products/${product.slug}`">
                    <img
                      id="product-image"
                      class="container mx-auto transition duration-700 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-95"
                      :alt="product.name"
                      :src="productImage(product)"
                    />
                  </a>
                </div>
                <div class="cake_text">
                  <h4>
                    {{ product.price }}
                  </h4>
                  <h3>{{ product.name }}</h3>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product_left_sidebar">
            <aside class="left_sidebar search_widget">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Search Keywords"
                />
                <div class="input-group-append">
                  <button class="btn" type="button">
                    <i class="icon icon-Search"></i>
                  </button>
                </div>
              </div>
            </aside>
            <aside class="left_sidebar p_catgories_widget">
              <div class="p_w_title">
                <h3>Product Categories</h3>
              </div>
              <ul class="list_style">
                <li><a href="#">Cupcake (17)</a></li>
                <li><a href="#">Chocolate (15)</a></li>
                <li><a href="#">Celebration (14)</a></li>
                <li><a href="#">Wedding Cake (8)</a></li>
                <li><a href="#">Desserts (11)</a></li>
              </ul>
            </aside>
            <aside class="left_sidebar p_price_widget">
              <div class="p_w_title">
                <h3>Filter By Price</h3>
              </div>
              <div class="filter_price">
                <div
                  id="slider-range"
                  class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                >
                  <div
                    class="ui-slider-range ui-corner-all ui-widget-header"
                    style="left: 2%; width: 48%"
                  ></div>
                  <span
                    tabindex="0"
                    class="ui-slider-handle ui-corner-all ui-state-default"
                    style="left: 2%"
                  ></span
                  ><span
                    tabindex="0"
                    class="ui-slider-handle ui-corner-all ui-state-default"
                    style="left: 50%"
                  ></span>
                </div>
                <label for="amount">Price range:</label>
                <input type="text" id="amount" readonly="" />
                <a href="#">Filter</a>
              </div>
            </aside>
            <aside class="left_sidebar p_sale_widget">
              <div class="p_w_title">
                <h3>Top Sale Products</h3>
              </div>
              <div class="media">
                <div class="d-flex">
                  <img src="img/product/sale-product/s-product-1.jpg" alt="" />
                </div>
                <div class="media-body">
                  <a href="#"><h4>Brown Cake</h4></a>
                  <ul class="list_style">
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                  </ul>
                  <h5>$29</h5>
                </div>
              </div>
              <div class="media">
                <div class="d-flex">
                  <img src="img/product/sale-product/s-product-2.jpg" alt="" />
                </div>
                <div class="media-body">
                  <a href="#"><h4>Brown Cake</h4></a>
                  <ul class="list_style">
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                  </ul>
                  <h5>$29</h5>
                </div>
              </div>
              <div class="media">
                <div class="d-flex">
                  <img src="img/product/sale-product/s-product-3.jpg" alt="" />
                </div>
                <div class="media-body">
                  <a href="#"><h4>Brown Cake</h4></a>
                  <ul class="list_style">
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                  </ul>
                  <h5>$29</h5>
                </div>
              </div>
              <div class="media">
                <div class="d-flex">
                  <img src="img/product/sale-product/s-product-4.jpg" alt="" />
                </div>
                <div class="media-body">
                  <a href="#"><h4>Brown Cake</h4></a>
                  <ul class="list_style">
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-star-o"></i></a>
                    </li>
                  </ul>
                  <h5>$29</h5>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";
import ButtonComponent from "../UI/ButtonComponent.vue";
import { FormatToVND } from "../../utils/Formatter";

defineProps(["allProducts"]);

const productImage = (product) =>
  product.image ? product.image.sourceUrl : process.env.placeholderSmallImage;
</script>
