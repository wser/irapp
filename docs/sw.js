importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e03e6d88891b9b9fc606.js",
    "revision": "d8c00d68bf457ccc82fda670feb9faf1"
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
    "url": "/_nuxt/manifest.8d3c3aa2a9ba1da39a05.js",
    "revision": "f6992ee54a9204e101d1ead2ead33a7d"
  },
  {
    "url": "/_nuxt/pages_about.6bbefdb73caf87598a3f.js",
    "revision": "64b6b6f137041c1b6e6bd49868bc4986"
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
    "url": "/_nuxt/pages_dashboard_settings.da56b86e96748d77a74f.js",
    "revision": "08a9b3310fbb0990dd923c7a17b865e6"
  },
  {
    "url": "/_nuxt/pages_dashboard.0c0d29c6e5279a912d0f.js",
    "revision": "0d61b9c55d18a63e0676bb1c09491d89"
  },
  {
    "url": "/_nuxt/pages_index__id.29d28f021d3aadd9f308.js",
    "revision": "2af04250060a4e61fbf5e281de67248c"
  },
  {
    "url": "/_nuxt/pages_index_index.b3ac0b3e4dabe5e72b1b.js",
    "revision": "6a8d8bdaed91643d5f13b622a2710e56"
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

