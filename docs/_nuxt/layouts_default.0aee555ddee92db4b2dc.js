webpackJsonp([0],{"4eDG":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".indicator[data-v-776245d0]{margin:0;padding:0;left:12.8px;left:.8rem}.network[data-v-776245d0]{font-weight:400;font-size:12.8px;font-size:.8rem}.network .circle[data-v-776245d0]{display:inline-block;width:12.8px;width:.8rem;height:12.8px;height:.8rem;background:green;padding:.8px 4px;padding:.05rem .25rem;border-radius:.5rem}.network.offline .circle[data-v-776245d0]{background:red}",""])},"7YgM":function(t,e){t.exports={name:"nuxtpwa",version:"1.0.0",description:"Nuxt.js project",author:"wser <w.web.dev@gmail.com>",private:!0,dependencies:{"@nuxtjs/pwa":"latest","@nuxtjs/vuetify":"^0.4.1","cross-env":"^5.1.4",firebase:"^4.12.0",nuxt:"latest"},scripts:{dev:"nuxt",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",lint:"eslint --ext .js,.vue --ignore-path .gitignore .",precommit:"npm run lint","build:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt build","generate:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt generate",deploy:"git push"},devDependencies:{"babel-eslint":"^7.1.1",eslint:"^3.15.0","eslint-config-standard":"^6.2.1","eslint-loader":"^1.6.1","eslint-plugin-html":"^2.0.0","eslint-plugin-promise":"^3.4.1","eslint-plugin-standard":"^2.0.1",pug:"^2.0.3",stylus:"^0.54.5","stylus-loader":"^3.0.2"}}},HwcC:function(t,e,n){"use strict";var i=n("S2BL"),r=n("QD9f"),o=!1;var a=function(t){o||n("pnN0")},s=n("VU/8")(i.a,r.a,!1,a,"data-v-776245d0",null);s.options.__file="components\\Navbar.vue",e.a=s.exports},Kz8u:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"html{font-family:Source Sans Pro,Helvetica Neue,Arial,sans-serif}",""])},Ma2J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("gqec"),r=n("STrE"),o=!1;var a=function(t){o||n("oCSp")},s=n("VU/8")(i.a,r.a,!1,a,null,null);s.options.__file="layouts\\default.vue",e.default=s.exports},QD9f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{persistent:"",app:"",enableResizeWatcher:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{router:"",nuxt:"",exact:"",to:e.to},nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{app:"",fixed:""}},[n("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1),n("div",{staticClass:"navbar-item indicator",class:["network",t.online?"online":"offline"]},[n("div",{staticClass:"circle"}),t._v("\n      "+t._s(t.online?"":"offline")+"\n    ")]),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-spacer"),t.user?n("div",{staticClass:"text-xs-center",attrs:{id:"user"}},[n("v-menu",{attrs:{"offset-x":"","close-on-content-click":!1,"nudge-top":200},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[n("v-icon",{attrs:{medium:""}},[t._v("settings")])],1),n("v-card",[n("v-list",[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:t.$store.state.user.photoURL,alt:""}})]),n("v-list-tile-content",[t.user.displayName?n("v-list-tile-title",[t._v(t._s(t.user.displayName))]):t._e()],1)],1),n("v-divider"),n("v-list-tile",[n("v-spacer"),n("v-list-tile-action",[n("v-btn",{staticClass:"mt-2",attrs:{primary:"",color:"primary"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("\n                        Logout\n                      ")])],1)],1)],1)],1)],1)],1):t._e()],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},S2BL:function(t,e,n){"use strict";var i=n("7YgM"),r=n.n(i);e.a={data:function(){return{online:!0,pkg:r.a,showNav:!1,drawer:!1,fixed:!1,items:[{icon:"home",title:"Welcome",to:"/"},{icon:"info",title:"About",to:"/about"},{icon:"person",title:"Admin",to:"/admin"}],title:"Nuxt Firebase Auth",menu:!1}},computed:{user:function(){return this.$store.getters.activeUser}},mounted:function(){window.navigator?(this.online=Boolean(window.navigator.onLine),window.addEventListener("offline",this._toggleNetworkStatus),window.addEventListener("online",this._toggleNetworkStatus)):this.online=!1},methods:{_toggleNetworkStatus:function(t){var e=t.type;this.online="online"===e},menuAction:function(){return this.showNav=!this.showNav},logout:function(){var t=this;this.$store.dispatch("signOut").then(function(){alert("logged out!"),t.$router.push("/")})}},destroyed:function(){window.removeEventListener("offline",this._toggleNetworkStatus),window.removeEventListener("online",this._toggleNetworkStatus)}}},STrE:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("navbar",{attrs:{app:""}}),e("main",[e("v-container",{attrs:{fluid:""}},[e("nuxt")],1)],1),e("v-footer",{attrs:{fixed:this.fixed,app:""}},[e("span",[this._v("© 2017")])])],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},gqec:function(t,e,n){"use strict";var i=n("HwcC");e.a={components:{Navbar:i.a},data:function(){return{fixed:!1}}}},oCSp:function(t,e,n){var i=n("Kz8u");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0c9953cf",i,!1,{sourceMap:!1})},pnN0:function(t,e,n){var i=n("4eDG");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("549875d3",i,!1,{sourceMap:!1})}});