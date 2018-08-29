import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6d3e4f42 = () => import('../pages/mcontactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _0c02a12a = () => import('../pages/signing/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _21b02349 = () => import('../pages/mclassproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _78b210b1 = () => import('../pages/mhome/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _3ed8e0c4 = () => import('../pages/content/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _acf9a45e = () => import('../pages/mabout/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _3c6fc8b9 = () => import('../pages/mservice/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _ed29dc70 = () => import('../pages/classproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _55c6e309 = () => import('../pages/msigning/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _2a57d17d = () => import('../pages/mcontent/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _72a6ee30 = () => import('../pages/home/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _51ed5e16 = () => import('../pages/demostation/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _1aa8f24c = () => import('../pages/service/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _23abff9c = () => import('../pages/about/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _f8f9edba = () => import('../pages/contactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _056203b4 = () => import('../pages/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/en/mcontactus",
			component: _6d3e4f42,
			name: "mcontactus-en"
		},
		{
			path: "/mcontactus",
			component: _6d3e4f42,
			name: "mcontactus-zhj"
		},
		{
			path: "/zhf/mcontactus",
			component: _6d3e4f42,
			name: "mcontactus-zhf"
		},
		{
			path: "/en/signing",
			component: _0c02a12a,
			name: "signing-en"
		},
		{
			path: "/signing",
			component: _0c02a12a,
			name: "signing-zhj"
		},
		{
			path: "/zhf/signing",
			component: _0c02a12a,
			name: "signing-zhf"
		},
		{
			path: "/en/mclassproduct",
			component: _21b02349,
			name: "mclassproduct-en"
		},
		{
			path: "/mclassproduct",
			component: _21b02349,
			name: "mclassproduct-zhj"
		},
		{
			path: "/zhf/mclassproduct",
			component: _21b02349,
			name: "mclassproduct-zhf"
		},
		{
			path: "/en/mhome",
			component: _78b210b1,
			name: "mhome-en"
		},
		{
			path: "/mhome",
			component: _78b210b1,
			name: "mhome-zhj"
		},
		{
			path: "/zhf/mhome",
			component: _78b210b1,
			name: "mhome-zhf"
		},
		{
			path: "/en/content",
			component: _3ed8e0c4,
			name: "content-en"
		},
		{
			path: "/content",
			component: _3ed8e0c4,
			name: "content-zhj"
		},
		{
			path: "/zhf/content",
			component: _3ed8e0c4,
			name: "content-zhf"
		},
		{
			path: "/en/mabout",
			component: _acf9a45e,
			name: "mabout-en"
		},
		{
			path: "/mabout",
			component: _acf9a45e,
			name: "mabout-zhj"
		},
		{
			path: "/zhf/mabout",
			component: _acf9a45e,
			name: "mabout-zhf"
		},
		{
			path: "/en/mservice",
			component: _3c6fc8b9,
			name: "mservice-en"
		},
		{
			path: "/mservice",
			component: _3c6fc8b9,
			name: "mservice-zhj"
		},
		{
			path: "/zhf/mservice",
			component: _3c6fc8b9,
			name: "mservice-zhf"
		},
		{
			path: "/en/classproduct",
			component: _ed29dc70,
			name: "classproduct-en"
		},
		{
			path: "/classproduct",
			component: _ed29dc70,
			name: "classproduct-zhj"
		},
		{
			path: "/zhf/classproduct",
			component: _ed29dc70,
			name: "classproduct-zhf"
		},
		{
			path: "/en/msigning",
			component: _55c6e309,
			name: "msigning-en"
		},
		{
			path: "/msigning",
			component: _55c6e309,
			name: "msigning-zhj"
		},
		{
			path: "/zhf/msigning",
			component: _55c6e309,
			name: "msigning-zhf"
		},
		{
			path: "/en/mcontent",
			component: _2a57d17d,
			name: "mcontent-en"
		},
		{
			path: "/mcontent",
			component: _2a57d17d,
			name: "mcontent-zhj"
		},
		{
			path: "/zhf/mcontent",
			component: _2a57d17d,
			name: "mcontent-zhf"
		},
		{
			path: "/en/home",
			component: _72a6ee30,
			name: "home-en"
		},
		{
			path: "/home",
			component: _72a6ee30,
			name: "home-zhj"
		},
		{
			path: "/zhf/home",
			component: _72a6ee30,
			name: "home-zhf"
		},
		{
			path: "/en/demostation",
			component: _51ed5e16,
			name: "demostation-en"
		},
		{
			path: "/demostation",
			component: _51ed5e16,
			name: "demostation-zhj"
		},
		{
			path: "/zhf/demostation",
			component: _51ed5e16,
			name: "demostation-zhf"
		},
		{
			path: "/en/service",
			component: _1aa8f24c,
			name: "service-en"
		},
		{
			path: "/service",
			component: _1aa8f24c,
			name: "service-zhj"
		},
		{
			path: "/zhf/service",
			component: _1aa8f24c,
			name: "service-zhf"
		},
		{
			path: "/en/about",
			component: _23abff9c,
			name: "about-en"
		},
		{
			path: "/about",
			component: _23abff9c,
			name: "about-zhj"
		},
		{
			path: "/zhf/about",
			component: _23abff9c,
			name: "about-zhf"
		},
		{
			path: "/en/contactus",
			component: _f8f9edba,
			name: "contactus-en"
		},
		{
			path: "/contactus",
			component: _f8f9edba,
			name: "contactus-zhj"
		},
		{
			path: "/zhf/contactus",
			component: _f8f9edba,
			name: "contactus-zhf"
		},
		{
			path: "/en/",
			component: _056203b4,
			name: "index-en"
		},
		{
			path: "/",
			component: _056203b4,
			name: "index-zhj"
		},
		{
			path: "/zhf/",
			component: _056203b4,
			name: "index-zhf"
		}
    ],
    
    
    fallback: false
  })
}
