importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f9be0a46e6bdfdffc61c.js",
    "revision": "7bf7103a19fe8b1a251874522ba35443"
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
    "url": "/_nuxt/manifest.4face5136997c631c1e9.js",
    "revision": "f90f3a35fd2bb2856e18a04fd08aa1c8"
  },
  {
    "url": "/_nuxt/pages_dashboard_index.591bf7f01281fa0450d2.js",
    "revision": "4e1c21e1bfcc66c37223e43ead3e9ad9"
  },
  {
    "url": "/_nuxt/pages_dashboard_items.37887f644c1f8dd3b070.js",
    "revision": "5ec979e5826b99ab4bc4bcf76307f6ae"
  },
  {
    "url": "/_nuxt/pages_dashboard_obrasci.552c60a6e8e3c89ae657.js",
    "revision": "58148cf21602c68644ba6349516332b8"
  },
  {
    "url": "/_nuxt/pages_dashboard_planiranje.33cde28428fcd21c2f58.js",
    "revision": "433f639ce9462be97421c8e977524bea"
  },
  {
    "url": "/_nuxt/pages_dashboard_settings.6d04c513bb0eb82fed93.js",
    "revision": "6063af296394c83d427214a6f42e2d4f"
  },
  {
    "url": "/_nuxt/pages_dashboard.85cd95a6277cf2e31a47.js",
    "revision": "64bea4be74d72177765e52495e945e76"
  },
  {
    "url": "/_nuxt/pages_index.369910f0d635f39b9abe.js",
    "revision": "837748eb08a0547074a016d5479fe5a9"
  },
  {
    "url": "/_nuxt/pages_login.f71834cd542bac45f44f.js",
    "revision": "2f14b8fbd915229f91cf327e072ccdb9"
  },
  {
    "url": "/_nuxt/vendor.5c5255891656f2aff902.js",
    "revision": "4baebee2f5d86847118d1af8d1db4805"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

