<template>
    <div class="lv-content">
        <div class="swiper-container swiper-container-h">
            <div class="swiper-wrapper">
            <div class="swiper-slide">Horizontal Slide 1</div>
            <div class="swiper-slide">
                <div class="swiper-container swiper-container-v">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Vertical Slide 1</div>
                    <div class="swiper-slide">Vertical Slide 2</div>
                    <div class="swiper-slide">Vertical Slide 3</div>
                    <div class="swiper-slide">Vertical Slide 4</div>
                    <div class="swiper-slide">Vertical Slide 5</div>
                </div>
                <div class="swiper-pagination swiper-pagination-v"></div>
                </div>
            </div>
            <div class="swiper-slide">Horizontal Slide 3</div>
            <div class="swiper-slide">Horizontal Slide 4</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-h"></div>
        </div>
        <!-- <div class="swiper-container swiper-container-father">
            <div class="swiper-wrapper">
                <div class="swiper-slide lv-content-banner">
                    <div class="swiper-container swiper-container-son">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="lv-slide-content">
                                    <img class="img" src="~assets/images/content/nrzz_rw_1.png" alt="" style="width:45%">
                                    <div class="text">
                                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">网红主播造星计划</h3>
                                        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">挖掘潜力超新星 网红霸主等着你</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="lv-slide-content">
                                    <img class="img" src="~assets/images/content/nrzz_rw_2.png" alt="" style="width:30%">
                                    <div class="text">
                                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">众多选秀活动比赛</h3>
                                        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">主播选秀星活动 怕你不敢来参加</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="lv-slide-content">
                                    <img class="img" src="~assets/images/content/nrzz_rw_3.png" alt="" style="width:42%">
                                    <div class="text">
                                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">艺人网红养成平台</h3>
                                        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">素人蜕变成网红 网红跃升当艺人</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="lv-slide-content">
                                    <img class="img" src="~assets/images/content/nrzz_rw_4.png" alt="" style="width:42%">
                                    <div class="text">
                                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">多样化节目频道</h3>
                                        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">主播专属夯节目 频道多样选不完</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="lv-slide-content">
                                    <img class="img" src="~assets/images/content/nrzz_rw_5.png" alt="" style="width:35%">
                                    <div class="text">
                                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">梦幻神级导师团队</h3>
                                        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">神级导师献专业 量身打造艺人魂</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-content-star">
                    <Container>
                        <h3 class="title">LV特邀明星</h3>
                        <div class="star-list">
                            <div class="item">
                                <div>
                                    <img src="~assets/images/content/lvty_zhyz.png" alt="">
                                    <div class="intro">
                                        <span class="name">赵韩樱子</span>
                                        <span class="info">当红歌手</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div>
                                    <img src="~assets/images/content/lvty_gg.png" alt="">
                                    <div class="intro">
                                        <span class="name">鬼鬼</span>
                                        <span class="info">当红演员</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div>
                                    <img src="~assets/images/content/lvty_axy.png" alt="">
                                    <div class="intro">
                                        <span class="name">安心亞</span>
                                        <span class="info">当红女艺人</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div>
                                    <img src="~assets/images/content/lvty_rzr.png" alt="">
                                    <div class="intro">
                                        <span class="name">容祖儿</span>
                                        <span class="info">当红女歌手</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <div class="line" style="bottom:303px;"></div>
                    <div class="line" style="bottom:281px;"></div>
                    <div class="line" style="bottom:259px;"></div>
                    <div class="line" style="bottom:239px;"></div>
                </div>
                <div class="swiper-slide lv-celebrity">
                    <Container>
                        <div class="lv-celebrity-section">
                            <h3 class="celebrity-title">LV签约网红主持人</h3>
                            <img src="../../assets/images/content/force.png" alt="">
                        </div>
                    </Container>
                </div>
                <div class="swiper-slide lv-channel">
                    <Container>
                        <h3 class="title">LVTV 专属频道</h3>
                        <div class="channel-list">
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_wdpd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg135"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">舞蹈频道</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_yypd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg225"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">音乐频道</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_djpd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg135"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">电竞频道</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_typd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg225"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">体育频道</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_cppd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg135"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">彩票频道</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-t">
                                    <div class="avatar"><img src="~assets/images/content/lvtv_zhpd.png" alt=""></div>
                                    <div class="bag-opa"></div>
                                    <span class="shadow deg135"></span>
                                    <div class="info">
                                        <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                                        <p class="caption">综合频道</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div class="swiper-slide lv-starteam">
                    <Container>
                        <div class="lv-starteam-bg">
                            <h3 class="title">专业的造星团队</h3>
                                <div class="lv-starteam-content">
                                    <div class="left">
                                        <h2>钻石级导师开启你的追梦之旅</h2>
                                            <p>多维度的训练方式，专业的经纪团队，多渠道的商演机会，工业化的造星工厂</p>
                                            <p>如果你有极强的表现欲望</p>
                                            <p>如果你热爱游戏，唱歌，跳舞</p>
                                            <p>如果你有特殊才艺或技能</p>
                                            <p>如果你想实现梦想</p>
                                            <p>请与我们联络</p>
                                    </div>
                                    <div class="right">
                                        <img class="img1" src="~assets/images/content/zxtd_3.png" alt="">
                                        <img class="img2" src="~assets/images/content/zxtd_4.png" alt="">
                                        <img class="img3" src="~assets/images/content/zxtd_1.png" alt="">
                                        <img class="img4" src="~assets/images/content/zxtd_2.png" alt="">
                                    </div>
                                </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
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

        },
        created(){
         // this.getdata()
        },
        mounted(){
          //console.log(this)
            // this.mapData()
            if(this.getAgent == 'mobile'){
                window.location.href = '/'
            }
            this.height = document.documentElement.clientHeight;

            var swiperH = new Swiper('.swiper-container-h', {
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination-h',
                    clickable: true,
                },
                });
                var swiperV = new Swiper('.swiper-container-v', {
                direction: 'vertical',
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination-v',
                    clickable: true,
                },
            });
            // var mySwiper = new Swiper('.swiper-container-son', {
            //     autoplay:{
            //         delay:5000
            //     },
            //     speed:500,
            //     loop:true,
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },
            //     on:{
            //         init: function(){
            //             swiperAni.swiperAnimateCache(this); //隐藏动画元素 
            //             swiperAni.swiperAnimate(this); //初始化完成开始动画
            //         }, 
            //         slideChangeTransitionEnd: function(){ 
            //             swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //         } 
            //     }
            // })

            // var swiper = new Swiper('.swiper-container-father', {
            //     direction: 'vertical',
            //     mousewheel: true,
            //     speed:500,
            //     pagination: {
            //         el: '.swiper-pagination',
            //         clickable: true,
            //     },
            //     on:{
            //         init: function(){
            //             swiperAni.swiperAnimateCache(this); //隐藏动画元素 
            //             swiperAni.swiperAnimate(this); //初始化完成开始动画
            //         }, 
            //         slideChangeTransitionEnd: function(){ 
            //             swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //         } 
            //     }
            // });

            // let tt = document.documentElement.clientHeight;
            // let that = this;
            // let win_height_padded = tt * 1.1;
            // window.addEventListener('scroll',function(){
            //     var t = document.documentElement.scrollTop || document.body.scrollTop; 
            //     var top_div = document.getElementById( "header" );
            //     if( t >= 80 ) {
            //         top_div.style.background = "#27272E";
            //     } else {
            //         top_div.style.background = "transparent";
            //     }

            //     that.revealOnScroll(tt,t);
            // },false)
        },
        // beforeDestroy(){
        //     if (window.removeEventListener) {
        //         window.removeEventListener("scroll",this,false);
        //     }
        // },
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
        }
        .lv-slide-content{
            width:100%;
            height:100%;
            position: relative;
            .img{
                position: absolute;
                bottom:0;
                left:45%;
                margin-left:-250px;
            }
            .text{
                width:100%;
                height:120px;
                position: absolute;
                bottom:30%;
                left:0;
            }
            h3{
                font-size:34px;
                color:#fff;
            }
            p{
                font-size:$font-size-base * 2;
                color:#fff;
            }
        }
    }
    .lv-content-star{
        width:100%;
        height:698px;
        background:#1c1c23;
        color:#fff;
        padding:100px 0;
        position: relative;
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:53px;
        }
        .star-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            z-index: 11;;
            .item{
                width:25%;
                padding:0 35px;
                transition: all 0.3s linear;
                img{
                    width:100%;
                    display:block;
                    transition: all 0.3s linear;
                }
                .intro{
                    .name{
                        font-size:$font-size-small * 2;
                        margin-right:15px;
                    }
                    .info{
                        font-size:$font-size-large;
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
            background:#D8D8D8;
        }
    }
    .lv-celebrity{
      height: 860px;
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
          font-size: $font-size-base*2;
          text-align: center;
        }
      }
    }
    .lv-channel{
        width:100%;
        height:876px;
        background:$body-background;
        padding:50px 0;
        color:#fff;
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:53px;
        }
        .channel-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            .item{
                width:33.3%;
                padding:0 48px;
                margin-bottom:50px;
                position: relative;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                will-change: transform;
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                transition: all 0.2s linear;
                // cursor: pointer;
                .item-t{
                    width:300px;
                    height:300px;
                    position: relative;
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
                        padding-top:118px;
                        .caption{
                            margin-top:58px;
                            font-size:28px;
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
        }
    }
    .lv-starteam{
        width:100%;
        height:860px;
        padding-top:90px;
        background: #0d0d11;
        color:#fff;
        .title{
            font-size:28px;
            text-align: center;
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
                width:680px;
                float:left;
                h2{
                    font-size:40px;
                    margin-bottom:25px;
                }
                p{
                    font-size:20px;
                    margin-bottom:25px;
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
                    transform: translate(230px,-300px);
                }
            }
        }
    }
}
</style>
