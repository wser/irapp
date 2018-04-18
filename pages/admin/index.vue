<template lang="pug">
section
  h2.title Admin Dashboard for Child Routes
  h5.subheading The index page inside the admin folder
  .mce
    vue-mce(v-model="data" :config="config")
  v-btn(@click="onSave") save
  v-btn(@click="onReturn") return
</template>

<script>
import { config } from '~/static/tinymce.config.js'
import { parse, parseDefaults, stringify } from 'himalaya'

var encryptor = require('simple-encryptor')(process.env.cypherKey)


export default {
  head: {
    title:'Dashboard'
  },
  data() {
    return {
      data : 'Hi there from TinyMCE for Vue.js.',
      undata:'',
      config: config,
    }
  },
  methods: {
    onSave(){
      //generate json from html with himalaya
      let json = parse(this.data, {...parseDefaults, includePositions: true})
      //encription     
      let encr = encryptor.encrypt(json)
      this.undata = encr
      this.data = ''
      // console.log(this.undata)

    },
    onReturn(){
      //let decr = encryptor.hmac(this.undata)
      //console.log(decr)
      try {
        let decr = encryptor.decrypt(this.undata);
        this.data = stringify(decr)
      }
      catch (e) {
        this.data= ''
        console.log(e)
      }
      
    }
    /* handleInit (editor) {
      console.log(editor)
      // This handler fires when tinymce editor is successfully initialized.
      //   Receives tinymce editor instance as argument
      
      //   You can save the editor instance to variable and
      //   call editor.setContent(yourContent) any time you want
    }, */
    
    /* handleError (err) {
      console.log(err)
      // Fires when an error occurred. Receives error object 
    }, */
    
    /* handleInput (value) {
      console.log(value)
      // Fires whenever editor content changes. Receives generated HTML
    }, */
    
    /* handleChange (value) {
      console.log(value)
      // Fires only when editor emits focusout event. Receives generated HTML
    }, */
    
    /* handleDestroy (editor) {
      console.log(editor)
      // Fires before VueMce component destroys. Receives tinymce editor instance 
    }, */
  }
}
</script>

<style>
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}
.mce {
  height: 60vh;
}

/* .mce-label.mce-charactercount{
  margin: 2px 0 2px 2px;
  padding: 8px;
  font-size: 12px;
}

.mce-path {
  display: none !important;
} */

</style>
