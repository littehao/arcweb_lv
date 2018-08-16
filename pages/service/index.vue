<template>

    <div class="lv-service">
        <div class="lv-service-banner" :style="style">
            <Container>
                <div class="lv-service-content">
                    <div>
                        <h3 class="animated fadeInUp">Live Video</h3>
                        <p class="animated fadeInUp" >一站式综合博娱直播系统的开创者与定义者</p>
                    </div>
                </div>
                <div class="control-down" @click="controldown">
                    <div class="down-page">
                        <i class="icon-darr"></i>
                    </div>
                </div>
            </Container>
        </div>
        <div class="lv-service-list">
             <Container>
                 <h3>我们的服务支持</h3>
                 <ul class="lv-service-ul">
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_api.png" alt=""></div>
                            <div class="t">API放线</div>
                        </div>
                        <div class="info">
                            提供完整的 API 发布、管理、维护生命周期管理。您只需简单操作，即可快速、低成本、低风险的开放数据或服务
                        </div>
                    </li>
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_zbbw.png" alt=""></div>
                            <div class="t">直播+ 系统包网</div>
                        </div>
                        <div class="info">
                            对于尚未建立自有品牌的企业或个人创业客户，可以针对不同属性及导向自由搭配各种产品，提供多种合作模式选择，数十种各式模板挑选，并加上我们领先群雄的直播系统技术及庞大美女主播群做为更有利的后援下，更提供客户您可以就直播体系中单一模式或整套模式选择。
                        </div>
                    </li>
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_zbyx.png" alt=""></div>
                            <div class="t">直播+游戏 系统包网</div>
                        </div>
                        <div class="info">
                            对于尚未建立自有品牌的企业或个人创业客户，可以针对不同属性及导向自由搭配各种博娱游戏产品，提供多种合作模式选择，数十种各式模板挑选，自行研发多款不同类型博娱游戏及顶尖开发系统技术
                        </div>
                    </li>
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_yxzb.png" alt=""></div>
                            <div class="t">LV游戏接口+直播</div>
                        </div>
                        <div class="info">
                            拥有领先业界的直播系统技术及专业整合API串接技术下，客户您可以直接透过我们自行研发的多款博娱游戏，轻轻松松地串接至您所拥有的直播系统，并可以依据您对博娱游戏的需求做出客制化选择，毋须担心嵌入您的现有直播系统之中会出现重大错误或阻碍。
                        </div>
                    </li>
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_jkyx.png" alt=""></div>
                            <div class="t">LV直播系统接口+游戏</div>
                        </div>
                        <div class="info">
                            拥有领先业界的直播系统技术及专业整合API串接技术下，众多博彩品牌的厂商或客户可以直接透过我们自行研发直播系统及既有已签约的庞大美女主播群，轻轻松松地串接至您所拥有的博彩游戏。
                        </div>
                    </li>
                    <li class="item">
                        <div class="title">
                            <div class="img"><img src="~assets/images/service/fwzc_icon_zbjj.png" alt=""></div>
                            <div class="t">直播服务+解决方案</div>
                        </div>
                        <div class="info">
                            领先业界的直播系统技术及既有已签约的庞大美女主播群下，并且斥资重金打造质感摄影棚，提供专业灯光系统、镜头架设、音响设备及背景空间配置等规划。运用成熟直播及影音串流技术，省时、省容量且支援跨系统装置，高分辨率影音视频实时传播全球市场。
                        </div>
                    </li>
                </ul>
             </Container>
        </div>
        <footerlink></footerlink>
    </div>
</template>

<script>
    import $ from 'jquery'
    import 'animate.css'
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
            this.style.height = document.documentElement.clientHeight + 'px';
            let tt = document.documentElement.clientHeight;
            let that = this;
            let win_height_padded = tt * 1.1;
            window.addEventListener('scroll',function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop; 
                var top_div = document.getElementById( "header" );
                if( t >= 80 ) {
                    top_div.style.background = "#27272E";
                } else {
                    top_div.style.background = "transparent";
                }

                that.revealOnScroll(tt,t);
            },false)
        },
        beforeDestroy(){
            if (window.removeEventListener) {
                window.removeEventListener("scroll",this,false);
            }
        },
        methods:{
            revealOnScroll(tt,t){
                $(".revealOnScroll:not(.animated)").each(function () {
                    var $this = $(this), 
                        offsetTop = $this.offset().top; 
                    if(t + tt > offsetTop) { 
                        if ($this.data('timeout')) { 
                            window.setTimeout(function(){
                                $this.addClass('animated ' + $this.data('animation')); 
                            }, parseInt($this.data('timeout')));
                        } else {
                            $this.addClass('animated ' + $this.data('animation'));
                        } 
                    }   
                })
            },
            controldown(){
                let tt = document.documentElement.clientHeight;
                $('html,body').animate({scrollTop:tt},500);
            }
        }
    }
</script>

<style lang="scss">
.lv-service{
    width:100%;
    .lv-service-banner{
        width:100%;
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
                width:50%;
                padding:0 100px 0 50px;
                margin-bottom:100px;
                color:#fff;
                .title{
                    display:flex;
                    align-items: center;
                    margin-bottom:20px;
                    .img{
                        margin-right:20px;
                    }
                    .t{
                        font-size:24px;
                    }
                }
                .info{
                    font-size:16px;
                    line-height:25px;
                    color:#ccc;
                    height:172px;
                }
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
