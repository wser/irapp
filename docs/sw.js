importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ccef0a4c0ad880c29357.js",
    "revision": "0f956662b92fb0403206ac2db1628640"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.263272a45954544f67c2.js",
    "revision": "5d66afdf9d0603b31c64d27e465d5f0f"
  },
  {
    "url": "/_nuxt/manifest.49b72bf8516053e4f0c0.js",
    "revision": "863b0d9b983957f19fd6468d8e195a00"
  },
  {
    "url": "/_nuxt/pages_about.78110bef895a488130bf.js",
    "revision": "1a337b75ad90331ebd0206b6fbaf2434"
  },
  {
    "url": "/_nuxt/pages_admin_items.325d5ebd738580619951.js",
    "revision": "0f1605306bcd768e98cb275857010c76"
  },
  {
    "url": "/_nuxt/pages_admin_settings.13a777449b3a991c42dd.js",
    "revision": "b7408e01cfa9222aea833ff3356b591f"
  },
  {
    "url": "/_nuxt/pages_admin.e5228fe4e9ed39dcdc7c.js",
    "revision": "05c4612dd43273a4eb2fc6139ba1b8aa"
  },
  {
    "url": "/_nuxt/pages_index.fa4d49069e6fa09a24df.js",
    "revision": "61295d028c5d292a1b3429fe03deae4c"
  },
  {
    "url": "/_nuxt/pages_login.2c955aa606b925b17fd7.js",
    "revision": "f4bc8e5dd5e23600f1ff673b64b565cd"
  },
  {
    "url": "/_nuxt/vendor.225a3f820fa54c2a3083.js",
    "revision": "aad7a1a466daaee2100e7bd7435955ff"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

