<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h2 class="title">Sign In with Google</h2>
     <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
     <v-btn class="signIn mb-2" primary @click.native="emailLogin">Email Log In</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data () {
    return {
      formEmail: 'viktor.vidakovic@email.com',
      formPassword: '123456'
    }
  },
  methods: {
    emailLogin () {
      this.$store.dispatch('signInWithEmailAndPassword', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        this.formEmail = ''
        this.formPassword = ''

      }).catch((e) => {
        console.log(e.message);
      })
    },
    googleSignUp () {
      this.$store.dispatch('signInWithGoogle').then(() => {
        console.log('inside then statement on login');
      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
}
</script>

<style lang="css">

</style>
