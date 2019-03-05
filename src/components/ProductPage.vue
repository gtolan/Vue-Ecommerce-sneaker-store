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
              <button class="btn btn-small white col s4">White</button>
              <button class="btn btn-small black col s4">Black</button>
              <button class="btn btn-small blue col s4">Blue</button>
              <button class="btn btn-small pink col s4">Pink</button>
              <button class="btn btn-small green col s4">Green</button>
              <button class="btn btn-small red col s4">Red</button>
              <button class="btn btn-small navy col s4">Navy</button>
              <button class="btn btn-small yellow col s4">Yellow</button>
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
    return { cartItems: [] };
  },
  methods: {
    test() {
      console.log("test pp hit");
    },
    addToCart(itemToAdd) {
      console.log(itemToAdd, "adding to cart");
      let inBasket = false;
      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          inBasket = true;
          item.qty += itemToAdd.qty;
        }
      });
      if (inBasket === false) {
        this.cartItems.push(itemToAdd);
      }
      itemToAdd.qty = 1;
    },
    mounted() {
      EventBus.$on("DATA_PUBLISHED", payload => {
        console.log("payload recieved", payload);
      });
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
</style>