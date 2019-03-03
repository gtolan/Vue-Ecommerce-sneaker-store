<template>
  <div id="app">
    <Navbar />
    <router-view/>
    
  </div>
  
</template>

<script>2
import Navbar from './components/Navbar';
import NewEmployee from './components/NewEmployee';
// import PageFooter from './components/PageFooter';
export default {
  name: 'app',
  components: {
    Navbar,
    NewEmployee,
    // PageFooter
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
