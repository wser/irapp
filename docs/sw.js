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
    "url": "/_nuxt/layouts_default.dc558737e17e855580aa.js",
    "revision": "b14ae25af41d2522842ecf6c38e3a313"
  },
  {
    "url": "/_nuxt/manifest.3cf47d3d597671c00df6.js",
    "revision": "a3c3dc7abd71a9062132c392197a584d"
  },
  {
    "url": "/_nuxt/pages_about.dadb2f071d06114a16f1.js",
    "revision": "0ff65eadfecc7616b082714758b13e0c"
  },
  {
    "url": "/_nuxt/pages_admin_index.0e48ca0bb27eea631933.js",
    "revision": "06a00a4d9b0da605c23f8862bae7bc2a"
  },
  {
    "url": "/_nuxt/pages_admin_items.c9361bb9d6c164d7dda5.js",
    "revision": "1ce31bf95e5690d3939c3b99f57c807b"
  },
  {
    "url": "/_nuxt/pages_admin_settings.40d597d00ccab965e656.js",
    "revision": "43e1758e06b9c4488770ab85be88244d"
  },
  {
    "url": "/_nuxt/pages_admin.8553b6a5e88f337411f4.js",
    "revision": "47aac3c099553ad859980991249c68f8"
  },
  {
    "url": "/_nuxt/pages_index__id.e6cb0cd4cc5e57a22dce.js",
    "revision": "cc98006987f6cc39fadd89341af3203c"
  },
  {
    "url": "/_nuxt/pages_index_index.bf1624cdfb46a155a73a.js",
    "revision": "b086dc84fc9089fbc67775007f513a12"
  },
  {
    "url": "/_nuxt/pages_index.0f0bc78b7418384f45e0.js",
    "revision": "2cff6ea44951b2a9bf0527228d6701a0"
  },
  {
    "url": "/_nuxt/pages_login.b42fce9c86d1e86973c5.js",
    "revision": "4d8952b05a03b8c223d2147d637ecbf9"
  },
  {
    "url": "/_nuxt/vendor.e7486127029239315b86.js",
    "revision": "a22adcce8cfdd51a269e4e3149c8e64b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

