import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7beb29a8 = () => import('../pages/mcontactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _a5c7c500 = () => import('../pages/signing/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _1614871f = () => import('../pages/mclassproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _24eaaaf2 = () => import('../pages/mhome/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _fca5e818 = () => import('../pages/content/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _6084628a = () => import('../pages/mabout/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _82f451ba = () => import('../pages/mservice/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _48c0499c = () => import('../pages/classproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _50461d1a = () => import('../pages/msigning/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _a7244032 = () => import('../pages/mcontent/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _2bee7ccc = () => import('../pages/home/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _d2b68128 = () => import('../pages/demostation/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _d875f9a0 = () => import('../pages/service/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _63029a08 = () => import('../pages/about/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _442ec7f9 = () => import('../pages/contactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _705f93ec = () => import('../pages/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)



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
			component: _7beb29a8,
			name: "mcontactus-en"
		},
		{
			path: "/mcontactus",
			component: _7beb29a8,
			name: "mcontactus-zhj"
		},
		{
			path: "/zhf/mcontactus",
			component: _7beb29a8,
			name: "mcontactus-zhf"
		},
		{
			path: "/en/signing",
			component: _a5c7c500,
			name: "signing-en"
		},
		{
			path: "/signing",
			component: _a5c7c500,
			name: "signing-zhj"
		},
		{
			path: "/zhf/signing",
			component: _a5c7c500,
			name: "signing-zhf"
		},
		{
			path: "/en/mclassproduct",
			component: _1614871f,
			name: "mclassproduct-en"
		},
		{
			path: "/mclassproduct",
			component: _1614871f,
			name: "mclassproduct-zhj"
		},
		{
			path: "/zhf/mclassproduct",
			component: _1614871f,
			name: "mclassproduct-zhf"
		},
		{
			path: "/en/mhome",
			component: _24eaaaf2,
			name: "mhome-en"
		},
		{
			path: "/mhome",
			component: _24eaaaf2,
			name: "mhome-zhj"
		},
		{
			path: "/zhf/mhome",
			component: _24eaaaf2,
			name: "mhome-zhf"
		},
		{
			path: "/en/content",
			component: _fca5e818,
			name: "content-en"
		},
		{
			path: "/content",
			component: _fca5e818,
			name: "content-zhj"
		},
		{
			path: "/zhf/content",
			component: _fca5e818,
			name: "content-zhf"
		},
		{
			path: "/en/mabout",
			component: _6084628a,
			name: "mabout-en"
		},
		{
			path: "/mabout",
			component: _6084628a,
			name: "mabout-zhj"
		},
		{
			path: "/zhf/mabout",
			component: _6084628a,
			name: "mabout-zhf"
		},
		{
			path: "/en/mservice",
			component: _82f451ba,
			name: "mservice-en"
		},
		{
			path: "/mservice",
			component: _82f451ba,
			name: "mservice-zhj"
		},
		{
			path: "/zhf/mservice",
			component: _82f451ba,
			name: "mservice-zhf"
		},
		{
			path: "/en/classproduct",
			component: _48c0499c,
			name: "classproduct-en"
		},
		{
			path: "/classproduct",
			component: _48c0499c,
			name: "classproduct-zhj"
		},
		{
			path: "/zhf/classproduct",
			component: _48c0499c,
			name: "classproduct-zhf"
		},
		{
			path: "/en/msigning",
			component: _50461d1a,
			name: "msigning-en"
		},
		{
			path: "/msigning",
			component: _50461d1a,
			name: "msigning-zhj"
		},
		{
			path: "/zhf/msigning",
			component: _50461d1a,
			name: "msigning-zhf"
		},
		{
			path: "/en/mcontent",
			component: _a7244032,
			name: "mcontent-en"
		},
		{
			path: "/mcontent",
			component: _a7244032,
			name: "mcontent-zhj"
		},
		{
			path: "/zhf/mcontent",
			component: _a7244032,
			name: "mcontent-zhf"
		},
		{
			path: "/en/home",
			component: _2bee7ccc,
			name: "home-en"
		},
		{
			path: "/home",
			component: _2bee7ccc,
			name: "home-zhj"
		},
		{
			path: "/zhf/home",
			component: _2bee7ccc,
			name: "home-zhf"
		},
		{
			path: "/en/demostation",
			component: _d2b68128,
			name: "demostation-en"
		},
		{
			path: "/demostation",
			component: _d2b68128,
			name: "demostation-zhj"
		},
		{
			path: "/zhf/demostation",
			component: _d2b68128,
			name: "demostation-zhf"
		},
		{
			path: "/en/service",
			component: _d875f9a0,
			name: "service-en"
		},
		{
			path: "/service",
			component: _d875f9a0,
			name: "service-zhj"
		},
		{
			path: "/zhf/service",
			component: _d875f9a0,
			name: "service-zhf"
		},
		{
			path: "/en/about",
			component: _63029a08,
			name: "about-en"
		},
		{
			path: "/about",
			component: _63029a08,
			name: "about-zhj"
		},
		{
			path: "/zhf/about",
			component: _63029a08,
			name: "about-zhf"
		},
		{
			path: "/en/contactus",
			component: _442ec7f9,
			name: "contactus-en"
		},
		{
			path: "/contactus",
			component: _442ec7f9,
			name: "contactus-zhj"
		},
		{
			path: "/zhf/contactus",
			component: _442ec7f9,
			name: "contactus-zhf"
		},
		{
			path: "/en/",
			component: _705f93ec,
			name: "index-en"
		},
		{
			path: "/",
			component: _705f93ec,
			name: "index-zhj"
		},
		{
			path: "/zhf/",
			component: _705f93ec,
			name: "index-zhf"
		}
    ],
    
    
    fallback: false
  })
}
