import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5b49ecd5 = () => import('../pages/mcontactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _51b1b712 = () => import('../pages/signing/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _89338e54 = () => import('../pages/mclassproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _2dc9033e = () => import('../pages/mhome/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _a88fda2a = () => import('../pages/content/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _d16ae638 = () => import('../pages/mabout/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _5448a1e8 = () => import('../pages/mservice/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _2305969b = () => import('../pages/classproduct/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _219a6d48 = () => import('../pages/msigning/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _78789060 = () => import('../pages/mcontent/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _7a5e13fa = () => import('../pages/home/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _255572e3 = () => import('../pages/demostation/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _845febb2 = () => import('../pages/service/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _b97e1a82 = () => import('../pages/about/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _1793ed30 = () => import('../pages/contactus/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _6dddb7fe = () => import('../pages/index.vue' /* webpackChunkName: "" */).then(m => m.default || m)



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
			component: _5b49ecd5,
			name: "mcontactus-en"
		},
		{
			path: "/mcontactus",
			component: _5b49ecd5,
			name: "mcontactus-zhj"
		},
		{
			path: "/zhf/mcontactus",
			component: _5b49ecd5,
			name: "mcontactus-zhf"
		},
		{
			path: "/en/signing",
			component: _51b1b712,
			name: "signing-en"
		},
		{
			path: "/signing",
			component: _51b1b712,
			name: "signing-zhj"
		},
		{
			path: "/zhf/signing",
			component: _51b1b712,
			name: "signing-zhf"
		},
		{
			path: "/en/mclassproduct",
			component: _89338e54,
			name: "mclassproduct-en"
		},
		{
			path: "/mclassproduct",
			component: _89338e54,
			name: "mclassproduct-zhj"
		},
		{
			path: "/zhf/mclassproduct",
			component: _89338e54,
			name: "mclassproduct-zhf"
		},
		{
			path: "/en/mhome",
			component: _2dc9033e,
			name: "mhome-en"
		},
		{
			path: "/mhome",
			component: _2dc9033e,
			name: "mhome-zhj"
		},
		{
			path: "/zhf/mhome",
			component: _2dc9033e,
			name: "mhome-zhf"
		},
		{
			path: "/en/content",
			component: _a88fda2a,
			name: "content-en"
		},
		{
			path: "/content",
			component: _a88fda2a,
			name: "content-zhj"
		},
		{
			path: "/zhf/content",
			component: _a88fda2a,
			name: "content-zhf"
		},
		{
			path: "/en/mabout",
			component: _d16ae638,
			name: "mabout-en"
		},
		{
			path: "/mabout",
			component: _d16ae638,
			name: "mabout-zhj"
		},
		{
			path: "/zhf/mabout",
			component: _d16ae638,
			name: "mabout-zhf"
		},
		{
			path: "/en/mservice",
			component: _5448a1e8,
			name: "mservice-en"
		},
		{
			path: "/mservice",
			component: _5448a1e8,
			name: "mservice-zhj"
		},
		{
			path: "/zhf/mservice",
			component: _5448a1e8,
			name: "mservice-zhf"
		},
		{
			path: "/en/classproduct",
			component: _2305969b,
			name: "classproduct-en"
		},
		{
			path: "/classproduct",
			component: _2305969b,
			name: "classproduct-zhj"
		},
		{
			path: "/zhf/classproduct",
			component: _2305969b,
			name: "classproduct-zhf"
		},
		{
			path: "/en/msigning",
			component: _219a6d48,
			name: "msigning-en"
		},
		{
			path: "/msigning",
			component: _219a6d48,
			name: "msigning-zhj"
		},
		{
			path: "/zhf/msigning",
			component: _219a6d48,
			name: "msigning-zhf"
		},
		{
			path: "/en/mcontent",
			component: _78789060,
			name: "mcontent-en"
		},
		{
			path: "/mcontent",
			component: _78789060,
			name: "mcontent-zhj"
		},
		{
			path: "/zhf/mcontent",
			component: _78789060,
			name: "mcontent-zhf"
		},
		{
			path: "/en/home",
			component: _7a5e13fa,
			name: "home-en"
		},
		{
			path: "/home",
			component: _7a5e13fa,
			name: "home-zhj"
		},
		{
			path: "/zhf/home",
			component: _7a5e13fa,
			name: "home-zhf"
		},
		{
			path: "/en/demostation",
			component: _255572e3,
			name: "demostation-en"
		},
		{
			path: "/demostation",
			component: _255572e3,
			name: "demostation-zhj"
		},
		{
			path: "/zhf/demostation",
			component: _255572e3,
			name: "demostation-zhf"
		},
		{
			path: "/en/service",
			component: _845febb2,
			name: "service-en"
		},
		{
			path: "/service",
			component: _845febb2,
			name: "service-zhj"
		},
		{
			path: "/zhf/service",
			component: _845febb2,
			name: "service-zhf"
		},
		{
			path: "/en/about",
			component: _b97e1a82,
			name: "about-en"
		},
		{
			path: "/about",
			component: _b97e1a82,
			name: "about-zhj"
		},
		{
			path: "/zhf/about",
			component: _b97e1a82,
			name: "about-zhf"
		},
		{
			path: "/en/contactus",
			component: _1793ed30,
			name: "contactus-en"
		},
		{
			path: "/contactus",
			component: _1793ed30,
			name: "contactus-zhj"
		},
		{
			path: "/zhf/contactus",
			component: _1793ed30,
			name: "contactus-zhf"
		},
		{
			path: "/en/",
			component: _6dddb7fe,
			name: "index-en"
		},
		{
			path: "/",
			component: _6dddb7fe,
			name: "index-zhj"
		},
		{
			path: "/zhf/",
			component: _6dddb7fe,
			name: "index-zhf"
		}
    ],
    
    
    fallback: false
  })
}
