<template>
    <div class="swiper-container swiper-container-h lv-content-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_1.png" alt="" style="width:60%"></div>
                    <div class="text">
                        <h3 class="title">{{$t('content.banner[0].title')}}</h3>
                        <p class="info">{{$t('content.banner[0].text')}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img src="~assets/images/content/nrzz_rw_2.png" alt="" style="width:85%"></div>
                    <div class="text">
                        <h3 class="title">{{$t('content.banner[1].title')}}</h3>
                        <p class="info"  >{{$t('content.banner[1].text')}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_3.png" alt="" style="width:85%"></div>
                    <div class="text">
                        <h3 class="title" >{{$t('content.banner[2].title')}}</h3>
                        <p class="info"  >{{$t('content.banner[2].text')}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="lv-slide-content">
                    <div class="img"><img  src="~assets/images/content/nrzz_rw_4.png" alt="" style="width:85%"></div>
                    <div class="text">
                        <h3 class="title" >{{$t('content.banner[3].title')}}</h3>
                        <p class="info"  >{{$t('content.banner[3].text')}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide" >
                <div class="lv-slide-content">
                    <div class="img"><img src="~assets/images/content/nrzz_rw_5.png" alt="" style="width:85%"></div>
                    <div class="text">
                        <h3 class="title" >{{$t('content.banner[4].title')}}</h3>
                        <p class="info"  >{{$t('content.banner[4].text')}}</p>
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

