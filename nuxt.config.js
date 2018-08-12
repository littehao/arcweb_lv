const pkg = require('./package')
const resolve = require('path').resolve
module.exports = {
  //mode: 'spa',

  /*
  ** Headers of the page
  */
 router: {
  middleware: 'check-auth',
 },
  head: {
    title:'LV',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
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

  /*
  ** Global CSS
  */
  css: [
    {
      src: '~styles/normalize.css',
    },
    { src: 'iview/dist/styles/iview.css'}
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/OpenAPI': {
      target:'https://api.testfordemo.com',
      ws: false,

    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/index',
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  //解决页面js预加载
  render: {
    resourceHints: false
  },
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
