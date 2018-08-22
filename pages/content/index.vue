<template>
    <div class="lv-content">
        <div class="swiper-container swiper-container-v">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <banner></banner>
                </div>
                <div class="swiper-slide lv-content-star">
                    <Container class="addbg">
                        <h3 class="title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">LV特约明星艺人</h3>
                        <div class="star-list">
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star1.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">瑩瑩</span>
                                        <span class="info">网红歌手</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani"  swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star2.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">小可兒</span>
                                        <span class="info">网红主播</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star3.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">香緹Chante</span>
                                        <span class="info">网红主播</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star4.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">禔娜</span>
                                        <span class="info">网红主播</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star5.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">妮妮</span>
                                        <span class="info">网红主播</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani"  swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star6.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">小晶滢</span>
                                        <span class="info">网红歌手</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star7.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">薇夏</span>
                                        <span class="info">网红歌手</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                                <div>
                                    <div class="avatar"><img src="~assets/images/content/lvty_star8.jpg" alt=""></div>
                                    <div class="intro">
                                        <span class="name">Meggie</span>
                                        <span class="info">网红歌手</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <!-- <div class="line" style="bottom:60%;"></div>
                    <div class="line" style="bottom:58%;"></div>
                    <div class="line" style="bottom:56%;"></div>
                    <div class="line" style="bottom:54%;"></div>

                    <div class="line" style="bottom:32%;"></div>
                    <div class="line" style="bottom:30%;"></div>
                    <div class="line" style="bottom:28%;"></div>
                    <div class="line" style="bottom:26%;"></div> -->
                </div>
                <!-- <div class="swiper-slide lv-celebrity">
                    <Container>
                        <div class="lv-celebrity-section">
                            <h3 class="celebrity-title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">LV独家签约网红主播人数超过千人</h3>
                            <img src="../../assets/images/content/force.png" class="ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s" alt="">
                        </div>
                    </Container>
                </div> -->
                <celebrity></celebrity>
                <div class="swiper-slide lv-channel">
                    <Container class="addbg">
                        <h3 class="title" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">LVTV官方节目频道，开启娱乐节目互动直播新潮流</h3>
                        <div class="channel-list">
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_wdpd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg135"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">舞蹈频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/dance.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_yypd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg225"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">音乐频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/sound.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_djpd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg135"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">电竞频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video" loop="loop" preload="auto">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/dianjing.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_typd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg225"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">体育频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/tiyu.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_cppd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg135"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">彩票频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/caipiao.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                                <div class="item-t">
                                    <div class="pic">
                                        <div class="avatar"><img src="~assets/images/content/lvtv_zhpd.png" alt=""></div>
                                        <div class="bag-opa"></div>
                                        <span class="shadow deg135"></span>
                                        <div class="info">
                                            <!-- <div class="img"><img src="~assets/images/content/play.png" alt=""></div> -->
                                            <!-- <p class="caption">综合频道</p> -->
                                            <p class="caption"><img src="~assets/images/content/bf.png" alt=""></p>
                                        </div>
                                    </div>
                                    <div class="video">
                                        <video class="live" loop="loop" preload="auto">
                                            <source src="~assets/images/content/zonghe.mp4" type="video/mp4">
                                            Your browser does not support the <code>video</code> element.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div class="swiper-slide lv-starteam">
                    <Container>
                        <div class="lv-starteam-bg">
                            <h3 class="title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">专业的造星团队</h3>
                                <div class="lv-starteam-content">
                                    <div class="left">
                                        <h2 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">全渠道+全明星+工业化=星途璀璨</h2>
                                            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">最顶级的培训导师带你开启追梦之旅</p>
                                            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">最专业的经纪团队为你开创广阔机遇</p>
                                            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">最顶尖的制作团队为你量身定制作品</p>
                                            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.4s">最豪华的明星阵容带你走向璀璨之路</p>
                        
                                    </div>
                                    <div class="right">
                                        <img class="img1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s" src="~assets/images/content/zxtd_3.png" alt="">
                                        <img class="img2 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" src="~assets/images/content/zxtd_4.png" alt="">
                                        <img class="img3 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s" src="~assets/images/content/zxtd_1.png" alt="">
                                        <img class="img4 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="~assets/images/content/zxtd_2.png" alt="">
                                    </div>
                                </div>
                        </div>
                    </Container>
                </div>
                <div class="swiper-slide"  style="height:98px">
                    <div class="homefooter">
                        <footerlink></footerlink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from '~/components/content/banner'
    import celebrity from '~/components/content/celebrity'
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
        components:{
            banner,
            celebrity
        },
        methods:{

        },
        created(){
         // this.getdata()
        },
        mounted(){
            $('.channel-list .item .item-t').hover(function(){
                let dom = $(this).find('.live');
                dom[0].pause();
                if(dom[0].paused){
                    dom[0].play();
                }
            },function(){
                let dom = $(this).find('.live');
                dom[0].pause();  
            })

            if(this.getAgent == 'mobile'){
                window.location.href = '/'
            }
            this.height = document.documentElement.clientHeight;
            
            var swiperV = new Swiper('.swiper-container-v', {
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheel: true,
                speed:500,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on:{
                    init: function(){
                        swiperAni.swiperAnimateCache(this); //隐藏动画元素
                        swiperAni.swiperAnimate(this); //初始化完成开始动画
                    },
                    slideChangeTransitionEnd: function(){
                        swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    }
                }
            });
        },
    }
</script>

<style lang="scss">
.lv-content{
    width:100%;
    height:100%;
    .swiper-container{
        height:100%;
    }
    .lv-content-banner{
        width:100%;
        background:url(~assets/images/content/nrzz_bj_1.png) no-repeat center;
        background-size:cover;
        text-align: center;
        .swiper-container{
            width:100%;
            height:100%;
        }
        .lv-slide-content{
            width:100%;
            height:100%;
            position: relative;
            display:flex;
            align-items: center;
            .img{
                width:50%;
                height:100%;
                position: relative;
                // position: absolute;
                // bottom:0;
                // left:45%;
                // margin-left:-250px;
                img{
                    position: absolute;
                    bottom:0;
                    right:0;
                }
            }
            .text{
                width:50%;
                height:120px;
                // position: absolute;
                // bottom:30%;
                // left:0;
            }
            h3{
                margin-top:50px;
                font-size:36px;
                color:#fff;
                margin-bottom:25px;
            }
            p{
                font-size:$font-size-base * 2;
                color:#fff;
            }
        }
    }
    .lv-content-star{
        width:100%;
        height:100%;
        background:#1c1c23;
        color:#fff;
        padding:100px 0;
        position: relative;
        .addbg{
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat right bottom;
        }
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:53px;
            margin-top:5%;
        }
        @media screen and (max-width:1679px) {
            .title{
                margin-top:0;
                font-size:24px;
            }
        }
        .star-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            z-index: 11;
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat left top;
            .item{
                width:25%;
                padding:0 35px;
                margin-bottom:30px;
                transition: all 0.3s linear;
                .avatar{
                    width:100%;
                    height:250px;
                    overflow:hidden;
                    box-shadow: 7px 7px 10px rgba(132, 132, 132, 0.4);
                    img{
                        width:100%;
                        display:block;
                        transition: all 0.3s linear;
                    }
                }
                @media screen and (max-width:1679px) {
                    .avatar{
                        height:200px;
                    }
                }
                .intro{
                    .name{
                        font-size:18px;
                        margin-right:15px;
                    }
                    .info{
                        font-size:14px;
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
            width:100%;
            height:2px;
            background:#afafaf;
        }
    }
    .lv-celebrity{
      height: 100%;
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
          margin-bottom: 25px;
          color: $title-color;
          font-size: $font-size-base*2;
          text-align: center;
          margin-top:120px;
        }
        img{
          width: 100%;
          display:block;
          margin:0 auto;
        }
        @media screen and (max-width:1680px) and (min-width:1441px) {
            img{
                width: 90%;
            }
        }
        @media screen and (max-width:1440px) {
            .celebrity-title{
                margin-top:100px;
                font-size:24px;
            }
            img{
                width: 75%;
            }
        }
      }
    }
    .lv-channel{
        width:100%;
        height:100%;
        background:$body-background;
        padding:50px 0;
        color:#fff;
        .addbg{
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat right bottom;
        }
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:100px;
            margin-top:10%;
        }
        @media screen and (max-width:1680px) {
            .title{
               margin-top: 80px;
               margin-bottom: 50px;
            }
        }
        .channel-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat;
            .item{
                width:33.3%;
                // padding:0 48px;
                margin-bottom:80px;
                position: relative;
                cursor: pointer;
                display:flex;
                justify-content: center;
                .item-t{
                    width:350px;
                    height:210px;
                    position: relative;
                    &:hover .pic{
                        opacity: 0;
                        // transform: rotate(45deg);
                        // transform-origin:top right;
                    }
                    &:hover .video{
                        opacity: 1;
                    }
                    .pic{
                        width:100%;
                        height:100%;
                        position: absolute;
                        top:0;
                        left:0;
                        z-index: 1;
                        opacity: 1;
                        transition: all 0.4s linear;
                        overflow: hidden;
                        border-radius: 10px;
                        .avatar{
                            width:100%;
                            height:100%;
                            border-radius: 10px;
                            overflow: hidden;
                            img{
                                width:100%;
                                display: block;
                            }
                        }
                    }
                    .video{
                        width:100%;
                        height:100%;
                        position: absolute;
                        top:0;
                        left:0;
                        overflow:hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        video{
                            height: 100%;
                            background:#000;
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
                        border-radius: 10px;
                        overflow: hidden;
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
                        padding-top:16%;
                        img{
                            width:16%;
                        }
                        .caption{
                            // margin-top:120px;
                            font-size:22px;
                            position: absolute;
                            bottom:0;
                            left:0;
                            width:100%;
                            height:42px;
                            // line-height: 42px;
                            // background:rgba(0,0,0,0.5)
                            img{
                                width:30px;
                                float: right;
                                margin-right:10px;
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
                @media screen and (max-width:1679px) {
                    .item-t{
                        width:300px;
                        height:180px;
                    }
                }
            }
            @media screen and (max-width:1679px) {
                .item{
                    margin-bottom:50px;
                }
            }
        }
    }
    .lv-starteam{
        width:100%;
        height:100%;
        padding-top:90px;
        background: #0d0d11;
        color:#fff;
        .title{
            font-size:28px;
            text-align: center;
            margin-top:80px;
        }
        .lv-starteam-bg{
            width:100%;
            height:100%;
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat 180px 150px  #0d0d11;
            overflow:hidden;
        }
        .lv-starteam-content{
            width:100%;
            margin-top:73px;
            .left{
                width:38%;
                float:left;
                h2{
                    font-size:28px;
                    margin-bottom:25px;
                }
                p{
                    font-size:18px;
                    margin:15% 0;
                    line-height: 35px;
                }
                .link{
                    margin-top:80px;
                    a{
                        display: block;
                        width:245px;
                        height:65px;
                        background:#FFE95C;
                        border-radius:50px;
                        text-align: center;
                        line-height: 65px;
                        color:#000;
                        font-size:20px;
                    }
                }
            }
            .right{
                width:500px;
                float:right;
                position: relative;
                .img1{
                    transform: translateX(20px);
                }
                .img2{
                    transform: translate(50px,-20px);
                }
                .img3{
                    transform: translateX(-80px);
                }
                .img4{
                    position: absolute;
                    right:0;
                    bottom:6%;
                }
                @media screen and (max-width:1679px) {
                    .img1{
                        width:45%;
                    }
                    .img2{
                        width:30%;
                    }
                    .img3{
                        transform: translateX(0px);
                        width:45%;
                    }
                    .img4{
                        position: absolute;
                        right:10%;
                        bottom:6%;
                        width:35%;
                    }
                }
            }
        }
        @media screen and (max-width:1679px) {
            .title{
                margin-top:0px;
                font-size:24px;
            }
             .lv-starteam-content{
                 margin-top:20px;
             }
        }
    }
}
</style>
