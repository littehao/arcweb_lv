<template>
    <div class="lv-content">
      <div class="lv-content-banner" :style="style">
          <swiper :options="swiperOption" >
                <swiper-slide>
                    <div class="lv-slide-content">
                        <img src="~assets/images/content/nrzz_rw_1.png" alt="">
                        <div class="text">
                            <h3>网红主播造星计划</h3>
                            <p>专业经济团队，工业化造星</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="lv-slide-content">
                        <img src="~assets/images/content/nrzz_rw_2.png" alt="">
                        <div class="text">
                            <h3>网红主播造星计划</h3>
                            <p>专业经济团队，工业化造星</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="lv-slide-content">
                        <img src="~assets/images/content/nrzz_rw_3.png" alt="">
                        <div class="text">
                            <h3>网红主播造星计划</h3>
                            <p>专业经济团队，工业化造星</p>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination "  slot="pagination"></div>
            </swiper>
      </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "content",
        data(){
            return {
                style:{
                    height:0,
                },
                swiperOption:null,
            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        created(){
            this.swiperOption = {
                notNextTick: true,
                loop:false,
                initialSlide:0,
                speed:500,
                direction : 'horizontal',
                grabCursor : true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                }
            }
        },
        mounted(){
            this.style.height = document.documentElement.clientHeight + 'px';
        }
    }
</script>

<style lang="scss">
.lv-content{
    width:100%;
    .lv-content-banner{
        width:100%;
        background:url(~assets/images/content/nrzz_bj_1.png) no-repeat center;
        background-size:100%;
    }
}
</style>
