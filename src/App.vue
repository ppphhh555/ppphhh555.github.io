<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
   <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "@/pages/Home";



export default {
  name: 'App',
  components: {
   Header,
   Home,
   Footer,
 
  },
  mounted() {
     this.$store.dispatch("categroyList");
   
  },
}
</script>

<style>

</style>
