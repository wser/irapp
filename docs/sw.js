importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e8e3d16f530ca9b315ff.js",
    "revision": "406ae81b64ed96475fbcfe10065e5650"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.490c3e8c32b1400882cc.js",
    "revision": "48e365ad154c98a88bc87ba32666b241"
  },
  {
    "url": "/_nuxt/manifest.fee0e631557505cf75fe.js",
    "revision": "e1d91d2e4f5b5b62e47308a2c65e34cd"
  },
  {
    "url": "/_nuxt/pages_about.6bbefdb73caf87598a3f.js",
    "revision": "64b6b6f137041c1b6e6bd49868bc4986"
  },
  {
    "url": "/_nuxt/pages_dashboard_index.9bb639a1aa1be06b5da2.js",
    "revision": "84bc8389ba3926358a09bae0e9aa6b2d"
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
    "url": "/_nuxt/pages_index.54c64644346569b83de6.js",
    "revision": "fcdcc7310e37ed6aaec27e315b8d2aa3"
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

