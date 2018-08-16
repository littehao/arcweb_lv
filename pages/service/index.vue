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
                                <h3>API放线</h3>
                                <div class="program_info">
                                    <h3>API放线</h3>
                                    <p>提供完整的 API 发布、管理、维护生命周期管理。您只需简单操作，即可快速、低成本、低风险的开放数据或服务</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbbw.png" alt="">
                                <h3>直播+ 系统包网</h3>
                                <div class="program_info">
                                    <h3>直播+ 系统包网</h3>
                                    <p>对于尚未建立自有品牌的企业或个人创业客户，可以针对不同属性及导向自由搭配各种产品，提供多种合作模式选择，数十种各式模板挑选，并加上我们领先群雄的直播系统技术及庞大美女主播群做为更有利的后援下，更提供客户您可以就直播体系中单一模式或整套模式选择。</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbyx.png" alt="">
                                <h3>直播+游戏 系统包网</h3>
                                <div class="program_info">
                                    <h3>直播+游戏 系统包网</h3>
                                    <p>对于尚未建立自有品牌的企业或个人创业客户，可以针对不同属性及导向自由搭配各种博娱游戏产品，提供多种合作模式选择，数十种各式模板挑选，自行研发多款不同类型博娱游戏及顶尖开发系统技术</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani"  swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_yxzb.png" alt="">
                                <h3>LV游戏接口+直播</h3>
                                <div class="program_info">
                                    <h3>LV游戏接口+直播</h3>
                                    <p>拥有领先业界的直播系统技术及专业整合API串接技术下，客户您可以直接透过我们自行研发的多款博娱游戏，轻轻松松地串接至您所拥有的直播系统，并可以依据您对博娱游戏的需求做出客制化选择，毋须担心嵌入您的现有直播系统之中会出现重大错误或阻碍。</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_jkyx.png" alt="">
                                <h3>LV直播系统接口+游戏</h3>
                                <div class="program_info">
                                    <h3>LV直播系统接口+游戏</h3>
                                    <p>拥有领先业界的直播系统技术及专业整合API串接技术下，众多博彩品牌的厂商或客户可以直接透过我们自行研发直播系统及既有已签约的庞大美女主播群，轻轻松松地串接至您所拥有的博彩游戏。</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="item ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                            <div class="program">
                                <img src="~assets/images/service/fwzc_icon_zbjj.png" alt="">
                                <h3>直播服务+解决方案</h3>
                                <div class="program_info">
                                    <h3>直播服务+解决方案</h3>
                                    <p>领先业界的直播系统技术及既有已签约的庞大美女主播群下，并且斥资重金打造质感摄影棚，提供专业灯光系统、镜头架设、音响设备及背景空间配置等规划。运用成熟直播及影音串流技术，省时、省容量且支援跨系统装置，高分辨率影音视频实时传播全球市场。</p>
                                    <div class="time">
                                        <span></span>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Container>
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
        methods:{
            controldown(){
               
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
        height:auto;
        background:url(~assets/images/service/fwzc_bj_2.png) no-repeat;
        background-size:cover;
        padding-top:103px;
        h3{
            font-size:40px;
            color:#fff;
            text-align: center;
            font-weight:400;
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
                .program_info{
                    position:absolute;
                    top:-5%;left:-5%;z-index:1;
                    width:110%;height:0;
                    opacity:0;
                    overflow:hidden;
                    background:rgb(109, 109, 108);
                    color:#fff;
                    text-align:center;
                    transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    -webkit-transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    -moz-transition:all .6s cubic-bezier(.215, .61, .355, 1) 0s;
                    h3{
                        font-size:20px;
                        margin-bottom: 15px;
                    }
                }
                .program_info p{padding:0 15px;font-size:16px;line-height:25px;overflow:hidden;}
                .program_info .time{width:100%;height:auto;background: #f7f7f7;text-align:left;}
                .program_info .time span{display:block;color:#13DF81;}
                .program_info .time i{font-size:14px;color:#13DF81;line-height:20px;font-style: normal;}
                .program:hover .program_info{height:110%;opacity: 1;}
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
