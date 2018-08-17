<template>
    <div class="m-home">
        <div class="m-home-part">
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" src="~assets/images/home/sy_dn_1.png" alt="">
                    <!-- <img class="img2" src="~assets/images/home/sy_sj_1.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">全球领先的娱乐游戏直播系统</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     我们深耕网络视频直播服务行业多年，始终为致力于打造安全，稳定，流畅，高性能和高并发的直播系统而不断努力。多年的娱乐游戏行业经验，专业多元的游戏开发经验让我们成为全球最领先的“直播+游戏”技术提供商。匠心巨制，倾情推出全球最领先的综合娱乐游戏直播系统。
                   </div>
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
                   <h3 class="title revealOnScroll" data-animation="fadeInUp">内容媒体粉丝经济领域的先行者</h3>
                   <div class="lv revealOnScroll" data-animation="fadeInUp">Live Video</div>
                   <div class="intro revealOnScroll" data-animation="fadeInUp">
                     移动互联时代，内容成为粉丝经济的核心驱动力，视频直播正在改变整个世界的互动社交方式。而全球泛娱乐产业正在高速发展，并与人们的生活不断融合。视频直播+娱乐游戏+粉丝经济，将开启下一个内容媒体大时代，LV始终是这个行业的先导者。
                   </div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" style="position:relative;z-index:2;" src="~assets/images/home/Screen1.png" alt="">
                    <!-- <img class="img1" style="position:absolute;left:20%;top:30px;" src="~assets/images/home/screen.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">定义娱乐游戏新时代</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     娱乐即是生活，游戏即是人生。娱乐游戏正在成为我们每个人不可或缺的重要一部分。而视频直播互动下的娱乐游戏，将完全重新定义娱乐的多元性和高粘性，正在改变着未来和世界。更多更优质的内容，更多的互动玩法，更多的粉丝打赏和利润分红，即开即玩即时享乐的人生法则，将引导LV定义娱乐游戏行业新时代。
                   </div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" style="position:relative;" src="~assets/images/home/sy_sj_2.png" alt="">
                    <img class="img2" style="position:absolute;left:10%;bottom:0px;width:30%;" src="~assets/images/home/sy_sj_3.png" alt="">
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">定制你专属的“直播+”和“游戏+”</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     我们拥有成熟完善的视频直播系统和功能，且拥有性能优越的高并发架构技术，坚实的技术团队全面保障系统的稳定和安全。产品服务接口达到了每天数亿的调用量，经验就是一切，强大的直播互动整合技术可以为您定制任何你想要的专属产品。
                   </div>
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


