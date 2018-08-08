<template>
    <div class="lv-about">
        <div class="lv-about-banner" :style="style">
            <div class="lv-about-intro">
                <h3>关于Live Video</h3>
                <div class="text">LIVE VIDEO是全球领先的直播互动综合博娱系统供应商，游戏品类包括棋牌类游戏、电子游戏、彩票游戏、休闲游戏</div>
                <div class="text">更有时下最热门的线上抓娃娃机、线上推币机，种类众多，玩法多元。</div>
                <div class="text">我们真正定义直播+博彩娱乐新时代，以直播互动为核心，为全球用户带来全新的互动游戏投注体验。</div>
                <div class="text">我们也将陆续推出直播+体育，电竞、真人视讯、现场竞技等多元化博娱游戏，LIVE VIDEO敬邀全球用户共享直播互动游戏的乐趣。</div>
            </div>
        </div>
        <div class="lv-introduction">
            <Container>
                <div class="lv-introduction-content">
                    <h3>集团介绍</h3>
                    <div class="text">帝国集团成立于2009年，总部位于菲律宾。拥有全球第一的数字彩票技术系统，更推出了自己的真人彩票、棋牌娱乐、电子游艺、真人视讯、体育赛事、电子竞技、直播互动游戏等多个子品牌，所有游戏皆为自主研发，我们是真正意义上的全渠道游戏运营商。为您提供一站式系统供应，可以提供系统包网，亦有API接入服务。我们将精益求精，不断增加游戏数量和游戏品质，力争带给广大客户最佳的全渠道游戏产品。</div>
                </div>
                <img class="about1" src="~assets/images/about/about1.png" alt="">
                <img class="about2" src="~assets/images/about/about2.png" alt="">
                <img class="about3" src="~assets/images/about/about3.png" alt="">
            </Container>
        </div>
        <div class="lv-livevideo">
            <Container>
                <div class="time"><span class="year">2018</span><span class="month">.04</span></div>
                <div class="rightext">
                    <div class="text1">我们的故事</div>
                    <div class="text2">面向未来</div>
                    <div class="text3">在欧洲成立马耳他分公司开拓欧洲市场</div>
                </div>
            </Container>
            <div class="timeline">
                <ul class="timeline-list">
                    <li>
                        <span class="mintime">2009.8</span>
                        <p class="linetext">创立于菲律宾马尼拉</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2011.5</span>
                        <p class="linetext">推出第一代PHP彩票1.0系统</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2012.7</span>
                        <p class="linetext">推行出创新的数字彩票1.0系统</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2013.8</span>
                        <p class="linetext">发布第二代PHP彩票2.0版</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2014.3</span>
                        <p class="linetext">发行专门彩票平台包网服务</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2015.9</span>
                        <p class="linetext">在英国马恩岛成立新事业部并开始申请多个国家的博彩牌照</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2016.6</span>
                        <p class="linetext">延揽顶尖直播互动系统团队钻研直播视讯领域</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2017.4</span>
                        <p class="linetext">直播相关设备及场所建置包含摄影棚及直播间</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2017.8</span>
                        <p class="linetext">在美国硅谷成立技术服务中心</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2017.12</span>
                        <p class="linetext">在纽西兰成立技术服务中心</p>
                        <i class="round"></i>
                        <i class="line"></i>
                    </li>
                    <li>
                        <span class="mintime">2018.4</span>
                        <div class="round-first">
                            <span class="round-two"><i class="round"></i></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         <footerlink></footerlink>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return {
                style:{
                    height:0,
                }
            }
        },
        mounted(){
            this.style.height = document.documentElement.clientHeight + 'px';
        }
    }
</script>

<style lang="scss">
.lv-about{
    .lv-about-banner{
        width:100%;
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
        height:860px;
        background:url(~assets/images/about/gywm_bj_2.png) no-repeat center;
        background-size:cover;
        .lv-introduction-content{
            width:680px;
            float:right;
            color:#fff;
            padding-top:85px;
            h3{
                text-align:right;
                font-size:34px;
                margin-bottom:15px;
            }
            .text{
                font-size:20px;
                line-height: 30px;
            }
        }
        .about1{
            transform: translateY(190px);
        }
        .about2{
            transform: translate(427px,-60px);
        }
        .about3{
            transform: translate(450px,-120px);
        }
    }
    .lv-livevideo{
        width:100%;
        height:860px;
        background:url(~assets/images/about/about4.png) no-repeat center 103px #1c1c23;
        color:#fff;
        position: relative;
        .time{
            transform: translateY(300px);
            .year{
                font-size:150px;
            }
            .month{
                font-size:100px;
            }
        }
        .rightext{
            float:right;
            width:374px;
            .text1{
                font-size:34px;
            }
            .text2{
                font-size:50px;
                font-weight:800;
                position: relative;
                margin-bottom:100px;
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
