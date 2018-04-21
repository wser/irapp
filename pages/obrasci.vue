<template lang="pug">
v-stepper(v-model='e6' vertical='')

  v-stepper-step(step='1', editable, :complete='confirm') Izjava o neovisnosti
  v-stepper-content(step='1')
    v-card.mb-5(color='grey lighten-1')
      v-card-text
        ION
    v-divider
    v-btn(color='primary' @click.native='e6 = 2') Continue
    v-btn(@click='onConfirm') potvrdi
    v-tooltip.right(top)
      v-btn(icon, slot='activator')
        v-icon(color='grey lighten-1') info
      span Programmatic tooltip

  v-stepper-step(step='2', editable, :complete='e6 > 2') C100
  v-stepper-content(step='2')
    v-card.mb-5(color='grey lighten-1' height='200px')
    v-btn(color='primary' @click.native='e6 = 3') Continue
    v-btn(flat='') Cancel

  v-stepper-step(step='3', editable, :complete='e6 > 3') C200
  v-stepper-content(step='3')
    v-card.mb-5(color='grey lighten-1' height='200px')
    v-btn(color='primary' @click.native='e6 = 4') Continue
    v-btn(flat='') Cancel

  v-stepper-step(step='4', editable, :complete='e6 > 4') C300
  v-stepper-content(step='4')
    v-card.mb-5(color='grey lighten-1' height='200px')
    v-btn(color='primary' @click.native='e6 = 5') Continue
    v-btn(flat='') Cancel

  v-stepper-step(step='5', editable, :complete='e6 > 5') C400
  v-stepper-content(step='5')
    v-card.mb-5(color='grey lighten-1' height='200px')
    v-btn(color='primary' @click.native='e6 = 6') Continue
    v-btn(flat='') Cancel

  v-stepper-step(step='6', editable) C500
  v-stepper-content(step='6')
    v-card.mb-5(color='grey lighten-1' height='200px')
    v-btn(color='primary' @click.native='e6 = 1') Continue
    v-btn(flat='') Cancel
  
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
        e6: 1,
        finished: false,
        showTooltip: false,
        confirm: false,
      }
    },
    methods: {
      onConfirm(){
        this.confirm = true
      }
    }
  }
</script>

<style scoped>
.right{
  right:0;
}
</style>