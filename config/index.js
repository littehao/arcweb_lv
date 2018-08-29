// i18n messages
const en = require('../lang/en')
const zhj = require('../lang/zh-j')
const zhf = require('../lang/zh-f')

// i18n config
const LOCALES = [
  {
    code: 'en',
    iso: 'en-US',
    name: 'ENGLISH'
  },
  {
    code: 'zhj',
    iso: 'zh-j',
    name: '中文简体'
  },
  {
    code: 'zhf',
    iso: 'zh-f',
    name: '中文繁体'
  }
]
const DEFAULT_LOCALE = 'zhj'
const I18N = {
  en,
  zhj,
  zhf
}

// Define custom paths for localized routes
// If a route/locale is omitted, defaults to Nuxt's generated path
const ROUTES_ALIASES = {
    index: {
        en: '/',
        zhj: '/',
        zhf: '/',
    },
    classproduct: {
        en: '/classproduct',
        zhj: '/classproduct',
        zhf: '/classproduct',
    },
    content: {
        en: '/content',
        zhj: '/content',
        zhf: '/content',
    },
    service: {
        en: '/service',
        zhj: '/service',
        zhf: '/service',
    },
    about: {
        en: '/about',
        zhj: '/about',
        zhf: '/about',
    },
    contactus: {
        en: '/contactus',
        zhj: '/contactus',
        zhf: '/contactus',
    },
    signing: {
        en: '/signing',
        zhj: '/signing',
        zhf: '/signing',
    },
    mclassproduct: {
        en: '/mclassproduct',
        zhj: '/mclassproduct',
        zhf: '/mclassproduct',
    },
    mcontent: {
        en: '/mcontent',
        zhj: '/mcontent',
        zhf: '/mcontent',
    },
    mservice: {
        en: '/mservice',
        zhj: '/mservice',
        zhf: '/mservice',
    },
    mabout: {
        en: '/mabout',
        zhj: '/mabout',
        zhf: '/mabout',
    },
    mcontactus: {
        en: '/mcontactus',
        zhj: '/mcontactus',
        zhf: '/mcontactus',
    },
    msigning: {
        en: '/msigning',
        zhj: '/msigning',
        zhf: '/msigning',
    },
}

module.exports = {
  LOCALES,
  DEFAULT_LOCALE,
  I18N,
  ROUTES_ALIASES
}
