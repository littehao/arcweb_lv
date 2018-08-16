import Vue from 'vue'
// import $ from 'jquery'
import '~/common'
import axios from '../service'
import iView from 'iview';
import VueJsonp from 'vue-jsonp'
// import VueFullpage from 'vue-fullpage'
// Vue.use(VueFullpage)
Vue.use(VueJsonp)
Vue.prototype.$http=axios

Vue.use(iView);
