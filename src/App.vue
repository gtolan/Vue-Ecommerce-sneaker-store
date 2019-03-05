<template>
  <div id="app">
    <Navbar :cart="cartItems" :totalQty="quantity"/>
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
  computed: {
    quantity: function() {
      let accum = 0;
      if (this.cartItems.length > 0) {
        var total = this.cartItems.reduce((a, b) => ({
          qty: Number.parseInt(a.qty) + Number.parseInt(b.qty)
        }));
        console.log(total, "red total");
        return total.qty;
      }
    }
  },
  methods: {
    addToCart(itemToAdd) {
      console.log(itemToAdd, "adding to cart");
      let inBasket = false;
      itemToAdd.qty = 1;
      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          inBasket = true;
          item.qty += itemToAdd.qty;
        }
      });
      if (inBasket === false) {
        this.cartItems.push(itemToAdd);
      }
    },
    deleteItem(itemToDelete) {
      function removeItem(val) {
        return val.id !== itemToDelete.id;
      }
      console.log("cart", this.cart);
      var removed = this.cartItems.filter(removeItem);
      console.log(removed, "removed");
      this.cartItems = removed;
    },
    alterQty(id, amount) {
      console.log("alter QTy in cart", id, amount);
      function itemToAlter(val) {
        if (val.id == id) {
          val.qty = amount;
        }
        return val;
      }
      console.log("cart", this.cartItems);
      var updated = this.cartItems.map(itemToAlter);
      console.log("updated", updated);
      this.cartItems = updated;
    }
  },
  mounted() {
    EventBus.$on("addToCart", value => {
      console.log("payload recieved app", value);
      this.addToCart(value);
    });
    EventBus.$on("deleteItem", value => {
      console.log("payload recieved app", value);
      this.deleteItem(value);
    });
    EventBus.$on("alterQty", (id, amount) => {
      this.alterQty(id, amount);
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
