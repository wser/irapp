importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.0e3f9ab9fbf4f9d57eba.js",
    "revision": "0ceaef70edbf2e8739d05f574f878278"
  },
  {
    "url": "/_nuxt/layouts_default.645094c30169c55e4582.js",
    "revision": "c928f27373681b2dd22a6a7eca7d0267"
  },
  {
    "url": "/_nuxt/manifest.4e089158c214fe7f589b.js",
    "revision": "74f3382bde3204b0ca8009cf7ad70717"
  },
  {
    "url": "/_nuxt/pages_about.dce09883de8fb76a8a11.js",
    "revision": "92a590dfaf52a6d6506aedc59bbbfb51"
  },
  {
    "url": "/_nuxt/pages_index.d09a51222deae83427be.js",
    "revision": "e60b3438e13177450f65e696de5d74d7"
  },
  {
    "url": "/_nuxt/vendor.5a873d15ce0ab2e9cdaa.js",
    "revision": "8fe311870a3222def92acf44f8e02d49"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

