<template lang="pug">
v-container
  v-layout(row, wrap)
    v-flex(xs12, mb-3)
      v-expansion-panel(popout)
        v-expansion-panel-content
          div(slot='header') Izjava o neovisnosti
          v-card
            v-card-text
              ION
              v-btn potvrdi
              v-tooltip(top)
                v-btn(icon, slot='activator')
                  v-icon(color='grey lighten-1') info
                span Programmatic tooltip
        v-expansion-panel-content
          div(slot='header') C100
          v-card
            v-card-text
              c100
              v-btn prijeđi dalje
        v-expansion-panel-content
          div(slot='header') C200
          v-card
            v-card-text
              c200
              v-btn prijeđi dalje
        v-expansion-panel-content
          div(slot='header') C300
          v-card
            v-card-text
              c300
              v-btn prijeđi dalje
        v-expansion-panel-content
          div(slot='header') C400
          v-card
            v-card-text
              c400
              v-btn prijeđi dalje
        v-expansion-panel-content
          div(slot='header') C500
          v-card
            v-card-text
              c500
              v-btn prijeđi dalje
  
</template>

<script>
import ION from '~/components/obrasci/ION'
import c100 from '~/components/obrasci/c100'
import c200 from '~/components/obrasci/c200'
import c300 from '~/components/obrasci/c300'
import c400 from '~/components/obrasci/c400'
import c500 from '~/components/obrasci/c500'
  export default {
    components: {
      ION, c100, c200, c300, c400, c500
    },
    data () {
      return {
        finished: false,
        showTooltip: false
      }
    }
  }
</script>

<style scoped>

</style>