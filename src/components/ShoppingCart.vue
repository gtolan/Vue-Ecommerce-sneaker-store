<template>
  <section class="container">
    <ul class="collection with-header">
      <li class="collection-header">
        <h5>Cart</h5>
        <h6>Delete</h6>
        <h6>Quantity</h6>
        <h6>Price</h6>
      </li>
      <li class="collection-item">
        Alvin
        <button class="btn-floating btn-small waves-effect waves-light red">
          <i class="material-icons">delete</i>
        </button>
        <input type="number" class="margin-b" value="1">
        <span class="margin-b price">$5.00</span>
      </li>
    </ul>
  </section>
</template>

<script>
import EventBus from "../eventBus";
export default {
  name: "ShoppingCart",
  data() {
    return {};
  },
  mounted() {
    EventBus.$on("addToCart", value => {
      console.log("payload recieved app", value);
      this.addToCart(value);
    });
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