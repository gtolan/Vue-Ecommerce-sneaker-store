<template>
  <section>
    <div class="product-view row">
      <div class="col s6">
        <div class="card col s6" v-for="(href, index) in allImages" :key="index" v-if="href">
          <img :src="href" class="side-image shoe-image" @click="updateLargeImage(href)">
        </div>
      </div>
      <div class="card col s6">
        <img :src="chosenImage" class="main-image shoe-image">
        <h5 class="col s10">{{shoe.title}}</h5>
        <h5 class="col s2">{{shoe.price | euros}}</h5>
        <div class="row">
          <select class="sizes input-field col s6">
            <option value disabled selected>Choose your size</option>
            <option v-for="(size, index) in sizes" :key="index" value="size">{{size}}</option>
          </select>
          <button
            @click="handleAddToCart(shoe, $event)"
            class="btn right cart waves-effect waves-light btn-medium h-3 blue"
          >Add to Cart</button>
        </div>
      </div>
    </div>
    <PageFooter/>
  </section>
</template>

<script>
import EventBus from "../eventBus";
import db from "./firebaseInit";
import PageFooter from "./PageFooter";
export default {
  name: "ProductView",
  data() {
    return {
      mens: [],
      womens: [],
      sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12],
      shoe: {
        img: null,
        id: null,
        img: null,
        hoverimg: null,
        backimg: null,
        frontimg: null,
        topimg: null,
        title: null,
        price: null,
        color: null
      },
      largeImage: null
    };
  },
  components: { PageFooter },
  mounted() {
    this.getProductData();
  },
  updated() {
    this.getProductData();
  },
  watch: {
    // call again the method if the route changes
    $route: "getProductData"
  },
  computed: {
    allShoes: function() {
      return [...this.mens, ...this.womens];
    },
    allImages: function() {
      return [
        this.shoe.img,
        this.shoe.hoverimg,
        this.shoe.backimg,
        this.shoe.frontimg,
        this.shoe.topimg
      ];
    },
    chosenImage: function() {
      return this.largeImage;
    }
  },
  filters: {
    euros: function(value) {
      if (!value) return "";
      return "€" + value;
    }
  },
  methods: {
    handleAddToCart(value, event) {
      let button = event.target;
      button.innerText = "Added to Cart!";
      button.classList.add("addedToCart");
      EventBus.$emit("addToCart", value);
      this.removeButtonChanges(button);
    },
    removeButtonChanges(button) {
      let counter = 150;
      function step() {
        counter--;
        if (counter > 0) {
          window.requestAnimationFrame(step);
        } else {
          button.innerText = "Add to Cart";
          button.classList.remove("addedToCart");
        }
      }
      window.requestAnimationFrame(step);
    },
    updateLargeImage(href) {
      document.querySelector(".main-image.shoe-image").src = href;
    },
    matchProductId(products, product_id) {
      products.forEach(prod => {
        if (prod.id === product_id) {
          this.largeImage = prod.img;
          this.shoe.id = prod.id;
          this.shoe.img = prod.img;
          this.shoe.hoverimg = prod.hoverimg;
          this.shoe.backimg = prod.backimg;
          this.shoe.frontimg = prod.frontimg;
          this.shoe.topimg = prod.topimg;
          this.shoe.title = prod.title;
          this.shoe.price = prod.price;
          this.shoe.color = prod.color;
        }
      });
    },
    getProductData() {
      let category = this.$route.params.category;
      const product_id = this.$route.params.product_id;
      const getProducts = category => {
        let ref = db.ref(category);
        const self = this;
        if (!localStorage.getItem(category)) {
          ref.on(
            "value",
            function(snapshot) {
              var products = snapshot.val();
              localStorage.setItem(category, JSON.stringify(products));
              self[category] = products;
              self.matchProductId(self[category], product_id);
            },
            function(error) {
              console.log("Error: " + error.code);
            }
          );
        } else {
          self[category] = JSON.parse(localStorage.getItem(category));
          self.matchProductId(self[category], product_id);
        }
      };
      if (category == "all") {
        getProducts("mens");
        getProducts("womens");
      } else {
        getProducts(category);
      }
    }
  }
};
</script>

<style scoped>
.shoe-image {
  height: 100%;
  width: 100%;
}
button.addedToCart {
  background-color: #1463a2 !important;
}
select.sizes {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  height: 3rem;
  opacity: 1;
  pointer-events: all;
  display: block;
  margin-top: 0px;
  cursor: pointer;
}
button.h-3 {
  height: 3rem;
}
</style>