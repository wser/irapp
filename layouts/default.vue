<template lang="pug">
v-app
  navbar(app='')
  main
    v-container(fluid='')
      nuxt
  v-footer(:fixed='fixed' app='')
    span &copy; 2018
    small
      a(href='http://vidakovic.info') vidakovic.info

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
