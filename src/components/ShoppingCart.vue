<template>
  <section class="container">
    <ul class="collection with-header">
      <li class="collection-header">
        <h5>Cart</h5>
        <h6>Delete</h6>
        <h6>Quantity</h6>
        <h6>Price</h6>
      </li>
      <li class="collection-item" v-for="item in cart" :key="item.id">
        {{item.title}}
        <button class="btn-floating btn-small waves-effect waves-light red">
          <i class="material-icons">delete</i>
        </button>
        <input type="number" class="margin-b" value="1">
        <span class="margin-b price">{{item.price | euros}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import EventBus from "../eventBus";
export default {
  name: "ShoppingCart",
  data() {
    return { cartItems: [] };
  },
  props: ["cart"],
  mounted() {
    console.log(this.cart, "cart prop");
    EventBus.$on("addToCart", value => {
      console.log("payload recieved app SC", value);
      this.addToCart(value);
    });
  },
  methods: {
    addToCart(itemToAdd) {
      console.log(itemToAdd, "adding to cart-SC");
      itemToAdd.qty = 1;
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
      console.log(this.cartItems, "CI");
    }
  },
  filters: {
    euros: val => {
      return "€" + val;
    }
  }
};
</script>

<style scoped>
.collection-item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr;
}
.collection-item .btn-floating {
  margin: auto;
}
.collection-item span.price {
  text-align: center;
}
.collection-header {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr;
}
.collection-header h6 {
  text-align: center;
}
.margin-b {
  margin-bottom: 0px !important;
}
</style>