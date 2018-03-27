<template>
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title">
        {{pkg.name}}
      </h1>
      <h2 class="subtitle">
        {{pkg.description}}
      </h2>
    </div>
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
