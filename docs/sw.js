importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.10de8f9e2f2b31d9b05d.js",
    "revision": "a3e6f5cfd2d6a3f725abaf24b43c2fa2"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.50ab57fc8877e3fa7324.js",
    "revision": "9ef4b4216dac5edac2ea409cbb578ff7"
  },
  {
    "url": "/_nuxt/manifest.1696e637a775429bd897.js",
    "revision": "3df1a3132f25ac803a8011abd1df4b16"
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
    "url": "/_nuxt/pages_index_index.ca4b295f0099b221d432.js",
    "revision": "a2a1472bb263fb9318dbd006cc5d9dc8"
  },
  {
    "url": "/_nuxt/pages_index.e2ebfe67a5fc131b67f1.js",
    "revision": "f388213dd1d2380e2ce20e0299d1304c"
  },
  {
    "url": "/_nuxt/pages_login.2c955aa606b925b17fd7.js",
    "revision": "f4bc8e5dd5e23600f1ff673b64b565cd"
  },
  {
    "url": "/_nuxt/vendor.e8d36ff40af358d473e9.js",
    "revision": "2db6d97623c307280da9af650774226a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

