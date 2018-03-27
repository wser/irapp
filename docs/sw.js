importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtpwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.07bbf42fb3befebcff99.js",
    "revision": "48264f3493a9ea80aaf271a71fae0797"
  },
  {
    "url": "/_nuxt/layouts_default.08ef1b189cfbf859528b.js",
    "revision": "045143ec3dbca554fe5221d077b67af9"
  },
  {
    "url": "/_nuxt/manifest.3ade71b53a49b55f8826.js",
    "revision": "92252be37c7400075632913d4d98ce6e"
  },
  {
    "url": "/_nuxt/pages_index.783ddc8553cbe27a55de.js",
    "revision": "dc7135a17e823ee214471d7cb7fea8ef"
  },
  {
    "url": "/_nuxt/vendor.1c1ce48971b47131d59b.js",
    "revision": "ca7cfaf6094165ab466a05420e0c5181"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

