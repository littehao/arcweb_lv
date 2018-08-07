<template>
    <section id="home">
      <lv-banner></lv-banner>
      <div class="section-content">
        <div id="content-1">
          <Container>
            <div class="section-1">
              <div class="card-info section-card1">
                <div class="card-info-left text-content">
                  <h2 class="title">倾力打造一站式综合博娱直播系统</h2>
                  <h3 class="subtitle">Live Video </h3>
                  <p class="content-info"> 努力提升用户体验，改变了目前游戏类直播产品不能很好融合的行业痛点，让玩家一边看直播，一边下注成为可能，开奖信息实时公布，实时的下注倒计时提醒</p>
                </div>
                <div class="card-info-right img-content">
                  <img class="pc" src="../assets/images/home/sy_dn_1.png" alt="">
                  <img class="mobeil" src="../assets/images/home/sy_sj_1.png" alt="">
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div id="content-2">
          <Container>
            <div class="section-2">
              <div class="card-info section-card2">
                <div class="card-info-right img-content">
                  <!--<span class="square">-->
                  <img src="../assets/images/avatar/tx_1.png" class="avatar tx1" alt="">
                  <img src="../assets/images/avatar/tx_2.png" class="avatar tx2" alt="">
                  <img src="../assets/images/avatar/tx_3.png" class="avatar tx3" alt="">
                  <img src="../assets/images/avatar/tx_4.png" class="avatar tx4" alt="">

                  <!--</span>-->
                </div>
                <div class="card-info-left text-content">
                  <h2 class="title">全球博娱游戏直播的开创者</h2>
                  <h3 class="subtitle">Live Video </h3>
                  <p class="content-info">
                    专业的培训让主播熟悉三大彩种的玩法，并可亲自下注带领玩家下注，对下注号码提供专业的分析，以供玩家参考，中奖号码播报，开奖倒计时提醒玩家下注，玩家中奖发送贺彩，语音播报中奖信息，满足玩家虚荣心理，调动其他玩家的下注热情，对于下注额度达到一定金额，进行相应表演，增强彩票玩法的娱乐性与互动性。
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
                  <h2 class="title">定义博娱新时代</h2>
                  <h3 class="subtitle">Live Video </h3>
                  <p class="content-info">
                    独特的玩家大神排行榜，根椐胜率、连中、中奖金额等进行相应排行，对于上榜玩家有特权免费或收费分享其注单，引领其他玩家跟单购买，对于认证大神分享的注单有权要求跟单者打赏或分享利润分红，玩家可根椐情况随时打赏主播，钻石礼物、现金礼物随意送。彩播后续还将继续完善产品，更多好玩有趣的功能持续更新中
                  </p>
                </div>
                <div class="card-info-right img-content card-pic">
                  <img  src="../assets/images/home/Screen1.png" alt="">
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
                  <img  src="../assets/images/home/Screen1.png" alt="">
                </div>
                <div class="card-info-left text-content">
                  <h2 class="title">定义博娱新时代</h2>
                  <h3 class="subtitle">Live Video </h3>
                  <p class="content-info">
                    独特的玩家大神排行榜，根椐胜率、连中、中奖金额等进行相应排行，对于上榜玩家有特权免费或收费分享其注单，引领其他玩家跟单购买，对于认证大神分享的注单有权要求跟单者打赏或分享利润分红，玩家可根椐情况随时打赏主播，钻石礼物、现金礼物随意送。彩播后续还将继续完善产品，更多好玩有趣的功能持续更新中
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div class="section-btn">
          <Container>
            <button class="btn" type="button">立即体验</button>
          </Container>
          <div class="customer">
            <Container>
              <div class="customer-info">
                <h2>如果您在Live Video遇到任何问题<br/>
                  请点击右方按钮联系我们24小时在线客服</h2>
                <nuxt-link  target="_blank" to="/">联系客服</nuxt-link>

              </div>
            </Container>
          </div>
        </div>
        <img src="../assets/images/home/BG_1.png" class="section-content-pic" alt="">
        <img src="../assets/images/home/BG.png" class="section-content-bottompic" alt="">

      </div>
    </section>
</template>

<script>
import lvBanner from '~/components/homebanner/banner'
export default {
    name: "index",
    components:{
        lvBanner
    }
}
</script>

<style lang="scss">
  $card-height:385px;
  $section-1:620px;
  body{
    background-color: $body-background;
  }
#home{
  /*height: 100%;*/
  width: 100%;
  background-color: $body-background;
  padding-top: 80px;
  .card-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $card-height;
    &-left{
      width: 100%;
      /*height: 100%;*/
      .title{
        color: $title-color;
        font-size: 2*$font-size-large;
        margin-bottom: 15px;
      }
      .subtitle{
        color: $title-color;
        font-size: 2*$font-size-large;
        margin-bottom: 20px;
      }
      .content-info{
        font-size: $font-size-large;
        color: $text-color-blue;
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
        left: 30px;
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
   position: relative;
   height: auto;
   overflow: hidden;
 }
  .section-content-pic{
    position: absolute;
    top: $section-1+200;
    /*width: 100%;*/
    right: -55%;
    //transform: translateX(-50%);
    z-index: 0;
  }
  .section-content-bottompic{
    position: absolute;
    bottom:0;
    left: 0;
   // transform: translateY(-50%);
    z-index: 0;
    width: 100%;
  }
   .section-btn{
     position: relative;
     z-index: 1;
     /*height: 300px;*/
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
     }
     .customer{
       margin-top: 100px;
       height: 180px;
        border-top: 1px solid #666666;
       border-bottom: 1px solid #666666;
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
          }
       }
     }
   }
  #content-1{
    height: auto;
    width: 100%;
    background-image: url("../assets/images/home/sy_bj_1.png") ;
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
        margin-top: 50px;

      }

    }
  }
  #content-2{
    height: auto;
    width: 100%;
    background-image: url("../assets/images/home/BG_1.png") ;
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
        top: 80px;
        right: 0px;
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
        left: 200px;

      }
      .tx4{
        bottom: -55px;
        right: 220px;
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

}
</style>
