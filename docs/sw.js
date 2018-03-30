importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e38670f1f0411e9873d0.js",
    "revision": "a37bfa27a07034f906a2d2dafbe4f1bc"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.f2ebe4a7f906416c8177.js",
    "revision": "25b6c3926415fc87473fefa938b8ecbb"
  },
  {
    "url": "/_nuxt/manifest.01703902c5e490bb309b.js",
    "revision": "aa9a46ed746aa81a8252f6d6c1f8601d"
  },
  {
    "url": "/_nuxt/pages_about.c89cc675c9798f079169.js",
    "revision": "91f630521384c8681a457ad9f8435384"
  },
  {
    "url": "/_nuxt/pages_admin_index.8e22a489d1292b14eebf.js",
    "revision": "567d1bb1b79f58992b7835f1e3b428ef"
  },
  {
    "url": "/_nuxt/pages_admin_items.b24d8634758e1888a2ec.js",
    "revision": "245be98f007f44549f7a1d990480a88c"
  },
  {
    "url": "/_nuxt/pages_admin_settings.7db3221012cef4d9a60e.js",
    "revision": "240f4fde85490705e3d41d234acbb208"
  },
  {
    "url": "/_nuxt/pages_admin.9f884ca01b6bb04d1a88.js",
    "revision": "bada029fa94a291160a49e23aa81e7a4"
  },
  {
    "url": "/_nuxt/pages_index__id.c628b31423945647534d.js",
    "revision": "fc48cfe0f1f5fadf146431a3468c287e"
  },
  {
    "url": "/_nuxt/pages_index_index.e0bcf3d0896b55f892f9.js",
    "revision": "6b0959e5b5b2b0a14e795dbf234b7cca"
  },
  {
    "url": "/_nuxt/pages_index.dd64a1a98a31d5bba0d0.js",
    "revision": "eaafd46b87249b6130cde6c5acb080e3"
  },
  {
    "url": "/_nuxt/pages_login.6026667db934ffcaa737.js",
    "revision": "bcc6ae8488b002d1dee934365fca0f7f"
  },
  {
    "url": "/_nuxt/vendor.e8d36ff40af358d473e9.js",
    "revision": "2db6d97623c307280da9af650774226a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

