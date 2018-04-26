importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.71f41b999af8cfb3277c.js",
    "revision": "73ebe0f4b09bc240254f40ba0d21ff90"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.d848be16a8621be2367c.js",
    "revision": "8efa1c1d71c0ee1dff788c1ed426dece"
  },
  {
    "url": "/_nuxt/manifest.119397797efe31c46197.js",
    "revision": "132709ce11e5c4d7428cbee7ae5b8fb2"
  },
  {
    "url": "/_nuxt/pages_dashboard_index.591bf7f01281fa0450d2.js",
    "revision": "4e1c21e1bfcc66c37223e43ead3e9ad9"
  },
  {
    "url": "/_nuxt/pages_dashboard_items.49bee453144c212c7f79.js",
    "revision": "068cb7f929b35d60700b3387d1744dbe"
  },
  {
    "url": "/_nuxt/pages_dashboard_obrasci.552c60a6e8e3c89ae657.js",
    "revision": "58148cf21602c68644ba6349516332b8"
  },
  {
    "url": "/_nuxt/pages_dashboard_planiranje.ba164623b824fe90b2b9.js",
    "revision": "329f13f1cfaa913ed9a761704a8e05cf"
  },
  {
    "url": "/_nuxt/pages_dashboard_settings.c78dd39182e39904d249.js",
    "revision": "10835f219fc5cb34f745f9acbbb3d14e"
  },
  {
    "url": "/_nuxt/pages_dashboard.fd61b27a18bcbbe9c89c.js",
    "revision": "e302573af28f0cad7d0df51a5db0db18"
  },
  {
    "url": "/_nuxt/pages_index.4f0eb26bdcfb832303f3.js",
    "revision": "d8ac2c0761f926a039ba38120b202c39"
  },
  {
    "url": "/_nuxt/vendor.d110b6efffa4a34ec8d6.js",
    "revision": "b9bd84619dd384a5f347e48f3a82a644"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

