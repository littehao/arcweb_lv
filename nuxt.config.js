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
      src: '~styles/normalize.css',

    },
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
    '~/plugins/index'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  // loader:[
  //   {
  //     test:/\.less$/,
  //     loaders:'style-loader!css-loader!less-loader'
  //   }
  // ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx ) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            // 填写需要全局注入 scss 的文件。引入后，所有页面均有效。
            'styles/index.scss'
          ]
        }
      }
      // 修改 scss sass 引用的 loader。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  }
}
