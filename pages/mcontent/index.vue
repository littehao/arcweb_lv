<template>
    <div class="lv-content">
      <div class="lv-content-banner" :style="{'height': height + 'px'}">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <div class="img"><img src="~assets/images/content/nrzz_rw_1.png" alt="" style="width:80%;"></div>
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('content.banner[0].title')}}</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('content.banner[0].text')}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <div class="img"><img src="~assets/images/content/nrzz_rw_2.png" alt=""></div>
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('content.banner[1].title')}}</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('content.banner[1].text')}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <div class="img"><img src="~assets/images/content/nrzz_rw_3.png" alt=""></div>
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('content.banner[2].title')}}</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('content.banner[2].text')}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <div class="img"><img src="~assets/images/content/nrzz_rw_4.png" alt=""></div>
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('content.banner[3].title')}}</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('content.banner[3].text')}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <div class="img"><img src="~assets/images/content/nrzz_rw_5.png" alt=""></div>
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('content.banner[4].title')}}</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('content.banner[4].text')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
      </div>
      <div class="lv-content-star">
          <div>
              <h3 class="title">{{$t('content.part[0].title')}}</h3>
              <div class="star-list">
                  <div class="item">
                    <div>
                        <img src="~assets/images/content/lvty_star1.jpg" alt="">
                        <div class="intro">
                            <span class="name">瑩瑩</span>
                            <span class="info">网红歌手</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star2.jpg" alt="">
                        <div class="intro">
                            <span class="name">小可兒</span>
                            <span class="info">网红主播</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star3.jpg" alt="">
                        <div class="intro">
                            <span class="name">香緹Chante</span>
                            <span class="info">网红主播</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star4.jpg" alt="">
                        <div class="intro">
                            <span class="name">禔娜</span>
                            <span class="info">网红主播</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                    <div>
                        <img src="~assets/images/content/lvty_star5.jpg" alt="">
                        <div class="intro">
                            <span class="name">妮妮</span>
                            <span class="info">网红主播</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star6.jpg" alt="">
                        <div class="intro">
                            <span class="name">小晶滢</span>
                            <span class="info">网红歌手</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star7.jpg" alt="">
                        <div class="intro">
                            <span class="name">薇夏</span>
                            <span class="info">网红歌手</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_star8.jpg" alt="">
                        <div class="intro">
                            <span class="name">Meggie</span>
                            <span class="info">网红歌手</span>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <!-- <div class="line" style="top:25%;"></div>
          <div class="line" style="top:26%;"></div>
          <div class="line" style="top:27%;"></div>
          <div class="line" style="top:28%;"></div>
          <div class="line" style="top:45%;left:10%;"></div>
          <div class="line" style="top:46%;left:10%;"></div>
          <div class="line" style="top:47%;left:10%;"></div>
          <div class="line" style="top:48%;left:10%;"></div>

          <div class="line" style="bottom:36%;"></div>
          <div class="line" style="bottom:35%;"></div>
          <div class="line" style="bottom:34%;"></div>
          <div class="line" style="bottom:33%;"></div>
          <div class="line" style="bottom:18%;left:10%;"></div>
          <div class="line" style="bottom:17%;left:10%;"></div>
          <div class="line" style="bottom:16%;left:10%;"></div>
          <div class="line" style="bottom:15%;left:10%;"></div> -->
      </div>
       <div class="lv-celebrity">
           <div class="lv-celebrity-section">
            <h3 class="celebrity-title">{{$t('content.part[1].title')}}</h3>
            <img style="width:100%;" src="../../assets/images/content/mforce.png" alt="">
            <!--<Force :height="660" :width="1200" :nodes="nodes" :edges="edges"></Force>-->
          </div>
      </div>
      <div class="lv-channel">
        <h3 class="title">{{$t('content.part[2].title')}}</h3>
        <div class="channel-list">
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_wdpd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg135"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">舞蹈频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_yypd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg225"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">音乐频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_djpd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg135"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">电竞频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_typd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg225"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">体育频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_cppd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg135"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">彩票频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-t">
                    <div class="avatar"><img src="~assets/images/content/lvtv_zhpd.png" alt=""></div>
                    <div class="bag-opa"></div>
                    <span class="shadow deg135"></span>
                    <div class="info">
                    <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                    <p class="caption">综合频道</p> -->
                    <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="lv-starteam">
         <div class="lv-starteam-bg">
            <h3 class="title">{{$t('content.part[3].title')}}</h3>
            <div class="lv-starteam-content">
                <div class="right">
                    <img class="img1" src="~assets/images/content/zxtd_3.png" alt="">
                    <img class="img2" src="~assets/images/content/zxtd_4.png" alt="">
                    <img class="img3" src="~assets/images/content/zxtd_1.png" alt="">
                    <img class="img4" src="~assets/images/content/zxtd_2.png" alt="">
                </div>
                <div class="left">
                    <h2>{{$t('content.part[3].text')}}</h2>
                        <p>{{$t('content.part[3].info1')}}</p>
                        <p>{{$t('content.part[3].info2')}}</p>
                        <p>{{$t('content.part[3].info3')}}</p>
                        <p>{{$t('content.part[3].info4')}}</p>
                        <!--<p>如果您想实现梦想</p>-->
                        <!--<p>请与我们联络</p>-->
                        <!-- <div class="link"><nuxt-link to="/mcontactus">申请加入LV</nuxt-link></div> -->
                </div>
            </div>
            <div class="signing"><nuxt-link :to="getLocalizedRoute('msigning')">{{$t('content.part[3].button_text')}}</nuxt-link></div>
        </div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import 'animate.css'
    import * as swiperAni from '../../plugins/swiper.animate.min.js'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import { mapGetters } from 'vuex'
    export default {
        layout (context) {
            return context.userAgent;
        },
        data(){
            return {
                height:0,
                value1: 0,
                nodes:[],
                edges:[]
            }
        },
        computed:{
            ...mapGetters([
                'getAgent'
            ])
        },
        methods:{
            revealOnScroll(tt,t){
                $(".revealOnScroll:not(.animated)").each(function () {
                    var $this = $(this),
                        offsetTop = $this.offset().top;
                    if(t + tt > offsetTop) {
                        if ($this.data('timeout')) {
                            window.setTimeout(function(){
                                $this.addClass('animated ' + $this.data('animation'));
                            }, parseInt($this.data('timeout')));
                        } else {
                            $this.addClass('animated ' + $this.data('animation'));
                        }
                    }
                })
            }
        },
        mounted(){
            if(this.getAgent == 'default'){
                window.location.href = '/'
            }
            this.height = document.documentElement.clientHeight;
            var mySwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay:{
                    delay:5000
                },
                speed:500,
                loop:true,
                on:{
                    init: function(){
                        swiperAni.swiperAnimateCache(this); //隐藏动画元素
                        swiperAni.swiperAnimate(this); //初始化完成开始动画
                    },
                    slideChangeTransitionEnd: function(){
                        swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            })

            let tt = document.documentElement.clientHeight;
            let that = this;
            let win_height_padded = tt * 1.1;
            window.addEventListener('scroll',function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop;

                that.revealOnScroll(tt,t);
            },false)
        },
        beforeDestroy(){
            if (window.removeEventListener) {
                window.removeEventListener("scroll",this,false);
            }
        },
    }
</script>

<style lang="scss">
.lv-content{
    width:100%;
    .lv-content-banner{
        width:100%;
        background:url(~assets/images/content/nrzz_bj_1.png) no-repeat center;
        background-size:cover;
        text-align: center;
        .swiper-container{
            width:100%;
            height:100%;
            .swiper-pagination-bullet{
                border:1px solid #fff;
                border-radius:50%;
                background:transparent;
                opacity:1;
            }
            .swiper-pagination-bullet-active{
                background:#fff;
            }
        }
        .lv-slide-content{
            width:100%;
            height:100%;
            position: relative;
            text-align: center;
            .img{
                position: absolute;
                bottom:0;
                left:0;
                width:100%;
                img{
                    width:100%;
                    display: block;
                    margin:0 auto;
                }
            }
            .text{
                width:100%;
                height:120px;
                position: absolute;
                bottom:160px;
                left:0;
            }
            h3{
                font-size:24px;
                color:#fff;
            }
            p{
                font-size:18px;
                color:#fff;
            }
        }
    }
    .lv-content-star{
        width:100%;
        height:auto;
        background:#1c1c23;
        color:#fff;
        padding:100px 0;
        position: relative;
        .title{
            text-align: center;
            font-size:18px;
            margin-bottom:53px;
            padding:0 20px;
        }
        .star-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            z-index: 11;;
            .item{
                width:50%;
                padding:0 20px;
                cursor: pointer;
                transition: all 0.3s linear;
                margin-bottom:20px;
                img{
                    width:100%;
                    height:195px;
                    display:block;
                    transition: all 0.3s linear;
                }
                .intro{
                    .name{
                        font-size:14px;
                        margin-right:15px;
                    }
                    .info{
                        font-size:12px;
                    }
                }
                // &:hover{
                //     transform: translateY(-5px);
                // }
                // &:hover img{
                //     box-shadow: 0 0 10px #101010;
                // }
            }
        }
        .line{
            position: absolute;
            left:0;
            width:90%;
            height:2px;
            background:#D8D8D8;
        }
    }
    .lv-celebrity{
      height: 660px;
      width: 100%;
      background-image: url("../../assets/images/content/nrzz_bj_2.png");
      background-size: cover;
      background-repeat: no-repeat;
      .lv-celebrity-section{
        width: 100%;
        height: auto;
        overflow: hidden;
        .celebrity-title{
          height: 40px;
          line-height: 40px;
          margin-top: 55px;
          margin-bottom: 35px;
          color: $title-color;
          font-size: 18px;
          text-align: center;
        }
      }
    }
    .lv-channel{
        width:100%;
        height:auto;
        background:$body-background;
        padding:50px 0;
        color:#fff;
        .title{
            text-align: center;
            font-size:18px;
            margin-bottom:53px;
            padding:0 20px;
        }
        .channel-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            .item{
                width:80%;
                margin:0 auto 50px auto;
                position: relative;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                will-change: transform;
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                transition: all 0.2s linear;
                cursor: pointer;
                .item-t{
                    width:100%;
                    position: relative;
                    .avatar{
                        width:100%;
                        img{
                            width:100%;
                            display:block;
                        }
                    }
                    .bag-opa{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:#000;
                        opacity: 0.2;
                    }
                    .shadow{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        z-index: 1;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        transition: banckground 0.2s linear;
                    }
                    .shadow.deg135{
                        background-image: -webkit-linear-gradient(135deg,rgba(0,0,0,0.9),transparent 40%);
                        background-image: linear-gradient(135deg,rgba(0,0,0,0.9),transparent 40%);
                    }
                    .shadow.deg225{
                        background-image: -webkit-linear-gradient(225deg,rgba(0,0,0,0.9),transparent 40%);
                        background-image: linear-gradient(225deg,rgba(0,0,0,0.9),transparent 40%);
                    }
                    .info{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        text-align: center;
                        padding-top:30px;
                        .caption{
                            margin-top:20px;
                            font-size:24px;
                            position: absolute;
                            bottom:10px;
                            right:10px;
                            img{
                                width:30px;
                                display: block;
                                opacity: 0.5;
                            }
                        }
                    }
                    &:after{
                        display:block;
                        content:"";
                        width:100%;
                        height:22px;
                        background:url(~assets/images/content/floating-card-shadow.png) no-repeat;
                        background-size:100%;
                        position: absolute;
                        top:100%;
                        left:0;
                        z-index:-1;
                    }
                }
                // &:hover{
                //     transform: rotateX(10deg) rotateY(5deg);
                // }
                // &:hover .shadow.deg135{
                //     background-image: -webkit-linear-gradient(155deg,rgba(0,0,0,0.9),transparent 50%);
                //     background-image: linear-gradient(155deg,rgba(0,0,0,0.9),transparent 50%);
                // }
                // &:hover .shadow.deg225{
                //     background-image: -webkit-linear-gradient(245deg,rgba(0,0,0,0.9),transparent 50%);
                //     background-image: linear-gradient(245deg,rgba(0,0,0,0.9),transparent 50%);
                // }
            }
            // .item:nth-child(2n+1){
            //     padding:0px 10px 0px 20px;
            // }
            // .item:nth-child(2n){
            //     padding:0px 20px 0px 10px;
            // }
        }
    }
    .lv-starteam{
        width:100%;
        padding-top:90px;
        padding-bottom:50px;
        background: #0d0d11;
        color:#fff;
        .title{
            font-size:18px;
            text-align: center;
            padding:0 20px;
        }
        .lv-starteam-bg{
            width:100%;
            height:100%;
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat 180px 150px  #0d0d11;
            overflow:hidden;
            .signing{
                text-align: center;
                margin-top:30px;
                a{
                    display:inline-block;
                    font-size:16px;
                    color:#4c4c4c;
                    width:150px;
                    background: #ffe95b;
                    height:35px;
                    line-height: 35px;
                    border-radius:50px;
                }
            }
        }
        .lv-starteam-content{
            width:100%;
            margin-top:73px;
            .left{
                width:100%;
                padding:0 20px;
                h2{
                    font-size:20px;
                    margin-bottom:25px;
                }
                p{
                    font-size:14px;
                    margin-bottom:15px;
                    line-height: 30px;
                }
                .link{
                    margin-top:-80px;
                    text-align: right;
                    a{
                        display:inline-block;
                        width:120px;
                        height:35px;
                        background:#FFE95C;
                        border-radius:50px;
                        text-align: center;
                        line-height: 35px;
                        color:#000;
                        font-size:14px;
                    }
                }
            }
            .right{
                width:100%;
                margin-bottom:50px;
                .img1{
                    transform: translateX(30%);
                    width:45%;
                }
                .img2{
                    transform: translate(50%,-20px);
                    width:35%;
                }
                .img3{
                    transform: translateX(10px);
                    width:45%;
                }
                .img4{
                    transform: translate(20%);
                    width:42%;
                }
            }
        }
    }
}
</style>
