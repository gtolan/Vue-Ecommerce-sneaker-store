<template>
  <transition name="slide-fade">
    <section>
      <div class="row">
        <aside class="col l3 m4 s12">
          <ul class="collection with-header">
            <li class="collection-header">
              <p>
                <i class="material-icons">filter_drama</i>Brands
              </p>
            </li>
            <li class="collection-item collection-body">
              <button :class="{'active' : 'adidas' === chosenBrand  }" class="brand-choice btn btn-small waves-effect waves-light blue col s6" @click="chooseBrand('adidas')">Adidas</button>
              <button :class="{'active' : 'nike' === chosenBrand  }" class="brand-choice btn btn-small waves-effect waves-light blue col s6" @click="chooseBrand('nike')">Nike</button>
            </li>
            <li class="collection-header">
              <p>
                <i class="material-icons">filter_drama</i>Colours
              </p>
            </li>
            <li class="collection-item collection-body colors">
              <button
                v-for="(color, index) in colorsList"
                :key="index"
                :class="color"
                @click="filterByColor(color, $event)"
                class="btn-floating btn-small waves-effect waves-light margin-5 color-button"
              ></button>
              <button class="btn btn-small waves-effect waves-light margin-5 white" @click="allColors">All Colours</button>
            </li>
            <li class="collection-header">
              <p>
                <i class="material-icons">filter_drama</i>Sizes
              </p>
            </li>
            <li class="collection-item collection-body sizes">
              <button v-for="(size, index) in sizes" 
                    @click="chooseSize($event)"
                    :key="index" class="btn btn-small white col s4 sizes-choice">
                  {{size}}</button>
            </li>
          </ul>
        </aside>
        <div class="col l9 m8 s12">
          <h2 class="header">{{pageTitle}}</h2>
          <ProductList :colorOption="filterOptions" :brandOption="chosenBrand"/>
        </div>
      </div>
      <div class="row bottom-page">
        <ProductSlider/>
        <PageFooter/>
      </div>
    </section>
  </transition>
</template>

<script>
import EventBus from "../eventBus";
import db from "./firebaseInit";
import PageFooter from "./PageFooter";
import ProductSlider from "./ProductSlider";
import ProductList from "./ProductList";

export default {
  name: "ProductPage",
  components: { PageFooter, ProductSlider, ProductList },
  data() {
    return {
      brandFilterChoice:null,
      cartItems: [],
      filterOptions: [
        "white",
        "black",
        "blue",
        "pink",
        "green",
        "red",
        "navy",
        "yellow",
        "grey",
        "beige",
        "purple",
        "orange"
      ],
      colorsList: [
        "white",
        "black",
        "blue",
        "pink",
        "green",
        "red",
        "navy",
        "yellow",
        "grey",
        "beige",
        "purple",
        "orange"
      ], 
      sizes:[4,5,6,7,8,9,10,11,12]
    };
  },
  computed:{
        chosenBrand: function(){
        console.log(this.brandFilterChoice, "BO", "route param", this.$route.params.brand)
          return (!this.brandFilterChoice) 
          ? this.$route.params.brand : 
          this.brandFilterChoice;
        }, 
        pageTitle:function(){
            var title = this.chosenBrand[0].toUpperCase() + this.chosenBrand.substring(1);
        
            return title;
        },

  },
  methods: {
      chooseSize(ev) {
          var buttons = document.querySelectorAll('.sizes-choice');
          Array.from(buttons).forEach((b)=> {b.classList.remove('active')})
          let but = ev.target.classList.add('active');
      },
      chooseBrand(chosen) {
          console.log('chooseBrand', chosen);
          this.removeChosenBrandButtonActive()
          this.brandFilterChoice = chosen;
      },
      removeChosenBrandButtonActive() {
          var buttons = document.querySelectorAll('.brand-choice');
          Array.from(buttons).forEach((b)=> {b.classList.remove('active')})
      },
      allColors(color){
          this.removeColorFilterActive()
          this.filterOptions = this.colorsList;
      },
      removeColorFilterActive() {
          var buttons = document.querySelectorAll('.color-button');
          Array.from(buttons).forEach((b)=> {b.classList.remove('active-color')})
      },
      filterByColor(color, ev){
          this.removeColorFilterActive();
          ev.target.classList.add('active-color')
          this.filterOptions = this.colorsList;
          console.log(this.filterOptions, "before")
          let isSameColor = function(col){
              return col === color;
          }
          this.filterOptions = this.filterOptions.filter(isSameColor)
          console.log(this.filterOptions, "after")
      },
    handleAddToCart(value, event) {
      let button = event.target;
      button.innerText = "Added to Cart!";
      button.classList.add("addedToCart");
      EventBus.$emit("addToCart", value);
      this.removeButtonChanges(button);
    }
  },
  mounted() {
    //   EventBus.$on("DATA_PUBLISHED", payload => {
    //     console.log("payload recieved", payload);
    //   });
  }
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
.slide-fade-enter-active {
  transition: all 3.3s ease;
}
.slide-fade-leave-active {
  transition: all 3.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.collection-body {
  min-height: 5rem;
}
.collection-body.sizes,
.collection-body.colors {
  min-height: 10rem;
}
.white {
  color: black;
}
.row.bottom-page {
  margin-bottom: 0px;
}
.margin-5 {
  margin: 5px;
}
.color-button {
  will-change: transform;
  transition: 0.4s ease-in-out;
}
.color-button:hover {
  transform: scale(1.3);
}
.collection-header p i {
  vertical-align: bottom;
  margin-right: 7px;
}
button.active {
    background-color: black !important;
    color:white !important;
}
button.color-button.active-color {
    transform:scale(1.3);
}
</style>