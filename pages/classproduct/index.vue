<template>
    <div class="lv-classproduct" id="lv-classproduct">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide lv-classproduct-content1">
                    <div class="lv-classproduct-banner" :class="{enbg:$i18n.locale == 'en'}">
                        <div class="productbtn"><a target="_blank" href="https://api.katoong.com/test/merchant_login_test.php?demo=1" :class="{enbg:$i18n.locale == 'en'}"></a></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2 bg2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>01</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[0].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>
                                              {{$t('classproduct.content[0].text')}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bottom ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.2s">
                                        <div class="item"><img src="~assets/images/classproduct/tx_1_1.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_1_2.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_1_3.png" alt=""></div>
                                    </div>
                                </div>
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInRight"  swiper-animate-delay="0.1s">
                                    <img src="~assets/images/classproduct/yxfl_1.png" alt="">
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInLeft"  swiper-animate-delay="0.1s">
                                    <img src="~assets/images/classproduct/yxfl_2.png" alt="">
                                </div>
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>02</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[1].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>
                                              {{$t('classproduct.content[1].text')}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bottom ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.2s">
                                        <div class="item"><img src="~assets/images/classproduct/tx_2_1.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_2_2.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_2_3.png" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <div class="classproduct-part1-bg1"></div>
                        <div class="classproduct-part1-bg2"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>03</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[2].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>
                                              {{$t('classproduct.content[2].text')}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="bottom ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.2s">
                                        <div class="item"><img src="~assets/images/classproduct/tx_3_1.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_3_2.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_3_3.png" alt=""></div>
                                    </div>
                                </div>
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInRight"  swiper-animate-delay="0.1s">
                                    <img src="~assets/images/classproduct/yxfl_3.png" alt="">
                                </div>
                            </div>
                        </Container>
                        <div class="bgimg"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInLeft"  swiper-animate-delay="0.1s">
                                    <img src="~assets/images/classproduct/yxfl_4.png" alt="">
                                </div>
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>04</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[3].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>{{$t('classproduct.content[3].text')}}</p>
                                        </div>
                                    </div>
                                    <div class="bottom ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.2s">
                                        <div class="item"><img src="~assets/images/classproduct/tx_4_1.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_4_2.png" alt=""></div>
                                        <div class="item"><img src="~assets/images/classproduct/tx_4_3.png" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <div class="bgimg2"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>05</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[4].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>
                                              {{$t('classproduct.content[4].text')}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInRight"  swiper-animate-delay="0.1s">
                                    <img style="width:80%;" src="~assets/images/classproduct/yxfl_5.png" alt="">
                                </div>
                            </div>
                        </Container>
                        <div class="bgimg3"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                    <div class="classproduct-part2">
                        <Container>
                            <div class="part">
                                <div class="classproduct-right ani" swiper-animate-effect="fadeInLeft"  swiper-animate-delay="0.1s">
                                    <img src="~assets/images/classproduct/yxfl_6.png" alt="">
                                </div>
                                <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                    <div class="top">
                                        <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                            <span>06</span>
                                            <div>
                                                <h3>{{$t('classproduct.content[5].title')}}</h3>
                                                <p>Live Video</p>
                                            </div>
                                        </div>
                                        <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                            <p>
                                              {{$t('classproduct.content[5].text')}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <div class="bgimg2"></div>
                    </div>
                </div>
                <div class="swiper-slide lv-classproduct-content2">
                        <div class="classproduct-part2">
                            <Container>
                                <div class="part">
                                    <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                        <div class="top">
                                            <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                                <span>07</span>
                                                <div>
                                                    <h3>{{$t('classproduct.content[6].title')}}</h3>
                                                    <p>Live Video</p>
                                                </div>
                                            </div>
                                            <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                                <p>
                                                   {{$t('classproduct.content[6].text')}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="classproduct-right ani" swiper-animate-effect="fadeInRight"  swiper-animate-delay="0.1s">
                                        <img src="~assets/images/classproduct/yxfl_7.png" alt="">
                                    </div>
                                </div>
                            </Container>
                            <div class="bgimg"></div>
                        </div>
                    </div>
                    <div class="swiper-slide lv-classproduct-content2">
                        <div class="classproduct-part2">
                            <Container>
                                <div class="part">
                                    <div class="classproduct-right ani" swiper-animate-effect="fadeInLeft"  swiper-animate-delay="0.1s">
                                        <img src="~assets/images/classproduct/yxfl_8.png" alt="">
                                    </div>
                                    <div class="classproduct-left ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                        <div class="top">
                                            <div class="title ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0s">
                                                <span>08</span>
                                                <div>
                                                    <h3>{{$t('classproduct.content[7].title')}}</h3>
                                                    <p>Live Video</p>
                                                </div>
                                            </div>
                                            <div class="info ani" swiper-animate-effect="fadeInUp"  swiper-animate-delay="0.1s">
                                                <p>
                                                    {{$t('classproduct.content[7].text')}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="tiyubg ani" swiper-animate-effect="fadeIn"  swiper-animate-delay="1s"></div> -->
                                </div>
                            </Container>
                            <div class="bgimg2"></div>
                        </div>
                    </div>
                    <div class="swiper-slide"  style="height:98px">
                        <div class="homefooter">
                            <footerlink></footerlink>
                        </div>
                    </div>
            </div>
        </div>

            <!-- <div class="shape1"></div>
            <div class="shape2"></div> -->

    </div>
</template>

<script>
// import $ from 'jquery'
import { mapGetters } from 'vuex'
export default {
    layout (context) {
        return context.userAgent;
    },
    data(){
        return {
            style:{
                height:0,
            },
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

        var swiper = new Swiper('#lv-classproduct .swiper-container', {
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
    methods:{

    }
}
</script>

<style lang="scss">
.lv-classproduct{
    width: 100%;
    height:100%;
    min-width:1200px;
    .swiper-container{
        width:100%;
        height:100%;
    }
    .lv-classproduct-content1{
        width:100%;
        background:url(~assets/images/classproduct/bg.png) no-repeat center top #1C1C23;
        background-size:cover;
        .lv-classproduct-banner{
            width:100%;
            height:100%;
            background:url(~assets/images/classproduct/productbg.png) no-repeat center 100px;
            background-size:100%;
            position: relative;
            .productbtn{
                position: absolute;
                bottom: 50px;
                left:0;
                width:100%;
                text-align: center;
                a{
                    width:186px;
                    height:70px;
                    margin:0 auto;
                    display: block;
                    background:url(~assets/images/classproduct/productbtn.png) no-repeat center;
                    background-size:100%;
                }
                a.enbg{
                    background:url(~assets/images/classproduct/productbtn_en.png) no-repeat center;
                    background-size:100%;
                }
            }
        }
        .lv-classproduct-banner.enbg{
            background:url(~assets/images/classproduct/productbg_en.png) no-repeat center 100px;
            background-size:100%;
        }
        .part{
            padding-top:320px;
        }
    }
    .lv-classproduct-content2{
        background-color:#1C1C23;
        position: relative;
        z-index: 1;
        .classproduct-part1{
            background-position:-100px top;
            background-size:100%;
            padding-top:100px;
            position: relative;
            z-index: 10;
            .classproduct-part1-bg1{
                width:100%;
                height:100%;
                background:url(~assets/images/classproduct/yxfl_ys_3.png) no-repeat;
                background-size:cover;
                position: absolute;
                top:0;
                left:0;
            }
            .classproduct-part1-bg2{
                width:100%;
                height:100%;
                background:url(~assets/images/classproduct/homebgop.png) no-repeat;
                background-size:cover;
                position: absolute;
                top:0;
                left:0;
            }
        }
        .classproduct-part2{
            position: relative;
            z-index: 10;
            height:100%;
            .bgimg{
                width:100%;
                height:100%;
                position: absolute;
                top:0;
                left:0;
                background:url(~assets/images/classproduct/shape1.png) no-repeat left center;
            }
            .bgimg2{
                width:100%;
                height:100%;
                position: absolute;
                top:0;
                left:0;
                background:url(~assets/images/classproduct/shape2.png) no-repeat right center;
            }
            .bgimg3{
                width:100%;
                height:100%;
                position: absolute;
                top:0;
                left:-30%;
                background:url(~assets/images/classproduct/BG_2.png) no-repeat left center;
                background-size:70%;
            }
            .classproduct-part1-bg1{
                width:100%;
                height:100%;
                background:url(~assets/images/classproduct/yxfl_ys_3.png) no-repeat;
                background-size:cover;
                position: absolute;
                top:0;
                left:0;
            }
            .classproduct-part1-bg2{
                width:100%;
                height:100%;
                background:url(~assets/images/classproduct/homebgop.png) no-repeat;
                background-size:cover;
                position: absolute;
                top:0;
                left:0;
            }
        }
        .bg2{
            background:url(~assets/images/classproduct/bg2.png) no-repeat top;
            background-size:cover
        }
        .shape1{
            position: absolute;
            top:550px;
            left:0;
            background:url(~assets/images/classproduct/shape1.png) no-repeat;
            width:733px;
            height:1500px;
        }
        .shape2{
            position: absolute;
            top:1600px;
            right:0;
            background:url(~assets/images/classproduct/shape2.png) no-repeat;
            width:758px;
            height:1547px;
        }
    }
    .part{
        display: flex;
        align-items: center;
        height:100%;
        position: relative;
        .classproduct-left{
            width:487px;
            color:#fff;
        }
        .classproduct-right{
            width:683px;
            color:#fff;
            text-align: right;
            img{
                width:100%;;
            }
        }
        .tiyubg{
            width:100%;
            height:540px;
            position: absolute;
            top:50%;
            left:0;
            margin-top:-290px;
            background:url(~~assets/images/classproduct/dianjingbg.png) no-repeat;
            background-size:80% 100%;
            background-position: right top;
            z-index:-1;
        }
        // @media screen and (min-width:1680px) and (max-width:1910px) {
        //     .tiyubg{
        //         background-size:80% 60%;
        //     }
        // }
        // @media screen and (min-width:1440px) and (max-width:1679px) {
        //     .tiyubg{
        //         background-size:80% 70%;
        //     }
        // }
        // @media screen and (max-width:1439px) {
        //     .tiyubg{
        //         background-size:80% 80%;
        //     }
        // }
    }
    .top{
        margin-bottom:30px;
        border-left:1px dashed #fff;
    }
    .title{
        display: flex;
        align-items: center;
        margin-bottom:21px;
        height:72px;
        span{
            font-size:90px;
            font-weight:400;
            position: relative;
            height:72px;
            display: flex;
            padding-left:10px;
            line-height:68px;
        }
        span:before{
            display:block;
            content:"";
            width:5px;
            height:100%;
            background:#fff;
            position: absolute;
            top:0px;
            left:-1px;
        }
        h3{
            font-size:30px;
            margin-bottom:10px;
        }
        p{
            font-size:28px;
        }
    }
    .info{
        font-size:16px;
        line-height:35px;
        padding-left:10px;
        padding-bottom:10px;
    }
    .bottom{
        display: flex;
        align-items: center;
        .item{
            margin-right: 65px;
        }
    }
}
</style>
