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
    "url": "/_nuxt/layouts_default.92161d4295f0263a0e9b.js",
    "revision": "c572362fbdf86cf46b3bf707f3be6c69"
  },
  {
    "url": "/_nuxt/manifest.bb9386932e1db1f5b5ed.js",
    "revision": "cabe374a5a1fce7b367764718218de25"
  },
  {
    "url": "/_nuxt/pages_about.dce09883de8fb76a8a11.js",
    "revision": "92a590dfaf52a6d6506aedc59bbbfb51"
  },
  {
    "url": "/_nuxt/pages_index.8a863eaec49696fed931.js",
    "revision": "1c4991db5e7f92304e913797b7757c21"
  },
  {
    "url": "/_nuxt/vendor.5a873d15ce0ab2e9cdaa.js",
    "revision": "8fe311870a3222def92acf44f8e02d49"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

