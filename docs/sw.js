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
    "url": "/nuxtpwa/_nuxt/layouts_default.645094c30169c55e4582.js",
    "revision": "c928f27373681b2dd22a6a7eca7d0267"
  },
  {
    "url": "/nuxtpwa/_nuxt/manifest.05170ba024d83bcbd197.js",
    "revision": "3f305f72d0cd46a6c90b17261c2a897a"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_about.dce09883de8fb76a8a11.js",
    "revision": "92a590dfaf52a6d6506aedc59bbbfb51"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index.d09a51222deae83427be.js",
    "revision": "e60b3438e13177450f65e696de5d74d7"
  },
  {
    "url": "/nuxtpwa/_nuxt/vendor.5a873d15ce0ab2e9cdaa.js",
    "revision": "8fe311870a3222def92acf44f8e02d49"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxtpwa/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxtpwa/.*'), workboxSW.strategies.networkFirst({}), 'GET')

