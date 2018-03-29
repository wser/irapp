importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.70bb2f082b026718dcbd.js",
    "revision": "556ebf50475c577633f63b5bffba375a"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.263272a45954544f67c2.js",
    "revision": "5d66afdf9d0603b31c64d27e465d5f0f"
  },
  {
    "url": "/_nuxt/manifest.aaee1d2c87c36fde3956.js",
    "revision": "fb74593f60bfd994a1c2dd391c618095"
  },
  {
    "url": "/_nuxt/pages_about.b11e4b264a05de4cacac.js",
    "revision": "46b617076e7594c283fec75166635907"
  },
  {
    "url": "/_nuxt/pages_admin_index.418afa9c25da9cff090d.js",
    "revision": "efe8ffd88d633aa61ff67c22375b8beb"
  },
  {
    "url": "/_nuxt/pages_admin_items.325d5ebd738580619951.js",
    "revision": "0f1605306bcd768e98cb275857010c76"
  },
  {
    "url": "/_nuxt/pages_admin_settings.e3a922a20e331c219145.js",
    "revision": "015ca16afd2ce2d36ef7c3ac9cea563c"
  },
  {
    "url": "/_nuxt/pages_admin.25adac6d1c0c63dfc7a2.js",
    "revision": "1e2b81a08e6e81a6738f7cdaa5a48072"
  },
  {
    "url": "/_nuxt/pages_index.fa4d49069e6fa09a24df.js",
    "revision": "61295d028c5d292a1b3429fe03deae4c"
  },
  {
    "url": "/_nuxt/pages_login.2c955aa606b925b17fd7.js",
    "revision": "f4bc8e5dd5e23600f1ff673b64b565cd"
  },
  {
    "url": "/_nuxt/vendor.9b2c569958a9a885e14b.js",
    "revision": "d099eb3e261bfd299b6648c183bfc090"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

