<template lang="pug">
v-app(id='app')
  toolbar
  navbar
  right-drawer
  main
    v-container(fluid)
      nuxt(id="content")
  lowbar

</template>

<script>
import Navbar from "@/components/frame/Navbar.vue"
import Toolbar from "@/components/frame/Toolbar.vue"
import Lowbar from "@/components/frame/Lowbar.vue"
import RightDrawer from "@/components/frame/RightDrawer.vue"

export default {
  components: {Navbar, Toolbar, Lowbar, RightDrawer},
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

  #content{
    width: 95vw;
    margin-top: 4em;
    margin-bottom:50px;
  }
</style>
