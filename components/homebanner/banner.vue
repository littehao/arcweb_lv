<template>
    <div class="lv-banner" id="lv-banner">
        <div class="lv-banner-main">
            <div class="fl-part animated">
                <div class="part part1 layer fl-part1" :style="style1"></div>
                <div class="part part2 layer fl-part2" :style="style2"></div>
                <div class="part part3 layer fl-part3" :style="style3"></div>
            </div>
            <div class="fr-part animated">
                <div class="part part1 layer fr-part1" :style="style1"></div>
                <div class="part part2 layer fr-part2" :style="style2"></div>
                <div class="part part3 layer fr-part3" :style="style3"></div>
                <div class="part part4 layer fr-part4" :style="style4"></div>
            </div>
        </div>
        <div class="lv-banner-info">
            <div class="lv-banner-logo">
                <img src="~assets/images/lv.png" alt="">
            </div>
            <div class="lv-banner-title">
                <h3>Live Video</h3>
                <p>一站式综合博娱直播系统的开创者与定义者</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {
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
            let that = this;
            box.addEventListener("mousemove", function(ev){
                var ev=ev||window.event;
                var mousex=ev.pageX/offsetconf;
                var mousey=ev.pageY/offsetconf;
                var pageW=document.documentElement.clientWidth/2/offsetconf;
                var pageH=document.documentElement.clientHeight/2/offsetconf;
                var placex=(mousex-pageW);
                var placey=(mousey-pageH);
                that.style1['transform'] = 'translate3d('+(-placex-20)+'px,'+(-placey)+'px,0)';
                that.style2['transform'] = 'translate3d('+(-placex-15)+'px,'+(-placey)+'px,0)';
                that.style3['transform'] = 'translate3d('+(-placex-10)+'px,'+(-placey)+'px,0)';
                that.style4['transform'] = 'translate3d('+(-placex-5)+'px,'+(-placey)+'px,0)';
            }, false);
        }
    }
</script>

<style lang="scss" scoped>
.lv-banner{
    width:100%;
    min-width:1080px;;
    height:790px;
    background:url(~assets/images/sy_banner_1.png) center;
    background-size:cover;
    position: relative;
    .lv-banner-info{
        width:100%;
        height:720px;
        position: absolute;
        top:0;
        left:0;
        text-align: center;
        z-index:2;
        .lv-banner-logo{
            padding-top:131px;
        }
        .lv-banner-title{
            margin-top:25px;
            h3{
                font-size:38px;
                color:#fff;
                margin-bottom:10px;
            }
            p{
                font-size:19px;
                color:#fff;
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
    }
    .fr-part{
        width:50%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
    }
    .part{
        position: absolute;
        background-repeat: no-repeat;
        backface-visibility:hidden;
        transition: all 0.4s linear;
    }
    .fl-part1{
        width:383px;
        height:465px;
        top:48px;
        left:0;
        background-image: url(~assets/images/sy_yuansu_1.png);
    }
    .fl-part2{
        width:225px;
        height:396px;
        top:146px;
        left:290px;
        background-image: url(~assets/images/sy_yuansu_2.png);
    }
    .fl-part3{
        width:397px;
        height:470px;
        top:263px;
        left:110px;
        background-image: url(~assets/images/sy_yuansu_3.png);
    }

    .fr-part1{
        width:228px;
        height:427px;
        top:70px;
        right:159px;
        background-image: url(~assets/images/sy_yuansu_4.png)
    }
    .fr-part2{
        width:215px;
        height:413px;
        top:170px;
        right:140px;
        background-image: url(~assets/images/sy_yuansu_5.png)
    }
    .fr-part3{
        width:354px;
        height:546px;
        top:158px;
        right:226px;
        background-image: url(~assets/images/sy_yuansu_6.png)
    }
    .fr-part4{
        width:470px;
        height:286px;
        top:477px;
        right:85px;
        background-image: url(~assets/images/sy_yuansu_7.png)
    }
}

</style>


