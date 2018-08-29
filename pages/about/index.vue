<template>
    <div class="lv-about swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide lv-about-banner">
                <div class="lv-about-intro">
                    <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">{{$t('about.banner.title')}}</h3>
                    <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('about.banner.info1')}}</div>
                    <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">{{$t('about.banner.info2')}}</div>
                </div>
            </div>
            <div class="swiper-slide lv-introduction">
                <Container>
                    <div class="lv-introduction-content">
                        <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">{{$t('about.bgintro.title')}}</h3>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">{{$t('about.bgintro.info1')}}</div>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">{{$t('about.bgintro.info2')}}</div>
                        <div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{$t('about.bgintro.info3')}}</div>

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
