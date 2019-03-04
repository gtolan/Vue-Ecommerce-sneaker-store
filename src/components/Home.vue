<template>
  <section>
    <div class="components">
      <Carousel/>
      <HomeCategory/>
      <ProductSlider/>
      <Subscribe/>
      <PageFooter/>
    </div>

    <!-- <ul class="collection with-header">
      <li class="collection-header"><h4>Employees</h4></li>
      <li v-for="employee in employees" v-bind:key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}}: {{employee.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: { employee_id: employee.employee_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>-->
    <div class="fixed-action-btn">
      <router-link to="/products" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
import db from "./firebaseInit";
import Carousel from "./CarouselContainer";
import HomeCategory from "./HomeCategory";
import ProductSlider from "./ProductSlider";
import PageFooter from "./PageFooter";
import Subscribe from "./SubscribeSignUp";

export default {
  name: "home",
  components: { Carousel, HomeCategory, PageFooter, ProductSlider, Subscribe },
  data() {
    return {
      employees: [],
      loading: true
    };
  },
  created() {
    // db.collection('employees').orderBy('dept').get().then((querySnapshot) => {
    //   this.loading = false
    //   querySnapshot.forEach((doc) => {
    //     const data = {
    //       'id': doc.id,
    //       'employee_id': doc.data().employee_id,
    //       'name': doc.data().name,
    //       'dept': doc.data().dept,
    //       'position': doc.data().position
    //     }
    //     this.employees.push(data)
    //   })
    // })
  }
};
</script>
<style scoped>
.components {
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  width: 100vw;
}
section {
  margin-top: -66px;
}
</style>