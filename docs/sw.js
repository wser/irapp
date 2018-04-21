importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.07493c00c4dddd69cca4.js",
    "revision": "875daa157e6ff31ea2bd6a04b4a08a96"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.b64ccc7381d6ab2b51e7.js",
    "revision": "9b17aa4eb267cd345026a5ce149feccf"
  },
  {
    "url": "/_nuxt/manifest.00275605f96024d2edc4.js",
    "revision": "2ab69e89b1ea8c261e99ba6a620fe0f2"
  },
  {
    "url": "/_nuxt/pages_dashboard_index.128f81a723887f8bffba.js",
    "revision": "a8f69afe31e2be771e4cfdc1db9762d7"
  },
  {
    "url": "/_nuxt/pages_dashboard_items.e314594ae62664dd2437.js",
    "revision": "3d2ebdf70d036f17cc1b3b8248434a54"
  },
  {
    "url": "/_nuxt/pages_dashboard_settings.58b67e255886b9ca4ff7.js",
    "revision": "58999bdab1c830dd11fdaf9c8619702a"
  },
  {
    "url": "/_nuxt/pages_dashboard.2e2af35fc4db23918f19.js",
    "revision": "96a9715a6cb91f614024a173645cfb26"
  },
  {
    "url": "/_nuxt/pages_index__id.94de1a8425f17c6d930b.js",
    "revision": "bb018eb3676d88c4cfe0036da8eec106"
  },
  {
    "url": "/_nuxt/pages_index_index.42bc7fd0db51ce5a07ee.js",
    "revision": "f281d08b36892daae6fdfbbd9b8a8b42"
  },
  {
    "url": "/_nuxt/pages_index.16fa43f312463b1823d2.js",
    "revision": "5c7cd9dd88d38acf10aaf93c4b16880b"
  },
  {
    "url": "/_nuxt/pages_login.90e747fe9895d0ef08be.js",
    "revision": "8d23526610eadd85e6a3acac7bb314c0"
  },
  {
    "url": "/_nuxt/pages_obrasci.ba82a601f3cb053997d8.js",
    "revision": "1bb48a965b8b2ea15257f0f2acb28e5f"
  },
  {
    "url": "/_nuxt/pages_planiranje.5929fb4514ea0acf8e91.js",
    "revision": "aed8f3606a75bda1dd8f7b3eaaeadb7d"
  },
  {
    "url": "/_nuxt/vendor.50bd5c9a93d87183f0f2.js",
    "revision": "031072b641c8970c8af823bfbe66c163"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

