<template>
  <transition name="slide-fade">
    <section>
      <div class="row">
        <aside class="col l3 m4 s12">
          <ul class="collection with-header">
            <li class="collection-header">
              <i class="material-icons">filter_drama</i>Brands
            </li>
            <li class="collection-item collection-body">
              <button class="btn btn-small blue col s6">Adidas</button>
              <button class="btn btn-small blue col s6">Nike</button>
            </li>
            <li class="collection-header">
              <i class="material-icons">filter_drama</i>Colours
            </li>
            <li class="collection-item collection-body colors">
              <button
                v-for="(color, index) in colorsList"
                :key="index"
                :class="color"
                class="btn-floating btn-small waves-effect waves-light margin-5"
              ></button>
            </li>
            <li class="collection-header">
              <i class="material-icons">filter_drama</i>Sizes
            </li>
            <li class="collection-item collection-body sizes">
              <button class="btn btn-small white col s4">5</button>
              <button class="btn btn-small white col s4">6</button>
              <button class="btn btn-small white col s4">7</button>
              <button class="btn btn-small white col s4">8</button>
              <button class="btn btn-small white col s4">9</button>
              <button class="btn btn-small white col s4">10</button>
              <button class="btn btn-small white col s4">11</button>
              <button class="btn btn-small white col s4">12</button>
            </li>
          </ul>
        </aside>
        <div class="col l9 m8 s12">
          <h2 class="header">Product Page</h2>
          <ProductList v-on:handleAddToCart="test"/>
        </div>
      </div>
      <div class="row bottom-page">
        <ProductSlider/>
        <PageFooter/>
      </div>
    </section>
  </transition>
</template>

<script>
import EventBus from "../eventBus";
import db from "./firebaseInit";
import PageFooter from "./PageFooter";
import ProductSlider from "./ProductSlider";
import ProductList from "./ProductList";

export default {
  name: "ProductPage",
  components: { PageFooter, ProductSlider, ProductList },
  data() {
    return {
      cartItems: [],
      colorsList: [white, black, blue, pink, green, red, navy, yellow, grey]
    };
  },
  methods: {
    mounted() {
      //   EventBus.$on("DATA_PUBLISHED", payload => {
      //     console.log("payload recieved", payload);
      //   });
    }
  }
};
</script>

<style scoped>
aside {
  width: 300px;
  background-color: white;
  display: inline-block;
}
h2.header {
  width: calc(100vw - 330px);
  display: inline-block;
  vertical-align: top;
  margin: 0px;
}
.slide-fade-enter-active {
  transition: all 3.3s ease;
}
.slide-fade-leave-active {
  transition: all 3.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.collection-body {
  min-height: 5rem;
}
.collection-body.sizes,
.collection-body.colors {
  min-height: 10rem;
}
.white {
  color: black;
}
.row.bottom-page {
  margin-bottom: 0px;
}
.margin-5 {
  margin: 5px;
}
</style>