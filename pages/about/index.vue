<template>
    <div class="lv-about swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide lv-about-banner">
                <div class="lv-about-intro">
                    <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">关于LIVE VIDEO</h3>
                    <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">LIVE VIDEO是全球领先的一站式娱乐游戏直播系统供应服务商，我们定义直播+娱乐游戏+内容媒体，深度探索粉丝经济的运用，并于2018年5月份率先推出全球首个娱乐游戏直播系统，同时启动API接入服务。</div>
                    <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">LIVE VIDEO拥有棋牌竞技，街机电玩，老虎机，数字彩票，抓抓乐，推推乐，体育游戏，电竞游戏等品类的游戏，自主研发数十款游戏，致力于打造全球娱乐游戏直播领域标杆，LV在不断钻研其视频直播技术的同时，不断的研发多品类的受大众追捧的热门游戏，并将最优质的互动游戏内容提供给广告用户。</div>
                </div>
            </div>
            <div class="swiper-slide lv-introduction">
                <Container>
                    <div class="lv-introduction-content">
                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">背景介绍</h3>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">LIVE VIDEO于2014年成立于美国硅谷，团队前身为传统PC直播的技术服务商，团队90%由视频直播领域的技术专家组成，我们不断钻研和攻克视频直播核心技术，并率先在移动直播和H5直播领域取得领先突破，并成功搭建了上百个直播平台，取得骄人成绩。为了有效增强平台竞争力，为客户抢占市场，LIVE VIDEO于2016年在台北成立了分公司，加强在直播+电商，直播+游戏，直播+VR，私密直播等多领域的尝试探索，并于2016年底率先推出游戏直播间并运用于市场。</div>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">LIVE VIDEO深度探索娱乐游戏行业，经过两年的努力，成功突破多个行业壁垒实现跨界融合，并于2017年成功上线首个娱乐游戏直播系统，系统拥有十余款游戏，并投放于市场，取得一致好评。为迎合市场发展，公司决定于2018年4月份推出LV品牌直播游戏系统，为广大客户提供API接入，系统包网，技术解决方案等服务。</div>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">未来已来，风口已至。我们定义娱乐游戏直播行业新时代，同时我们将坚持创新，不断创造,专注，专业，专一的打造出更好的产品回馈给客户。</div>

                    </div>
                    <img class="about1 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="~assets/images/about/about1.png" alt="">
                    <img class="about2 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="~assets/images/about/about2.png" alt="">
                    <img class="about3 ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" src="~assets/images/about/about3.png" alt="">
                </Container>
            </div>
            <div class="swiper-slide lv-livevideo">
                <timeline></timeline>
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
    import timeline from '~/components/about/timeline'
    import { mapGetters } from 'vuex'
    export default {
        layout (context) {
            return context.userAgent;
        },
        data(){
            return {
                style:{
                    height:0,
                }
            }
        },
        components:{
            timeline
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

            var swiper = new Swiper('.lv-about.swiper-container', {
                direction: 'vertical',
                mousewheel: true,
                simulateTouch : false,
                slidesPerView: 'auto',
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
.lv-about{
    width:100%;
    height:100%;
    .lv-about-banner{
        width:100%;
        height:100%;
        background:url(~assets/images/about/gywm_bj_1.png) no-repeat;
        background-size:cover;
        position: relative;
        .lv-about-intro{
            position: absolute;
            top:50%;
            right:0;
            margin-top:-225px;
            width:1050px;
            height:450px;
            background:rgba(0,0,0,0.5);
            color:#fff;
            padding:58px 58px 0 58px;
            h3{
                font-size:36px;
                margin-bottom:15px;
            }
            .text{
                font-size:20px;
                margin-bottom:20px;
                line-height:30px;
            }
        }
    }
    .lv-introduction{
        width:100%;
        height:100%;
        background:url(~assets/images/about/gywm_bj_2.png) no-repeat center;
        background-size:cover;
        position: relative;
        .lv-introduction-content{
            width:680px;
            float:right;
            color:#fff;
            padding-top:85px;
            h3{
                text-align:right;
                font-size:30px;
                margin-bottom:15px;
                margin-top:10%;
            }
            .text{
                font-size:16px;
                line-height: 30px;
                text-indent: 35px;
            }
        }
        .about1{
            width:28%;
            position: absolute;
            bottom:35%;
            left:0;
        }
        .about2{
            width:22%;
            position: absolute;
            bottom:10%;
            left:25%;
        }
        .about3{
            width: 20%;
            position: absolute;
            bottom:10%;
            right:10%;
        }
        @media screen and (max-width:1440px) {
            .lv-introduction-content{
                h3{
                    margin-top:20px;
                    font-size:20px;
                }
                .text{
                    font-size:14px;
                }
            }
            .about1{
                width:20%;
                bottom:35%;
                left:15%;
            }
            .about2{
                width:18%;
                left:30%;
                bottom:4%;
            }
            .about3{
                width: 16%;
                bottom:2%;
                right:20%;
            }
        }
        @media screen and (max-width:1366px) {
            .lv-introduction-content{
                h3{
                    margin-top:20px;
                    font-size:18px;
                }
                .text{
                    font-size:12px;
                }
            }
        }
    }
    .lv-livevideo{
        width:100%;
        height:100%;
        background:url(~assets/images/about/about4.png) no-repeat center 103px #1c1c23;
        color:#fff;
        position: relative;
        .time{
            position: absolute;
            top:20%;
            left:0;
            .year{
                font-size:150px;
            }
            .month{
                font-size:100px;
            }
        }
        .rightext{
            width:374px;
            position: absolute;
            top:20%;
            right:0;
            .text1{
                font-size:34px;
            }
            .text2{
                font-size:50px;
                font-weight:800;
                position: relative;
                margin-bottom:40%;
            }
            .text2:after{
                display:block;
                content:"";
                width:100px;
                height:5px;
                background:#fff;
                position:absolute;
                bottom:0;
            }
            .text3{
                font-size:34px;
            }
        }
        .timeline{
            position: absolute;
            bottom:130px;
            left:0;
            width:100%;
            height:5px;
            background:rgba(255,233,92,0.5);
            .timeline-list{
                display:flex;
            }
            li{
                position: relative;
                height:176px;
                width:20px;
                margin-left:6%;
                .mintime{
                    position: absolute;
                    top:-40px;
                    left:-10px;
                    font-size:16px;
                }
                .linetext{
                    width:196px;
                    position: absolute;
                    top:40px;
                    left:-96px;
                    font-size:14px;
                    text-align: center;
                }
                .round{
                    position: absolute;
                    top:-7px;
                    left:0;
                    display:block;
                    width:20px;
                    height:20px;
                    border-radius: 50%;
                    background:rgba(255,233,92,0.5)
                }
                .line{
                    display:block;
                    width:2px;
                    height:30px;
                    background:rgba(255,233,92,0.5);
                    position: absolute;
                    top:10px;
                    left:8px;
                }
            }
            li:nth-child(2n){
                .line{
                    height:70px;
                }
                .linetext{
                    top:80px;
                    text-align: center;
                }
            }
            li:nth-child(3){margin-left:7%;}
            li:nth-child(5){margin-left:8%;}
            li:nth-child(7){margin-left:9%;}
            li:nth-child(8){margin-left:10%;}
            li:nth-child(10){margin-left:11%;}
            li:nth-child(11){
                margin-left:4.5%;
                .mintime{
                    top:-60px;
                    font-size:20px;
                    font-weight:600;
                }
                .round-first{
                    background:rgba(255,233,92,0.1);
                    border-radius:50%;
                    width:50px;
                    height:50px;
                    position: absolute;
                    top:-23px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .round-two{
                    border:2px solid rgba(255,233,92,0.3);
                    border-radius:50%;
                    width:30px;
                    height:30px;
                    display:block;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .round{
                    position: relative;
                    top:0;
                    left:0;
                }
            }

        }
    }
}
@media screen and (max-width:1200px) {
    .lv-about .lv-livevideo .timeline li .linetext,.lv-about .lv-livevideo .timeline li .mintime{
        font-size:12px;
    }
}
</style>
