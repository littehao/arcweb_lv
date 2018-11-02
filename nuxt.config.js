const pkg = require('./package')
const resolve = require('path').resolve
const { generateRoutes } = require('./utils/router')
module.exports = {
  //mode: 'spa',
  //server
  dev: (process.env.NODE_ENV !== 'production'),
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  env:{
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST:'0.0.0.0', //process.env.HOST || 'localhost',
    PORT:3333,
  },
  /*
  ** Headers of the page
  */
 router: {
  middleware: ['check-auth','i18n'],
  extendRoutes (routes) {
    const newRoutes = generateRoutes(routes)
    routes.splice(0, routes.length)
    routes.unshift(...newRoutes)
  }
 },
  head: {
    title:'Live Video',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'https://hm.baidu.com/hm.js?df905337d332638b9e51d2f7fc8d3898'},/*引入百度统计的js*/
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
    { src: 'iview/dist/styles/iview.css'},
    {
      src: 'animate.css/animate.css'
    },
    {
      src:'swiper/dist/css/swiper.min.css'
    },
    {
      src:'vue-img-inputer/dist/index.css'
    }
  ],
  axios: {
    proxy: true,
    baseURL:'http://'+process.env.HOST+':'+process.env.PORT,
  },
  proxy: {
    '/OpenAPI': {
      target:'https://api.katoong.com',
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
    },
    {
      src: '~/plugins/global-mixin.js'
    },
    {
      src: '~/plugins/vue-i18n.js',
      injectAs: 'i18n'
    },
    {
      src:'~/plugins/ga.js'
    }
  ],

  /*
  ** Nuxt.js modules
  */
  //缓存
  cache: true,
  performance: {
    gzip: true,
  },

  modules: [
    '@nuxtjs/axios'
  ],
  //解决页面js预加载
  render: {
    resourceHints: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //vendor:['swiper'],

    extend(config, ctx ) {
      // Run ESLint on sav
      if (ctx.isClient) {
        config.devtool = '#source-map'
      }
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
