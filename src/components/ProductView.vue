<template>
  <div class="product-view row">
    <div class="card col s6">
      <div class="card col s6" v-for="(href, index) in allImages" :key="index">
        <img :src="href" class="side-image shoe-image" @click="updateLargeImage(href)">
      </div>
    </div>
    <div class="card col s6">
      <img :src="chosenImage" class="main-image shoe-image">
      {{largeImage}}
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "ProductView",
  data() {
    return {
      mens: [],
      womens: [],
      id: null,
      img: null,
      hoverimg: null,
      backimg: null,
      frontimg: null,
      topimg: null,
      title: null,
      price: null,
      color: null,
      largeImage: null
    };
  },
  mounted() {
    console.log("");
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
        this.img,
        this.hoverimg,
        this.backimg,
        this.frontimg,
        this.topimg
      ];
    },
    chosenImage: function() {
      return this.largeImage;
    }
  },
  methods: {
    updateLargeImage(href) {
      console.log("update-large,", href, this.largeImage, "before");
      document.querySelector(".main-image.shoe-image").src = href;
    },
    matchProductId(products, product_id) {
      products.forEach(prod => {
        if (prod.id === product_id) {
          this.id = prod.id;
          this.largeImage = prod.img;
          this.img = prod.img;
          this.hoverimg = prod.hoverimg;
          this.backimg = prod.backimg;
          this.frontimg = prod.frontimg;
          this.topimg = prod.topimg;
          this.title = prod.title;
          this.price = prod.prie;
          this.color = prod.color;
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
</style>