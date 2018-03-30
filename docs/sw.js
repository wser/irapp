importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.62f5f9b21b25c2cb39ac.js",
    "revision": "7987274dc829e5f7d48a9a2642a62b17"
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
    "url": "/_nuxt/layouts_default.4d613cd17cc04d7b4b6f.js",
    "revision": "f3e79de38f0b50795a7d2990125f3b3a"
  },
  {
    "url": "/_nuxt/manifest.60151e18804a3012b8ec.js",
    "revision": "1858c4fea6da62648b0e3a17b418495e"
  },
  {
    "url": "/_nuxt/pages_about.dc9a212f314e2c53a79a.js",
    "revision": "d36e9361d2e00c24bc8307fb023df3b2"
  },
  {
    "url": "/_nuxt/pages_admin_index.a8fe36934f81d09f9bc1.js",
    "revision": "c7602ca5fb26f2b61dada5335875d38f"
  },
  {
    "url": "/_nuxt/pages_admin_items.a4b1c3010c80305f1d8c.js",
    "revision": "768c62c88d4f0450915223938644288a"
  },
  {
    "url": "/_nuxt/pages_admin_settings.da9fb94d888bfab57b2a.js",
    "revision": "a4126c3077bcc9bfd387b8303c88bee6"
  },
  {
    "url": "/_nuxt/pages_admin.2e8579c82ad26ea6a117.js",
    "revision": "ffdbbb1599d249607dff0920ddbe7f05"
  },
  {
    "url": "/_nuxt/pages_index__id.265f2122179704eba22a.js",
    "revision": "3bff96ef4149102d1334164369991046"
  },
  {
    "url": "/_nuxt/pages_index_index.d0d90f714ae68207ef73.js",
    "revision": "0bcfacd0fabd0bcc683364a41df65297"
  },
  {
    "url": "/_nuxt/pages_index.7a2078b1733938581fe1.js",
    "revision": "10f0c22b2058276e11e6da0132d5535c"
  },
  {
    "url": "/_nuxt/pages_login.742916314439ac17005c.js",
    "revision": "4a27afd483012caa851de516a84aaad9"
  },
  {
    "url": "/_nuxt/vendor.e8d36ff40af358d473e9.js",
    "revision": "2db6d97623c307280da9af650774226a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

