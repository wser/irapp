webpackJsonp([1],{"+wbj":function(t,e,i){"use strict";var n=i("7YgM"),s=i.n(n),a=i("56lY");e.a={asyncData:function(t){return{users:t.env.users,pkg:s.a}},components:{LoginForm:a.a}}},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("+wbj"),s=i("Pmg7"),a=!1;var o=function(t){a||i("PjpW")},r=i("VU/8")(n.a,s.a,!1,o,"data-v-1b011d9c",null);r.options.__file="pages\\index.vue",e.default=r.exports},"56lY":function(t,e,i){"use strict";var n=i("Vnr8"),s=i("t+0K"),a=!1;var o=function(t){a||i("xo1E")},r=i("VU/8")(n.a,s.a,!1,o,null,null);r.options.__file="components\\LoginForm.vue",e.a=r.exports},"7YgM":function(t,e){t.exports={name:"nuxtpwa",version:"1.0.0",description:"Nuxt.js project",author:"wser <w.web.dev@gmail.com>",private:!0,dependencies:{"@nuxtjs/pwa":"latest","@nuxtjs/vuetify":"^0.4.1","cross-env":"^5.1.4",firebase:"^4.12.0",nuxt:"latest"},scripts:{dev:"nuxt",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",lint:"eslint --ext .js,.vue --ignore-path .gitignore .",precommit:"npm run lint","build:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt build","generate:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt generate",deploy:"git push"},devDependencies:{"babel-eslint":"^7.1.1",eslint:"^3.15.0","eslint-config-standard":"^6.2.1","eslint-loader":"^1.6.1","eslint-plugin-html":"^2.0.0","eslint-plugin-promise":"^3.4.1","eslint-plugin-standard":"^2.0.1",pug:"^2.0.3",stylus:"^0.54.5","stylus-loader":"^3.0.2"}}},OLXT:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".fake[data-v-1b011d9c]{background:blue}.wrapper[data-v-1b011d9c]{margin-top:-7.5em}.flexWrapper[data-v-1b011d9c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.title[data-v-1b011d9c]{font-size:2.5em!important}@media (min-width:750px){.title[data-v-1b011d9c]{font-size:3.5em!important}}.page-enter-active[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{-webkit-transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,transform .4s;transition:opacity .4s,transform .4s,-webkit-transform .4s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.page-enter[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{opacity:.5;-webkit-transform:rotateY(100deg);transform:rotateY(100deg)}.container[data-v-1b011d9c]{font-family:sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.left[data-v-1b011d9c]{width:50%;position:absolute;top:0;left:0}.right[data-v-1b011d9c]{width:50%;position:absolute;top:0;right:0}.players[data-v-1b011d9c]{list-style-type:none;margin:0;padding:0}.players li a[data-v-1b011d9c]{display:block;border:1px solid #ddd;padding:10px;text-align:left;color:#222;text-decoration:none}.players li a[data-v-1b011d9c]:hover{color:orange}",""])},PjpW:function(t,e,i){var n=i("OLXT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("51302b15",n,!1,{sourceMap:!1})},Pmg7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.pkg.name)+"\n  ")]),i("h2",{staticClass:"subtitle"},[t._v("\n    "+t._s(t.pkg.description)+"\n  ")]),i("v-layout",[i("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[i("div",{staticClass:"wrapper"},[t.$store.state.user?i("div",{staticClass:"flexWrapper"},[i("h4",{staticClass:"blue--text"},[t._v("You're logged in!")]),i("v-btn",{staticClass:"blue white--text",attrs:{icon:""}},[i("v-icon",[t._v("thumb_up")])],1)],1):i("div",[i("login-form")],1)])])],1),i("v-card",{staticClass:"container"},[i("div",{staticClass:"left"},[i("h2",[i("nuxt-link",{attrs:{to:"/"}},[t._v("Players")])],1),i("ul",{staticClass:"players"},t._l(t.users,function(e){return i("li",{key:e.id},[i("nuxt-link",{attrs:{to:"/"+e.id}},[t._v(t._s(e.name))])],1)}))]),i("div",{staticClass:"right"},[i("nuxt-child",{key:t.$route.params.id})],1)])],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},Vnr8:function(t,e,i){"use strict";e.a={data:function(){return{formEmail:"viktor.vidakovic@email.com",formPassword:"123456"}},methods:{emailLogin:function(){var t=this;this.$store.dispatch("signInWithEmailAndPassword",{email:this.formEmail,password:this.formPassword}).then(function(){t.formEmail="",t.formPassword=""}).catch(function(t){console.log(t.message)})},googleSignUp:function(){this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)})}}}},g3KT:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"t+0K":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",[i("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[i("h2",{staticClass:"title"},[t._v("Sign In with Google")]),i("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){return t.googleSignUp(e)}}},[t._v("Google Sign In")]),i("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){return t.emailLogin(e)}}},[t._v("Email Log In")])],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s},xo1E:function(t,e,i){var n=i("g3KT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("d02ff9be",n,!1,{sourceMap:!1})}});