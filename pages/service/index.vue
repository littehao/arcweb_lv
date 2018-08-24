<template>
    <div class="lv-service swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide lv-service-banner">
                <Container>
                    <div class="lv-service-content">
                        <div>
                            <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">LIVE VIDEO</h3>
                            <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">引流新潮流，缔造新时代</p>
                        </div>
                    </div>
                    <div class="control-down" @click="controldown">
                        <div class="down-page">
                            <i class="icon-darr"></i>
                        </div>
                    </div>
                </Container>
            </div>
            <div class="swiper-slide lv-service-list">
                <Container>
                    <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">我们的服务支持</h3>
                    <ul class="lv-service-ul">
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_api.png" alt="">
                                <h3>LV品牌API接入</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>LV品牌API接入</h3>
                                        <p>为平台和商户提供完整的或独立的LV直播游戏系统API接入，完美支持PC端,手机H5，原生SDK接入。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbbw.png" alt="">
                                <h3>视频直播系统包网</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>视频直播系统包网</h3>
                                        <p>为品牌客户提供健全的直播系统包网方案，为客户提供直播+媒体，教育，电竞，体育，社交娱乐，电商等直播包网服务。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbyx.png" alt="">
                                <h3>直播+游戏系统包网</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>直播+游戏系统包网</h3>
                                        <p>为品牌客户提供功能齐全的直播+游戏系统，上百款精品游戏任您挑选，并提供线上系统一条龙服务。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani"  swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_yxzb.png" alt="">
                                <h3>“直播+” 娱乐游戏服务</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>“直播+” 娱乐游戏服务</h3>
                                        <p>为线上游戏供应商提供直播+基础服务，详情请联系。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_jkyx.png" alt="">
                                <h3>“游戏+”视频直播服务</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>“游戏+”视频直播服务</h3>
                                        <p>为线上直播平台提供全渠道游戏+服务，详情请联系。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbjj.png" alt="">
                                <h3>直播+技术解决方案</h3>
                                <div class="program_info">
                                    <div>
                                        <h3>直播+技术解决方案</h3>
                                        <p>为广大客户提供视频直播云服务，详情请联系。</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Container>
            </div>
            <div class="swiper-slide"  style="height:98px">
                <div class="homefooter">
                    <footerlink></footerlink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "service",
        data(){
            return {
                style:{
                    height:0,
                }
            }
        },
        computed:{
            ...mapGetters([
                'getAgent'
            ])
        },
        mounted(){
            if(this.getAgent == 'mobile'){
                window.location.href = '/'
            }
            var swiper = new Swiper('.lv-service.swiper-container', {
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
            this.swiper=swiper;
        },
        methods:{
            controldown(){
              this.swiper.slideNext();
            }
        }
    }
</script>

<style lang="scss">
.lv-service{
    width:100%;
    height:100%;
    .lv-service-banner{
        width:100%;
        height:100%;
        background:url(~assets/images/service/fwzc_bj_1.png) no-repeat right center;
        background-size:cover;
        position: relative;
        .lv-service-content{
            width:70%;
            height:100%;
            display:flex;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            letter-spacing: 5px;
            h3{
                font-size:48px;
                color:#fff;
                padding:15px 0;
                width:100%;
            }
            p{
                font-size:34px;
                color:#fff;
                width:100%;
            }
        }
        .control-down{
            width: 51px;
            height: 57px;
            position: absolute;
            top: 89%;
            left: 50%;
            z-index: 999;
            margin: 0 0 0 -25px;
            cursor: pointer;
            text-align: center;
            .down-page {
                width: 51px;
                height: 57px;
                background-position: 0 -83px;
                animation: wave 1.5s both infinite;
                transition: all 1s;
                .icon-darr {
                    margin: 20px 0 0;
                    width: 29px;
                    height: 17px;
                    background-image: url(~assets/images/home/down.png);
                    background-repeat: no-repeat;
                    background-position:center;
                    background-size:100%;
                    display: inline-block
                }

            }
        }
    }
    .lv-service-list{
        width:100%;
        height:100%;
        background:url(~assets/images/service/fwzc_bj_2.png) no-repeat;
        background-size:cover;
        padding-top:103px;
        h3{
            font-size:40px;
            color:#fff;
            text-align: center;
            font-weight:400;
        }
        @media screen and (max-width:1680px) {
            h3{
                font-size:24px;
            }
        }
        .lv-service-ul{
            display:flex;
            flex-wrap: wrap;
            margin-top:55px;
            .item{
                width:33.3%;
                margin-bottom:100px;
                color:#fff;
                cursor: pointer;
                padding:0 20px;
                h3{padding-top:30px;text-align:center;font-size:30px;}
                .program{
                    position:relative;height:270px;padding:55px 0;border:1px solid rgba(255, 255, 255, 0.37);border-radius:5px;
                    img{
                        display: block;
                        margin:0 auto;
                    }
                }
                @media screen and (max-width:1680px) {
                    h3{
                        font-size:20px;
                    }
                    .program{
                        width:80%;
                        height:200px;
                        margin:0 auto;
                    }
                }
                @media screen and (max-width:1366px) {
                    h3{
                        font-size:20px;
                    }
                    .program{
                        height:180px;
                        padding:30px 0;
                        img{
                            width:50px;
                        }
                    }
                }
                .program_info{
                    position:absolute;
                    top:-5%;left:-5%;z-index:1;
                    width:110%;
                    height:0;
                    opacity:0;
                    overflow:hidden;
                    // background:rgb(109, 109, 108);
                    background: #e7bc56;
                    background: -webkit-linear-gradient(#e7bc56, #e77226);
                    background: -o-linear-gradient(#e7bc56, #e77226);
                    background: -moz-linear-gradient(#e7bc56, #e77226); 
                    background: linear-gradient(#e7bc56, #e77226);
                    color:#fff;
                    text-align:center;
                    transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    -webkit-transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    -moz-transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    display:flex;
                    align-items: center;
                    flex-wrap: wrap;
                    h3{
                        font-size:20px;
                        margin-bottom: 15px;
                        width:100%;
                        padding-top:0;
                    }
                }
                .program_info p{padding:0 50px;font-size:16px;line-height:25px;overflow:hidden;text-align:left;}
                .program_info .time{width:100%;height:auto;background: #f7f7f7;text-align:left;}
                .program_info .time span{display:block;color:#13DF81;}
                .program_info .time i{font-size:14px;color:#13DF81;line-height:20px;font-style: normal;}
                .program:hover .program_info{height:110%;opacity: 1;}
            }
            @media screen and (max-width:1366px) {
                .item{
                    margin-bottom:50px;
                }
            }
        }
        @media screen and (max-width:1366px) {
            .lv-service-ul{
                margin-top:30px;
            }
        }
        
    }
    
}
@keyframes wave {
    0%,100% {
        transform: translate3d(0,0,0)
    }

    50% {
        transform: translate3d(0,15px,0)
    }
}

</style>
