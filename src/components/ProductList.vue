<template>
  <div class="row">
    <div class="card medium col l4 s6 m6" v-for="shoe in mens" :key="shoe.id">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" :src="shoe.img">
        <img class :src="shoe.hoverimg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {{shoe.title}}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a class="shoe-price" href="#">{{shoe.price | euros}}</a>
          <button class="btn right cart waves-effect waves-light btn-small blue">Add to Cart</button>
        </p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {{shoe.title}}
          <i class="material-icons right">close</i>
        </span>
        <img class :src="shoe.backimg">
        <img class :src="shoe.frontimg">
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "ProductList",
  data() {
    return {
      mens: [],
      womens: []
    };
  },
  mounted() {
    let ref = db.ref("mens");
    const self = this;
    ref.on(
      "value",
      function(snapshot) {
        console.log(snapshot.val(), "Mens");
        var products = snapshot.val();
        self.mens = products;
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
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
</style>