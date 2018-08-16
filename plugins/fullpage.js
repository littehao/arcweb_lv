import Vue from 'vue'
import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'
Vue.use(VueFullpage)
if (typeof window !== 'undefined') {
  require('../static/fullpage.min')
  //require('../static/examples')
}
