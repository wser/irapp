<template lang="pug">
section
  v-tabs(fixed-tabs='' v-model='currentItem' color='transparent' slider-color='yellow' slot='extension')
    v-tab(v-for='(item, i) in itemz' :key='i' :href="'#tab-' + i" router)
      nuxt-link(:to='item.to') {{ item.title }}
    
  v-tabs-items(v-model='currentItem')
    v-tab-item(v-for='(item, i) in itemz' :key='i' :id="'tab-' + i")
      v-card(flat='')
        v-card-text
          v-flex
            nuxt-child(:key='$router.fullPath')







//
  v-flex#adminNav(xs12='')
    nuxt-link.adminNavRoute(v-for='(item, i) in itemz' :key='i' :to='item.to') 
      v-icon(v-html='item.icon')
      | {{item.title}}

  v-divider
  v-flex#adminChild(xs12='')
    nuxt-child(:key='$router.fullPath')
</template>

<script>
export default {
  data: () => ({
    itemz: [
      { icon: '', title: 'Početna', to: '/dashboard' },
      { icon: 'date_range', title: 'Planiranje', to: '/dashboard/planiranje' },
      { icon: 'description', title: 'Obrasci', to: '/dashboard/obrasci' },
      { icon: '', title: 'Settings', to: '/dashboard/settings' },
      { icon: '', title: 'Database Example', to: '/dashboard/items' },
    ],





    currentItem: 'tab-0',
    items: [
      'Web', 'Shopping', 'Videos', 'Images'
    ],
    more: [
      'News', 'Maps', 'Books', 'Flights', 'Apps'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  methods: {

  }
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
