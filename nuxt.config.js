const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' 
                 ? { router: { base: '/nuxtpwa/' }}
                 : {}

module.exports = {
  mode: 'spa',
  /*
  ** Build configuration
  */
  build: {},
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
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' },

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
    '@nuxtjs/pwa'
  ]
}
