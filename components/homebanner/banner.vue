<template>
    <div class="lv-banner" id="lv-banner">
        <Container>
            <div class="lv-banner-main">
                <div class="fl-part">
                    <div class="part part1  fl-part1 animated" :class="{'fadeInLeft':animated}" :style="style1"></div>
                    <div class="part part2  fl-part2 animated" :class="{'fadeInLeft':animated}" :style="style2"></div>
                    <div class="part part3  fl-part3 animated" :class="{'fadeInLeft':animated}" :style="style3"></div>
                </div>
                <div class="fr-part">
                    <div class="part part1  fr-part1 animated" :class="{'fadeInRight':animated}" :style="style1"></div>
                    <div class="part part2  fr-part2 animated" :class="{'fadeInRight':animated}" :style="style2"></div>
                    <div class="part part3  fr-part3 animated" :class="{'fadeInRight':animated}" :style="style3"></div>
                    <div class="part part4  fr-part4 animated" :class="{'fadeInRight':animated}" :style="style4"></div>
                </div>
            </div>
            <div class="lv-banner-info">
                <div class="lv-banner-logo">
                    <img class="animated fadeInUp" src="~assets/images/lv.png" alt="">
                </div>
                <div class="lv-banner-title">
                    <h3 class="animated fadeInUp">Live Video</h3>
                    <p class="animated fadeInUp">一站式综合博娱直播系统的开创者与定义者</p>
                </div>
                <div class="control-down">
                    <div class="down-page" style="display:block;">
                        <i class="icon-darr"></i>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
                animated:true,
                style1:{
                    transform:'translate3d(0,0,0)',
                    transformStyle: 'preserve-3d'
                },
                style2:{
                    transform:'translate3d(0,0,0)',
                    transformStyle: 'preserve-3d'
                },
                style3:{
                    transform:'translate3d(0,0,0)',
                    transformStyle: 'preserve-3d'
                },
                style4:{
                    transform:'translate3d(0,0,0)',
                    transformStyle: 'preserve-3d'
                },
            }
        },
        mounted(){
            var box=document.getElementById("lv-banner");
            let offsetconf = 10;
            box.style.height=window.screen.height-80+'px';
            let that = this;
            // setTimeout(() => {
            //     this.animated = false;
            //     box.addEventListener("mousemove",function(ev){
            //         that.eventListener(ev,this,offsetconf)
            //     }, false);
            // },5000)

            window.onscroll = function (e){
                console.log(e)
            }
        },
        beforeDestroy(){
            var box=document.getElementById("lv-banner");
            let offsetconf = 10;
            let that = this;
            box.removeEventListener("mousemove",this,false);
        },
        methods:{
            eventListener(ev,_this,offsetconf){//函数
                if(this.checkHover(ev,_this)){
                 // console.log('------------1')

                  var ev=ev||window.event;
                    var mousex=ev.pageX/offsetconf;
                    var mousey=ev.pageY/offsetconf;
                    var pageW=document.documentElement.clientWidth/2/offsetconf;
                    var pageH=document.documentElement.clientHeight/2/offsetconf;
                    var placex=(mousex-pageW);
                    var placey=(mousey-pageH);
                    this.style1['transform'] = 'translate3d('+(-placex-20)+'px,'+(-placey)+'px,0)';
                    this.style2['transform'] = 'translate3d('+(-placex-15)+'px,'+(-placey)+'px,0)';
                    this.style3['transform'] = 'translate3d('+(-placex-10)+'px,'+(-placey)+'px,0)';
                    this.style4['transform'] = 'translate3d('+(-placex-5)+'px,'+(-placey)+'px,0)';
                }
            },
            checkHover(e, target) {//劫持mousemove
              if (this.getEvent(e).type == "mousemove") {
               // console.log('------------1')

                return !this.contains(target, this.getEvent(e).relatedTarget
                            || this.getEvent(e).fromElement)
                            && !((this.getEvent(e).relatedTarget || this.getEvent(e).fromElement) === target);
                } else {
                    return !this.contains(target, this.getEvent(e).relatedTarget
                            || this.getEvent(e).toElement)
                            && !((this.getEvent(e).relatedTarget || this.getEvent(e).toElement) === target);
                }
            },
            contains(parentNode, childNode) {
                if (parentNode.contains) {
                    return parentNode != childNode && parentNode.contains(childNode);
                } else {
                    return !!(parentNode.compareDocumentPosition(childNode) & 16);
                }
            },
            getEvent(e) {
                return e || window.event;
            }
        }
    }
</script>

<style lang="scss" scoped>
.lv-banner{
    width:100%;
    min-width:$container-width;
    height:100%;
    background:url(~assets/images/home/sy_banner_1.png) center;
    background-size:cover;
    position: relative;
    .lv-banner-info{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        text-align: center;
        z-index:2;
        .lv-banner-logo{
            padding-top:131px;
            img{
                animation-delay:0.2s;
                -webkit-animation-delay:0.2s;
            }
        }
        .lv-banner-title{
            margin-top:25px;
            h3{
                font-size:38px;
                color:#fff;
                margin-bottom:10px;
                animation-delay:0.6s;
                -webkit-animation-delay:0.6s;
            }
            p{
                font-size:19px;
                color:#fff;
                animation-delay:1s;
                -webkit-animation-delay:1s;
            }
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
            display: none;
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
    .lv-banner-main{
        width:100%;
        position: relative;
    }
    .fl-part{
        width:50%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        transform:translate3d(0px, 0px, 0px);
        transform-style:preserve-3d;
        backface-visibility:hidden;
        perspective:700px;
        -webkit-perspective:700px;
    }
    .fr-part{
        width:50%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
        transform:translate3d(0px, 0px, 0px);
        transform-style:preserve-3d;
        backface-visibility:hidden;
        perspective:700px;
        -webkit-perspective:700px;
    }
    .part{
        position: absolute;
        background-repeat: no-repeat;
        backface-visibility:hidden;
        transition: all 0.2s linear;
    }
    .fl-part1{
        width:383px;
        height:465px;
        top:48px;
        right:316px;
        background-image: url(~assets/images/home/sy_yuansu_1.png);
        animation-delay:2.2s;
        -webkit-animation-delay:2.2s;
    }
    .fl-part2{
        width:225px;
        height:396px;
        top:146px;
        right:190px;
        background-image: url(~assets/images/home/sy_yuansu_2.png);
        animation-delay:1.8s;
        -webkit-animation-delay:1.8s;
    }
    .fl-part3{
        width:397px;
        height:470px;
        top:263px;
        right:193px;
        background-image: url(~assets/images/home/sy_yuansu_3.png);
        animation-delay:1.4s;
        -webkit-animation-delay:1.4s;
    }

    .fr-part1{
        width:228px;
        height:427px;
        top:70px;
        left:358px;
        background-image: url(~assets/images/home/sy_yuansu_4.png);
        animation-delay:2.6s;
        -webkit-animation-delay:2.6s;
    }
    .fr-part2{
        width:215px;
        height:413px;
        top:170px;
        left:389px;
        background-image: url(~assets/images/home/sy_yuansu_5.png);
        animation-delay:2.2s;
        -webkit-animation-delay:2.2s;
    }
    .fr-part3{
        width:354px;
        height:546px;
        top:158px;
        left:161px;
        background-image: url(~assets/images/home/sy_yuansu_6.png);
        animation-delay:1.8s;
        -webkit-animation-delay:1.8s;
    }
    .fr-part4{
        width:470px;
        height:286px;
        top:477px;
        left:161px;
        background-image: url(~assets/images/home/sy_yuansu_7.png);
        animation-delay:1.4s;
        -webkit-animation-delay:1.4s;
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

.animated {
    animation-duration: 1s;
    animation-fill-mode: both
}
</style>


