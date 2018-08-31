<template>
    <div id="home">
      <section  class="swiper-container test">
        <div class="section-content swiper-wrapper" >
          <div id="content-0" class="swiper-slide">
            <lv-banner  v-model="show">
            <div class="control-down" @click="controldown">
            <div class="down-page" style="display:block;">
            <i class="icon-darr"></i>
            </div>
            </div>
            </lv-banner>
          </div>
          <div class="swiper-slide">
            <div id="content-1" >
              <Container>
                <div class="section-1">
                  <div class="card-info section-card1">
                    <div class="card-info-left text-content">
                      <h2 class="title  ani" swiper-animate-effect="fadeInUp" >{{$t('home.content[0].title')}}</h2>
                      <h3 class="subtitle  ani" swiper-animate-effect="fadeInUp" >Live Video </h3>
                      <p class="content-info  ani" swiper-animate-effect="fadeInUp" >
                        {{$t('home.content[0].text')}}
                      </p>
                    </div>
                    <div class="card-info-right img-content" >
                      <img class="pc  ani" swiper-animate-effect="fadeInRight"  src="../../assets/images/home/sy_dn_1.png" alt="">
                      <!-- <img class="mobeil " data-animation="fadeInRight"  src="../../assets/images/home/sy_sj_1.png" alt=""> -->
                    </div>
                  </div>
                </div>
              </Container>
              <div class="mask-wrap">
                <div class="mask"></div>
                <div class="mask-detail" :style="style"></div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div id="content-2" >
              <Container>
                <div class="section-2">
                  <div class="card-info section-card2">
                    <div class="card-info-right img-content">
                      <!--<span class="square">-->
                      <img src="../../assets/images/avatar/tx_1.png" class="avatar tx1 ani " swiper-animate-effect="fadeInLeft" alt="">
                      <img src="../../assets/images/avatar/tx_2.png" class="avatar tx2 ani " swiper-animate-effect="fadeInLeft" alt="">
                      <img src="../../assets/images/avatar/tx_3.png" class="avatar tx3 ani " swiper-animate-effect="fadeInLeft" alt="">
                      <img src="../../assets/images/avatar/tx_4.png" class="avatar tx4 ani " swiper-animate-effect="fadeInLeft" alt="">

                      <!--</span>-->
                    </div>
                    <div class="card-info-left text-content">
                      <h2 class="title  ani" swiper-animate-effect="fadeInUp">{{$t('home.content[1].title')}}
                      </h2>
                      <h3 class="subtitle  ani" swiper-animate-effect="fadeInUp">Live Video </h3>
                      <p class="content-info  ani" swiper-animate-effect="fadeInUp">{{$t('home.content[1].text')}}</p>
                    </div>
                    </div>
                </div>
              </Container>
              <div class="bgimg"></div>
            </div>
          </div>
          <div class="swiper-slide">
            <div id="content-3" >
              <Container>
                <div class="section-3">
                  <div class="card-info section-card3">

                    <div class="card-info-left text-content">
                      <h2 class="title  ani" swiper-animate-effect="fadeInUp">{{$t('home.content[2].title')}}</h2>
                      <h3 class="subtitle  ani" swiper-animate-effect="fadeInUp">Live Video </h3>
                      <p class="content-info  ani" swiper-animate-effect="fadeInUp">
                        {{$t('home.content[2].text')}}
                      </p>
                    </div>
                    <div class="card-info-right img-content card-pic">
                      <div class="ani img" swiper-animate-effect="fadeInRight">
                        <h3>{{$t('home.content[2].title2')}}</h3>
                        <div class="screen_list">
                          <span class="color1">{{$t('home.content[2].span1')}}</span>
                          <span class="color2">{{$t('home.content[2].span2')}}</span>
                          <span class="color3">{{$t('home.content[2].span3')}}</span>
                          <span class="color4">{{$t('home.content[2].span4')}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
              <div class="bgimg"></div>
            </div>
          </div>
          <div id="content-4" class="swiper-slide">
            <Container class="endpage">
              <div class="section-4">
                <div class="card-info section-card4">

                  <div class="card-info-right img-content ">
                    <img  class="sj  ani" swiper-animate-effect="fadeInLeft" src="../../assets/images/home/sy_sj_3.png" alt="">
                    <!-- <img  class="ipad  ani" swiper-animate-effect="fadeInLeft" src="../../assets/images/home/sy_sj_2.png" alt=""> -->
                  </div>
                  <div class="card-info-left text-content">
                    <h2 class="title  ani" swiper-animate-effect="fadeInUp">{{$t('home.content[3].title')}}</h2>
                    <h3 class="subtitle  ani" swiper-animate-effect="fadeInUp">Live Video </h3>
                    <p class="content-info  ani " swiper-animate-effect="fadeInUp">
                      {{$t('home.content[3].text')}}
                    </p>
                  </div>
                </div>
                <div class="section-btn" style="padding-bottom:60px;">
                    <Container>
                    <button class="btn" type="button" onclick="window.open('https://www.solantec.net/','_blank')">{{$t('home.button_text')}}</button>
                    </Container>
                </div>
              </div>
              
            </Container>
          </div>
          <div class="swiper-slide"  style="height:98px">
            <div class="homefooter">
                <footerlink></footerlink>
            </div>
          </div>


          <!--<img src="../../assets/images/home/bg2.png" class="section-content-pic" alt="">-->
          <!--<img src="../../assets/images/home/bg1.png" class="section-content-bottompic" alt="">-->

        </div>
      </section>
    </div>
</template>

<script>
import lvBanner from '~/components/homebanner/banner'
export default {
    name: "index",
    components:{
        lvBanner
    },
    data(){
        return {
            style:{
                backgroundPosition:'50% 0',
            },
            trans:{
                transform:'translate3d(0,0,0)',
            },
          show:true,

        }
    },
    mounted(){
        let tt = document.documentElement.clientHeight;
        let that = this;
      var swiper = new Swiper('.test', {
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 'auto',
        speed:500,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
          init: function(){
            swiperAni.swiperAnimateCache(this); //隐藏动画元素
            swiperAni.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function(){
            swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
        },
      });
      this.swiper=swiper
    },
    beforeDestroy(){

    },
    methods:{
        controldown(){
          this.swiper.slideNext();
          console.log(this.$refs)

        },

    }
}
</script>

<style lang="scss" >
  $card-height:385px;
  $section-1:620px;
.layout{
  background-color:  $body-background;
}
#home{
  height: 100%;
  position: relative;
  background-color: $body-background;
  .swiper-container{
    height: 100%;
  }
  .card-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $card-height;
    &-left{
      width: 100%;
      .title{
        color: $title-color;
        font-size:30px;
        // margin-bottom: 15px;
      }
      .subtitle{
        color: $text-color-blue;
        font-size: 2*$font-size-large;
        margin-bottom: 20px;
      }
      .content-info{
        font-size: $font-size-large;
        color: $title-color;
        line-height: 30px;
      }
    }
    &-right{
      /*width: 50%;*/
      height: 100%;
      position: relative;
      .pc,.mobeil{
        position: absolute;
        right: 0;
      }
      .mobeil{
        top: 80px;
        left: 150px;
      }

    }
    .img-content{
      width: 680px;
    }
    .text-content{
      width: 520px;
    }
  }
 .section-content{
   /*position: relative;*/
   /*height: auto;*/
   /*overflow: hidden;*/
 }
  .section-content-pic{
    position: absolute;
    top: $section-1+200;
    right: -55%;
    z-index: 0;
  }
  .section-content-bottompic{
    position: absolute;
    bottom:0;
    left: 0;
    z-index: 0;
    width: 100%;
  }
   .section-btn{
     z-index: 1;
     height: auto;
     position: absolute;
     bottom:0;
     left:0;
     .btn{
       display: block;
       margin: 0 auto;
       width: 210px;
       height: 45px;
       text-align: center;
       border-radius: 50px;
       line-height: 45px;
       color: $text-color;
       background-color: $active-background;
       border-color: transparent;
       cursor: pointer;
       outline: none;
       font-size:16px;
     }
     .customer{
       margin-top: 100px;
       height: 180px;
        border-top: 1px solid #666666;
       .customer-info{
         height: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
          h2{
            color: $text-color-blue;
            font-size: $font-size-small*2;
            width: 50%;
          }
          a{
            display: block;
            height: 45px;
            width: 170px;
            border-radius: 50px;
            line-height: 45px;
            text-align: center;
            color: $text-color-white;
            border: 1px solid $border-color-active;
            font-size:16px;
          }
       }
     }
   }
  #content-1{
    height: 100%;
    width: 100%;
    overflow: hidden;
    // background-image: url("～assets/images/home/sy_bj_1.png") ;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: center 0;
    position: relative;
    z-index: 1;
    .section-1{
      height: 100%;
      display: flex;
      align-items: center;
      overflow:hidden;
      .section-card1{
        // margin-top: 150px;
      }
    }
    .mask-wrap{
        .mask{
            width:100%;
            height:100%;
            background:url("~assets/images/home/homebgop.png") no-repeat center top;
            background-size:cover;
            position: absolute;
            top:0;
            left:0;
            z-index: 1;
        }
        .mask-detail{
            width:100%;
            height:100%;
            background:url("~assets/images/home/homebg.png") no-repeat;
            background-size:cover;
            // background-attachment:fixed;
            position: absolute;
            top:0;
            left:0;
        }
    }
  }
  #content-2{
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .bgimg{
      position: absolute;
      top:0;
      left:-30%;
      width:100%;
      height:100%;
      background-image: url(../../assets/images/home/bg2.png);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 50%;
    }
    .section-2{
      height: 100%;
      display: flex;
      align-items: center;
      overflow:hidden;
      .section-card2{
        // margin-top: 50px;

      }
      .avatar{
        position: absolute;
      }
      .tx1{
        top: 100px;
        left: 290px;
        width: 282px;

      }
      .tx2{
        top: 50px;
        left: 0px;
        width: 282px;

      }
      .tx3{
        top: -15px;
        width: 182px;
        left: 210px;

      }
      .tx4{
        bottom: -60px;
        left: 180px;
        width: 182px;
      }
    }
  }
  #content-3{
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .bgimg{
      position: absolute;
      top:0;
      right:-75%;
      width:100%;
      height:100%;
      background-image: url(../../assets/images/home/bg2.png);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 50%;
    }
    .section-3{
      height: 100%;
      display: flex;
      align-items: center;
      overflow:hidden;
      .section-card3{
        // margin-top: 50px;

      }
      .card-pic{
        text-align: center;
        .img{
          position: relative;
          width:467px;
          height:350px;
          display:inline-block;
          background:url(../../assets/images/home/screenbg.png) no-repeat center;
          background-size:100%;
        }
        h3{
          color:#fff;
          font-size:20px;
          text-align: left;
          padding-top:55px;
          padding-left:46px;
        }
        .screen_list{
          color:#fff;
          font-size:14px;
          text-align: left;
          padding-left: 46px;
          padding-top:50px;
          span{
            display:inline-block;
            padding:5px 15px;
            border-radius: 50px;
            margin-bottom:20px;
          }
          .color1{
            border:1px solid #4ED0E5;
            color:#4ED0E5;
            margin-right: 15px;
          }
          .color2{
            border:1px solid #D166A1;
            color:#D166A1;
          }
          .color3{
            border:1px solid #D8D360;
            color:#D8D360;
            margin-right: 15px;
            padding:5px 10px;
          }
          .color4{
            border:1px solid #A864CA;
            color:#A864CA;
            padding:5px 10px;
          }
        }
      }

    }
  }
  #content-4{
    height: 100%;
     width: 100%;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-image: url(../../assets/images/home/bg1.png);
    background-position: bottom left;
    background-size: contain;
    background-repeat: no-repeat;
    .section-4{
      height: 100%;
      overflow:hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: relative;
      .section-card4{
        // margin-top: 50px;

      }
      .ipad,.sj{
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .sj{
        width: 80%;
      }
      @media screen and (max-width: 1440px) {
        .sj{
          width: 70%;
        }
      }
      .ipad{
        left:185px;
        bottom: 0;
      }

    }
  }

}
</style>
