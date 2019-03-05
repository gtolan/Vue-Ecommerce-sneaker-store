<template>
  <div class="row">
    <div
      class="card medium col l4 s6 m6"
      v-for="shoe in mens"
      :key="shoe.id"
      v-show="brand.toLowerCase() === shoe.brand.toLowerCase() || brand == 'all'"
    >
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator front" :src="shoe.img">
        <img class="front-hover" :src="shoe.hoverimg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {{shoe.title}}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a class="shoe-price" href="#">{{shoe.price | euros}}</a>
          <button
            @click="handleAddToCart(shoe)"
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
  mounted() {
    console.log(this, "this mounted");
    console.log(this.$route.params, "this mounted path");
    const category = this.$route.params.category;
    const brand = this.$route.params.brand;
    this.brand = brand;
    console.log("brand", brand);
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
        self.mens = JSON.parse(localStorage.getItem(category));
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
  beforeRouteEnter(to, from, next) {
    // let ref = db.ref("mens");
    // console.log("db", db);
    // ref.on(
    //   "value",
    //   function(snapshot) {
    //     console.log(snapshot.val(), "Mens");
    //     var products = snapshot.val();
    //     next(vm => {
    //       vm.mens = products;
    //     });
    //   },
    //   function(error) {
    //     console.log("Error: " + error.code);
    //   }
    // );
    //   db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       next(vm => {
    //         vm.employee_id = doc.data().employee_id
    //         vm.name = doc.data().name
    //         vm.dept = doc.data().dept
    //         vm.position = doc.data().position
    //       })
    //     })
    //   })
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    handleAddToCart(value) {
      console.log("handle-add", value);
      EventBus.$emit("addToCart", value);
      //   this.$emit("addToCart", value);
      //   this.$emit("test");
      //   this.$emit("test2");
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
</style>