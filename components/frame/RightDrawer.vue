<template lang="pug">
#rightDrawer
  v-navigation-drawer(temporary, absolute, app, right
   v-model='$store.state.drawerRight')
    v-list
      v-list-tile(router, nuxt, exact,
       v-for='(item, i) in items' :key='i' :to='item.to',
       @click.native.stop='setDrawer')
        v-list-tile-action
          v-icon(v-html='item.icon')
        v-list-tile-content
          v-list-tile-title(v-text='item.title')
  
</template>

<script>
export default {
  data() {
    return {      
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'dashboard', title: 'Dashboard', to: '/dashboard' },
        // { icon: 'store', title: 'FireStore', to: '/firestore' }
      ],
    }
	},  
  methods: {
    setDrawer(){
      this.$store.state.drawerRight = !this.$store.state.drawerRight 
    },
  }
}
</script>

<style scoped>

</style>



