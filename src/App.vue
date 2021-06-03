<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">



      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  #app {

  }

  .jumbotron {
    /* padding-top: 30px !important;
    padding-bottom: 30px !important; */
  }
</style>
