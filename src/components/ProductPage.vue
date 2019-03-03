<template>
    <div>
      <h1>Product Page</h1>
      <PageFooter />
    </div>
</template>

<script>
    import db from './firebaseInit';
    import PageFooter from './PageFooter';
    // import ProductList from './ProductList';

    export default {
        name:'ProductPage',
        components:{PageFooter},
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>

</style>