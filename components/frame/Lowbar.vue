<template lang="pug">
#lowbar
  v-footer.pa3(app)
    v-layout(justify-center, align-center)
      v-spacer
      span &copy; 2018&nbsp;
      small
        a(href='http://vidakovic.info' target="_blank") vidakovic.info

</template>

<script>
export default {
  name: 'lowbar'
}
</script>

<style scoped>
#lowbar{
  position:absolute;
  bottom:0;
  width:100%;
}
</style>
