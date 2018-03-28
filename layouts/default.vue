<template>
  <v-app>

    <navbar></navbar>
    
    <v-container fluid>
      <nuxt />
    </v-container>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {Navbar},
  data(){
    return {
      fixed: false,
    }
  }
}
</script>

<style>
  html {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
</style>
