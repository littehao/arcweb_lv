const pkg = require('./package')
const resolve = require('path').resolve
module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },
  // router: {
  //   extendRoutes (routes) {
  //     routes.push({
  //       name: 'custom',
  //       path: '/',
  //       component: resolve(__dirname, 'pages/404.vue')
  //     })
  //   }
  // },
  /*
  ** Global CSS
  */
  css: [
    {
      src: 'styles/index.less',
      lang: 'less'
    }
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/OpenAPI/V1': {
      target: 'https://api.testfordemo.com',
      pathRewrite: { '^/OpenAPI/V1': '' }
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
