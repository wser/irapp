<template>
  <section>

    <h1 class="title">
      {{pkg.name}}
    </h1>
    <h2 class="subtitle">
      {{pkg.description}}
    </h2>

  </section>
</template>

<script>
  import pkg from '../package'

  export default {
    data () {
      return {
        pkg
      }
    }
  }
</script>

<style>

</style>
