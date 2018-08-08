<template>
    <div class="lv-content">
      <div class="lv-content-banner" :style="{'height': height + 'px'}">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_1.png" alt="">
                            <div class="text">
                                <h3>网红主播造星计划</h3>
                                <p>专业经济团队，工业化造星</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_2.png" alt="">
                            <div class="text">
                                <h3>网红主播造星计划</h3>
                                <p>专业经济团队，工业化造星</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_3.png" alt="">
                            <div class="text">
                                <h3>网红主播造星计划</h3>
                                <p>专业经济团队，工业化造星</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
          
      </div>
      <div class="lv-content-star">
          <Container>
              <h3 class="title">LV特邀明星</h3>
              <div class="star-list">
                  <div class="item">
                    <div>
                        <img src="~assets/images/content/lvty_zhyz.png" alt="">
                        <div class="intro">
                            <span class="name">赵韩樱子</span>
                            <span class="info">当红歌手</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_gg.png" alt="">
                        <div class="intro">
                            <span class="name">鬼鬼</span>
                            <span class="info">当红演员</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_axy.png" alt="">
                        <div class="intro">
                            <span class="name">安心亞</span>
                            <span class="info">当红女艺人</span>
                        </div>
                    </div>
                  </div>
                  <div class="item">
                      <div>
                        <img src="~assets/images/content/lvty_rzr.png" alt="">
                        <div class="intro">
                            <span class="name">容祖儿</span>
                            <span class="info">当红女歌手</span>
                        </div>
                    </div>
                  </div>
              </div>
              
          </Container>
          <div class="line" style="bottom:303px;"></div>
          <div class="line" style="bottom:281px;"></div>
          <div class="line" style="bottom:259px;"></div>
          <div class="line" style="bottom:239px;"></div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'; 
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data(){
            return {
                height:0,
                value1: 0,
                banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
                swiperOption: {
                    autoplay: 5000,
                    initialSlide: 1,
                    loop: true,
                    pagination: '.swiper-pagination',
                    onSlideChangeEnd: swiper => {
                        console.log('onSlideChangeEnd', swiper.realIndex)
                    }
                }
            }
        },
        created(){

        },
        mounted(){
            this.height = document.documentElement.clientHeight;
            var mySwiper = new Swiper('.swiper-container', {
                autoplay:{
                    delay:5000
                },
                speed:500,
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }
</script>

<style lang="scss">
.lv-content{
    width:100%;
    .lv-content-banner{
        width:100%;
        background:url(~assets/images/content/nrzz_bj_1.png) no-repeat center;
        background-size:cover;
        text-align: center;
        .swiper-container{
            width:100%;
            height:100%;
        }
        .lv-slide-content{
            width:100%;
            height:100%;
            position: relative;
            .img{   
                position: absolute;
                bottom:0;
                left:45%;
                margin-left:-250px;
            }
            .text{
                width:100%;
                height:120px;
                position: absolute;
                bottom:160px;
                left:0;
            }
            h3{
                font-size:34px;
                color:#fff;
            }
            p{
                font-size:$font-size-base * 2;
                color:#fff;
            }
        }
    }
    .lv-content-star{
        width:100%;
        height:698px;
        background:#1c1c23;
        color:#fff;
        padding:100px 0;
        position: relative;
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:53px;
        }
        .star-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            position: relative;
            z-index: 11;;
            .item{
                width:25%;
                padding:0 35px;
                .intro{
                    .name{
                        font-size:$font-size-small * 2;
                        margin-right:15px;
                    }
                    .info{
                        font-size:$font-size-large;
                    }
                }
            }
        }
        .line{
            position: absolute;
            left:0;
            width:100%;
            height:2px;
            background:#D8D8D8;
        }
    }
}
</style>
