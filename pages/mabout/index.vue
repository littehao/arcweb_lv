<template>
    <div class="m-about">
        <div class="m-banner">
            <h3> 关于LIVE VIDEO</h3>
        </div>
        <div class="m-about-intro">
            <h3>关于Live Video</h3>
            <div class="info">
              LIVE VIDEO是全球领先的一站式娱乐游戏直播系统供应服务商，我们定义直播+娱乐游戏+内容媒体，深度探索粉丝经济的运用，并于2018年5月份率先推出全球首个娱乐游戏直播系统，同时启动API接入服务。
            </div>
          <div class="info">
            LIVE VIDEO拥有棋牌竞技，街机电玩，老虎机，数字彩票，抓抓乐，推推乐，体育游戏，电竞游戏等品类的游戏，自主研发数十款游戏，致力于打造全球娱乐游戏直播领域标杆，LV在不断钻研其视频直播技术的同时，不断的研发多品类的受大众追捧的热门游戏，并将最优质的互动游戏内容提供给广告用户。
          </div>
        </div>
        <div class="m-about-group">
            <h3>背景介绍</h3>
            <div class="intro">
              LIVE VIDEO于2014年成立于美国硅谷，团队前身为传统PC直播的技术服务商，团队90%由视频直播领域的技术专家组成，我们不断钻研和攻克视频直播核心技术，并率先在移动直播和H5直播领域取得领先突破，并成功搭建了上百个直播平台，取得骄人成绩。为了有效增强平台竞争力，为客户抢占市场，LIVE VIDEO于2016年在台北成立了分公司，加强在直播+电商，直播+游戏，直播+VR，私密直播等多领域的尝试探索，并于2016年底率先推出游戏直播间并运用于市场。LIVE VIDEO深度探索娱乐游戏行业，经过两年的努力，成功突破多个行业壁垒实现跨界融合，并于2017年成功上线首个娱乐游戏直播系统，系统拥有十余款游戏，并投放于市场，取得一致好评。为迎合市场发展，公司决定于2018年4月份推出LV品牌直播游戏系统，为广大客户提供API接入，系统包网，技术解决方案等服务。

              <br/>  未来已来，风口已至。我们定义娱乐游戏直播行业新时代，同时我们将坚持创新，不断创造,专注，专业，专一的打造出更好的产品回馈给客户。
            </div>
            <img class="grop1" src="~assets/images/about/about1.png" alt="">
            <img class="grop2" src="~assets/images/about/about2.png" alt="">
            <img class="grop3" src="~assets/images/about/about3.png" alt="">
        </div>
        <div class="m-about-timeline">
            <div class="time-list">
                <div class="time time1">
                    <div class="top">
                        <div class="text1">我们的故事</div>
                        <div class="text2">面向未来</div>
                    </div>
                    <div class="center"><span class="year">2018</span><span class="month">.04</span></div>
                    <div class="bottom">在欧洲成立马耳他分公司<br>开拓欧洲市场</div>
                </div>
                <div class="time time2" style="margin-top:100px;">
                    <div class="center"><span class="month">2017.12</span></div>
                    <div class="bottom">在纽西兰成立技术服务中心</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2017.8</span></div>
                    <div class="bottom">在美国硅谷成立技术服务中心</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2017.4</span></div>
                    <div class="bottom">直播相关设备及场所建置包含摄影棚及直播间</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2016.6</span></div>
                    <div class="bottom">延揽顶尖直播互动系统团队钻研直播视讯领域</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2015.9</span></div>
                    <div class="bottom">在英国马恩岛成立新事业部并开始申请多个国家的博彩牌照</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2014.3</span></div>
                    <div class="bottom">发行专门彩票平台包网服务</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2013.8</span></div>
                    <div class="bottom">发布第二代PHP彩票2.0版</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2012.7</span></div>
                    <div class="bottom">推行出创新的数字彩票1.0系统</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2011.5</span></div>
                    <div class="bottom">推出第一代PHP彩票1.0系统</div>
                </div>
                <div class="time time2">
                    <div class="center"><span class="month">2009.8</span></div>
                    <div class="bottom">创立于菲律宾马尼拉</div>
                </div>
            </div>
        </div>
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
            if(this.getAgent == 'default'){
                window.location.href = '/'
            }
            this.style.height = document.documentElement.clientHeight + 'px';
        }
    }
</script>

<style lang="scss">
.m-about{
    .m-banner{
        width:100%;
        height:350px;
        background:url(~assets/images/about/gywm_bj_1.png) no-repeat;
        background-size:cover;
        display:flex;
        align-items: center;
        justify-content:center;
        h3{
            font-size:34px;
            color:#fff;
        }
    }
    .m-about-intro{
        width:100%;
        padding:50px 20px;
        background:#1c1c23;
        color:#fff;
        h3{
            font-size:24px;
            margin-bottom:15px;
        }
        .info{
            font-size:14px;
            margin-bottom:15px;
        }
    }
    .m-about-group{
        background:url(~assets/images/about/gywm_bj_2.png) no-repeat;
        background-size:cover;
        padding:30px 15px;
        color:#fff;
        h3{
            font-size:24px;
            text-align: right;
            margin-bottom: 10px;
        }
        .intro{
            font-size:14px;
            margin-bottom: 20px;
        }
        .grop1{
            width:60%;
        }
        .grop2{
            width:50%;
            margin-left:50%;
            margin-top:-12%;
        }
        .grop3{
            width:35%;
            margin-top:-37%;
            margin-left:11%;
        }
    }
    .m-about-timeline{
        width:100%;
        height:374px;
        background:url(~assets/images/about/about4.png) no-repeat center #1c1c23;
        background-size:80%;
        color:#fff;
        position: relative;
        &::before{
            position: absolute;
            top:0;
            left:5%;
            display:block;
            content:'';
            width:2px;
            height:100%;
            background:#FFE95C;
            opacity: 0.2;
        }
        .time-list{
            width:100%;
            height:100%;
            overflow-y:auto;
            padding:50px;
        }
        .time{
            width:100%;
            position: relative;
        }
        .time1{
            height:100%;
            &::before{
                position: absolute;
                top:46%;
                left:-15%;
                display: block;
                content: "";
                width:30px;
                height:30px;
                background:url(~assets/images/about/about_icon.png) no-repeat center;
                background-size:100%;
            }
        }
        .time2{
            margin-top:50px;
            .center{
                margin:0;
            }
            .bottom{
                padding:0;
                font-size:14px;
            }
            &::before{
                position: absolute;
                top:6px;
                left:-14%;
                display: block;
                content: "";
                width:20px;
                height:20px;
                background:url(~assets/images/about/about_icon.png) no-repeat center;
                background-size:100%;
            }
        }
        .top{
            .text1{
                font-size:16px;
                text-align: right;
                padding-right: 90px;
            }
            .text2{
                font-size:24px;
                text-align: right;
                padding-right:40px;
            }
        }
        .center{
            margin: 50px 0;
            .year{
                font-size:40px;
            }
            .month{
                font-size:20px;
            }
        }
        .bottom{
            padding-left:25%;
            font-size:18px;
        }
    }
}
</style>
