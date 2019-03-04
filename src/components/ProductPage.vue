<template>
<section>
    <div class="row">
      
      <aside class="col l3 m4 s12">
          <ul class="collapsible expandable">
                <li class="">
                <div class="collapsible-header"><i class="material-icons">filter_drama</i>Brands</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li class="active">
                <div class="collapsible-header"><i class="material-icons">place</i>Colors</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li class="active">
                <div class="collapsible-header"><i class="material-icons">whatshot</i>Sizes</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
      </aside>
      <div class="col l9 m8 s12">
      <h2 class="header">Product Page</h2>
      <ProductList />
      </div>
    </div>
    <div class="row">
      <ProductSlider />
      <PageFooter />
    </div>
</section>
</template>

<script>
    import db from './firebaseInit';
    import PageFooter from './PageFooter';
    import ProductSlider from './ProductSlider';
    import ProductList from './ProductList';

    export default {
        name:'ProductPage',
        components:{PageFooter, ProductSlider, ProductList},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    aside {
        width: 300px;
        background-color: white;
        display: inline-block
    }
    h2.header {
        width: calc(100vw - 330px);
        display: inline-block;
        vertical-align: top;
        margin: 0px
    }
</style>