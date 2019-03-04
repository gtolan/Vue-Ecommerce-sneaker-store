 <template>
  <nav class="transparent">
    <div class="nav-wrapper container">
      <router-link to="/" class="brand-logo" :class="{slategray : slate}">
        <i class="material-icons">cloud</i>Sneaker's
      </router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <a href="shopping-cart" class="cart-btn" :class="{slategray : slate}">
            <i class="material-icons">shopping_cart</i>
            <div class="cart-preview">0 items in cart</div>
          </a>
        </li>
        <li>
          <a href="home" :class="{slategray : slate}">
            <i class="material-icons">refresh</i>
          </a>
        </li>
        <li>
          <a href="more" :class="{slategray : slate}">
            <i class="material-icons">more_vert</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
  <script>
export default {
  name: "Navbar",
  data() {
    return {
      slate: false
    };
  },
  mounted() {
    this.changeNav();
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
      if (this.$route.path.startsWith("/products")) {
        this.slate = true;
      } else {
        this.slate = false;
      }
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
  color: white;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
  border: 1px solid white;
  border-bottom-right-radius: 1rem;
}

.cart-btn:hover .cart-preview {
  z-index: -1;
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateY(0px) translateX(-14px);
}
</style>