webpackJsonp([0],{"1rbc":function(t,n,i){"use strict";var a=i("CT+i"),e=i("j9dX");var s=function(t){i("IlFc")},o=i("VU/8")(a.a,e.a,!1,s,null,null);n.a=o.exports},"7F/p":function(t,n,i){t.exports=i.p+"videos/dance.35f51e6.mp4"},"8Jv7":function(t,n,i){t.exports=i.p+"img/lvtv_cppd.6927fe9.png"},"95Cn":function(t,n,i){t.exports=i.p+"img/nrzz_wzbj.997c725.png"},"CT+i":function(t,n,i){"use strict";n.a={mounted:function(){function t(t,n,i){this.id=t,this.x=n,this.y=i,this.r=Math.floor(5*Math.random())+1;var a=(Math.floor(10*Math.random())+1)/10/2;this.color="rgba(255,255,255,"+a+")"}function n(t,n,i,a){this.id=t,this.x=n,this.y=i,this.r=Math.floor(5*Math.random())+1,this.maxLinks=2,this.speed=.5,this.a=.5,this.aReduction=.005,this.color="rgba(255,255,255,"+this.a+")",this.linkColor="rgba(255,255,255,"+this.a/4+")",this.dir=Math.floor(140*Math.random())+200}function i(t,n){return!(0==t||t-n<0)&&(void 0!==m[t-n]&&m[t-n])}t.prototype.draw=function(){c.fillStyle=this.color,c.shadowBlur=2*this.r,c.beginPath(),c.arc(this.x,this.y,this.r,0,2*Math.PI,!1),c.closePath(),c.fill()},t.prototype.move=function(){this.y-=.15,this.y<=-10&&(this.y=e+10),this.draw()},t.prototype.die=function(){d[this.id]=null,delete d[this.id]},n.prototype.draw=function(){c.fillStyle=this.color,c.shadowBlur=2*this.r,c.beginPath(),c.arc(this.x,this.y,this.r,0,2*Math.PI,!1),c.closePath(),c.fill()},n.prototype.link=function(){if(0!=this.id){var t=i(this.id,1),n=i(this.id,2),a=i(this.id,3);t&&(c.strokeStyle=this.linkColor,c.moveTo(t.x,t.y),c.beginPath(),c.lineTo(this.x,this.y),0!=n&&c.lineTo(n.x,n.y),0!=a&&c.lineTo(a.x,a.y),c.stroke(),c.closePath())}},n.prototype.move=function(){this.a-=this.aReduction,this.a<=0?this.die():(this.color="rgba(255,255,255,"+this.a+")",this.linkColor="rgba(255,255,255,"+this.a/4+")",this.x=this.x+Math.cos(w(this.dir))*this.speed,this.y=this.y+Math.sin(w(this.dir))*this.speed,this.draw(),this.link())},n.prototype.die=function(){m[this.id]=null,delete m[this.id]};var a,e,s,o,r,l=document.getElementById("canvas"),c=l.getContext("2d"),p=!1,d=[],v=80,m=[],h=2,g=50;function f(){for(var t in c.clearRect(0,0,a,e),d)d[t].move();for(var t in m)m[t].move();!function(){if(!p)return;if(0==m.length)return m[0]=new n(0,o,r),void m[0].draw();var t=i(m.length,1),a=t.x,e=t.y,s=Math.abs(a-o),l=Math.abs(e-r);if(s<h||l<h)return;var c=Math.random()>.5?-1:1;c=c*Math.floor(Math.random()*g)+1;var d=Math.random()>.5?-1:1;d=d*Math.floor(Math.random()*g)+1,m[m.length]=new n(m.length,o+c,r+d),m[m.length-1].draw(),m[m.length-1].link()}(),requestAnimationFrame(f)}function w(t){return t*(Math.PI/180)}a=document.documentElement.clientWidth,e=document.documentElement.clientHeight,l.setAttribute("width",a),l.setAttribute("height",e),function(){c.strokeStyle="white",c.shadowColor="white";for(var n=0;n<v;n++)d[n]=new t(n,Math.floor(Math.random()*a),Math.floor(Math.random()*e));c.shadowBlur=0,f()}(),window.onmousemove=function(t){p=!0,o=t.clientX,r=t.clientY,clearInterval(s),s=setTimeout(function(){p=!1},100)}}}},CWbg:function(t,n,i){t.exports=i.p+"img/lvty_star8.e16cbfd.jpg"},DZFG:function(t,n,i){t.exports=i.p+"videos/caipiao.b9c6e2e.mp4"},EShf:function(t,n,i){t.exports=i.p+"img/lvty_star5.5ee4e7f.jpg"},F1mp:function(t,n,i){t.exports=i.p+"img/force.d0793a3.png"},G0Ye:function(t,n,i){t.exports=i.p+"img/lvty_star1.dd9c74c.jpg"},Hze1:function(t,n,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.swiper-container-h .title {\n  opacity: 0;\n  -webkit-transition: all 0.5s linear 0.1s;\n  transition: all 0.5s linear 0.1s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.swiper-container-h .info {\n  opacity: 0;\n  -webkit-transition: all 0.5s linear 0.3s;\n  transition: all 0.5s linear 0.3s;\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.swiper-container-h .animt .title {\n  opacity: 1;\n  -webkit-transform: none;\n  transform: none;\n}\n.swiper-container-h .animt .info {\n  opacity: 1;\n  -webkit-transform: none;\n  transform: none;\n}\n",""])},"IeV/":function(t,n,i){t.exports=i.p+"img/lvty_star6.e250a65.jpg"},IlFc:function(t,n,i){var a=i("mU2z");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("rjj0").default)("196a7c6c",a,!0,{sourceMap:!1})},JTD3:function(t,n,i){t.exports=i.p+"img/zxtd_2.abb8944.png"},Kc6E:function(t,n,i){t.exports=i.p+"img/nrzz_rw_4.46299ef.png"},Kl3x:function(t,n,i){"use strict";var a=i("ZCV1"),e=i("U3fa");var s=function(t){i("rC/J")},o=i("VU/8")(a.a,e.a,!1,s,null,null);n.a=o.exports},Kmv5:function(t,n,i){t.exports=i.p+"img/lvty_star7.645fcd4.jpg"},LD8Z:function(t,n,i){t.exports=i.p+"img/zxtd_1.ae048ee.png"},NH5H:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=i("wJYC"),e=i("fm4M");var s=function(t){i("c4xV")},o=i("VU/8")(a.a,e.a,!1,s,null,null);n.default=o.exports},"NR+h":function(t,n,i){t.exports=i.p+"img/bf.d6b723a.png"},OfxT:function(t,n,i){t.exports=i.p+"img/lvtv_typd.00c8cd7.png"},OkNd:function(t,n,i){t.exports=i.p+"img/lvtv_djpd.304580f.png"},Qak8:function(t,n,i){t.exports=i.p+"img/nrzz_bj_2.2cfeb53.png"},Qe4h:function(t,n,i){var a=i("kxFB");(t.exports=i("FZ+f")(!1)).push([t.i,"\n.lv-content {\n  width: 100%;\n  height: 100%;\n}\n.lv-content .swiper-container {\n    height: 100%;\n}\n.lv-content .lv-content-banner {\n    width: 100%;\n    background: url("+a(i("RQwo"))+") no-repeat center;\n    background-size: cover;\n    text-align: center;\n}\n.lv-content .lv-content-banner .swiper-container {\n      width: 100%;\n      height: 100%;\n}\n.lv-content .lv-content-banner .lv-slide-content {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.lv-content .lv-content-banner .lv-slide-content .img {\n        width: 50%;\n        height: 100%;\n        position: relative;\n}\n.lv-content .lv-content-banner .lv-slide-content .img img {\n          position: absolute;\n          bottom: 0;\n          right: 0;\n}\n.lv-content .lv-content-banner .lv-slide-content .text {\n        width: 50%;\n        height: 120px;\n}\n.lv-content .lv-content-banner .lv-slide-content h3 {\n        margin-top: 50px;\n        font-size: 36px;\n        color: #fff;\n        margin-bottom: 25px;\n}\n.lv-content .lv-content-banner .lv-slide-content p {\n        font-size: 28px;\n        color: #fff;\n}\n.lv-content .lv-content-star {\n    width: 100%;\n    height: 100%;\n    background: #1c1c23;\n    color: #fff;\n    padding: 100px 0;\n    position: relative;\n}\n.lv-content .lv-content-star .addbg {\n      background: url("+a(i("95Cn"))+") no-repeat right bottom;\n}\n.lv-content .lv-content-star .title {\n      text-align: center;\n      font-size: 28px;\n      margin-bottom: 53px;\n      margin-top: 5%;\n}\n@media screen and (max-width: 1680px) {\n.lv-content .lv-content-star .title {\n        margin-top: 0;\n        font-size: 24px;\n}\n}\n@media screen and (max-width: 1440px) and (min-width: 1367px) {\n.lv-content .lv-content-star .title {\n        margin-top: 0;\n        font-size: 24px;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-content-star .title {\n        margin-bottom: 20px;\n}\n}\n.lv-content .lv-content-star .star-list {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      position: relative;\n      z-index: 11;\n      background: url("+a(i("95Cn"))+") no-repeat left top;\n}\n.lv-content .lv-content-star .star-list .item {\n        width: 25%;\n        padding: 0 35px;\n        margin-bottom: 30px;\n        -webkit-transition: all 0.3s linear;\n        transition: all 0.3s linear;\n}\n.lv-content .lv-content-star .star-list .item .avatar {\n          width: 100%;\n          height: 250px;\n          overflow: hidden;\n          -webkit-box-shadow: 7px 7px 10px rgba(132, 132, 132, .4);\n                  box-shadow: 7px 7px 10px rgba(132, 132, 132, .4);\n}\n.lv-content .lv-content-star .star-list .item .avatar img {\n            width: 100%;\n            display: block;\n            -webkit-transition: all 0.3s linear;\n            transition: all 0.3s linear;\n}\n@media screen and (max-width: 1680px) {\n.lv-content .lv-content-star .star-list .item .avatar {\n            height: 250px;\n}\n}\n@media screen and (max-width: 1440px) {\n.lv-content .lv-content-star .star-list .item .avatar {\n            height: 200px;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-content-star .star-list .item .avatar {\n            height: 170px;\n            width: 180px;\n}\n}\n.lv-content .lv-content-star .star-list .item .intro .name {\n          font-size: 18px;\n          margin-right: 15px;\n}\n.lv-content .lv-content-star .star-list .item .intro .info {\n          font-size: 14px;\n}\n.lv-content .lv-content-star .line {\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 2px;\n      background: #afafaf;\n}\n.lv-content .lv-celebrity {\n    height: 100%;\n    width: 100%;\n    background-image: url("+a(i("Qak8"))+");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.lv-content .lv-celebrity .lv-celebrity-section {\n      width: 100%;\n      height: auto;\n      overflow: hidden;\n}\n.lv-content .lv-celebrity .lv-celebrity-section .celebrity-title {\n        height: 40px;\n        line-height: 40px;\n        margin-top: 55px;\n        margin-bottom: 25px;\n        color: #fff;\n        font-size: 28px;\n        text-align: center;\n        margin-top: 120px;\n}\n.lv-content .lv-celebrity .lv-celebrity-section img {\n        width: 100%;\n        display: block;\n        margin: 0 auto;\n}\n@media screen and (max-width: 1680px) and (min-width: 1441px) {\n.lv-content .lv-celebrity .lv-celebrity-section img {\n          width: 90%;\n}\n}\n@media screen and (max-width: 1440px) and (min-width: 1367px) {\n.lv-content .lv-celebrity .lv-celebrity-section .celebrity-title {\n          margin-top: 100px;\n          font-size: 24px;\n}\n.lv-content .lv-celebrity .lv-celebrity-section img {\n          width: 75%;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-celebrity .lv-celebrity-section img {\n          width: 60%;\n}\n}\n.lv-content .lv-channel {\n    width: 100%;\n    height: 100%;\n    background: #1C1C23;\n    padding: 50px 0;\n    color: #fff;\n}\n.lv-content .lv-channel .addbg {\n      background: url("+a(i("95Cn"))+") no-repeat right bottom;\n}\n.lv-content .lv-channel .title {\n      text-align: center;\n      font-size: 28px;\n      margin-bottom: 100px;\n      margin-top: 10%;\n}\n@media screen and (max-width: 1680px) and (min-width: 1441px) {\n.lv-content .lv-channel .title {\n        margin-top: 80px;\n}\n}\n@media screen and (max-width: 1440px) {\n.lv-content .lv-channel .title {\n        margin-top: 50px;\n        margin-bottom: 50px;\n        font-size: 20px;\n}\n}\n.lv-content .lv-channel .channel-list {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      background: url("+a(i("95Cn"))+') no-repeat;\n}\n.lv-content .lv-channel .channel-list .item {\n        width: 33.3%;\n        margin-bottom: 80px;\n        position: relative;\n        cursor: pointer;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n}\n.lv-content .lv-channel .channel-list .item .item-t {\n          width: 350px;\n          height: 210px;\n          position: relative;\n}\n.lv-content .lv-channel .channel-list .item .item-t:hover .pic {\n            opacity: 0;\n}\n.lv-content .lv-channel .channel-list .item .item-t:hover .video {\n            opacity: 1;\n}\n.lv-content .lv-channel .channel-list .item .item-t .pic {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: 1;\n            opacity: 1;\n            -webkit-transition: all 0.4s linear;\n            transition: all 0.4s linear;\n            overflow: hidden;\n            border-radius: 10px;\n}\n.lv-content .lv-channel .channel-list .item .item-t .pic .avatar {\n              width: 100%;\n              height: 100%;\n              border-radius: 10px;\n              overflow: hidden;\n}\n.lv-content .lv-channel .channel-list .item .item-t .pic .avatar img {\n                width: 100%;\n                display: block;\n}\n.lv-content .lv-channel .channel-list .item .item-t .video {\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            overflow: hidden;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            opacity: 0;\n}\n.lv-content .lv-channel .channel-list .item .item-t .video video {\n              height: 100%;\n              background: #000;\n}\n.lv-content .lv-channel .channel-list .item .item-t .bag-opa {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: #000;\n            opacity: 0.2;\n            border-radius: 10px;\n            overflow: hidden;\n}\n.lv-content .lv-channel .channel-list .item .item-t .shadow {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n            -webkit-transition: banckground 0.2s linear;\n            transition: banckground 0.2s linear;\n}\n.lv-content .lv-channel .channel-list .item .item-t .shadow.deg135 {\n            background-image: linear-gradient(135deg, rgba(0, 0, 0, .9), transparent 40%);\n}\n.lv-content .lv-channel .channel-list .item .item-t .shadow.deg225 {\n            background-image: linear-gradient(225deg, rgba(0, 0, 0, .9), transparent 40%);\n}\n.lv-content .lv-channel .channel-list .item .item-t .info {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            padding-top: 16%;\n}\n.lv-content .lv-channel .channel-list .item .item-t .info img {\n              width: 16%;\n}\n.lv-content .lv-channel .channel-list .item .item-t .info .caption {\n              font-size: 22px;\n              position: absolute;\n              bottom: 0;\n              left: 0;\n              width: 100%;\n              height: 42px;\n}\n.lv-content .lv-channel .channel-list .item .item-t .info .caption img {\n                width: 30px;\n                float: right;\n                margin-right: 10px;\n                opacity: 0.5;\n}\n.lv-content .lv-channel .channel-list .item .item-t:after {\n            display: block;\n            content: "";\n            width: 100%;\n            height: 22px;\n            background: url('+a(i("iNVq"))+") no-repeat;\n            background-size: 100%;\n            position: absolute;\n            top: 100%;\n            left: 0;\n            z-index: -1;\n}\n@media screen and (max-width: 1680px) {\n.lv-content .lv-channel .channel-list .item .item-t {\n            width: 300px;\n            height: 180px;\n}\n}\n@media screen and (max-width: 1680px) {\n.lv-content .lv-channel .channel-list .item {\n          margin-bottom: 50px;\n}\n}\n.lv-content .lv-starteam {\n    width: 100%;\n    height: 100%;\n    padding-top: 90px;\n    background: #0d0d11;\n    color: #fff;\n}\n.lv-content .lv-starteam .title {\n      font-size: 28px;\n      text-align: center;\n      margin-top: 80px;\n}\n.lv-content .lv-starteam .lv-starteam-bg {\n      width: 100%;\n      height: 100%;\n      background: url("+a(i("95Cn"))+") no-repeat 180px 150px #0d0d11;\n      overflow: hidden;\n}\n.lv-content .lv-starteam .lv-starteam-bg .signing {\n        text-align: center;\n        margin-top: 50px;\n}\n.lv-content .lv-starteam .lv-starteam-bg .signing a {\n          display: inline-block;\n          font-size: 20px;\n          color: #4c4c4c;\n          width: 200px;\n          background: #ffe95b;\n          height: 50px;\n          line-height: 50px;\n          border-radius: 50px;\n          text-align: center;\n}\n@media screen and (max-width: 1920px) and (max-height: 1080px) {\n.lv-content .lv-starteam .lv-starteam-bg .signing {\n          margin-top: 30px;\n}\n}\n@media screen and (max-width: 1680px) and (min-width: 1441px) {\n.lv-content .lv-starteam .lv-starteam-bg .signing {\n          margin-top: 50px;\n}\n.lv-content .lv-starteam .lv-starteam-bg .signing a {\n            height: 40px;\n            line-height: 40px;\n            font-size: 16px;\n}\n}\n@media screen and (max-width: 1440px) and (min-width: 1367px) {\n.lv-content .lv-starteam .lv-starteam-bg .signing {\n          margin-top: 20px;\n}\n.lv-content .lv-starteam .lv-starteam-bg .signing a {\n            height: 40px;\n            line-height: 40px;\n            font-size: 16px;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-starteam .lv-starteam-bg .signing {\n          margin-top: 20px;\n}\n.lv-content .lv-starteam .lv-starteam-bg .signing a {\n            height: 35px;\n            line-height: 35px;\n            font-size: 14px;\n            width: 150px;\n}\n}\n.lv-content .lv-starteam .lv-starteam-content {\n      width: 100%;\n      margin-top: 73px;\n}\n.lv-content .lv-starteam .lv-starteam-content .left {\n        width: 38%;\n        float: left;\n}\n.lv-content .lv-starteam .lv-starteam-content .left h2 {\n          font-size: 28px;\n          margin-bottom: 25px;\n}\n.lv-content .lv-starteam .lv-starteam-content .left p {\n          font-size: 18px;\n          margin: 15% 0;\n          line-height: 35px;\n}\n@media screen and (max-width: 1440px) {\n.lv-content .lv-starteam .lv-starteam-content .left p {\n            margin: 10% 0;\n}\n}\n@media screen and (max-width: 1440px) and (min-width: 1367px) {\n.lv-content .lv-starteam .lv-starteam-content .left p {\n            margin: 10% 0;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-starteam .lv-starteam-content .left h2 {\n            font-size: 24px;\n}\n.lv-content .lv-starteam .lv-starteam-content .left p {\n            margin: 9% 0;\n}\n}\n.lv-content .lv-starteam .lv-starteam-content .left .link {\n          margin-top: 80px;\n}\n.lv-content .lv-starteam .lv-starteam-content .left .link a {\n            display: block;\n            width: 245px;\n            height: 65px;\n            background: #FFE95C;\n            border-radius: 50px;\n            text-align: center;\n            line-height: 65px;\n            color: #000;\n            font-size: 20px;\n}\n.lv-content .lv-starteam .lv-starteam-content .right {\n        width: 500px;\n        height: 100%;\n        float: right;\n        position: relative;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img1 {\n          -webkit-transform: translateX(20px);\n                  transform: translateX(20px);\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img2 {\n          -webkit-transform: translate(50px, -20px);\n                  transform: translate(50px, -20px);\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img3 {\n          -webkit-transform: translateX(-80px);\n                  transform: translateX(-80px);\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img4 {\n          position: absolute;\n          right: 0;\n          bottom: 6%;\n}\n@media screen and (max-width: 1440px) {\n.lv-content .lv-starteam .lv-starteam-content .right .img1 {\n            width: 35%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img2 {\n            width: 30%;\n            position: absolute;\n            right: 150px;\n            top: 30px;\n            width: 35%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img3 {\n            -webkit-transform: translateX(0px);\n                    transform: translateX(0px);\n            width: 35%;\n            position: absolute;\n            left: 2%;\n            top: 200px;\n            width: 35%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img4 {\n            position: absolute;\n            right: 120px;\n            top: 220px;\n            width: 30%;\n}\n}\n@media screen and (max-width: 1679px) and (min-width: 1441px) {\n.lv-content .lv-starteam .lv-starteam-content .right .img1 {\n            width: 45%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img2 {\n            width: 30%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img3 {\n            -webkit-transform: translateX(0px);\n                    transform: translateX(0px);\n            width: 45%;\n}\n.lv-content .lv-starteam .lv-starteam-content .right .img4 {\n            position: absolute;\n            right: 10%;\n            bottom: 6%;\n            width: 35%;\n}\n}\n@media screen and (max-width: 1680px) and (min-width: 1441px) {\n.lv-content .lv-starteam .title {\n        margin-top: 50px;\n        font-size: 24px;\n}\n.lv-content .lv-starteam .lv-starteam-content {\n        margin-top: 20px;\n}\n}\n@media screen and (max-width: 1440px) and (min-width: 1367px) {\n.lv-content .lv-starteam .title {\n        margin-top: 10px;\n        font-size: 24px;\n}\n}\n@media screen and (max-width: 1366px) {\n.lv-content .lv-starteam .lv-starteam-content {\n        margin-top: 20px;\n}\n.lv-content .lv-starteam .title {\n        margin-top: 10px;\n        font-size: 24px;\n}\n}\n",""])},RQwo:function(t,n,i){t.exports=i.p+"img/nrzz_bj_1.08777bc.png"},Sh2s:function(t,n,i){t.exports=i.p+"img/nrzz_rw_2.4ad2763.png"},TYgB:function(t,n,i){t.exports=i.p+"videos/dianjing.f182b7b.mp4"},U3fa:function(t,n,i){"use strict";var a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"swiper-container swiper-container-h lv-content-banner"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"lv-slide-content"},[t._m(0),i("div",{staticClass:"text"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("content.banner[0].title")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$t("content.banner[0].text")))])])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"lv-slide-content"},[t._m(1),i("div",{staticClass:"text"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("content.banner[1].title")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$t("content.banner[1].text")))])])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"lv-slide-content"},[t._m(2),i("div",{staticClass:"text"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("content.banner[2].title")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$t("content.banner[2].text")))])])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"lv-slide-content"},[t._m(3),i("div",{staticClass:"text"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("content.banner[3].title")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$t("content.banner[3].text")))])])])]),i("div",{staticClass:"swiper-slide"},[i("div",{staticClass:"lv-slide-content"},[t._m(4),i("div",{staticClass:"text"},[i("h3",{staticClass:"title"},[t._v(t._s(t.$t("content.banner[4].title")))]),i("p",{staticClass:"info"},[t._v(t._s(t.$t("content.banner[4].text")))])])])])]),i("div",{staticClass:"swiper-button-prev swiper-button-white"}),i("div",{staticClass:"swiper-button-next swiper-button-white"})])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{staticStyle:{width:"60%"},attrs:{src:i("aPKk"),alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{staticStyle:{width:"85%"},attrs:{src:i("Sh2s"),alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{staticStyle:{width:"85%"},attrs:{src:i("gxS0"),alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{staticStyle:{width:"85%"},attrs:{src:i("Kc6E"),alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"img"},[n("img",{staticStyle:{width:"85%"},attrs:{src:i("bPoy"),alt:""}})])}]};n.a=a},ZCV1:function(t,n,i){"use strict";n.a={data:function(){return{active:!1}},mounted:function(){new Swiper(".swiper-container-h",{autoplay:{delay:5e3},speed:500,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{transitionEnd:function(t){$(".swiper-container-h .swiper-slide").removeClass("animt"),$(".swiper-container-h .swiper-slide.swiper-slide-active").addClass("animt")}}})}}},aPKk:function(t,n,i){t.exports=i.p+"img/nrzz_rw_1.6ba5137.png"},bPoy:function(t,n,i){t.exports=i.p+"img/nrzz_rw_5.b94139f.png"},bh8e:function(t,n,i){t.exports=i.p+"videos/tiyu.4a3fbf0.mp4"},c3Os:function(t,n,i){t.exports=i.p+"img/lvty_star3.2e75053.jpg"},c4xV:function(t,n,i){var a=i("Qe4h");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("rjj0").default)("15ea0115",a,!0,{sourceMap:!1})},ddeq:function(t,n,i){t.exports=i.p+"img/lvtv_wdpd.3897b24.png"},e6uY:function(t,n,i){t.exports=i.p+"img/lvtv_zhpd.e625597.png"},fm4M:function(t,n,i){"use strict";var a={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"lv-content"},[a("div",{staticClass:"swiper-container swiper-container-v"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide"},[a("banner")],1),a("div",{staticClass:"swiper-slide lv-content-star"},[a("Container",{staticClass:"addbg"},[a("h3",{staticClass:"title ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[t._v(t._s(t.$t("content.part[0].title")))]),a("div",{staticClass:"star-list"},[a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("G0Ye"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("瑩瑩")]),a("span",{staticClass:"info"},[t._v("网红歌手")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.1s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("iHo8"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("小可兒")]),a("span",{staticClass:"info"},[t._v("网红主播")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.2s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("c3Os"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("香緹Chante")]),a("span",{staticClass:"info"},[t._v("网红主播")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.3s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("xOas"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("禔娜")]),a("span",{staticClass:"info"},[t._v("网红主播")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("EShf"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("妮妮")]),a("span",{staticClass:"info"},[t._v("网红主播")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.1s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("IeV/"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("小晶滢")]),a("span",{staticClass:"info"},[t._v("网红歌手")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.2s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("Kmv5"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("薇夏")]),a("span",{staticClass:"info"},[t._v("网红歌手")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.3s"}},[a("div",[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("CWbg"),alt:""}})]),a("div",{staticClass:"intro"},[a("span",{staticClass:"name"},[t._v("Meggie")]),a("span",{staticClass:"info"},[t._v("网红歌手")])])])])])])],1),a("celebrity"),a("div",{staticClass:"swiper-slide lv-channel"},[a("Container",{staticClass:"addbg"},[a("h3",{staticClass:"title",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[t._v(t._s(t.$t("content.part[2].title")))]),a("div",{staticClass:"channel-list"},[a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("ddeq"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg135"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video"},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("7F/p"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("npJa"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg225"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video"},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("jx1/"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("OkNd"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg135"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video",attrs:{loop:"loop",preload:"auto"}},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("TYgB"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("OfxT"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg225"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video"},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("bh8e"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("8Jv7"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg135"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video"},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("DZFG"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])]),a("div",{staticClass:"item ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[a("div",{staticClass:"item-t"},[a("div",{staticClass:"pic"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:i("e6uY"),alt:""}})]),a("div",{staticClass:"bag-opa"}),a("span",{staticClass:"shadow deg135"}),a("div",{staticClass:"info"},[a("p",{staticClass:"caption"},[a("img",{attrs:{src:i("NR+h"),alt:""}})])])]),a("div",{staticClass:"video"},[a("video",{staticClass:"live",attrs:{loop:"loop",preload:"auto"}},[a("source",{attrs:{src:i("j4kR"),type:"video/mp4"}}),t._v("\n                                        Your browser does not support the "),a("code",[t._v("video")]),t._v(" element.\n                                    ")])])])])])])],1),a("div",{staticClass:"swiper-slide lv-starteam"},[a("Container",[a("div",{staticClass:"lv-starteam-bg"},[a("h3",{staticClass:"title ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[t._v(t._s(t.$t("content.part[3].title")))]),a("div",{staticClass:"lv-starteam-content clearfix"},[a("div",{staticClass:"left"},[a("h2",{staticClass:"ani",staticStyle:{"word-break":"break-all"},attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[t._v(t._s(t.$t("content.part[3].text")))]),a("p",{staticClass:"ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.1s"}},[t._v(t._s(t.$t("content.part[3].info1")))]),a("p",{staticClass:"ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.2s"}},[t._v(t._s(t.$t("content.part[3].info2")))]),a("p",{staticClass:"ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.3s"}},[t._v(t._s(t.$t("content.part[3].info3")))]),a("p",{staticClass:"ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.4s"}},[t._v(t._s(t.$t("content.part[3].info4")))])]),a("div",{staticClass:"right"},[a("img",{staticClass:"img1 ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s",src:i("rrRH"),alt:""}}),a("img",{staticClass:"img2 ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.1s",src:i("kZDf"),alt:""}}),a("img",{staticClass:"img3 ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.2s",src:i("LD8Z"),alt:""}}),a("img",{staticClass:"img4 ani",attrs:{"swiper-animate-effect":"zoomIn","swiper-animate-duration":"0.5s","swiper-animate-delay":"0.3s",src:i("JTD3"),alt:""}})])]),a("div",{staticClass:"signing"},[a("nuxt-link",{attrs:{to:t.getLocalizedRoute("signing")}},[t._v(t._s(t.$t("content.part[3].button_text")))])],1)])])],1),a("div",{staticClass:"swiper-slide",staticStyle:{height:"98px"}},[a("div",{staticClass:"homefooter"},[a("footerlink")],1)])],1)])])},staticRenderFns:[]};n.a=a},gxS0:function(t,n,i){t.exports=i.p+"img/nrzz_rw_3.1cf04e3.png"},iHo8:function(t,n,i){t.exports=i.p+"img/lvty_star2.f027a1b.jpg"},iNVq:function(t,n,i){t.exports=i.p+"img/floating-card-shadow.e411d05.png"},j4kR:function(t,n,i){t.exports=i.p+"videos/zonghe.d3792bc.mp4"},j9dX:function(t,n,i){"use strict";var a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"swiper-slide lv-celebrity"},[n("Container",[n("div",{staticClass:"lv-celebrity-section"},[n("h3",{staticClass:"celebrity-title ani",attrs:{"swiper-animate-effect":"fadeInUp","swiper-animate-duration":"0.5s","swiper-animate-delay":"0s"}},[this._v(this._s(this.$t("content.part[1].title")))]),n("img",{staticClass:"ani",attrs:{src:i("F1mp"),"swiper-animate-effect":"bounceIn","swiper-animate-duration":"1s","swiper-animate-delay":"0.1s",alt:""}})])]),n("div",{staticClass:"landscape"}),n("div",{staticClass:"filter"}),n("canvas",{attrs:{id:"canvas"}})],1)},staticRenderFns:[]};n.a=a},"jx1/":function(t,n,i){t.exports=i.p+"videos/sound.3a84b74.mp4"},kZDf:function(t,n,i){t.exports=i.p+"img/zxtd_4.2000a58.png"},mU2z:function(t,n,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#canvas {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.filter {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@-webkit-keyframes colorChange {\n0%, 100% {\n    opacity: 0;\n}\n50% {\n    opacity: .9;\n}\n}\n@keyframes colorChange {\n0%, 100% {\n    opacity: 0;\n}\n50% {\n    opacity: .9;\n}\n}\n.landscape {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: 1000px 250px;\n  background-repeat: repeat-x;\n  background-position: center bottom;\n}\n",""])},npJa:function(t,n,i){t.exports=i.p+"img/lvtv_yypd.4dc542e.png"},"rC/J":function(t,n,i){var a=i("Hze1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("rjj0").default)("68759f5d",a,!0,{sourceMap:!1})},rrRH:function(t,n,i){t.exports=i.p+"img/zxtd_3.6e0cd46.png"},wJYC:function(t,n,i){"use strict";var a=i("Dd8w"),e=i.n(a),s=i("Kl3x"),o=i("1rbc"),r=i("NYxO");n.a={layout:function(t){return t.userAgent},data:function(){return{height:0,value1:0,nodes:[],edges:[]}},computed:e()({},Object(r.mapGetters)(["getAgent"])),components:{banner:s.a,celebrity:o.a},methods:{},created:function(){},mounted:function(){$(".channel-list .item .item-t").hover(function(){var t=$(this).find(".live");t[0].pause(),t[0].paused&&t[0].play()},function(){$(this).find(".live")[0].pause()}),"mobile"==this.getAgent&&(window.location.href="/"),this.height=document.documentElement.clientHeight;new Swiper(".swiper-container-v",{direction:"vertical",slidesPerView:"auto",mousewheel:!0,speed:500,pagination:{el:".swiper-pagination",clickable:!0},on:{init:function(){swiperAni.swiperAnimateCache(this),swiperAni.swiperAnimate(this)},slideChangeTransitionEnd:function(){swiperAni.swiperAnimate(this)}}})}}},xOas:function(t,n,i){t.exports=i.p+"img/lvty_star4.de74344.jpg"}});
//# sourceMappingURL=0.6db26b3bfd37d147aa0e.js.map