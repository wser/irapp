<template lang="pug">
v-stepper(v-model='e6', vertical)

  v-stepper-step(step='1', editable, :complete='confirm') Izjava o neovisnosti
  v-stepper-content(step='1')
    v-card.mb-5(color='grey lighten-1')
      v-card-text
        ION
    v-divider
    v-btn(color='primary' @click.native='e6 = 2') Continue
    v-btn(@click='onConfirm') potvrdi
    div.right
      v-dialog(v-model='dialog' width="600px")
        v-icon(color='grey lighten-1' slot='activator') info
        v-card
          v-card-title
            span.headline Hello
          v-card-text
            | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores autem, excepturi quod neque quae dolorum reiciendis provident quam nostrum eum adipisci quisquam, placeat voluptate quis repudiandae aliquid cum corrupti. Libero. Lorem, ipsum dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit, aliquid nobis temporibus soluta at ratione fuga nisi accusantium quas earum deserunt, corporis laboriosam. Velit nihil similique sit sapiente illo!Perspiciatis impedit, temporibus inventore fugiat autem libero placeat dolore illo earum quas et harum qui blanditiis dolores, deleniti nemo cupiditate illum saepe eaque repellat doloremque? Nemo eius vel architecto quod.Corrupti ipsum alias beatae odio iste cupiditate fugiat temporibus reprehenderit quidem natus, unde vero possimus excepturi perferendis ut voluptas voluptate facere illum amet explicabo velit deserunt ullam! Ab, sint optio.Sapiente fugit id dolore iure incidunt facilis sed vero, quia in animi quasi autem tenetur voluptatum consectetur rem quisquam error asperiores voluptatem perferendis amet delectus doloremque doloribus sequi. Rerum, unde?Commodi id iusto, maiores alias repudiandae, harum modi eaque totam, repellat incidunt quam. Ut corrupti nemo possimus, ea, aliquam, voluptatum optio modi alias illo et quidem consequatur maiores quisquam architecto.Voluptatum dolores at dolorum esse aperiam quidem laboriosam nulla odio perferendis. A iure maxime suscipit reiciendis, velit eaque quia quaerat aperiam natus. Quo, ad vitae tenetur deserunt corrupti necessitatibus dolorem.Optio eaque itaque temporibus aspernatur, in quaerat voluptatem velit, nobis obcaecati reiciendis sapiente ex veniam consequuntur quas voluptates vel laboriosam numquam placeat aliquam error adipisci perferendis delectus pariatur esse. Beatae.Sequi quo provident qui alias ipsum impedit? Fugit ipsam autem dolore beatae nostrum ut itaque minus accusantium ex eum laudantium ducimus cupiditate accusamus velit exercitationem, optio nesciunt, illum repellendus consectetur?Pariatur, dolore, eum odio facere totam provident voluptatem id perferendis explicabo adipisci et dolores, tenetur illum! Vero doloremque dolores omnis. Eos, neque saepe error vel reprehenderit ad deleniti sunt laborum.
        

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
        dialog: false
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
.right:hover {
  cursor: pointer;
}
</style>