<template lang="pug">
section
  v-flex#adminChild(xs12='')
    nuxt-child(:key='$router.fullPath')
  v-layout(row='' wrap='')
    v-flex(xs12='' md4='')
      v-list
        v-list-tile(v-for='(item, key) in items' :key='key')
          v-list-tile-title {{item.name}}
          v-spacer
          v-list-tile-action(@click='deleteItem(key)')
            v-btn(icon='')
              v-icon delete
    v-spacer
    v-flex(xs12='' md6='')
      v-text-field#item(@keyup.enter='addItem' name='item' label='Add New Item' v-model='item')
      v-btn(@click='addItem') Add Item
</template>

<script>
import {DB} from '@/services/fireinit.js'

export default {
  asyncData({store}) {
    return {
      itemsRef: DB.ref(`items/${store.state.user.uid}`)
    }
  },
  data () {
    return {
      item: '',
      items: {}
    }
  },
  created () {
    let vm = this
    vm.itemsRef.on('value', function(snapshot) {
      vm.items = snapshot.val()
    });
  },
  methods: {
    addItem () {
      this.itemsRef.push({
        name: this.item
      }).then(() => {
        this.item = ''
      })
    },
    deleteItem (key) {
      this.itemsRef.child(key).remove()
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
</style>
<!--  -->
