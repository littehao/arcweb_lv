<template>
    <div class="lv-content">
      <div class="lv-content-banner" :style="{'height': height + 'px'}">
          <Carousel v-model="value1" :loop="true" dots="none" :height="height">
            <CarouselItem>
                <div class="lv-slide-content">
                    <img class="img" src="~assets/images/content/nrzz_rw_1.png" alt="">
                    <div class="text">
                        <h3>网红主播造星计划</h3>
                        <p>专业经济团队，工业化造星</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="lv-slide-content">
                    <img class="img" src="~assets/images/content/nrzz_rw_2.png" alt="">
                    <div class="text">
                        <h3>网红主播造星计划</h3>
                        <p>专业经济团队，工业化造星</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="lv-slide-content">
                    <img class="img" src="~assets/images/content/nrzz_rw_3.png" alt="">
                    <div class="text">
                        <h3>网红主播造星计划</h3>
                        <p>专业经济团队，工业化造星</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="lv-slide-content">
                    <img class="img" src="~assets/images/content/nrzz_rw_4.png" alt="">
                    <div class="text">
                        <h3>网红主播造星计划</h3>
                        <p>专业经济团队，工业化造星</p>
                    </div>
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <div class="lv-content-star">
          <Container>
              <h3>LV特邀明星</h3>
              <div class="star-list">
                  <div class="item">
                      <img src="~assets/images/content/lvty_zhyz.png" alt="">
                      <div class="intro">
                          <span>赵韩樱子</span>
                          <span>当红歌手</span>
                      </div>
                  </div>
                  <div class="item">
                      <img src="~assets/images/content/lvty_gg.png" alt="">
                      <div class="intro">
                          <span>赵韩樱子</span>
                          <span>当红歌手</span>
                      </div>
                  </div>
                  <div class="item">
                      <img src="~assets/images/content/lvty_axy.png" alt="">
                      <div class="intro">
                          <span>赵韩樱子</span>
                          <span>当红歌手</span>
                      </div>
                  </div>
                  <div class="item">
                      <img src="~assets/images/content/lvty_rzr.png" alt="">
                      <div class="intro">
                          <span>赵韩樱子</span>
                          <span>当红歌手</span>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                height:0,
                value1: 0,
            }
        },
        created(){

        },
        mounted(){
            this.height = document.documentElement.clientHeight;
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
                font-size:28px;
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
        h3{
            text-align: center;
            font-size:28px;
            margin-bottom:53px;
        }
        .star-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            .item{
                width:25%;
            }
        }
    }
}
</style>
