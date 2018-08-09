import Vue from 'vue'
// import $ from 'jquery'
import '~/common'
import axios from '../service'
import iView from 'iview';
Vue.prototype.$http=axios
// window.$=$;
Vue.use(iView);
