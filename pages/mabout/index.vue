<template>
    <div class="m-about">
        <div class="m-banner">
            <h3>ABOUT Live Video</h3>
        </div>
        <div class="m-about-intro">
            <h3>关于Live Video</h3>
            <div class="info">LIVE VIDEO是全球领先的直播互动综合博娱系统供应商，游戏品类包括棋牌类游戏、电子游戏、彩票游戏、休闲游戏</div>
            <div class="info">更有时下最热门的线上抓娃娃机、线上推币机，种类众多，玩法多元。</div>
            <div class="info">我们真正定义直播+博彩娱乐新时代，以直播互动为核心，为全球用户带来全新的互动游戏投注体验。</div>
            <div class="info">我们也将陆续推出直播+体育，电竞、真人视讯、现场竞技等多元化博娱游戏，LIVE VIDEO敬邀全球用户共享直播互动游戏的乐趣。</div>
        </div>
        <div class="m-about-group">
            <h3>集团介绍</h3>
            <div class="intro">帝国集团成立于2009年，总部位于菲律宾。拥有全球第一的数字彩票技术系统，更推出了自己的真人彩票、棋牌娱乐、电子游艺、真人视讯、体育赛事、电子竞技、直播互动游戏等多个子品牌，所有游戏皆为自主研发，我们是真正意义上的全渠道游戏运营商。为您提供一站式系统供应，可以提供系统包网，亦有API接入服务。我们将精益求精，不断增加游戏数量和游戏品质，力争带给广大客户最佳的全渠道游戏产品。</div>
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
                left:-15.5%;
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
