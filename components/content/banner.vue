<template>
    <div class="swiper-container swiper-container-h lv-content-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_1.png" alt="" style="width:60%"></div>
                    <div class="text">
                        <h3 class="title">生态造星计划</h3>
                        <p class="info">挖掘潜力超新星，星光大道等你来</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img src="~assets/images/content/nrzz_rw_2.png" alt="" style="width:45%"></div>
                    <div class="text">
                        <h3 class="title">内容为王，娱乐至上</h3>
                        <p class="info"  >娱乐内容与粉丝经济领域的先行者</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_3.png" alt="" style="width:60%"></div>
                    <div class="text">
                        <h3 class="title" >明星艺人养成</h3>
                        <p class="info"  >素人主播大蜕变，红人跃升大明星</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_4.png" alt="" style="width:70%"></div>
                    <div class="text">
                        <h3 class="title" >专业PGC节目频道</h3>
                        <p class="info"  >专业导演团队倾情巨制，多元节目内容舞台无限</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide" >
                <div class="lv-slide-content">
                    <div class="img"><img src="~assets/images/content/nrzz_rw_5.png" alt="" style="width:66%"></div>
                    <div class="text">
                        <h3 class="title" >梦幻级导师团队倾力打造</h3>
                        <p class="info"  >梦幻导师量身打造，专业培训神级飞跃</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:false,
        }
    },
    mounted(){
        var swiperH = new Swiper('.swiper-container-h', {
            autoplay:{
                delay:5000
            },
            speed:500,
            loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on:{
                transitionEnd: function(swiper){
                    $('.swiper-container-h .swiper-slide').removeClass('animt')
                    $('.swiper-container-h .swiper-slide.swiper-slide-active').addClass('animt');
                },
            }
        });
    }
}
</script>


<style lang="scss">
.swiper-container-h{
    .title{
        opacity: 0;
        transition:all 0.5s linear 0.1s;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }
    .info{
        opacity: 0;
        transition:all 0.5s linear 0.3s;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0)
    }
    .animt .title{
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
    .animt .info{
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none
    }
} 

</style>

