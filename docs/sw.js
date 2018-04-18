importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c842f43ddfa492c9e4e0.js",
    "revision": "96a739d821849318b9c547aae1eb1186"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.d1db158a267107eb9329.js",
    "revision": "e7ba4b6dc554580bd834eca5843a6b95"
  },
  {
    "url": "/_nuxt/manifest.f206381e12e6b502af67.js",
    "revision": "bf9d805961e89af49ae82e8ba9ed0152"
  },
  {
    "url": "/_nuxt/pages_about.6bbefdb73caf87598a3f.js",
    "revision": "64b6b6f137041c1b6e6bd49868bc4986"
  },
  {
    "url": "/_nuxt/pages_admin_index.936f8475a5c8e8097669.js",
    "revision": "397a0803fad37bc1a57bd15e13105f5e"
  },
  {
    "url": "/_nuxt/pages_admin_items.deed3bc134fe6426b43d.js",
    "revision": "b75396725b6aafff542556acccd025b3"
  },
  {
    "url": "/_nuxt/pages_admin_settings.5189a9b3b995f49b222d.js",
    "revision": "9ef3d4a5df4b2da43595ee092f310d01"
  },
  {
    "url": "/_nuxt/pages_admin.8a89355643bffb805ac2.js",
    "revision": "ab702b8136fc2e17581536ff53894900"
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
    "url": "/_nuxt/pages_index.0f6f11826ded5d407f80.js",
    "revision": "105a90158c6a005a76e4cce2d567efb2"
  },
  {
    "url": "/_nuxt/pages_login.772a21fb737379176340.js",
    "revision": "459ec43bf856a09d375e42c18363cae9"
  },
  {
    "url": "/_nuxt/vendor.e7486127029239315b86.js",
    "revision": "a22adcce8cfdd51a269e4e3149c8e64b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

