<template>
  <div id="app">
    <Navbar/>
    <transition name="slide">
      <router-view :cart="cartItems"/>
    </transition>
  </div>
</template>

<script>
import EventBus from "./eventBus";
import Navbar from "./components/Navbar";
import NewEmployee from "./components/NewEmployee";
// import PageFooter from './components/PageFooter';
export default {
  name: "app",
  components: {
    Navbar,
    NewEmployee
    // PageFooter
  },
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
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
    }
  },
  mounted() {
    EventBus.$on("addToCart", value => {
      console.log("payload recieved app", value);
      this.addToCart(value);
    });
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    transform: scale(1) translateX(-100%);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1) translateX(0%);
  }
}
</style>
