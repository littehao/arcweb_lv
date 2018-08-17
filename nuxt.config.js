const pkg = require('./package')
const resolve = require('path').resolve
module.exports = {
  //mode: 'spa',
  //server
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
    { src: 'iview/dist/styles/iview.css'},
    {
      src: 'animate.css/animate.css'
    },
    {
      src:'swiper/dist/css/swiper.min.css'
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
        config.devtool = '#eval-source-map'
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
