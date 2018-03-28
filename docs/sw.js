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
    "url": "/nuxtpwa/_nuxt/layouts_default.2c60b406deca6ec59415.js",
    "revision": "2c898314b8867d248f12bc43557397ad"
  },
  {
    "url": "/nuxtpwa/_nuxt/manifest.e2acf594ff57fac9d3a1.js",
    "revision": "68dd9738c4eab76fcc5f9d0666e356d9"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_about.dce09883de8fb76a8a11.js",
    "revision": "92a590dfaf52a6d6506aedc59bbbfb51"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index.ce8a79b998c309895b05.js",
    "revision": "122793e5a9a8c5b147684a94cc213a99"
  },
  {
    "url": "/nuxtpwa/_nuxt/vendor.5a873d15ce0ab2e9cdaa.js",
    "revision": "8fe311870a3222def92acf44f8e02d49"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxtpwa/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxtpwa/.*'), workboxSW.strategies.networkFirst({}), 'GET')

