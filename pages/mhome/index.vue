<template>
    <div class="m-home">
        <div class="m-home-part">
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" src="~assets/images/home/sy_dn_1.png" alt="">
                    <!-- <img class="img2" src="~assets/images/home/sy_sj_1.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">{{$t('home.content[0].title')}}</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     {{$t('home.content[0].text')}}
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
                   <h3 class="title revealOnScroll" data-animation="fadeInUp">{{$t('home.content[1].title')}}</h3>
                   <div class="lv revealOnScroll" data-animation="fadeInUp">Live Video</div>
                   <div class="intro revealOnScroll" data-animation="fadeInUp">
                     {{$t('home.content[1].text')}}
                   </div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <img class="img1" style="position:relative;z-index:2;" src="~assets/images/home/Screen1.png" alt="">
                    <!-- <img class="img1" style="position:absolute;left:20%;top:30px;" src="~assets/images/home/screen.png" alt=""> -->
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">{{$t('home.content[2].title')}}</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     {{$t('home.content[2].text')}}
                   </div>
               </div>
            </div>
            <div class="section">
               <div class="pic revealOnScroll" data-animation="fadeInUp">
                    <!-- <img class="img1" style="position:relative;" src="~assets/images/home/sy_sj_2.png" alt=""> -->
                    <img class="img3" style="width:90%;" src="~assets/images/home/sy_sj_3.png" alt="">
               </div>
               <div class="info revealOnScroll" data-animation="fadeInUp">
                   <h3 class="title">{{$t('home.content[3].title')}}</h3>
                   <div class="lv">Live Video</div>
                   <div class="intro">
                     {{$t('home.content[3].text')}}
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
        // window.addEventListener('scroll',function(){
        //     var t = document.documentElement.scrollTop || document.body.scrollTop;
        //     that.revealOnScroll(tt,t);
        // },false)
    },
    beforeDestroy(){
        // if (window.removeEventListener) {
        //     window.removeEventListener("scroll",this,false);
        // }
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


