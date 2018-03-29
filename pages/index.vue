<template>
  <section>

    <h1 class="title">
      {{pkg.name}}
    </h1>
    <h2 class="subtitle">
      {{pkg.description}}
    </h2>

    <v-layout >
      <v-flex xs12 md8 offset-md2>
        <div class="wrapper">
          <div v-if="!$store.state.user">
            <login-form></login-form>
            <!-- <v-btn outline large flat nuxt @click="$router.push('/login')" primary>Sign In</v-btn> -->
          </div>
          <div v-else class="flexWrapper">
            <h4 class="blue--text">
              You're logged in!
              <v-btn icon class="blue white--text">
                <v-icon>thumb_up</v-icon>
              </v-btn>
            </h4>
          </div>
        </div>
      </v-flex>
    </v-layout>



    <v-card class="container">
      <div class="left">
        <h2><nuxt-link to="/">Players</nuxt-link></h2>
        <ul class="players">
          <li v-for="user in users" :key="user.id">
            <nuxt-link :to="'/'+user.id">{{ user.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <nuxt-child :key="$route.params.id"/>
      </div>
    </v-card>


  </section>
</template>

<script>
  import pkg from '../package'
  import LoginForm from '~/components/LoginForm'

  export default {
    asyncData({ env }) {
      return { 
        users: env.users,
        pkg
      }
    },
    components: {
      LoginForm
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
