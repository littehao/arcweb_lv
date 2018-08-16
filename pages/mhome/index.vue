<template>
    <div class="m-home">
        <div class="m-home-part">
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" src="~assets/images/home/sy_dn_1.png" alt="">
                    <!-- <img class="img2" src="~assets/images/home/sy_sj_1.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">倾力打造一站式综合博娱直播系统</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">努力提升用户体验，改变了目前游戏类直播产品不能很好融合的行业痛点，让玩家一边看直播，一边下注成为可能，开奖信息实时公布，实时的下注倒计时提醒</div>
               </div>
            </div>
            <div class="section">
               <div class="pic" style="height:221px">
                  <img src="~assets/images/avatar/tx_1.png" class="avatar tx1 revealOnScroll" data-animation="fadeInUp" alt="">
                  <img src="~assets/images/avatar/tx_2.png" class="avatar tx2 revealOnScroll" data-animation="fadeInUp" alt="">
                  <img src="~assets/images/avatar/tx_3.png" class="avatar tx3 revealOnScroll" data-animation="fadeInUp" alt="">
                  <img src="~assets/images/avatar/tx_4.png" class="avatar tx4 revealOnScroll" data-animation="fadeInUp" alt="">
               </div>
               <div class="info">
                   <h3 class="title revealOnScroll" data-animation="fadeInUp">博娱直播游戏的全球领先者</h3>
                   <div class="lv revealOnScroll" data-animation="fadeInUp">Live Video</div>
                   <div class="intro revealOnScroll" data-animation="fadeInUp">在博娱业界中，倾力专注于开发、设计博娱各式产品及系统，且为了提供客户有安全、稳定的思维下，陆续完成多种博娱系统与游戏产品：如LV棋牌游戏、LV街机投注、LV彩票游戏、LV电竞体育、LV抓抓乐、LV推推乐……等，Live Video是全球博娱产业中开拓这领域的领先者。</div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" style="position:relative;z-index:2;" src="~assets/images/home/Screen1.png" alt="">
                    <!-- <img class="img1" style="position:absolute;left:20%;top:30px;" src="~assets/images/home/screen.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">定义博娱新时代</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">独特的玩家大神排行榜，根椐胜率、连中、中奖金额等进行相应排行，对于上榜玩家有特权免费或收费分享其注单，引领其他玩家跟单购买，对于认证大神分享的注单有权要求跟单者打赏或分享利润分红，玩家可根椐情况随时打赏主播，钻石礼物、现金礼物随意送。彩播后续还将继续完善产品，更多好玩有趣的功能持续更新中。</div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" style="position:relative;" src="~assets/images/home/sy_sj_2.png" alt="">
                    <img class="img2" style="position:absolute;left:10%;bottom:0px;width:30%;" src="~assets/images/home/sy_sj_3.png" alt="">
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">安全稳定核心技术 深耕博娱产品经验</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">把”安全稳定核心技术、深耕博娱产品经验、创造博娱品牌新时代”的三大方针作为Live Video 开拓博娱事业版图的重要经营核心，在拥有博娱系统核心技术、直播互动整合技术、强力的运营后台系统及支援各种模式或平台的技术能力，并且与许多博娱产业数一数二的各类伙伴持续合作及提供服务。</div>
               </div>
            </div>
            <div class="bg1"></div>
            <div class="bg2"></div>
            <div class="bg3"></div>
            <div class="bg4"></div>
            <div class="bg5"></div>
            <div class="bg6"></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
            style:{
                height:0,
            }
        }
    },
    mounted(){
        this.style.height = document.documentElement.clientHeight + 'px';
        let tt = document.documentElement.clientHeight;
        let that = this;
        let win_height_padded = tt * 1.1;
        window.addEventListener('scroll',function(){
            var t = document.documentElement.scrollTop || document.body.scrollTop; 
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
.m-home{
    width:100%;
    background:#1c1c23;
    .m-home-part{
        width:100%;
        position: relative;
        overflow:hidden;
        .section{
            width:100%;
            padding-top:150px;
            padding-bottom:100px;
            position: relative;
            z-index: 2;
            .pic{
                position: relative;
                text-align: center;
                .img1{
                    width:75%;
                }
                .img2{
                    width:22%;
                    position: absolute;
                    bottom:0;
                    left:10%;
                }
                .avatar{
                    position: absolute;
                    top:0;
                }
                .tx1{
                    width:38%;
                    left:10%;
                    top:30px;
                }
                .tx2{
                    width:38%;
                    right:10%;
                    top:55px;
                }
                .tx3{
                    width:22%;
                    left:40%;
                    top:8px;
                }
                .tx4{
                    width:22%;
                    left:38%;
                    top:138px;
                }
            }
            .info{
                width:100%;
                margin-top:50px;
                .title{
                    text-align: center;
                    color:#fff;
                    font-size:17px;
                }
                .lv{
                    color:#677897;
                    font-size:17px;
                    text-align: center;
                    margin:10px 0;
                }
                .intro{
                    width:80%;
                    margin:0 auto;
                    font-size:14px;
                    color:#677897;
                    line-height:25px;
                }
            }
        }
        .bg1{
            width:100%;
            height: 410px;
            background:url(~assets/images/home/homebg.png) no-repeat;
            background-size:cover;
            position: absolute;
            top:0;
            left:0;
        }
        .bg2{
            width:100%;
            height:410px;
            background:url(~assets/images/home/homebgop.png) no-repeat;
            background-size:cover;
            position: absolute;
            top:0;
            left:0;
        }
        .bg3{
            width:100%;
            height:390px;
            background:url(~assets/images/home/bg2.png) no-repeat;
            background-size:100%;
            position: absolute;
            top:550px;
            left:-60%;
        }
        .bg4{
            width:100%;
            height:390px;
            background:url(~assets/images/home/bg2.png) no-repeat;
            background-size:100%;
            position: absolute;
            top:1100px;
            right:-60%;
        }
        .bg5{
            width:100%;
            height:390px;
            background:url(~assets/images/home/bg1.png) no-repeat left;
            background-size:cover;
            position: absolute;
            top:1800px;
            left:-60%;
        }
        .bg6{
            width:100%;
            height:390px;
            background:url(~assets/images/home/bg2.png) no-repeat;
            background-size:100%;
            position: absolute;
            top:2500px;
            right:-60%;
        }
    }
}
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translate3d(-200%,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.fadeInLeft {
    animation-name: fadeInLeft
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(200%,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.fadeInRight {
    animation-name: fadeInRight
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.fadeInUp {
    animation-name: fadeInUp
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


