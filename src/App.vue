<template>
  <div id="app">
    <Navbar/>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
2;
import Navbar from "./components/Navbar";
import NewEmployee from "./components/NewEmployee";
// import PageFooter from './components/PageFooter';
export default {
  name: "app",
  components: {
    Navbar,
    NewEmployee
    // PageFooter
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    transform: scale(1) translateX(-100%);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1) translateX(0%);
  }
}
</style>
