importScripts('/nuxtpwa/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxtpwa/_nuxt/app.fadcbacc7cd5b005925b.js",
    "revision": "870039d9d28080b1f54948700604daa7"
  },
  {
    "url": "/nuxtpwa/_nuxt/layouts_default.6ecedb697ee577b2615b.js",
    "revision": "95529e90ad6531442b79478d93584c23"
  },
  {
    "url": "/nuxtpwa/_nuxt/manifest.e497ee2d7426b9224d21.js",
    "revision": "1a16250869cf2ea6282a835012f446da"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_about.dce09883de8fb76a8a11.js",
    "revision": "92a590dfaf52a6d6506aedc59bbbfb51"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index.46af3d92bcf0c86a1fec.js",
    "revision": "24c83c9d5fbbd67ede85c8eb15628840"
  },
  {
    "url": "/nuxtpwa/_nuxt/vendor.5a873d15ce0ab2e9cdaa.js",
    "revision": "8fe311870a3222def92acf44f8e02d49"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxtpwa/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxtpwa/.*'), workboxSW.strategies.networkFirst({}), 'GET')

