<template lang="pug">
section
  .landing
    h1.title
      | {{pkg.name}}
    h2.subtitle
      | Best tool an auditor can use
    br
  v-divider
  v-layout
    v-flex(xs12='' md8='' offset-md2='')
      .wrapper
        div(v-if='!$store.state.user')
          login-form
        .flexWrapper(v-else)
          h4.blue--text
            | You're logged in!
            v-btn.blue.white--text(icon, @click="onClick")
              v-icon thumb_up
            span(v-if="counter>0") {{counter}}

</template>

<script>
  import pkg from '../package'
  import LoginForm from '~/components/LoginForm'

  export default {
    asyncData({ env }) {
      return { 
        pkg,
        counter: 0
      }
    },
    components: {
      LoginForm
    },
    methods: {
      onClick() {
        this.counter += 1
      }
    }
  }
</script>

<style scoped>

.landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.flexWrapper {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

.title {
  font-size: 2.5em !important;
  /*margin-top: -5em;*/
}

@media (min-width: 750px) {
  .title {
    font-size: 3.5em !important;
  }
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
