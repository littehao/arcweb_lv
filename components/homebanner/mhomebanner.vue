<template>
    <div class="m-home-banner">
        <div class="m-banner-logo">
            <img class="logo animated fadeInUp" src="~assets/images/home/lv.png" alt="">
            <div class="title animated fadeInUp">Live Video</div>
            <div class="info animated fadeInUp">一站式综合博娱直播系统的开创者与定义者</div>
        </div>
        <div class="m-banner-img">
            <div class="left">
                <img class="bannerimg banner1 animated fadeInLeft" src="~assets/images/home/sy_yuansu_1.png" alt="">
                <img class="bannerimg banner2 animated fadeInLeft" src="~assets/images/home/sy_yuansu_2.png" alt="">
                <img class="bannerimg banner3 animated fadeInLeft" src="~assets/images/home/sy_yuansu_3.png" alt="">
            </div>
            <div class="right">
                <img class="bannerimg banner1 animated fadeInRight" src="~assets/images/home/sy_yuansu_4.png" alt="">
                <img class="bannerimg banner2 animated fadeInRight" src="~assets/images/home/sy_yuansu_5.png" alt="">
                <img class="bannerimg banner3 animated fadeInRight" src="~assets/images/home/sy_yuansu_6.png" alt="">
                <img class="bannerimg banner4 animated fadeInRight" src="~assets/images/home/sy_yuansu_7.png" alt="">
            </div>
        </div>
        <div class="control-down" @click="controldown">
            <div class="down-page" style="display:block;">
                <i class="icon-darr"></i>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
        controldown(){
            let tt = document.documentElement.clientHeight;
            $('html,body').animate({scrollTop:tt},500);
        }
    }
}
</script>


<style lang="scss">
.m-home-banner{
        width:100%;
        height:100%;
        background:url(~assets/images/mhome/bannerbg.png) no-repeat center;
        background-size:cover;
        position: relative;
        overflow:hidden;
        .m-banner-logo{
            text-align: center;
            padding-top:80px;
            color:#fff;
            background:url(~assets/images/home/light.png) no-repeat 40% top;
            background-size:55%;
            position: relative;
            z-index: 2;
            .logo{
                width:35%;
                animation-delay:0.4s;
                -webkit-animation-delay:0.4s;
                display: block;
                margin-left:28%;
            }
            .title{
                font-size:20px;
                margin-bottom:5px;
                animation-delay:0.6s;
                -webkit-animation-delay:0.6s;
                font-weight: 600;
            }
            .info{
                font-size:16px;
                animation-delay:11s;
                -webkit-animation-delay:1s;
                font-weight: 600;
            }
        }
        .m-banner-img{
            display:flex;
            bottom:0;
            left:0;
            width:100%;
            .bannerimg{
                position: absolute;
            }
            .left{
                .banner1{
                    width:60%;
                    bottom:18%;
                    left:-20%;
                    animation-delay:1.8s;
                    -webkit-animation-delay:1.8s;
                }
                .banner2{
                    width:28%;
                    bottom:22%;
                    left:23%;
                    animation-delay:1.4s;
                    -webkit-animation-delay:1.4s;
                }
                .banner3{
                    width:52%;
                    bottom:3%;
                    left:0;
                    animation-delay:1s;
                    -webkit-animation-delay:1s;
                }
            }
            .right{
                .banner1{
                    width:30%;
                    bottom:27%;
                    right:5%;
                    animation-delay:2.2s;
                    -webkit-animation-delay:2.2s;
                }
                .banner2{
                    width:30%;
                    bottom:15%;
                    right:0%;
                    animation-delay:1.8s;
                    -webkit-animation-delay:1.8s;
                }
                .banner3{
                    width:40%;
                    bottom:5%;
                    right:10%;
                    animation-delay:1.4s;
                    -webkit-animation-delay:1.4s;
                }
                .banner4{
                    width:65%;
                    bottom:0;
                    right:-15%;
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
    }
</style>


