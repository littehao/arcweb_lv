import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1aa8f24c = () => import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */).then(m => m.default || m)
const _72a6ee30 = () => import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */).then(m => m.default || m)
const _3ed8e0c4 = () => import('../pages/content/index.vue' /* webpackChunkName: "pages/content/index" */).then(m => m.default || m)
const _ed29dc70 = () => import('../pages/classproduct/index.vue' /* webpackChunkName: "pages/classproduct/index" */).then(m => m.default || m)
const _23abff9c = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _02911e62 = () => import('../pages/classgame/index.vue' /* webpackChunkName: "pages/classgame/index" */).then(m => m.default || m)
const _f8f9edba = () => import('../pages/contactus/index.vue' /* webpackChunkName: "pages/contactus/index" */).then(m => m.default || m)
const _51ed5e16 = () => import('../pages/demostation/index.vue' /* webpackChunkName: "pages/demostation/index" */).then(m => m.default || m)
const _056203b4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/service",
			component: _1aa8f24c,
			name: "service"
		},
		{
			path: "/home",
			component: _72a6ee30,
			name: "home"
		},
		{
			path: "/content",
			component: _3ed8e0c4,
			name: "content"
		},
		{
			path: "/classproduct",
			component: _ed29dc70,
			name: "classproduct"
		},
		{
			path: "/about",
			component: _23abff9c,
			name: "about"
		},
		{
			path: "/classgame",
			component: _02911e62,
			name: "classgame"
		},
		{
			path: "/contactus",
			component: _f8f9edba,
			name: "contactus"
		},
		{
			path: "/demostation",
			component: _51ed5e16,
			name: "demostation"
		},
		{
			path: "/",
			component: _056203b4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
