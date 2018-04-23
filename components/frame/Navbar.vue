<template lang="pug">
#navbar
  v-navigation-drawer(temporary, absolute, app, 
   v-model='$store.state.drawer')
    v-list
      v-list-tile(router, nuxt, exact, 
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
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'dashboard', title: 'Dashboard', to: '/dashboard' },
        // { icon: 'store', title: 'FireStore', to: '/firestore' }
      ],
    }
	},  
  methods: {
    setDrawer(){
      this.$store.state.drawer = !this.$store.state.drawer 
    },
  }
}
</script>

<style scoped>

</style>
