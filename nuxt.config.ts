import { Configuration as NuxtConfiguration } from '@nuxt/types'

const NuxtConfig: NuxtConfiguration = {
  srcDir: './src/',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  // https://ja.nuxtjs.org/api/configuration-dev
  dev: process.env.NODE_ENV !== 'production',
  // https://ja.nuxtjs.org/api/configuration-router
  router: {
    base: '/',
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
    prefetchLinks: true,
  },
  // https://ja.nuxtjs.org/api/configuration-server
  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0', // デフォルト: localhost,
    timing: false,
  },
  // https://ja.nuxtjs.org/api/pages-transition#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88
  transition: {
    name: 'page',
    mode: 'out-in',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  // https://github.com/nuxt/telemetry#opting-out
  telemetry: false,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/compositionApi.ts'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}

export default NuxtConfig
