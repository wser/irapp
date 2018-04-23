webpackJsonp([3],{"+wgS":function(t,e,i){"use strict";e.a={data:function(){return{valid:!0,formEmail:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],formPassword:""}},methods:{clear:function(){this.$refs.form.reset()},emailLogin:function(){var t=this;this.$store.dispatch("signInWithEmailAndPassword",{email:this.formEmail,password:this.formPassword}).then(function(){t.clear()}).catch(function(t){console.log(t.message)})},googleSignUp:function(){this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)})}}}},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("wwv+"),s=i("s533"),a=!1;var o=function(t){a||i("OoDf")},r=i("VU/8")(n.a,s.a,!1,o,"data-v-1b011d9c",null);r.options.__file="pages\\index.vue",e.default=r.exports},"3CQj":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".flexWrapper[data-v-1b011d9c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.title[data-v-1b011d9c]{font-size:2.5em!important}@media (min-width:750px){.title[data-v-1b011d9c]{font-size:3.5em!important}}.page-enter-active[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{-webkit-transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,transform .4s;transition:opacity .4s,transform .4s,-webkit-transform .4s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.page-enter[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{opacity:.5;-webkit-transform:rotateY(100deg);transform:rotateY(100deg)}",""])},"56lY":function(t,e,i){"use strict";var n=i("+wgS"),s=i("pBmY"),a=!1;var o=function(t){a||i("zdG1")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="components\\LoginForm.vue",e.a=r.exports},"7YgM":function(t,e){t.exports={name:"irapp",version:"1.0.0",description:"Best tool one auditor can use",author:"wser <w.web.dev@gmail.com>",private:!0,dependencies:{"@nuxtjs/pwa":"latest","@nuxtjs/vuetify":"^0.4.1","@tinymce/tinymce-vue":"^1.0.6","cross-env":"^5.1.4",firebase:"^4.12.0",himalaya:"^1.1.0",nuxt:"latest","simple-encryptor":"^1.2.0"},scripts:{dev:"nuxt",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",lint:"eslint --ext .js,.vue --ignore-path .gitignore .",precommit:"npm run lint","build:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt build","generate:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt generate",deploy:"git push"},devDependencies:{"babel-eslint":"^7.1.1",eslint:"^3.15.0","eslint-config-standard":"^6.2.1","eslint-loader":"^1.6.1","eslint-plugin-html":"^2.0.0","eslint-plugin-promise":"^3.4.1","eslint-plugin-standard":"^2.0.1",pug:"^2.0.3",stylus:"^0.54.5","stylus-loader":"^3.0.2"}}},OoDf:function(t,e,i){var n=i("3CQj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("33af0376",n,!1,{sourceMap:!1})},"U/5S":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},pBmY:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",[i("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[i("h2",{staticClass:"title"},[t._v("Sign In with Google")]),i("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){return t.googleSignUp(e)}}},[t._v("Google Sign In")]),i("br"),i("h2",{staticClass:"title"},[t._v("Sign In with Email")]),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:""},model:{value:t.formEmail,callback:function(e){t.formEmail=e},expression:"formEmail"}}),i("v-text-field",{attrs:{name:"input-pass",label:"Enter your password",counter:"",required:""},model:{value:t.formPassword,callback:function(e){t.formPassword=e},expression:"formPassword"}}),i("v-btn",{attrs:{disabled:!t.valid},on:{click:t.emailLogin}},[t._v("submit")]),i("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},s533:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",{staticClass:"title"},[t._v(t._s(t.pkg.name))]),i("h2",{staticClass:"subtitle"},[t._v("Best tool one auditor can use")]),i("v-layout",[i("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[i("div",{staticClass:"wrapper"},[t.$store.state.user?i("div",{staticClass:"flexWrapper"},[i("h4",{staticClass:"blue--text"},[t._v("You're logged in!"),i("v-btn",{staticClass:"blue white--text",attrs:{icon:""},on:{click:t.onClick}},[i("v-icon",[t._v("thumb_up")])],1),t.counter>0?i("span",[t._v(t._s(t.counter))]):t._e()],1)]):i("div",[i("login-form")],1)])])],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},"wwv+":function(t,e,i){"use strict";var n=i("7YgM"),s=i.n(n),a=i("56lY");e.a={asyncData:function(t){t.env;return{pkg:s.a,counter:0}},components:{LoginForm:a.a},methods:{onClick:function(){this.counter+=1}}}},zdG1:function(t,e,i){var n=i("U/5S");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("17770251",n,!1,{sourceMap:!1})}});