<template>
    <div class="lv-about-timeline">
        <Container>
            <div class="time ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0s"><span class="year">2018</span><span class="month">.04</span></div>
            <div class="rightext">
                <div class="text1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">我们的故事</div>
                <div class="text2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">面向未来</div>
                <div class="text3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">在欧洲成立马耳他分公司开拓欧洲市场</div>
            </div>
        </Container>
        <div class="timeline">
            <ul class="timeline-list">
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">
                    <span class="mintime">2009.8</span>
                    <p class="linetext">创立于菲律宾马尼拉</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">
                    <span class="mintime">2011.5</span>
                    <p class="linetext">推出第一代PHP彩票1.0系统</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">
                    <span class="mintime">2012.7</span>
                    <p class="linetext">推行出创新的数字彩票1.0系统</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                    <span class="mintime">2013.8</span>
                    <p class="linetext">发布第二代PHP彩票2.0版</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.4s">
                    <span class="mintime">2014.3</span>
                    <p class="linetext">发行专门彩票平台包网服务</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                    <span class="mintime">2015.9</span>
                    <p class="linetext">在英国马恩岛成立新事业部并开始申请多个国家的博彩牌照</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.6s">
                    <span class="mintime">2016.6</span>
                    <p class="linetext">延揽顶尖直播互动系统团队钻研直播视讯领域</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.7s">
                    <span class="mintime">2017.4</span>
                    <p class="linetext">直播相关设备及场所建置包含摄影棚及直播间</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.8s">
                    <span class="mintime">2017.8</span>
                    <p class="linetext">在美国硅谷成立技术服务中心</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.9s">
                    <span class="mintime">2017.12</span>
                    <p class="linetext">在纽西兰成立技术服务中心</p>
                    <i class="round"></i>
                    <i class="line"></i>
                </li>
                <li class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="1s">
                    <span class="mintime">2018.4</span>
                    <div class="round-first">
                        <span class="round-two"><i class="round"></i></span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- <div id='timeline-20227' class=" timeline-block" data-display="hide">
            <div id='timeline-embed-20227' data-display="hide" style="width: 100%; height:100%">
            </div>
        </div> -->
    </div>
</template>

<script>
// import '../../plugins/timeline-js2.css'
export default {
    head() {
        return {
            meta: [
                { hid: 'description', name: 'description', content: '你好' }
            ],
            script:[
                // {src:'http://goodgaming.com/Public/js/timeline-js.js?v=1.01.0153',type:'text/javascript'}
            ]
        }
    },
    mounted(){
        // this.timeline();
    },
    methods:{
        timeline(){
            var url = 'http://goodgaming.com/Public/TP02';
            function hideshow() {
                var width = $(document).width();
                if (width <= 992) {
                    $('#timeline-20227').hide();
                } else {
                    $('#timeline-20227').show();

                    var timeline_json = {
                        "events": [{
                            "start_date": {
                                "year": "2008",
                                "month": "08",
                            },
                            "text": {
                                "headline": "创立于菲律宾马尼拉",
                                "text": "创立于菲律宾马尼拉"
                            },
                        }, {
                            "start_date": {
                                "year": "2011",
                                "month": "05",
                            },
                            "text": {
                                "headline": "推出第一代PHP彩票1.0系统",
                                "text": "First Php lottery system v.10 released to the market"
                            },
                        }, {
                            "start_date": {
                                "year": "2012",
                                "month": "07",
                            },
                            "text": {
                                "headline": "推行出创新的数字彩票1.0系统",
                                "text": "Lottery gaming v2.0 released and got the highly market reputation."
                            },
                        }, {
                            "start_date": {
                                "year": "2013",
                                "month": "08",
                            },
                            "text": {
                                "headline": "发布第二代PHP彩票2.0版",
                                "text": "Second php lottery system with latest architecture design released and solved the bottleneck of high concurrency and tamper resistance."
                            },
                        }, {
                            "start_date": {
                                "year": "2014",
                                "month": "03",
                            },
                            "text": {
                                "headline": "发行专门彩票平台包网服务",
                                "text": "Lottery X plan started and tookover 8 plus lottery gaming technology corporation; meanwhile, 8 lottery gaming projects started, including php, java, c# with various language options. We devoted to developing the lottery gaming architecture design and providing the optimized solutions for lottery industry."
                            },
                        }, {
                            "start_date": {
                                "year": "2015",
                                "month": "09",
                            },
                            "text": {
                                "headline": "在英国马恩岛成立新事业部并开始申请多个国家的博彩牌照",
                                "text": "Lottery IT service released. The first professional lottery IT service supplier."
                            },
                        }, {
                            "start_date": {
                                "year": "2016",
                                "month": "06",
                            },
                            "text": {
                                "headline": "延揽顶尖直播互动系统团队钻研直播视讯领域",
                                "text": "Malaysia. Developing the latest architecture design for java system and integrated vairous global leading technology."
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "04",
                            },
                            "text": {
                                "headline": "直播相关设备及场所建置包含摄影棚及直播间",
                                "text": "GOODGAMING established in Taipei, Tawan and set up the overseas department."
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "08",
                            },
                            "text": {
                                "headline": "在美国硅谷成立技术服务中心",
                                "text": "Poker gaming department established in Japan and broke into poker market."
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "12",
                            },
                            "text": {
                                "headline": "在纽西兰成立技术服务中心",
                                "text": "Slots depatment established in Taipei, Taiwan and expended the related business."
                            },
                        }, {
                            "start_date": {
                                "year": "2018",
                                "month": "04",
                            },
                            "text": {
                                "headline": "在欧洲成立马耳他分公司开拓欧洲市场",
                                "text": "International finance and global strategy departments established in Isle of Man, UK and started to apply lottery licenses in various countries"
                            },
                        }]
                    };
                    if (Object.keys(timeline_json).length !== 0 && timeline_json.constructor === Object) {
                        window.timeline = new TL.Timeline('timeline-embed-20227', timeline_json);
                    }
                }
            }
            hideshow();
            $(window).resize(hideshow);
        }
    }
}
</script>

<style lang="scss">
.lv-about-timeline{
    width:100%;
    height:100%;
    .timeline-block{
        width:100%;
        height:100%;
    }
    .tl-timeline{
        background: transparent;
    }
    .tl-slider-background{
        background:transparent !important;
    }
    .tl-timenav{
        background:transparent;
        border-color:#4e4e4e;
        .tl-timemarker-content-container{
            background:transparent;
            box-shadow: none;
            border-color:#828282;
        }
        .tl-timemarker.tl-timemarker-active .tl-timemarker-content-container{
            color:#fff;
            border-color:rgba(255, 233, 91, 0.61);
        }
    }
    .tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{
        font-size:14px;
        line-height:16px;
    }
    .tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{
        color:#ffe95b;
    }
    .tl-timemarker.tl-timemarker-active .tl-timemarker-line-left, .tl-timemarker.tl-timemarker-active .tl-timemarker-line-right{
        border-color:rgba(255, 232, 92, 0.61);
    }
    .tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container{
        display:none;
    }
    .tl-timemarker .tl-timemarker-line-left, .tl-timemarker .tl-timemarker-line-right{
        box-shadow: none;
        border-color:#828282;
    }
    
}
</style>


