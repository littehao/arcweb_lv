webpackJsonp([8],{"+4tY":function(n,t,a){n.exports=a.p+"img/tx_1.3cce56b.png"},"5RkL":function(n,t,a){n.exports=a.p+"img/Screen1.ded1b31.png"},B1Am:function(n,t,a){n.exports=a.p+"img/bg2.c2f7d1f.png"},CVF9:function(n,t,a){n.exports=a.p+"img/sy_sj_2.188a916.png"},DwUz:function(n,t,a){n.exports=a.p+"img/sy_sj_3.d8a5a0e.png"},HeqM:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("Vdoa"),i=a("vP2e"),o=!1;var s=function(n){o||a("nhut")},r=a("VU/8")(e.a,i.a,!1,s,null,null);r.options.__file="pages/mhome/index.vue",t.default=r.exports},QQcT:function(n,t,a){n.exports=a.p+"img/tx_3.c42f1c2.png"},U7AW:function(n,t,a){n.exports=a.p+"img/homebg.b08027f.png"},Vdoa:function(n,t,a){"use strict";var e=a("7t+N"),i=a.n(e);t.a={data:function(){return{style:{height:0}}},mounted:function(){this.style.height=document.documentElement.clientHeight+"px";var n=document.documentElement.clientHeight,t=this;window.addEventListener("scroll",function(){var a=document.documentElement.scrollTop||document.body.scrollTop;t.revealOnScroll(n,a)},!1)},beforeDestroy:function(){window.removeEventListener&&window.removeEventListener("scroll",this,!1)},methods:{revealOnScroll:function(n,t){i()(".revealOnScroll:not(.animated)").each(function(){var a=i()(this),e=a.offset().top;t+n>e&&(a.data("timeout")?window.setTimeout(function(){a.addClass("animated "+a.data("animation"))},parseInt(a.data("timeout"))):a.addClass("animated "+a.data("animation")))})},controldown:function(){var n=document.documentElement.clientHeight;i()("html,body").animate({scrollTop:n},500)}}}},aE7j:function(n,t,a){n.exports=a.p+"img/tx_4.d590792.png"},"cHQ+":function(n,t,a){n.exports=a.p+"img/tx_2.8131694.png"},d6wv:function(n,t,a){var e=a("kxFB");(n.exports=a("FZ+f")(!1)).push([n.i,"\n.m-home {\n  width: 100%;\n  background: #1c1c23;\n}\n.m-home .m-home-part {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n}\n.m-home .m-home-part .section {\n      width: 100%;\n      padding-top: 150px;\n      padding-bottom: 100px;\n      position: relative;\n      z-index: 2;\n}\n.m-home .m-home-part .section .pic {\n        position: relative;\n        text-align: center;\n}\n.m-home .m-home-part .section .pic .img1 {\n          width: 75%;\n}\n.m-home .m-home-part .section .pic .img2 {\n          width: 22%;\n          position: absolute;\n          bottom: 0;\n          left: 10%;\n}\n.m-home .m-home-part .section .pic .avatar {\n          position: absolute;\n          top: 0;\n}\n.m-home .m-home-part .section .pic .tx1 {\n          width: 38%;\n          left: 10%;\n          top: 30px;\n}\n.m-home .m-home-part .section .pic .tx2 {\n          width: 38%;\n          right: 10%;\n          top: 55px;\n}\n.m-home .m-home-part .section .pic .tx3 {\n          width: 22%;\n          left: 40%;\n          top: 8px;\n}\n.m-home .m-home-part .section .pic .tx4 {\n          width: 22%;\n          left: 38%;\n          top: 138px;\n}\n.m-home .m-home-part .section .info {\n        width: 100%;\n        margin-top: 50px;\n}\n.m-home .m-home-part .section .info .title {\n          text-align: center;\n          color: #fff;\n          font-size: 17px;\n}\n.m-home .m-home-part .section .info .lv {\n          color: #677897;\n          font-size: 17px;\n          text-align: center;\n          margin: 10px 0;\n}\n.m-home .m-home-part .section .info .intro {\n          width: 80%;\n          margin: 0 auto;\n          font-size: 14px;\n          color: #677897;\n          line-height: 25px;\n}\n.m-home .m-home-part .bg1 {\n      width: 100%;\n      height: 410px;\n      background: url("+e(a("U7AW"))+") no-repeat;\n      background-size: cover;\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n.m-home .m-home-part .bg2 {\n      width: 100%;\n      height: 410px;\n      background: url("+e(a("nS7E"))+") no-repeat;\n      background-size: cover;\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n.m-home .m-home-part .bg3 {\n      width: 100%;\n      height: 390px;\n      background: url("+e(a("B1Am"))+") no-repeat;\n      background-size: 100%;\n      position: absolute;\n      top: 550px;\n      left: -60%;\n}\n.m-home .m-home-part .bg4 {\n      width: 100%;\n      height: 390px;\n      background: url("+e(a("B1Am"))+") no-repeat;\n      background-size: 100%;\n      position: absolute;\n      top: 1100px;\n      right: -60%;\n}\n.m-home .m-home-part .bg5 {\n      width: 100%;\n      height: 390px;\n      background: url("+e(a("lQKp"))+") no-repeat left;\n      background-size: cover;\n      position: absolute;\n      top: 1800px;\n      left: -60%;\n}\n.m-home .m-home-part .bg6 {\n      width: 100%;\n      height: 390px;\n      background: url("+e(a("B1Am"))+") no-repeat;\n      background-size: 100%;\n      position: absolute;\n      top: 2500px;\n      right: -60%;\n}\n@-webkit-keyframes fadeInLeft {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInLeft {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n          animation-name: fadeInLeft;\n}\n@-webkit-keyframes fadeInRight {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInRight {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n          animation-name: fadeInRight;\n}\n@-webkit-keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n@-webkit-keyframes wave {\n0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n50% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n}\n}\n@keyframes wave {\n0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n50% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n}\n}\n",""])},lQKp:function(n,t,a){n.exports=a.p+"img/bg1.0c9cb47.png"},nS7E:function(n,t,a){n.exports=a.p+"img/homebgop.47be3fa.png"},nhut:function(n,t,a){var e=a("d6wv");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,a("rjj0").default)("5e8883e2",e,!1,{sourceMap:!1})},nlSb:function(n,t,a){n.exports=a.p+"img/sy_dn_1.5426f1d.png"},vP2e:function(n,t,a){"use strict";var e=function(){var n=this.$createElement;this._self._c;return this._m(0)},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"m-home"},[e("div",{staticClass:"m-home-part"},[e("div",{staticClass:"section"},[e("div",{staticClass:"pic revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("img",{staticClass:"img1",attrs:{src:a("nlSb"),alt:""}})]),e("div",{staticClass:"info revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("h3",{staticClass:"title"},[n._v("全球领先的娱乐游戏直播系统")]),e("div",{staticClass:"lv"},[n._v("Live Video")]),e("div",{staticClass:"intro"},[n._v("\n                 我们深耕网络视频直播服务行业多年，始终为致力于打造安全，稳定，流畅，高性能和高并发的直播系统而不断努力。多年的娱乐游戏行业经验，专业多元的游戏开发经验让我们成为全球最领先的“直播+游戏”技术提供商。匠心巨制，倾情推出全球最领先的综合娱乐游戏直播系统。\n               ")])])]),e("div",{staticClass:"section"},[e("div",{staticClass:"pic",staticStyle:{height:"221px"}},[e("img",{staticClass:"avatar tx1 revealOnScroll",attrs:{src:a("+4tY"),"data-animation":"fadeInUp",alt:""}}),e("img",{staticClass:"avatar tx2 revealOnScroll",attrs:{src:a("cHQ+"),"data-animation":"fadeInUp",alt:""}}),e("img",{staticClass:"avatar tx3 revealOnScroll",attrs:{src:a("QQcT"),"data-animation":"fadeInUp",alt:""}}),e("img",{staticClass:"avatar tx4 revealOnScroll",attrs:{src:a("aE7j"),"data-animation":"fadeInUp",alt:""}})]),e("div",{staticClass:"info"},[e("h3",{staticClass:"title revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[n._v("内容媒体粉丝经济领域的先行者")]),e("div",{staticClass:"lv revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[n._v("Live Video")]),e("div",{staticClass:"intro revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[n._v("\n                 移动互联时代，内容成为粉丝经济的核心驱动力，视频直播正在改变整个世界的互动社交方式。而全球泛娱乐产业正在高速发展，并与人们的生活不断融合。视频直播+娱乐游戏+粉丝经济，将开启下一个内容媒体大时代，LV始终是这个行业的先导者。\n               ")])])]),e("div",{staticClass:"section"},[e("div",{staticClass:"pic revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("img",{staticClass:"img1",staticStyle:{position:"relative","z-index":"2"},attrs:{src:a("5RkL"),alt:""}})]),e("div",{staticClass:"info revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("h3",{staticClass:"title"},[n._v("定义娱乐游戏新时代")]),e("div",{staticClass:"lv"},[n._v("Live Video")]),e("div",{staticClass:"intro"},[n._v("\n                 娱乐即是生活，游戏即是人生。娱乐游戏正在成为我们每个人不可或缺的重要一部分。而视频直播互动下的娱乐游戏，将完全重新定义娱乐的多元性和高粘性，正在改变着未来和世界。更多更优质的内容，更多的互动玩法，更多的粉丝打赏和利润分红，即开即玩即时享乐的人生法则，将引导LV定义娱乐游戏行业新时代。\n               ")])])]),e("div",{staticClass:"section"},[e("div",{staticClass:"pic revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("img",{staticClass:"img1",staticStyle:{position:"relative"},attrs:{src:a("CVF9"),alt:""}}),e("img",{staticClass:"img2",staticStyle:{position:"absolute",left:"10%",bottom:"0px",width:"30%"},attrs:{src:a("DwUz"),alt:""}})]),e("div",{staticClass:"info revealOnScroll",attrs:{"data-animation":"fadeInUp"}},[e("h3",{staticClass:"title"},[n._v("定制你专属的“直播+”和“游戏+”")]),e("div",{staticClass:"lv"},[n._v("Live Video")]),e("div",{staticClass:"intro"},[n._v("\n                 我们拥有成熟完善的视频直播系统和功能，且拥有性能优越的高并发架构技术，坚实的技术团队全面保障系统的稳定和安全。产品服务接口达到了每天数亿的调用量，经验就是一切，强大的直播互动整合技术可以为您定制任何你想要的专属产品。\n               ")])])]),e("div",{staticClass:"bg1"}),e("div",{staticClass:"bg2"}),e("div",{staticClass:"bg3"}),e("div",{staticClass:"bg4"}),e("div",{staticClass:"bg5"}),e("div",{staticClass:"bg6"})])])}];e._withStripped=!0;var o={render:e,staticRenderFns:i};t.a=o}});