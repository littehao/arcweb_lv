<template>
    <section id="home" >
      <div class="section-content" >
        <div id="content-0" >
          <lv-banner  v-model="show">
            <div class="control-down" @click="controldown">
              <div class="down-page" style="display:block;">
                <i class="icon-darr"></i>
              </div>
            </div>
          </lv-banner>
        </div>
        <div id="content-1">
          <Container>
            <div class="section-1">
              <div class="card-info section-card1">
                <div class="card-info-left text-content">
                  <h2 class="title revealOnScroll" data-animation="fadeInUp" data-timeout="0">倾力打造一站式综合博娱直播系统</h2>
                  <h3 class="subtitle revealOnScroll" data-animation="fadeInUp" data-timeout="0">Live Video </h3>
                  <p class="content-info revealOnScroll" data-animation="fadeInUp" data-timeout="0"> 努力提升用户体验，改变了目前游戏类直播产品不能很好融合的行业痛点，让玩家一边看直播，一边下注成为可能，开奖信息实时公布，实时的下注倒计时提醒</p>
                </div>
                <div class="card-info-right img-content" >
                  <img class="pc revealOnScroll" data-animation="fadeInRight" data-timeout="0" src="../../assets/images/home/sy_dn_1.png" alt="">
                  <!-- <img class="mobeil revealOnScroll" data-animation="fadeInRight" data-timeout="0" src="../../assets/images/home/sy_sj_1.png" alt=""> -->
                </div>
              </div>
            </div>
          </Container>
          <div class="mask-wrap">
              <div class="mask"></div>
              <div class="mask-detail" :style="style"></div>
          </div>
        </div>
        <div id="content-2">
          <Container>
            <div class="section-2">
              <div class="card-info section-card2">
                <div class="card-info-right img-content">
                  <!--<span class="square">-->
                  <img src="../../assets/images/avatar/tx_1.png" class="avatar tx1 revealOnScroll" data-animation="fadeInLeft" alt="">
                  <img src="../../assets/images/avatar/tx_2.png" class="avatar tx2 revealOnScroll" data-animation="fadeInLeft" alt="">
                  <img src="../../assets/images/avatar/tx_3.png" class="avatar tx3 revealOnScroll" data-animation="fadeInLeft" alt="">
                  <img src="../../assets/images/avatar/tx_4.png" class="avatar tx4 revealOnScroll" data-animation="fadeInLeft" alt="">

                  <!--</span>-->
                </div>
                <div class="card-info-left text-content">
                  <h2 class="title revealOnScroll" data-animation="fadeInUp">博娱直播游戏的全球领先者</h2>
                  <h3 class="subtitle revealOnScroll" data-animation="fadeInUp">Live Video </h3>
                  <p class="content-info revealOnScroll" data-animation="fadeInUp">
                    在博娱业界中，倾力专注于开发、设计博娱各式产品及系统，且为了提供客户有安全、稳定的思维下，陆续完成多种博娱系统与游戏产品：如LV棋牌游戏、LV街机投注、LV彩票游戏、LV电竞体育、LV抓抓乐、LV推推乐……等，Live Video是全球博娱产业中开拓这领域的领先者。
                  </p>
                </div>

              </div>
            </div>
          </Container>
        </div>
        <div id="content-3">
          <Container>
            <div class="section-3">
              <div class="card-info section-card3">

                <div class="card-info-left text-content">
                  <h2 class="title revealOnScroll" data-animation="fadeInUp">定义博娱新时代</h2>
                  <h3 class="subtitle revealOnScroll" data-animation="fadeInUp">Live Video </h3>
                  <p class="content-info revealOnScroll" data-animation="fadeInUp">
                    独特的玩家大神排行榜，根椐胜率、连中、中奖金额等进行相应排行，对于上榜玩家有特权免费或收费分享其注单，引领其他玩家跟单购买，对于认证大神分享的注单有权要求跟单者打赏或分享利润分红，玩家可根椐情况随时打赏主播，钻石礼物、现金礼物随意送。Live Video后续还将继续完善产品，更多好玩有趣的功能持续更新中
                  </p>
                </div>
                <div class="card-info-right img-content card-pic">
                  <img class="revealOnScroll" data-animation="fadeInRight"  src="../../assets/images/home/Screen1.png" alt="">
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div id="content-4">
          <Container>
            <div class="section-4">
              <div class="card-info section-card4">

                <div class="card-info-right img-content ">
                  <img  class="sj revealOnScroll" data-animation="fadeInLeft" src="../../assets/images/home/sy_sj_3.png" alt="">
                  <img  class="ipad revealOnScroll" data-animation="fadeInLeft" src="../../assets/images/home/sy_sj_2.png" alt="">

                </div>
                <div class="card-info-left text-content">
                  <h2 class="title revealOnScroll" data-animation="fadeInUp">安全稳定核心技术 深耕博娱产品经验</h2>
                  <h3 class="subtitle revealOnScroll" data-animation="fadeInUp">Live Video </h3>
                  <p class="content-info revealOnScroll" data-animation="fadeInUp">
                    把”安全稳定核心技术、深耕博娱产品经验、创造博娱品牌新时代”的三大方针作为Live Video 开拓博娱事业版图的重要经营核心，在拥有博娱系统核心技术、直播互动整合技术、强力的运营后台系统及支援各种模式或平台的技术能力，并且与许多博娱产业数一数二的各类伙伴持续合作及提供服务。
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <!--<div class="section-btn" style="padding-bottom:100px;">-->
          <!--<Container>-->
            <!--<button class="btn" type="button" onclick="window.open('https://www.solantec.net/','_blank')">立即体验</button>-->
          <!--</Container>-->
          <!--&lt;!&ndash; <div class="customer">-->
            <!--<Container>-->
              <!--<div class="customer-info">-->
                <!--<h2>如果您在Live Video遇到任何问题<br/>-->
                  <!--请点击右方按钮联系我们24小时在线客服</h2>-->
                <!--<nuxt-link  target="_blank" to="/contactus">联系客服</nuxt-link>-->

              <!--</div>-->
            <!--</Container>-->
          <!--</div> &ndash;&gt;-->
        <!--</div>-->
        <!--<footerlink></footerlink>-->
        <!--<img src="../../assets/images/home/bg2.png" class="section-content-pic" alt="">-->
        <!--<img src="../../assets/images/home/bg1.png" class="section-content-bottompic" alt="">-->

      </div>
    </section>
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
          opts: {
            start: 0,
            dir: 'v',
            duration: 500,
            stopPageScroll: true,
            beforeChange: function (prev, next) {
              console.log('before', prev, next)
            },
            afterChange: function (prev, next) {
              console.log('after', prev, next)
            }
          }
        }
    },
    mounted(){
        let tt = document.documentElement.clientHeight;
        let that = this;


    },
    beforeDestroy(){

    },
    methods:{
        controldown(){

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
  background-color: $body-background;
  .card-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $card-height;
    &-left{
      width: 100%;
      .title{
        color: $title-color;
        font-size: 2*$font-size-large;
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
      width: 540px;
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
     position: relative;
     z-index: 1;
     height: auto;
     margin-top: 30px;
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
    height: 711px;
    width: 100%;
    // background-image: url("～assets/images/home/sy_bj_1.png") ;
    background-repeat: no-repeat;
    background-size: 110%;
    background-position: center 0;
    position: relative;
    z-index: 1;
    .section-1{
      height: $section-1;
      margin-top: 100px;
      overflow:hidden;
      .section-card1{
        margin-top: 150px;
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
            background-attachment:fixed;
            position: absolute;
            top:0;
            left:0;
        }
    }
  }
  #content-2{
    height: auto;
    width: 100%;
    // background: url("～assets/images/home/bg2.png");
    background-repeat: no-repeat;
    background-size: $section-1;
    background-position: -$section-1/2+20 center;
    position: relative;
    z-index: 1;
    .section-2{
      height: $section-1;
      margin-top: 100px;
      overflow:hidden;
      .section-card2{
        margin-top: 50px;

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
    height: auto;
    width: 100%;
    position: relative;
    z-index: 1;
    .section-3{
      height: $section-1;
      margin-top: 100px;
      overflow:hidden;
      .section-card3{
        margin-top: 50px;

      }
      .card-pic{
        text-align: center;

        img{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
      }

    }
  }
  #content-4{
    height: auto;
    width: 100%;
    position: relative;
    z-index: 1;
    .section-4{
      height: $section-1;
      margin-top: 100px;
      overflow:hidden;
      .section-card4{
        margin-top: 50px;

      }
      .ipad,.sj{
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .sj{
        width: 185px;
      }
      .ipad{
        left:185px;
        bottom: 0;
      }

    }
  }

}
</style>
