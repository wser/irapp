<template lang="pug">
section
  h1.title User Dashboard
  h2.subheading
    | The routes below are are using 
    code nuxt-child
  v-flex#adminNav(xs12='')
    nuxt-link.adminNavRoute(to='/dashboard') Dashboard Home
    nuxt-link.adminNavRoute(to='/dashboard/settings') Settings
    nuxt-link.adminNavRoute(to='/dashboard/items') Database Example
  v-divider
  v-flex#adminChild(xs12='')
    nuxt-child(:key='$router.fullPath')
</template>

<script>
export default {
}
</script>

<style>
#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
