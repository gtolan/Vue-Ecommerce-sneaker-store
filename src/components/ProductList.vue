<template>
  <div class="row">
    <div
      class="card medium col l4 s6 m6"
      v-for="shoe in allShoes"
      :key="shoe.id"
      v-show="brand.toLowerCase() === shoe.brand.toLowerCase() || brand == 'all' ||
      showItems.includes(shoe.color)"
    >
      <div class="card-image waves-effect waves-block waves-light">
        <router-link
          v-bind:to="{ name: 'product-view', params: { product_id: shoe.id, category:pathCategory }}"
        >
          <img class="activator front" :src="shoe.img">
          <img class="front-hover" :src="shoe.hoverimg">
        </router-link>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {{shoe.title}}{{shoe.color}}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a class="shoe-price" href="#">{{shoe.price | euros}}</a>
          <button
            @click="handleAddToCart(shoe, $event)"
            class="btn right cart waves-effect waves-light btn-small blue"
          >Add to Cart</button>
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {{shoe.title}}
          <i class="material-icons right">close</i>
        </span>
        <div class="card-image back waves-effect waves-block waves-light">
          <img class="front" :src="shoe.backimg">
          <img class="front-hover" :src="shoe.frontimg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import EventBus from "../eventBus";
export default {
  name: "ProductList",
  data() {
    return {
      mens: [],
      womens: [],
      brand: null
    };
  },
  props: ["showItems"],
  mounted() {
    console.log(this.showItems, "FO")
    const category = this.$route.params.category;
    const brand = this.$route.params.brand;
    this.brand = brand;
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
          },
          function(error) {
            console.log("Error: " + error.code);
          }
        );
      } else {
        self[category] = JSON.parse(localStorage.getItem(category));
        console.log("get from storage", self.mens);
      }
    };
    if (category == "all") {
      getProducts("mens");
      getProducts("womens");
    } else {
      getProducts(category);
    }
  },
  computed: {
    allShoes: function() {
      return [...this.mens, ...this.womens];
    },
    pathCategory: function() {
      console.log(this.$route.params.category, "route,pathcat");
      let c = this.$route.params.category;
      return c;
    }
  },
  beforeRouteEnter(to, from, next) {},
  watch: {
    $route: "fetchData"
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
    fetchData() {
      console.log("db", db);
      let ref = db.ref("mens");
      return ref.on(
        "value",
        function(snapshot) {
          console.log(snapshot.val(), "Mens");
          var products = snapshot.val();
          next(vm => {
            vm.mens = products;
          });
        },
        function(error) {
          console.log("Error: " + error.code);
        }
      );
    }
  },
  filters: {
    euros: function(value) {
      if (!value) return "";
      return "€" + value;
    }
  }
};
</script>

<style scoped>
.card.medium .card-image {
  max-height: 68%;
}
.card.medium .card-image.back {
  max-height: 82%;
}
button.btn.right.cart {
  width: 9rem;
  font-size: 1rem;
  padding: 0px;
}
.shoe-price {
  font-size: 1.5rem;
}
.card .card-content {
  padding: 10px;
}
.card-image .front,
.card-image .front-hover {
  will-change: transform;
  transition: 0.4s ease-in-out;
}
.card-image:hover .front {
  transform: translateY(100%);
}
.card-image:hover .front-hover {
  transform: translateY(-100%);
}
button.addedToCart {
  background-color: #1463a2 !important;
}
</style>