<template>
    <div class="lv-about-timeline">
        <!-- <Container>
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
        </div> -->
        <Container class="timeTile">
        <div class="rightext">
            <div class="text1">我们的故事</div>
            <div class="text2">面向未来</div>
        </div>
        </Container>
        <div id='timeline-20227' class=" timeline-block" data-display="hide">
            <div id='timeline-embed-20227' data-display="hide" style="width: 100%; height:100%">
            </div>
        </div>
    </div>
</template>

<script>
import '../../plugins/css/fontello.css'
import '../../plugins/css/webabout.css'
import '../../plugins/css/timeline-js2.css'
export default {
    // head() {
    //     return {
    //         script:[
    //             {src:'https://cdn.katoong.com/app/timeline-js2.js',type:'text/javascript'}
    //         ]
    //     }
    // },
    mounted(){
        if($("#timeline").length == 0){
            var theHead = document.getElementsByTagName('head').item(0);
            //创建脚本的dom对象实例
            var myScript = document.createElement('script');
            myScript.src = 'https://cdn.katoong.com/app/timeline-js2.js';      
            myScript.id = "timeline";    //指定脚本路径
            myScript.type = 'text/javascript';  //指定脚本类型
            myScript.defer = true;              //程序下载完后再解析和执行
            theHead.appendChild(myScript); 
        }
        if($("#timeline").length > 0){
            setTimeout(() => {
                this.timeline();
            },500)
        }
    },
    methods:{
        timeline(){
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
                                "day":'01'
                            },
                            "text": {
                                "headline": "创立于菲律宾马尼拉",
                                "text": "2008"
                            },
                        }, {
                            "start_date": {
                                "year": "2011",
                                "month": "05",
                            },
                            "text": {
                                "headline": "推出第一代PHP彩票1.0系统",
                                "text": "2011"
                            },
                        }, {
                            "start_date": {
                                "year": "2012",
                                "month": "07",
                            },
                            "text": {
                                "headline": "推行出创新的数字彩票1.0系统",
                                "text": "2012"
                            },
                        }, {
                            "start_date": {
                                "year": "2013",
                                "month": "08",
                            },
                            "text": {
                                "headline": "发布第二代PHP彩票2.0版",
                                "text": "2013"
                            },
                        }, {
                            "start_date": {
                                "year": "2014",
                                "month": "03",
                            },
                            "text": {
                                "headline": "发行专门彩票平台包网服务",
                                "text": "2014"
                            },
                        }, {
                            "start_date": {
                                "year": "2015",
                                "month": "09",
                            },
                            "text": {
                                "headline": "在英国马恩岛成立新事业部并开始申请多个国家的博彩牌照",
                                "text": "2015"
                            },
                        }, {
                            "start_date": {
                                "year": "2016",
                                "month": "06",
                            },
                            "text": {
                                "headline": "延揽顶尖直播互动系统团队钻研直播视讯领域",
                                "text": "2016"
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "04",
                            },
                            "text": {
                                "headline": "直播相关设备及场所建置包含摄影棚及直播间",
                                "text": "2017"
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "08",
                            },
                            "text": {
                                "headline": "在美国硅谷成立技术服务中心",
                                "text": "2017"
                            },
                        }, {
                            "start_date": {
                                "year": "2017",
                                "month": "12",
                            },
                            "text": {
                                "headline": "在纽西兰成立技术服务中心",
                                "text": "2017"
                            },
                        }, {
                            "start_date": {
                                "year": "2018",
                                "month": "04",
                            },
                            "text": {
                                "headline": "在欧洲成立马耳他分公司开拓欧洲市场",
                                "text": "2018"
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
    position: relative;
    .timeTile{
        position:absolute;
        top:0;
        left:50%;
        width:1200px;
        height:100%;
        margin-left:-600px;
        z-index: 0;
    }
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
        background:rgba(255, 255, 255, 0.1);
        border-color:#4e4e4e;
        .tl-timemarker-content-container{
            background:#1c1c23 !important;
            box-shadow: none;
            border-color:#828282;
            height:40px !important;
            transition:all 0.2s linear;
            width:100px;
            
        }
        .tl-timemarker.tl-timemarker-active .tl-timemarker-content-container{
            color:#fff;
            border-color:rgba(255, 233, 91, 0.61);
        }
    }
    .tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{
        font-size:14px;
        line-height:16px;
        width:100%;
        height:100%;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical;
    }
    .tl-timemarker.tl-timemarker-active .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-text h2.tl-headline{
        color:#ffe95b;
    }
    .tl-timemarker.tl-timemarker-active .tl-timemarker-line-left, .tl-timemarker.tl-timemarker-active .tl-timemarker-line-right{
        border-color:rgba(255, 232, 92, 0.61);
    }
    .tl-timemarker .tl-timemarker-content-container .tl-timemarker-content .tl-timemarker-media-container,.tl-slidenav-title,.tl-slidenav-description{
        display:none;
    }
    .tl-timemarker .tl-timemarker-line-left, .tl-timemarker .tl-timemarker-line-right{
        box-shadow: none;
        border-color:#828282;
    }
    .tl-text p{
        color:#fff;
        font-size:100px;
        display: inline-block;
        position: absolute;
        left:0;
        top:35%;
    }
    .tl-text h2.tl-headline-title, .tl-text h2.tl-headline{
        font-size:26px;
        color:#fff;
        display:inline-block;
        position: absolute;
        left:69%;
        top:60%;
        max-width:400px;
        text-align:left;
        line-height: 50px;
        font-weight: 400;
    }
    .tl-text .tl-headline-date, .tl-text h3.tl-headline-date{
        color:#fff;
        font-size:20px;
        display: inline-block;
        position: absolute;
        left:240px;
        bottom:52%;
    }
    .tl-slide-text-only .tl-slide-content-container .tl-slide-content{
        width:1200px !important;
        display:block;
        margin:0 auto;
        height:100%;
    }
    .tl-slide-text-only .tl-slide-content-container .tl-slide-content .tl-text{
        width:100% !important;
        margin:0;
        max-width:100%;
        min-width:100%;
    }
    .tl-slide .tl-slide-content-container{
        height:100%;
    }
    #tl-jbfngg,.tl-text-content-container{
        height:100%;
    }
    .tl-timemarker:hover .tl-timemarker-content-container{
        width:260px;
         z-index: 11;
    }
    .tl-timeaxis-background{
        background:transparent;
    }
    .tl-timenav .tl-attribution{
        display:none;
    }
}
</style>


