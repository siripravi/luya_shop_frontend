<!-- Shop Details Section Begin -->
<template>
  <div v-if="product">
    <section class="product-details spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product__details__img">
              <div class="product__details__big__img">
                <!-- <img class="big_img" src="/images/shop/details/product-big-1.jpg" alt="">  -->
                <img
                  v-if="product.image"
                  id="product-image"
                  class="big_img"
                  :alt="product.name"
                  :src="product.image.sourceUrl"
                />
                <img
                  v-else
                  id="product-image"
                  class="big_img"
                  :alt="product.name"
                  :src="process.env.placeholderSmallImage"
                />
              </div>
              <div class="product__details__thumb">
                <div class="pt__item active">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-2.jpg"
                    src="/images/shop/details/product-big-2.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-1.jpg"
                    src="/images/shop/details/product-big-1.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-4.jpg"
                    src="/images/shop/details/product-big-4.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-3.jpg"
                    src="/images/shop/details/product-big-3.jpg"
                    alt=""
                  />
                </div>
                <div class="pt__item">
                  <img
                    data-imgbigurl="/images/shop/details/product-big-5.jpg"
                    src="/images/shop/details/product-big-5.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product__details__text">
              <div class="product__label">Cupcake</div>
              <h4>{{ product.name }}</h4>
              <!--<h5>$26.41</h5> -->
              <div v-if="product.onSale" class="flex">
                <h5 class="pt-1 mt-4 text-3xl text-gray-900">
                  <span v-if="product.variations"> {{ product.price }}</span>
                  <span v-else>{{ product.salePrice }}</span>
                </h5>
                <h5 class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">
                  <span v-if="product.variations"> {{ product.price }}</span>
                  <span v-else>{{ product.regularPrice }}</span>
                </h5>
              </div>
              <h5 v-else class="pt-1 mt-4 text-2xl text-gray-900">
                {{ product.price }}
              </h5>
              <br />
              <p
                v-if="product.stockQuantity"
                class="pt-1 mt-4 text-2xl text-gray-900"
              >
                {{ product.stockQuantity }} in stock
              </p>
              <p
                v-if="product.variations"
                class="pt-1 mt-4 text-xl text-gray-900"
              >
                <span class="py-2">Variants</span>
                <select
                  id="variant"
                  name="variant"
                  class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                  @change="changeVariation()"
                >
                  <option
                    v-for="(variation, index) in product.variations.nodes"
                    :key="variation.databaseId"
                    :value="variation.databaseId"
                    :selected="index === 0"
                  >
                    {{ variation.name }} ({{ variation.stockQuantity }} in
                    stock)
                  </option>
                </select>
              </p>
              <p>
                {{ product.description }}
              </p>
              <ul>
                <li>SKU: <span>17</span></li>
                <li>Category: <span>Biscuit cake</span></li>
                <li>Tags: <span>Gadgets, minimalisstic</span></li>
              </ul>
              <div class="product__details__option">
                <div class="quantity">
                  <div class="pro-qty">
                    <input type="text" value="1" />
                  </div>
                </div>

             <!--   <button hx-get="/partials/bakes/"
    hx-trigger="click"
    hx-target="#parent-div"
    hx-swap="innerHTML"
  >
      Click Me!
  </button>
  <button id="tgt">Click Here</button> -->
                <!--  <a href="#" class="primary-btn">Add to cart</a> -->
                <button v-bind:id="product.databaseId" @click="addProductToCart(product)"class="primary-btn">Add to cart</button>
                <a href="#" class="heart__btn"
                  ><span class="icon_heart_alt"></span
                ></a>
               
              </div>
            </div>
          </div>
        </div>
        <div class="product__details__tab">
          <div class="col-lg-12">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-bs-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  >Description</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  >Additional information</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                  >Previews(1)</a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab1:Description:This delectable Strawberry Pie is an
                      extraordinary treat filled with sweet and tasty chunks of
                      delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tabs-2" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab2-Additional Information:This delectable Strawberry Pie
                      is an extraordinary treat filled with sweet and tasty
                      chunks of delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!2
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tabs-3" role="tabpanel">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <p>
                      Tab3-Reviews:This delectable Strawberry Pie is an
                      extraordinary treat filled with sweet and tasty chunks of
                      delicious strawberries. Made with the freshest
                      ingredients, one bite will send you to summertime. Each
                      gift arrives in an elegant gift box and arrives with a
                      greeting card of your choice that you can personalize
                      online!3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>