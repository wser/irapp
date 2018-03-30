<template>
  <v-app>

    <navbar app></navbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>&nbsp;
      <small>
        <a href="http://vidakovic.info">vidakovic.info</a>
      </small>
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

  main {
    padding-top: 4.5em;
  }
</style>
