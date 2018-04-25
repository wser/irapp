<template lang="pug">
v-layout
  v-flex(text-xs-center='' xs12='' sm6='' offset-sm3='')
    br
    h2.title Sign in to your account
    v-form(v-model='valid', ref='form', lazy-validation, @submit.prevent="submit")

      v-text-field(
        name='input-email',
        label='E-mail', 
        v-model='formEmail', 
        :rules='emailRules',
        clearable,
        required)
    
      v-text-field(
        name='input-pass', 
        label='Enter your password', 
        v-model='formPassword', 
        :hint='formPassword.length < 6 ? "At least 6 characters" : ""',
        min='6', 
        :append-icon="e1 ? 'visibility' : 'visibility_off'",
        :append-icon-cb='() => (e1 = !e1)',
        :type="e1 ? 'password' : 'text'"
        counter='6',
        loading,
        required)
        v-progress-linear(
          slot="progress",
          :value="progress",
          height="1",
          :color="color")

    v-btn.right(type='submit', @click='emailLogin', :disabled='!valid') sign in


//
    v-form(v-model='valid', ref='form', lazy-validation, @submit.prevent)
      v-text-field(
        label='E-mail', 
        v-model='formEmail', 
        :rules='emailRules', 
        required)
      v-text-field(
        name='input-pass', 
        label='Enter your password', 
        v-model='formPassword', 
        hint='At least 6 characters',
        min='6', 
        :append-icon="e1 ? 'visibility' : 'visibility_off'",
        :append-icon-cb='() => (e1 = !e1)',
        :type="e1 ? 'password' : 'text'"
        counter='6'
        required)
      v-btn(@click='clear') clear
      v-btn.right(type='submit' @click='emailLogin' :disabled='!valid') sign in

</template>

<script>
export default {
  data () {
    return {
     // formEmail: 'viktor.vidakovic@email.com',
     // formPassword: '123456',

      valid: false,
      e1: true,
      formEmail: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      
      formPassword: '',

    }
  },
  computed: {
    progress () {
      return Math.min(100, this.formPassword.length * 18)
    },
    color () {
      return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="css">
.right {
  right:0;
}
.clear {
  padding-top:9px;
}
</style>
