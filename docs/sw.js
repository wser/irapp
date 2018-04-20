importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.07d12853c7ebd96bc00c.js",
    "revision": "e1d30fd34b3e701b05ee49759852830b"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.9dbf3488b1b840a87dc5.js",
    "revision": "0d0c922b6bd19fd4172137f49faf9814"
  },
  {
    "url": "/_nuxt/manifest.23f76b4de559ceb016e3.js",
    "revision": "903f61464f111e8aebf142209caa28ba"
  },
  {
    "url": "/_nuxt/pages_about.e0b79965502e17ad0af9.js",
    "revision": "dfec0478301f54f0c11ec745fd48c51c"
  },
  {
    "url": "/_nuxt/pages_dashboard_index.591bf7f01281fa0450d2.js",
    "revision": "4e1c21e1bfcc66c37223e43ead3e9ad9"
  },
  {
    "url": "/_nuxt/pages_dashboard_items.a7d162bc12f77b07f345.js",
    "revision": "206924867b75cceace4f18a719328477"
  },
  {
    "url": "/_nuxt/pages_dashboard_settings.da56b86e96748d77a74f.js",
    "revision": "08a9b3310fbb0990dd923c7a17b865e6"
  },
  {
    "url": "/_nuxt/pages_dashboard.f80fbb2bba38ab5fc0c5.js",
    "revision": "02ab42961015069b37cce2c78c4f161e"
  },
  {
    "url": "/_nuxt/pages_index__id.6c19c9f97a8409a30885.js",
    "revision": "8a35ea4d246ddc72680ffb6c95e310c2"
  },
  {
    "url": "/_nuxt/pages_index_index.0c14b9d2e6b8105c9a47.js",
    "revision": "d133e01699e5941637835d680c61563a"
  },
  {
    "url": "/_nuxt/pages_index.0777acc37b50ab7924a3.js",
    "revision": "1151c8fd4462a9375b077c043ca4de29"
  },
  {
    "url": "/_nuxt/pages_login.772a21fb737379176340.js",
    "revision": "459ec43bf856a09d375e42c18363cae9"
  },
  {
    "url": "/_nuxt/vendor.d96d9f28fa071031e95b.js",
    "revision": "a5731be8b8dd253bba6f833dd827aff3"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

