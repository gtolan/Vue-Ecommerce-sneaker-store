 <template>
  <nav class="transparent">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo slated-page" :class="{slategray : slate}">
        <i class="material-icons">cloud</i>Sneaker's
      </router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/cart" class="cart-btn slated-page" :class="{slategray : slate}">
            <i class="material-icons">shopping_cart</i>
            <div class="cart-preview">
              <p>{{cart.length | itemAmount }} in cart ({{totalQty}})</p>
              <button class="btn btn-small">View Cart</button>
            </div>
          </router-link>
        </li>
        <li>
          <a href="" class="slated-page" :class="{slategray : slate}">
            <i class="material-icons">refresh</i>
          </a>
        </li>
        <li>
          <a href="more" class="slated-page" :class="{slategray : slate}">
            <i class="material-icons">person</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
  <script>
import EventBus from "../eventBus";
export default {
  name: "Navbar",
  data() {
    return {
      slate: false,
      cartItems: []
    };
  },
  props: ["cart", "totalQty"],
  filters: {
    itemAmount: val => {
      return val == 1 ? val + " Item" : val + " Items";
    }
  },
  mounted() {
    this.changeNav();
    // EventBus.$on("addToCart", value => {
    //   this.addToCart(value);
    // });
    // EventBus.$on("deleteItem", value => {
    //   this.deleteItem(value);
    // });
  },
  updated() {
    this.changeNav();
  },
  watch: {
    // call again the method if the route changes
    $route: "changeNav"
  },
  methods: {
    changeNav() {
      console.log(this.$route, "route updated");
      if (
        this.$route.path.startsWith("/products") ||
        this.$route.path.startsWith("/cart") ||
        this.$route.path.startsWith("/all") ||
        this.$route.path.startsWith("/mens") ||
        this.$route.path.startsWith("/womens")
      ) {
        this.slate = true;
      } else {
        this.slate = false;
      }
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
    deleteItem(itemToDelete) {
      function removeItem(val) {
        return val.id !== itemToDelete.id;
      }
      console.log("cart", this.cart);
      var removed = this.cartItems.filter(removeItem);
      console.log(removed, "removed");
      this.cartItems = removed;
    }
  }
};
</script>

  <style scoped>
div.nav-wrapper {
  background-color: transparent;
  z-index: 10;
}
.slategray {
  color: lightslategray !important;
}
.cart-preview {
  position: absolute;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.5) translateY(-100px);
  transition: 0.4s ease-in-out;
  background-color: #15324e38;
  background: linear-gradient(#000000c4, #15324e38);
  color: white;
  border-bottom-left-radius: 1rem;
  border: 1px solid white;
  border-bottom-right-radius: 1rem;
  width: 12rem;
  text-align: center;
}
.cart-preview p {
  padding: 0rem 1rem;
  margin: 0px;
}
.cart-preview button {
  position: relative;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0px;
  vertical-align: middle;
}

.cart-btn:hover .cart-preview {
  z-index: -1;
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateY(0px) translateX(-14px);
}
</style>