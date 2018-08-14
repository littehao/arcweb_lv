import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _d2b68128 = () => import('../pages/demostation/index.vue' /* webpackChunkName: "pages/demostation/index" */).then(m => m.default || m)
const _d875f9a0 = () => import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */).then(m => m.default || m)
const _2bee7ccc = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _a7244032 = () => import('../pages/mcontent/index.vue' /* webpackChunkName: "pages/mcontent/index" */).then(m => m.default || m)
const _442ec7f9 = () => import('../pages/contactus/index.vue' /* webpackChunkName: "pages/contactus/index" */).then(m => m.default || m)
const _fca5e818 = () => import('../pages/content/index.vue' /* webpackChunkName: "pages/content/index" */).then(m => m.default || m)
const _48c0499c = () => import('../pages/classproduct/index.vue' /* webpackChunkName: "pages/classproduct/index" */).then(m => m.default || m)
const _24eaaaf2 = () => import('../pages/mhome/index.vue' /* webpackChunkName: "pages/mhome/index" */).then(m => m.default || m)
const _6084628a = () => import('../pages/mabout/index.vue' /* webpackChunkName: "pages/mabout/index" */).then(m => m.default || m)
const _82f451ba = () => import('../pages/mservice/index.vue' /* webpackChunkName: "pages/mservice/index" */).then(m => m.default || m)
const _1614871f = () => import('../pages/mclassproduct/index.vue' /* webpackChunkName: "pages/mclassproduct/index" */).then(m => m.default || m)
const _7beb29a8 = () => import('../pages/mcontactus/index.vue' /* webpackChunkName: "pages/mcontactus/index" */).then(m => m.default || m)
const _63029a08 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _705f93ec = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/demostation",
			component: _d2b68128,
			name: "demostation"
		},
		{
			path: "/service",
			component: _d875f9a0,
			name: "service"
		},
		{
			path: "/home",
			component: _2bee7ccc,
			name: "home"
		},
		{
			path: "/mcontent",
			component: _a7244032,
			name: "mcontent"
		},
		{
			path: "/contactus",
			component: _442ec7f9,
			name: "contactus"
		},
		{
			path: "/content",
			component: _fca5e818,
			name: "content"
		},
		{
			path: "/classproduct",
			component: _48c0499c,
			name: "classproduct"
		},
		{
			path: "/mhome",
			component: _24eaaaf2,
			name: "mhome"
		},
		{
			path: "/mabout",
			component: _6084628a,
			name: "mabout"
		},
		{
			path: "/mservice",
			component: _82f451ba,
			name: "mservice"
		},
		{
			path: "/mclassproduct",
			component: _1614871f,
			name: "mclassproduct"
		},
		{
			path: "/mcontactus",
			component: _7beb29a8,
			name: "mcontactus"
		},
		{
			path: "/about",
			component: _63029a08,
			name: "about"
		},
		{
			path: "/",
			component: _705f93ec,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
