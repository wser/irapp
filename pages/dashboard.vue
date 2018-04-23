<template lang="pug">
section
  h1.title User Dashboard
  h2.subheading
    | The routes below are are using 
    code nuxt-child
  v-flex#adminNav(xs12='')
    nuxt-link.adminNavRoute(v-for='(item, i) in items' :key='i' :to='item.to') 
      v-icon(v-html='item.icon')
      | {{item.title}}

  v-divider
  v-flex#adminChild(xs12='')
    nuxt-child(:key='$router.fullPath')
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: '', title: 'Početna', to: '/dashboard' },
      { icon: 'date_range', title: 'Planiranje', to: '/dashboard/planiranje' },
      { icon: 'description', title: 'Obrasci', to: '/dashboard/obrasci' },
      { icon: '', title: 'Settings', to: '/dashboard/settings' },
      { icon: '', title: 'Database Example', to: '/dashboard/items' },
    ]
  })
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

.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
</style>
