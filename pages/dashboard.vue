<template lang="pug">
section
  v-tabs(fixed-tabs='' v-model='currentItem' color='transparent' slider-color='yellow' slot='extension')
    v-tab(v-for='item in items' :key='item' :href="'#tab-' + item")
      | {{ item }}
    v-menu.tabs__div(left='' bottom='' v-if='more.length')
      a.tabs__item(slot='activator')
        | more
        v-icon arrow_drop_down
      v-list.grey.lighten-3
        v-list-tile(v-for='item in more' :key='item' @click='addItem(item)')
          | {{ item }}
  v-tabs-items(v-model='currentItem')
    v-tab-item(v-for='item in items.concat(more)' :key='item' :id="'tab-' + item")
      v-card(flat='')
        v-card-text
          h2 {{ item }}
          | {{ text }}








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





    currentItem: 'tab-Web',
    items: [
      'Web', 'Shopping', 'Videos', 'Images'
    ],
    more: [
      'News', 'Maps', 'Books', 'Flights', 'Apps'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }),
  methods: {
    addItem (item) {
      const removed = this.items.splice(0, 1)
      this.items.push(
        ...this.more.splice(this.more.indexOf(item), 1)
      )
      this.more.push(...removed)
      this.$nextTick(() => { this.currentItem = 'tab-' + item })
    }
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
