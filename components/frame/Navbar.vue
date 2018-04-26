<template lang="pug">
#navbar
  v-navigation-drawer(temporary, absolute, app, 
   v-model='$store.state.drawer')
    v-list
      v-list-tile(router, nuxt, exact, v-if="item.allowed"
       v-for='(item, i) in items' :key='i' :to='item.to',
       @click.native.stop='setDrawer')
        v-list-tile-action
          v-icon(v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
    Lowbar
  
</template>

<script>
import Lowbar from './Lowbar'
export default {
  components: {Lowbar},
  data() {
    return {
      items: [
        this.item ('home', 'Welcome', '/', true),
        this.item ('dashboard', 'Dashboard', '/dashboard', this.userState),
      ]    
    }
  },
  computed: {
    userState: () => {
      return this.$store.state.allowed
    },
  },
  methods: {    
    setDrawer(){
      this.$store.state.drawer = !this.$store.state.drawer 
    },
    item (icon, title, to, allowed) {
      return { icon, title, to, allowed }
    }
  }
}
</script>

<style scoped>

</style>
