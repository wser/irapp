<template lang="pug">
section
  h2.title User's Dashboard for Child Routes
  h5.subheading The index page inside the admin folder
  v-btn(@click="onSave") save
  v-btn(@click="onReturn") return
  .mce
    teditor(
      v-model="data",
      :init="config",
      api-key="95dgxvahar1yg60ocppap84kjzjxbstzk12yjbggcac593p5")
</template>

<script>
import { config } from '~/static/tinymce.config.js'
import { parse, parseDefaults, stringify } from 'himalaya'

var encryptor = require('simple-encryptor')(env.cypherKey)


export default {
  head: {
    title:'Dashboard'
  },
  data() {
    return {
      data : 'P0zdrav zemljani iz zraka',
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
