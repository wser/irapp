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
      'firebase'
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
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  plugins: [
    '~/plugins/fireauth.js',
    '~/plugins/tinymce.js',
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  generate: {
    dir: 'docs',
  },
  env: {
    cypherKey: 'RzwVHm6nG^v#uKV?h+MRhh?Ca57BAmEkG9cb?JkUb!aPWDMF4e&JvxSAm+5-9yrc',
  },
}
