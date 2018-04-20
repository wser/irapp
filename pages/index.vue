<template lang="pug">
section
  h1.title
    | irapp.ga
  h2.subtitle
    | Best tool one auditor can use
  v-layout
    v-flex(xs12='' md8='' offset-md2='')
      .wrapper
        div(v-if='!$store.state.user')
          login-form
        .flexWrapper(v-else='')
          h4.blue--text
            | You're logged in!
            v-btn.blue.white--text(icon, @click="onClick")
              v-icon thumb_up
            span(v-if="counter>0") {{counter}}
  v-card.container
    .left
      h2
        nuxt-link(to='/') Players
      ul.players
        li(v-for='user in users' :key='user.id')
          nuxt-link(:to="'/'+user.id") {{ user.name }}
    .right
      nuxt-child(:key='$route.params.id')
</template>

<script>
  import pkg from '../package'
  import LoginForm from '~/components/LoginForm'

  export default {
    asyncData({ env }) {
      return { 
        users: env.users,
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
.container {
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}

</style>
