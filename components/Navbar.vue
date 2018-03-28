<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

				<div class="navbar-item indicator" :class="['network',online ? 'online' : 'offline']">
					<div class="circle"></div>
					{{ online ? '' : 'offline' }}
				</div>
        <nuxt-link class="navbar-item" @click="menuAction" to="#">{{pkg.name}}</nuxt-link>

        <button class="button navbar-burger" @click="menuAction">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{'is-active': showNav}">
        <div class="navbar-end" @click="menuAction">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import pkg from "../package"
export default {
  data() {
    return {
			online: true,
      pkg,
			showNav: false
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

  .nuxt-link-exact-active {
    font-weight: bold;
    font-size: 1.5em;
  }
</style>
