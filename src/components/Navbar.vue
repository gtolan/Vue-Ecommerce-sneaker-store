 <template>
  <nav class="transparent">
    <div class="nav-wrapper container">
      <a href="#!" class="brand-logo" :class="{slategray : slate}"><i class="material-icons">cloud</i>Sneaker's</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="shopping-cart" :class="{slategray : slate}"><i class="material-icons ">shopping_cart</i></a></li>
        <li><a href="home" :class="{slategray : slate}"><i class="material-icons">refresh</i></a></li>
        <li><a href="more" :class="{slategray : slate}"><i class="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>

  </template>
  <script>

  export default {
    name:'Navbar',
    data() {
      return {
          slate:false,
      }
    },
    mounted() {
      this.changeNav()
    },
    updated() {
      this.changeNav()
    },
    watch: {
    // call again the method if the route changes
    '$route': 'changeNav'
    },
    methods: {
      changeNav () {
        console.log(this.$route, "route updated");
        if(this.$route.path.startsWith('/products')){
          this.slate = true;
        }else {
          this.slate = false;
        }
      }
    }
  }
  </script>

  <style scoped>
  div.nav-wrapper {
    background-color: transparent;
    z-index: 10;
  }
  .slategray {
    color:lightslategray !important;
  }
  </style>