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
      <div class="lv-celebrity">
       <Container>
          <div class="lv-celebrity-section">
            <h3 class="celebrity-title">LV签约网红主持人</h3>
            <Force :height="650" :width="1200" :nodes="nodes" :edges="edges"></Force>
          </div>
       </Container>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'; 
    import 'swiper/dist/css/swiper.min.css';
    export default {
      asyncData ({ app,params }) {
        console.log(app)
        return app.$axios.get(`/OpenAPI/V1/Nav/getListByItemId`,{type:'hot'})
          .then((res) => {
           // console.log(res,'------')
            return { data: res.data.data }
          })
      },
        data(){
            return {
                height:0,
                value1: 0,
                nodes:[],
                edges:[]
            //      nodes:[
            //       {name:"湖南邵阳",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"山东莱州",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"广东阳江",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"山东枣庄",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"泽",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"恒",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"鑫",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"明山",'img':require('../../assets/images/avatar/tx_3.png')},
            //       {name:"班长",'img':require('../../assets/images/avatar/tx_3.png')}
            //     ],
            //
            // edges:[
            //   {source:0,target:4,relation:"籍贯",value:1.3},
            //   {source:4,target:5,relation:"舍友",value:1},
            //   {source:4,target:6,relation:"舍友",value:1},
            //   {source:4,target:7,relation:"舍友",value:1},
            //   {source:1,target:6,relation:"籍贯",value:2},
            //   {source:2,target:5,relation:"籍贯",value:0.9},
            //   {source:3,target:7,relation:"籍贯",value:1},
            //   {source:5,target:6,relation:"同学",value:1.6},
            //   {source:6,target:7,relation:"朋友",value:0.7},
            //   {source:6,target:8,relation:"职责",value:2}
            //]

            }
        },
          methods:{

            mapData(){
              let nodes=[]
              let edges=[]
              this.data.anchor_list.map((item,index)=>{
                let no={
                  img:item.avatar,
                  index:index
                }
               let redom={
                 source:Math.floor(Math.random()*this.data.anchor_list.length),
                 target:Math.floor(Math.random()*this.data.anchor_list.length),
                 value:(Math.random()*3).toFixed(1)
               }
                nodes.push(no)
                edges.push(redom)
              })
              this.nodes=nodes;
              this.edges=edges
            }
        },
        created(){
         // this.getdata()
        },
        mounted(){
          //console.log(this)
            this.mapData()
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
    .lv-celebrity{
      height: 860px;
      width: 100%;
      background-image: url("../../assets/images/content/nrzz_bj_2.png");
      background-size: cover;
      background-repeat: no-repeat;
      .lv-celebrity-section{
        width: 100%;
        height: auto;
        overflow: hidden;
        .celebrity-title{
          height: 40px;
          line-height: 40px;
          margin-top: 55px;
          color: $title-color;
          font-size: $font-size-base*2;
          text-align: center;
        }
      }
    }
}
</style>
