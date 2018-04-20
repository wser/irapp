<template lang="pug">
#toolbar
  v-toolbar(app, fixed )
    v-btn(icon, @click.native.stop='setDrawer')
      v-icon menu
    .navbar-item.indicator(:class="['network',online ? 'online' : 'offline']")
      .circle
      |         {{ online ? &apos;&apos; : &apos;offline&apos; }}
    v-toolbar-title {{title}}
    v-spacer
    #user.text-xs-center(v-if='user')
      v-menu(offset-x, :close-on-content-click='false', :nudge-top='200')
        v-btn(icon, slot='activator')
          v-icon(medium) settings
        v-card
          v-list
            v-list-tile(avatar)
              v-list-tile-avatar
                img(:src='$store.state.user.photoURL', alt)
              v-list-tile-content
                v-list-tile-title(v-if='user.displayName') {{user.displayName}}
            v-divider
            v-list-tile
              v-spacer
              v-list-tile-action
                v-btn.mt-2(primary, color='primary', @click.native='logout')
                  | Logout
    v-toolbar-side-icon(@click.stop='setDrawerRight')

</template>

<script>
export default {
  data:() => ({
    fixed: false,
    showNav: false,
    online: true,
    title: 'irapp.ga - global access',
    right: null,
  }),
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
    setDrawer(){
      this.$store.state.drawer = !this.$store.state.drawer 
    },
    setDrawerRight(){
      this.$store.state.drawerRight = !this.$store.state.drawerRight 
    },
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


