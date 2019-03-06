<template>
<div>
  <section class="container">
    <ul class="collection with-header">
      <li class="collection-header">
        <h5>Cart</h5>
        <h6>Colour</h6>
        <h6>Delete</h6>
        <h6>Quantity</h6>
        <h6>Price</h6>
      </li>

      <li class="collection-item" v-for="item in cart" :key="item.id">
        <p>{{item.title}}</p>
        <img :src="item.img" class="small-product-icon">
        <button
          @click="handleDelteItem(item)"
          class="btn-floating btn-small waves-effect waves-light red"
        >
          <i class="material-icons">delete</i>
        </button>
        <input
          type="number"
          @change="alterQty(item.id,$event)"
          class="margin-b quantity"
          v-bind:value="Number.parseInt(item.qty)"
        >

        <p class="margin-b price">{{item.price * item.qty | euros}}</p>
      </li>
      <li v-if="cart.length === 0" class="no-items">
        <p>No products in your cart</p>
      </li>
      <li v-if="cart.length > 0" class="total-price">
        <p>Total: {{totalPrice | euros}}</p>
      </li>
    </ul>

    <button
      :disabled="cart.length === 0"
      @click="checkoutButton"
      class="btn right cart waves-effect waves-light btn-small blue"
    >Checkout</button>
    <div id="dropin-container" class="card">
                <button
          @click="closePayNow"
          class="btn-floating btn-small waves-effect waves-light grey center-align"
        >
          <i class="material-icons">close</i>
        </button>
                <p>Total: {{totalPrice | euros}}</p>
                <input type="number" placeholder="Card Number" class="col s12">
                <input type="number" placeholder="Expiration Data" class="col s12">
                <button class="btn btn-medium waves-effect waves-light blue">Pay Now</button>
         
    </div>
  </section>
  <PageFooter />
  </div>
</template>

<script>
import EventBus from "../eventBus";
import PageFooter from "./PageFooter";
export default {
  name: "ShoppingCart",
  components:{PageFooter},
  data() {
    return { cartItems: [] };
  },
  props: ["cart"],
  mounted() {
    // console.log(this.cart, "cart prop");
    // EventBus.$on("addToCart", value => {
    //   console.log("payload recieved app SC", value);
    //   this.addToCart(value);
    // });
  },
  methods: {
    closePayNow(){
        let paynow = document.getElementById('dropin-container');
        paynow.classList.remove('active');
    },
    checkoutButton() {
        let paynow = document.getElementById('dropin-container');
        paynow.classList.add('active');
    },
    handleDelteItem(value) {
      console.log("handle-delete", value);
      EventBus.$emit("deleteItem", value);
    },
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
    },
    alterQty(id, ev) {
      console.log("ev", ev, id);
      let amount = ev.target.value;
      EventBus.$emit("alterQty", id, amount);
    }
  },
  computed: {
    totalPrice: function() {
      console.log("calc total in Shopping cart..");
      let total = 0;
      this.cart.forEach(it => {
        total += it.qty * it.price;
      });
      return total;
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
  grid-template-columns: 3fr 1fr 1fr 1fr 2fr;
}
.collection-item .btn-floating {
  margin: auto;
}
.collection-item p.price {
  text-align: center;
}
.collection-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 2fr;
}
.collection-header h6 {
  text-align: center;
}
.margin-b {
  margin-bottom: 0px !important;
}
.small-product-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;
}
.no-items {
  text-align: center;
}
.total-price {
  width: 10rem;
  margin-left: calc(100% - 10rem);
}
input.quantity {
  text-align: center;
}
footer {
    margin-top:50vh;
}
div#dropin-container {
    visibility:hidden;
    opacity:0;
    position:fixed;
    top:10vh;
    padding: 2rem;
    text-align: center;
    width:70%;
    z-index:10;
    transform:scale(0);
    transition:.5s;
}
div#dropin-container.active {
    visibility:visible;
    opacity:1;
    position:fixed;
    top:10vh;
    transform:scale(1);
}
.slated-page {
    color:lightslategrey !important;
}
</style>