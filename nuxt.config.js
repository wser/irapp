const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' 
                 ? { router: { base: '/nuxtpwa/' }}
                 : {}

module.exports = {
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    extractCSS: true,
    analyze: {
      analyzerMode: 'static'
    }
  },
  generate: {dir: 'docs'},
  ...routerBase,

  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
 head: {
  title: pkg.name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: pkg.description }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
  ]
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  vuetify: {
    // Vuetify options
    //  theme: { }
  },
  router: {
    middleware: 'router-auth'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  plugins: [
    '~/plugins/fireauth.js'
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  vendor: [
    'firebase'
  ],
  
}
