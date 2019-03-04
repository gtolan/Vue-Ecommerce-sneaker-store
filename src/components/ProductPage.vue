<template>
  <section>
    <div class="row">
      <aside class="col l3 m4 s12">
        <ul class="collapsible expandable">
          <li class>
            <div class="collapsible-header active">
              <i class="material-icons">filter_drama</i>Brands
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li class="active">
            <div class="collapsible-header active">
              <i class="material-icons">place</i>Colors
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li class="active">
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Sizes
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </aside>
      <div class="col l9 m8 s12">
        <h2 class="header">Product Page</h2>
        <ProductList/>
      </div>
    </div>
    <div class="row">
      <ProductSlider/>
      <PageFooter/>
    </div>
  </section>
</template>

<script>
import db from "./firebaseInit";
import PageFooter from "./PageFooter";
import ProductSlider from "./ProductSlider";
import ProductList from "./ProductList";

export default {
  name: "ProductPage",
  components: { PageFooter, ProductSlider, ProductList },
  data() {
    return {};
  }
  //   beforeRouteEnter(to, from, next) {
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
  //   },
  //   watch: {
  //     $route: "fetchData"
  //   },
  //   methods: {
  //     fetchData() {
  //       //   console.log("db", db);
  //       //   let ref = db.ref("mens");
  //       //   return ref.on(
  //       //     "value",
  //       //     function(snapshot) {
  //       //       console.log(snapshot.val(), "Mens");
  //       //       var products = snapshot.val();
  //       //       next(vm => {
  //       //         vm.mens = products;
  //       //       });
  //       //     },
  //       //     function(error) {
  //       //       console.log("Error: " + error.code);
  //       //     }
  //       //   );
  //     }
  //   }
};
</script>

<style scoped>
aside {
  width: 300px;
  background-color: white;
  display: inline-block;
}
h2.header {
  width: calc(100vw - 330px);
  display: inline-block;
  vertical-align: top;
  margin: 0px;
}
</style>