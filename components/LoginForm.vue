<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h2 class="title">Sign In with Google</h2>
     <v-btn class="signIn mb-2" primary @click.native="googleSignUp">Google Sign In</v-btn>
     <br>

      <h2 class="title">Sign In with Email</h2>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="E-mail"
        v-model="formEmail"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
          name="input-pass"
          label="Enter your password"
          v-model="formPassword"
          counter
          required
        ></v-text-field>
      
      
      <v-btn
        @click="emailLogin"
        :disabled="!valid"
      >
        submit
      </v-btn>

      <v-btn @click="clear">clear</v-btn>
    </v-form>



    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data () {
    return {
     // formEmail: 'viktor.vidakovic@email.com',
     // formPassword: '123456',

      valid: true,
      
      formEmail: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      
      formPassword: '',

    }
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    emailLogin () {
      this.$store.dispatch('signInWithEmailAndPassword', {
        email: this.formEmail,
        password: this.formPassword
      }).then(() => {
        /* this.formEmail = ''
        this.formPassword = '' */
        this.clear()

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
