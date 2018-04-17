const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' 
                 ? { router: { base: '/nuxtpwa/', middleware: 'router-auth' } }
                 : { router: { middleware: 'router-auth' } }

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
    },
    vendor: [
      'firebase',
      'vue-mce'
    ]
  },
  generate: {
    dir: 'docs',
    routes: [
      '/1',
      '/2',
      '/3',
      '/4',
      '/5',
      '/6'
    ]
  },
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
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.11/tinymce.min.js' }
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
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  plugins: [
    '~/plugins/fireauth.js',
    '~/plugins/vuemce.js'
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  env: {
    users: [
      { id: 1, name: 'Kobe Bryant', number: 24 },
      { id: 2, name: 'Michael Jordan', number: 23 },
      { id: 3, name: 'Stephen Curry', number: 30 },
      { id: 4, name: 'Lebron James', number: 23 },
      { id: 5, name: 'Kevin Durant', number: 35 },
      { id: 6, name: 'Kyrie Irving', number: 2 }
    ]
  },
}
