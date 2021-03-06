import Vue from 'vue'
import $ from 'jquery'
import '~/common'
import axios from '../service'
import iView from 'iview';
import VueJsonp from 'vue-jsonp'
import * as swiperAni from './swiper.animate.min.js'
import Swiper from 'swiper';
// import TL from './timeline-js.js'

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    window.Swiper = Swiper;
    window.swiperAni = swiperAni;
}

Vue.use(VueJsonp)
Vue.prototype.$http=axios

Vue.use(iView);
