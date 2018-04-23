importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.fcc51a00f500c2ba3f2e.js",
    "revision": "f34ec74d28d81ff69ce551efd20fe34a"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.251a7fb899d05b989f1e.js",
    "revision": "c1117f795e45f30844d14afa1ba578e0"
  },
  {
    "url": "/_nuxt/manifest.9c97f624051ff9f7bb2a.js",
    "revision": "d4084c5da19dd7ed6afc39ce8473083f"
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
    "url": "/_nuxt/pages_dashboard_obrasci.9334706eadaa8ea4ef82.js",
    "revision": "be5c4fd27dbd7d55194850d3cc612eb3"
  },
  {
    "url": "/_nuxt/pages_dashboard_planiranje.a65c3225f32030afeeb9.js",
    "revision": "d0c773676d832cdcd7b58baf0b88f17c"
  },
  {
    "url": "/_nuxt/pages_dashboard_settings.6d04c513bb0eb82fed93.js",
    "revision": "6063af296394c83d427214a6f42e2d4f"
  },
  {
    "url": "/_nuxt/pages_dashboard.0d7994439a312b6d7795.js",
    "revision": "629cc3fe01c608d44717b097687c7e7d"
  },
  {
    "url": "/_nuxt/pages_index.369910f0d635f39b9abe.js",
    "revision": "837748eb08a0547074a016d5479fe5a9"
  },
  {
    "url": "/_nuxt/pages_login.1c12cb7282c59cdad8e5.js",
    "revision": "7cdd53f3b74d9e38b294ee968073d19e"
  },
  {
    "url": "/_nuxt/vendor.5c5255891656f2aff902.js",
    "revision": "4baebee2f5d86847118d1af8d1db4805"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

