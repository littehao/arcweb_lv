webpackJsonp([5],{"+4tY":function(n,t,e){n.exports=e.p+"img/tx_1.3cce56b.png"},"1I3T":function(n,t,e){n.exports=e.p+"img/lv.a56b878.png"},"2UnT":function(n,t,e){var i=e("L6US");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e("rjj0").default)("c47879d6",i,!0,{sourceMap:!1})},"3umW":function(n,t,e){"use strict";var i=e("NMmx");t.a={name:"index",components:{lvBanner:i.a},data:function(){return{style:{backgroundPosition:"50% 0"},trans:{transform:"translate3d(0,0,0)"},show:!0}},mounted:function(){document.documentElement.clientHeight;var n=new Swiper(".test",{direction:"vertical",mousewheel:!0,slidesPerView:"auto",speed:500,pagination:{el:".swiper-pagination",clickable:!0},on:{init:function(){swiperAni.swiperAnimateCache(this),swiperAni.swiperAnimate(this)},slideChangeTransitionEnd:function(){swiperAni.swiperAnimate(this)}}});this.swiper=n},beforeDestroy:function(){},methods:{controldown:function(){this.swiper.slideNext(),console.log(this.$refs)}}}},"4TrK":function(n,t,e){n.exports=e.p+"img/sy_yuansu_7.c46b3d9.png"},"4UO7":function(n,t,e){n.exports=e.p+"img/sy_yuansu_1.9c3ebad.png"},"6yEk":function(n,t,e){var i=e("kxFB");(n.exports=e("FZ+f")(!1)).push([n.i,"\n.layout {\n  background-color: #1C1C23;\n}\n#home {\n  height: 100%;\n  position: relative;\n  background-color: #1C1C23;\n}\n#home .swiper-container {\n    height: 100%;\n}\n#home .card-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    height: 385px;\n}\n#home .card-info-left {\n      width: 100%;\n}\n#home .card-info-left .title {\n        color: #fff;\n        font-size: 30px;\n}\n#home .card-info-left .subtitle {\n        color: #677897;\n        font-size: 32px;\n        margin-bottom: 20px;\n}\n#home .card-info-left .content-info {\n        font-size: 16px;\n        color: #fff;\n        line-height: 30px;\n}\n#home .card-info-right {\n      /*width: 50%;*/\n      height: 100%;\n      position: relative;\n}\n#home .card-info-right .pc, #home .card-info-right .mobeil {\n        position: absolute;\n        right: 0;\n}\n#home .card-info-right .mobeil {\n        top: 80px;\n        left: 150px;\n}\n#home .card-info .img-content {\n      width: 680px;\n}\n#home .card-info .text-content {\n      width: 520px;\n}\n#home .section-content {\n    /*position: relative;*/\n    /*height: auto;*/\n    /*overflow: hidden;*/\n}\n#home .section-content-pic {\n    position: absolute;\n    top: 820px;\n    right: -55%;\n    z-index: 0;\n}\n#home .section-content-bottompic {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n    width: 100%;\n}\n#home .section-btn {\n    z-index: 1;\n    height: auto;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n}\n#home .section-btn .btn {\n      display: block;\n      margin: 0 auto;\n      width: 210px;\n      height: 45px;\n      text-align: center;\n      border-radius: 50px;\n      line-height: 45px;\n      color: #000000;\n      background-color: #FFE95C;\n      border-color: transparent;\n      cursor: pointer;\n      outline: none;\n      font-size: 16px;\n}\n#home .section-btn .customer {\n      margin-top: 100px;\n      height: 180px;\n      border-top: 1px solid #666666;\n}\n#home .section-btn .customer .customer-info {\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#home .section-btn .customer .customer-info h2 {\n          color: #677897;\n          font-size: 24px;\n          width: 50%;\n}\n#home .section-btn .customer .customer-info a {\n          display: block;\n          height: 45px;\n          width: 170px;\n          border-radius: 50px;\n          line-height: 45px;\n          text-align: center;\n          color: #fff;\n          border: 1px solid #FFE95C;\n          font-size: 16px;\n}\n#home #content-1 {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background-repeat: no-repeat;\n    background-size: 110%;\n    background-position: center 0;\n    position: relative;\n    z-index: 1;\n}\n#home #content-1 .section-1 {\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      overflow: hidden;\n}\n#home #content-1 .mask-wrap .mask {\n      width: 100%;\n      height: 100%;\n      background: url("+i(e("nS7E"))+") no-repeat center top;\n      background-size: cover;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n}\n#home #content-1 .mask-wrap .mask-detail {\n      width: 100%;\n      height: 100%;\n      background: url("+i(e("U7AW"))+") no-repeat;\n      background-size: cover;\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n#home #content-2 {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n#home #content-2 .bgimg {\n      position: absolute;\n      top: 0;\n      left: -30%;\n      width: 100%;\n      height: 100%;\n      background-image: url("+i(e("B1Am"))+");\n      background-repeat: no-repeat;\n      background-position: left center;\n      background-size: 50%;\n}\n#home #content-2 .section-2 {\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      overflow: hidden;\n}\n#home #content-2 .section-2 .avatar {\n        position: absolute;\n}\n#home #content-2 .section-2 .tx1 {\n        top: 100px;\n        left: 290px;\n        width: 282px;\n}\n#home #content-2 .section-2 .tx2 {\n        top: 50px;\n        left: 0px;\n        width: 282px;\n}\n#home #content-2 .section-2 .tx3 {\n        top: -15px;\n        width: 182px;\n        left: 210px;\n}\n#home #content-2 .section-2 .tx4 {\n        bottom: -60px;\n        left: 180px;\n        width: 182px;\n}\n#home #content-3 {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n#home #content-3 .bgimg {\n      position: absolute;\n      top: 0;\n      right: -75%;\n      width: 100%;\n      height: 100%;\n      background-image: url("+i(e("B1Am"))+");\n      background-repeat: no-repeat;\n      background-position: left center;\n      background-size: 50%;\n}\n#home #content-3 .section-3 {\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      overflow: hidden;\n}\n#home #content-3 .section-3 .card-pic {\n        text-align: center;\n}\n#home #content-3 .section-3 .card-pic .img {\n          position: relative;\n          width: 467px;\n          height: 350px;\n          display: inline-block;\n          background: url("+i(e("s1Ub"))+") no-repeat center;\n          background-size: 100%;\n}\n#home #content-3 .section-3 .card-pic h3 {\n          color: #fff;\n          font-size: 20px;\n          text-align: left;\n          padding-top: 55px;\n          padding-left: 46px;\n}\n#home #content-3 .section-3 .card-pic .screen_list {\n          color: #fff;\n          font-size: 14px;\n          text-align: left;\n          padding-left: 46px;\n          padding-top: 50px;\n}\n#home #content-3 .section-3 .card-pic .screen_list span {\n            display: inline-block;\n            padding: 5px 15px;\n            border-radius: 50px;\n            margin-bottom: 20px;\n}\n#home #content-3 .section-3 .card-pic .screen_list .color1 {\n            border: 1px solid #4ED0E5;\n            color: #4ED0E5;\n            margin-right: 15px;\n}\n#home #content-3 .section-3 .card-pic .screen_list .color2 {\n            border: 1px solid #D166A1;\n            color: #D166A1;\n}\n#home #content-3 .section-3 .card-pic .screen_list .color3 {\n            border: 1px solid #D8D360;\n            color: #D8D360;\n            margin-right: 15px;\n            padding: 5px 10px;\n}\n#home #content-3 .section-3 .card-pic .screen_list .color4 {\n            border: 1px solid #A864CA;\n            color: #A864CA;\n            padding: 5px 10px;\n}\n#home #content-4 {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    background-image: url("+i(e("lQKp"))+");\n    background-position: bottom left;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n#home #content-4 .section-4 {\n      height: 100%;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      position: relative;\n}\n#home #content-4 .section-4 .ipad, #home #content-4 .section-4 .sj {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n}\n#home #content-4 .section-4 .sj {\n        width: 80%;\n}\n@media screen and (max-width: 1440px) {\n#home #content-4 .section-4 .sj {\n          width: 70%;\n}\n}\n#home #content-4 .section-4 .ipad {\n        left: 185px;\n        bottom: 0;\n}\n",""])},"832x":function(n,t,e){var i=e("6yEk");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e("rjj0").default)("5ea4b996",i,!0,{sourceMap:!1})},"9V7n":function(n,t,e){n.exports=e.p+"img/light.177cf59.png"},B1Am:function(n,t,e){n.exports=e.p+"img/bg2.c2f7d1f.png"},DpeI:function(n,t,e){"use strict";var i={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"home"}},[i("section",{staticClass:"swiper-container test"},[i("div",{staticClass:"section-content swiper-wrapper"},[i("div",{staticClass:"swiper-slide",attrs:{id:"content-0"}},[i("lv-banner",{model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[i("div",{staticClass:"control-down",on:{click:n.controldown}},[i("div",{staticClass:"down-page",staticStyle:{display:"block"}},[i("i",{staticClass:"icon-darr"})])])])],1),i("div",{staticClass:"swiper-slide"},[i("div",{attrs:{id:"content-1"}},[i("Container",[i("div",{staticClass:"section-1"},[i("div",{staticClass:"card-info section-card1"},[i("div",{staticClass:"card-info-left text-content"},[i("h2",{staticClass:"title  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v(n._s(n.$t("home.content[0].title")))]),i("h3",{staticClass:"subtitle  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("Live Video ")]),i("p",{staticClass:"content-info  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("\n                    "+n._s(n.$t("home.content[0].text"))+"\n                  ")])]),i("div",{staticClass:"card-info-right img-content"},[i("img",{staticClass:"pc  ani",attrs:{"swiper-animate-effect":"fadeInRight",src:e("nlSb"),alt:""}})])])])]),i("div",{staticClass:"mask-wrap"},[i("div",{staticClass:"mask"}),i("div",{staticClass:"mask-detail",style:n.style})])],1)]),i("div",{staticClass:"swiper-slide"},[i("div",{attrs:{id:"content-2"}},[i("Container",[i("div",{staticClass:"section-2"},[i("div",{staticClass:"card-info section-card2"},[i("div",{staticClass:"card-info-right img-content"},[i("img",{staticClass:"avatar tx1 ani ",attrs:{src:e("+4tY"),"swiper-animate-effect":"fadeInLeft",alt:""}}),i("img",{staticClass:"avatar tx2 ani ",attrs:{src:e("cHQ+"),"swiper-animate-effect":"fadeInLeft",alt:""}}),i("img",{staticClass:"avatar tx3 ani ",attrs:{src:e("QQcT"),"swiper-animate-effect":"fadeInLeft",alt:""}}),i("img",{staticClass:"avatar tx4 ani ",attrs:{src:e("aE7j"),"swiper-animate-effect":"fadeInLeft",alt:""}})]),i("div",{staticClass:"card-info-left text-content"},[i("h2",{staticClass:"title  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v(n._s(n.$t("home.content[1].title"))+"\n                  ")]),i("h3",{staticClass:"subtitle  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("Live Video ")]),i("p",{staticClass:"content-info  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v(n._s(n.$t("home.content[1].text")))])])])])]),i("div",{staticClass:"bgimg"})],1)]),i("div",{staticClass:"swiper-slide"},[i("div",{attrs:{id:"content-3"}},[i("Container",[i("div",{staticClass:"section-3"},[i("div",{staticClass:"card-info section-card3"},[i("div",{staticClass:"card-info-left text-content"},[i("h2",{staticClass:"title  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v(n._s(n.$t("home.content[2].title")))]),i("h3",{staticClass:"subtitle  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("Live Video ")]),i("p",{staticClass:"content-info  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("\n                    "+n._s(n.$t("home.content[2].text"))+"\n                  ")])]),i("div",{staticClass:"card-info-right img-content card-pic"},[i("div",{staticClass:"ani img",attrs:{"swiper-animate-effect":"fadeInRight"}},[i("h3",[n._v(n._s(n.$t("home.content[2].title2")))]),i("div",{staticClass:"screen_list"},[i("span",{staticClass:"color1"},[n._v(n._s(n.$t("home.content[2].span1")))]),i("span",{staticClass:"color2"},[n._v(n._s(n.$t("home.content[2].span2")))]),i("span",{staticClass:"color3"},[n._v(n._s(n.$t("home.content[2].span3")))]),i("span",{staticClass:"color4"},[n._v(n._s(n.$t("home.content[2].span4")))])])])])])])]),i("div",{staticClass:"bgimg"})],1)]),i("div",{staticClass:"swiper-slide",attrs:{id:"content-4"}},[i("Container",{staticClass:"endpage"},[i("div",{staticClass:"section-4"},[i("div",{staticClass:"card-info section-card4"},[i("div",{staticClass:"card-info-right img-content "},[i("img",{staticClass:"sj  ani",attrs:{"swiper-animate-effect":"fadeInLeft",src:e("DwUz"),alt:""}})]),i("div",{staticClass:"card-info-left text-content"},[i("h2",{staticClass:"title  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v(n._s(n.$t("home.content[3].title")))]),i("h3",{staticClass:"subtitle  ani",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("Live Video ")]),i("p",{staticClass:"content-info  ani ",attrs:{"swiper-animate-effect":"fadeInUp"}},[n._v("\n                  "+n._s(n.$t("home.content[3].text"))+"\n                ")])])]),i("div",{staticClass:"section-btn",staticStyle:{"padding-bottom":"60px"}},[i("Container",[i("button",{staticClass:"btn",attrs:{type:"button",onclick:"window.open('https://www.solantec.net/','_blank')"}},[n._v(n._s(n.$t("home.button_text")))])])],1)])])],1),i("div",{staticClass:"swiper-slide",staticStyle:{height:"98px"}},[i("div",{staticClass:"homefooter"},[i("footerlink")],1)])])])])},staticRenderFns:[]};t.a=i},DwUz:function(n,t,e){n.exports=e.p+"img/sy_sj_3.973bead.png"},GL15:function(n,t,e){n.exports=e.p+"img/sy_yuansu_6.7c56d28.png"},K2sw:function(n,t,e){"use strict";t.a={porps:{value:{type:Boolean,default:!1}},data:function(){return{animated:!0,style1:{transform:"translate3d(0,0,0)",transformStyle:"preserve-3d"},style2:{transform:"translate3d(0,0,0)",transformStyle:"preserve-3d"},style3:{transform:"translate3d(0,0,0)",transformStyle:"preserve-3d"},style4:{transform:"translate3d(0,0,0)",transformStyle:"preserve-3d"}}},mounted:function(){var n=this,t=document.getElementById("lv-banner"),e=this,i=!0;setTimeout(function(){n.animated=!1,t.addEventListener("mousemove",function(n){var t=this;i&&(i=!1,setTimeout(function(){e.eventListener(n,t,10),i=!0},400))},!1)},5e3)},beforeDestroy:function(){if(this.value){var n=document.getElementById("lv-banner");n.removeEventListener&&n.removeEventListener("mousemove",this,!1)}},methods:{eventListener:function(n,t,e){var i=(n=n||window.event).pageX/e,a=n.pageY/e,o=i-document.documentElement.clientWidth/2/e,s=a-document.documentElement.clientHeight/2/e;this.style1.transform="translate3d("+-o+"px,"+-s+"px,0)",this.style2.transform="translate3d("+-o+"px,"+-s+"px,0)",this.style3.transform="translate3d("+-o+"px,"+-s+"px,0)",this.style4.transform="translate3d("+-o+"px,"+-s+"px,0)"}}}},L6US:function(n,t,e){var i=e("kxFB");(n.exports=e("FZ+f")(!1)).push([n.i,"\n.lv-banner {\n  width: 100%;\n  min-width: 1200px;\n  height: inherit;\n  background: url("+i(e("g7KL"))+") center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n}\n.lv-banner .lv-banner-info {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-align: center;\n    z-index: 2;\n    background: url("+i(e("9V7n"))+") no-repeat 45% top;\n}\n.lv-banner .lv-banner-info .lv-banner-logo {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 35%;\n}\n.lv-banner .lv-banner-info .lv-banner-logo img {\n        animation-delay: 0.2s;\n        -webkit-animation-delay: 0.2s;\n        display: block;\n        margin-left: 35%;\n}\n.lv-banner .lv-banner-info .lv-banner-title {\n      position: absolute;\n      width: 100%;\n      left: 0;\n      bottom: 25%;\n}\n.lv-banner .lv-banner-info .lv-banner-title h3 {\n        font-size: 38px;\n        color: #fff;\n        margin-bottom: 10px;\n        animation-delay: 0.6s;\n        -webkit-animation-delay: 0.6s;\n}\n.lv-banner .lv-banner-info .lv-banner-title p {\n        font-size: 19px;\n        color: #fff;\n        animation-delay: 1s;\n        -webkit-animation-delay: 1s;\n}\n.lv-banner .control-down {\n    width: 51px;\n    height: 57px;\n    position: absolute;\n    top: 89%;\n    left: 50%;\n    z-index: 999;\n    margin: 0 0 0 -25px;\n    cursor: pointer;\n    text-align: center;\n}\n.lv-banner .control-down .down-page {\n      width: 51px;\n      height: 57px;\n      background-position: 0 -83px;\n      display: none;\n      -webkit-animation: wave 1.5s both infinite;\n              animation: wave 1.5s both infinite;\n      -webkit-transition: all 1s;\n      transition: all 1s;\n}\n.lv-banner .control-down .down-page .icon-darr {\n        margin: 20px 0 0;\n        width: 29px;\n        height: 17px;\n        background-image: url("+i(e("glrk"))+");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 100%;\n        display: inline-block;\n}\n.lv-banner .lv-banner-main {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n.lv-banner .fl-part {\n    width: 50%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    perspective: 700px;\n    -webkit-perspective: 700px;\n}\n.lv-banner .fr-part {\n    width: 50%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    perspective: 700px;\n    -webkit-perspective: 700px;\n}\n.lv-banner .part {\n    position: absolute;\n    background-repeat: no-repeat;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transition: all 0.4s linear;\n    transition: all 0.4s linear;\n}\n.lv-banner .fl-part1 {\n    width: 383px;\n    height: 465px;\n    bottom: 37%;\n    right: 48%;\n    background-image: url("+i(e("4UO7"))+");\n    animation-delay: 2.2s;\n    -webkit-animation-delay: 2.2s;\n}\n.lv-banner .fl-part2 {\n    width: 225px;\n    height: 396px;\n    bottom: 33%;\n    right: 30%;\n    background-image: url("+i(e("bILd"))+");\n    animation-delay: 1.8s;\n    -webkit-animation-delay: 1.8s;\n}\n.lv-banner .fl-part3 {\n    width: 397px;\n    height: 470px;\n    bottom: 13%;\n    right: 35%;\n    background-image: url("+i(e("UFmu"))+");\n    animation-delay: 1.4s;\n    -webkit-animation-delay: 1.4s;\n}\n.lv-banner .fr-part1 {\n    width: 228px;\n    height: 427px;\n    bottom: 41%;\n    left: 55%;\n    background-image: url("+i(e("UlFb"))+");\n    animation-delay: 2.6s;\n    -webkit-animation-delay: 2.6s;\n}\n.lv-banner .fr-part2 {\n    width: 215px;\n    height: 413px;\n    bottom: 29%;\n    left: 60%;\n    background-image: url("+i(e("Z26a"))+");\n    animation-delay: 2.2s;\n    -webkit-animation-delay: 2.2s;\n}\n.lv-banner .fr-part3 {\n    width: 354px;\n    height: 546px;\n    bottom: 19%;\n    left: 20%;\n    background-image: url("+i(e("GL15"))+");\n    animation-delay: 1.8s;\n    -webkit-animation-delay: 1.8s;\n}\n.lv-banner .fr-part4 {\n    width: 470px;\n    height: 286px;\n    bottom: 13%;\n    left: 20%;\n    background-image: url("+i(e("4TrK"))+");\n    animation-delay: 1.4s;\n    -webkit-animation-delay: 1.4s;\n}\n@-webkit-keyframes fadeInLeft {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInLeft {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n          animation-name: fadeInLeft;\n}\n@-webkit-keyframes fadeInRight {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInRight {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(200%, 0, 0);\n            transform: translate3d(200%, 0, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n          animation-name: fadeInRight;\n}\n@-webkit-keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes fadeInUp {\n0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n          animation-name: fadeInUp;\n}\n@-webkit-keyframes wave {\n0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n50% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n}\n}\n@keyframes wave {\n0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n50% {\n    -webkit-transform: translate3d(0, 15px, 0);\n            transform: translate3d(0, 15px, 0);\n}\n}\n.animated {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n",""])},NMmx:function(n,t,e){"use strict";var i=e("K2sw"),a=e("ZN7g");var o=function(n){e("2UnT")},s=e("VU/8")(i.a,a.a,!1,o,null,null);t.a=s.exports},QQcT:function(n,t,e){n.exports=e.p+"img/tx_3.c42f1c2.png"},U7AW:function(n,t,e){n.exports=e.p+"img/homebg.b08027f.png"},UFmu:function(n,t,e){n.exports=e.p+"img/sy_yuansu_3.a1a2a2a.png"},UlFb:function(n,t,e){n.exports=e.p+"img/sy_yuansu_4.c0dd79f.png"},Z26a:function(n,t,e){n.exports=e.p+"img/sy_yuansu_5.ed24a7b.png"},ZN7g:function(n,t,e){"use strict";var i={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"lv-banner",attrs:{id:"lv-banner"}},[i("Container",[i("div",{staticClass:"lv-banner-main"},[i("div",{staticClass:"fl-part"},[i("div",{staticClass:"part part1  fl-part1 animated",class:{fadeInLeft:n.animated},style:n.style1}),i("div",{staticClass:"part part2  fl-part2 animated",class:{fadeInLeft:n.animated},style:n.style2}),i("div",{staticClass:"part part3  fl-part3 animated",class:{fadeInLeft:n.animated},style:n.style3})]),i("div",{staticClass:"fr-part"},[i("div",{staticClass:"part part1  fr-part1 animated",class:{fadeInRight:n.animated},style:n.style1}),i("div",{staticClass:"part part2  fr-part2 animated",class:{fadeInRight:n.animated},style:n.style2}),i("div",{staticClass:"part part3  fr-part3 animated",class:{fadeInRight:n.animated},style:n.style3}),i("div",{staticClass:"part part4  fr-part4 animated",class:{fadeInRight:n.animated},style:n.style4})])]),i("div",{staticClass:"lv-banner-info"},[i("div",{staticClass:"lv-banner-logo"},[i("img",{staticClass:"animated fadeInUp",attrs:{src:e("1I3T"),alt:""}})]),i("div",{staticClass:"lv-banner-title"},[i("h3",{staticClass:"animated fadeInUp"},[n._v("Live Video")]),i("p",{staticClass:"animated fadeInUp"},[n._v(n._s(n.$t("home.banner_text")))])]),n._t("default")],2)])],1)},staticRenderFns:[]};t.a=i},aE7j:function(n,t,e){n.exports=e.p+"img/tx_4.d590792.png"},bILd:function(n,t,e){n.exports=e.p+"img/sy_yuansu_2.0206f22.png"},"cHQ+":function(n,t,e){n.exports=e.p+"img/tx_2.8131694.png"},g7KL:function(n,t,e){n.exports=e.p+"img/sy_banner_1.be59b76.png"},glrk:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAcCAYAAAAjmez3AAAAAXNSR0IArs4c6QAAA21JREFUWAnNl1lPFEEUhWdwwX2Nxi3GNQajiRhN9EFf5kETjUZj3FD4cyqKAiK48KAPGgKi4o77hj/CjNv4nbFm6O653UwzJXKTm7p17npqupomWygU6jOZzD50M/oNvZvNZh+zTlph5kaG24vORIfR3izgIYztaFBuQ+ZeEJgsNvPuYZZcZJ6hOoCGCKhtjoRdBv5fIWbardmMIRpEJG84BO0ncUeMb8JhZtlJU10BS/Ii0md5HHaQAtsS/BPiYgbdiQMJzfrquAsPCOhPCDpMoS0J/n/qovdWGugex0m/OOgXyWD0sgzERGbBj1LQuksxKX5geupNegTVDJYMuNkzRSKKALjFMmhFgynuGIU3xvi9w/TapJ5oecZIk/tu5iIcCsJxA1SPmiVTAE/QYJ3l9InRYz31jqOh+QI9Bpn1ZmBvBorMo2BQwJ6KfYpGqwOYV5Paa9QD1cFZ8tAdeMhXwZigAhE96FAocnQzDbOJhitHIT+WO6DTVNOBWaIDvm45KogoyJHpxnxiJYHVo2dpvDzGnxp2B9NE4vSYZB1sj5utIsQkoiiXcA3zaUXWX2AGi8gsjfFXDVNjGcFnUB2QJfr2644joYRYInKS+JulC32uvSGzwJoZZLHhqwpyB9FMsD4ALdFBJpJQUiIRBTgynZgvtDdkDlgLAy00fImQOwCR0IFY8gywy81g+cvYmEQU6Qp1YA6XM8PGPLYiMz8Mx+8c8RYidBCW6Cm4Wg0JJVdFRIGuYDvmK+0NWQCmx2yu4QtBjrBI6AAs0a/fWS0JFaiaiIIp/IvlCvpae0N0V0RmtuErQo6oSIi4JS8BO9KQUJFURJTgyFzGfKu9IUvA9DaruLyOoO7EIiNPkB7d1CSUmJqIkhyZNsx32htSfJ0yePl1il18wxEropboV253tS1/Ihb3VZmYVHIynP4Cn0Q3lLDIOsL+HKoD0y+xArXkDWDbeEmoYE1EVAAy+mQRGX3oWfIJUDGrLCeYHtFLtZBQ3ZqJqIgjo2+ktdqnED2aIvEzRY4ZOq47Eq3EID/AWtHPUV/C/j0+LyTUwwsRFYLMd5YL6Bftx5AP+C/6+CVKfbwRUcEAmZFSA2P9COaVhHp4JaKCkMmznEe/ah8RkWglRo+iV/Fy2a2J3Ks5h6/R+fVP0R1I6OvAu/wBogMFHk71tsYAAAAASUVORK5CYII="},lQKp:function(n,t,e){n.exports=e.p+"img/bg1.0c9cb47.png"},nS7E:function(n,t,e){n.exports=e.p+"img/homebgop.47be3fa.png"},nlSb:function(n,t,e){n.exports=e.p+"img/sy_dn_1.5426f1d.png"},s1Ub:function(n,t,e){n.exports=e.p+"img/screenbg.c6e4b11.png"},sAkS:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("3umW"),a=e("DpeI");var o=function(n){e("832x")},s=e("VU/8")(i.a,a.a,!1,o,null,null);t.default=s.exports}});
//# sourceMappingURL=5.c6b9c04d998025d71a83.js.map