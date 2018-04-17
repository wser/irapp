<template>
  <div>
    <v-navigation-drawer
      persistent
      app
      enableResizeWatcher
      v-model="drawer">
      <v-list>
        <v-list-tile
          router
          nuxt
          exact
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          @click.native.stop="drawer = !drawer"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <v-btn
        icon
        @click.native.stop="drawer = !drawer">
        <v-icon>menu</v-icon>        
      </v-btn>

      <div class="navbar-item indicator" :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? '' : 'offline' }}
      </div>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="user" id="user" class="text-xs-center">
            <v-menu
              offset-x
              :close-on-content-click="false"
              :nudge-top="200"
              v-model="menu">
              <v-btn icon slot="activator"><v-icon medium>settings</v-icon></v-btn>
                <v-card>
                  <v-list>
                    <v-list-tile avatar>
                      <v-list-tile-avatar>
                        <img :src="$store.state.user.photoURL" alt="">
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-if="user.displayName">{{user.displayName}}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>

                    <v-list-tile>
                      <v-spacer></v-spacer>
                      <v-list-tile-action>
                        <v-btn primary class="mt-2" color="primary" @click.native="logout">
                          Logout
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card>
            </v-menu>

      </div>

    </v-toolbar>
  </div>
</template>

<script>
import pkg from "../package"
export default {
  data() {
    return {
			online: true,
      pkg,
      showNav: false,
      
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: 'Welcome', to: '/' },
        { icon: 'info', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' },
        // { icon: 'store', title: 'FireStore', to: '/firestore' }
      ],
      title: 'irapp.ga - global access',
      menu: false
    }
	},
  computed: {
    user () {
      return this.$store.getters.activeUser
    }
  },
	mounted () {
		if (!window.navigator) {
			this.online = false
			return
		}
		this.online = Boolean(window.navigator.onLine)
		window.addEventListener('offline', this._toggleNetworkStatus)
		window.addEventListener('online', this._toggleNetworkStatus)
	},
  methods: {
		_toggleNetworkStatus ({ type }) {
			this.online = type === 'online'
		},
		menuAction(){
			return this.showNav = !this.showNav
    },
    logout () {
      this.$store.dispatch('signOut').then(() => {
        alert('logged out!')
        this.$router.push('/')
      })
    }
	},
  destroyed () {
		window.removeEventListener('offline', this._toggleNetworkStatus)
		window.removeEventListener('online', this._toggleNetworkStatus)
	}
}
</script>

<style scoped>
	.indicator {margin:0; padding:0;left:.8rem;}
  .network { font-weight: 400; font-size: .8rem; }
  .network .circle { display: inline-block; width: .8rem; height: .8rem; background: green;
    padding: .05rem .25rem; border-radius: .5rem; }
  .network.offline .circle { background: red; }
</style>
