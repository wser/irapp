importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "irapp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
<<<<<<< HEAD
    "url": "/_nuxt/app.c842f43ddfa492c9e4e0.js",
    "revision": "96a739d821849318b9c547aae1eb1186"
=======
    "url": "/_nuxt/app.62f5f9b21b25c2cb39ac.js",
    "revision": "7987274dc829e5f7d48a9a2642a62b17"
>>>>>>> 4a252bd7487cd3a90e820125681936db8fc64f15
  },
  {
    "url": "/_nuxt/app.feaeee5018f85b1652aa15fc93e131fb.css",
    "revision": "feaeee5018f85b1652aa15fc93e131fb"
  },
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a252bd7487cd3a90e820125681936db8fc64f15
  },
  {
    "url": "/_nuxt/vendor.e7486127029239315b86.js",
    "revision": "a22adcce8cfdd51a269e4e3149c8e64b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

