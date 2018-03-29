importScripts('/nuxtpwa/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxtpwa/_nuxt/app.60de8b4729ece63b8f79.js",
    "revision": "56d2f48df8cca9b84889070098f9455e"
  },
  {
    "url": "/nuxtpwa/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/nuxtpwa/_nuxt/layouts_default.0aee555ddee92db4b2dc.js",
    "revision": "276787bbc3787579c70e441eefb38d8f"
  },
  {
    "url": "/nuxtpwa/_nuxt/manifest.3a500f5215549b26374b.js",
    "revision": "013057743083cc7841596cc07320d55f"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_about.c89cc675c9798f079169.js",
    "revision": "91f630521384c8681a457ad9f8435384"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_admin_index.8e22a489d1292b14eebf.js",
    "revision": "567d1bb1b79f58992b7835f1e3b428ef"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_admin_items.b24d8634758e1888a2ec.js",
    "revision": "245be98f007f44549f7a1d990480a88c"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_admin_settings.7db3221012cef4d9a60e.js",
    "revision": "240f4fde85490705e3d41d234acbb208"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_admin.9f884ca01b6bb04d1a88.js",
    "revision": "bada029fa94a291160a49e23aa81e7a4"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index__id.c628b31423945647534d.js",
    "revision": "fc48cfe0f1f5fadf146431a3468c287e"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index_index.ca4b295f0099b221d432.js",
    "revision": "a2a1472bb263fb9318dbd006cc5d9dc8"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_index.a71f83cc1ecd58db6c12.js",
    "revision": "723cfd6115c17f305b61968bc060216b"
  },
  {
    "url": "/nuxtpwa/_nuxt/pages_login.2c955aa606b925b17fd7.js",
    "revision": "f4bc8e5dd5e23600f1ff673b64b565cd"
  },
  {
    "url": "/nuxtpwa/_nuxt/vendor.e8d36ff40af358d473e9.js",
    "revision": "2db6d97623c307280da9af650774226a"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxtpwa/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxtpwa/.*'), workboxSW.strategies.networkFirst({}), 'GET')

