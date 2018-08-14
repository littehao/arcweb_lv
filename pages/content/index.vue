<template>
    <div class="lv-content">
      <div class="lv-content-banner" :style="{'height': height + 'px'}">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_1.png" alt="" style="width:45%">
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">网红主播造星计划</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">专业经纪团队，工业化造星</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_2.png" alt="" style="width:30%">
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">网红主播造星计划</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">专业经纪团队，工业化造星</p>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="lv-slide-content">
                            <img class="img" src="~assets/images/content/nrzz_rw_3.png" alt="" style="width:42%">
                            <div class="text">
                                <h3 class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s">网红主播造星计划</h3>
                                <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">专业经纪团队，工业化造星</p>
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
            <img src="../../assets/images/content/force.png" alt="">
            <!--<Force :height="660" :width="1200" :nodes="nodes" :edges="edges"></Force>-->
          </div>
       </Container>
      </div>
      <div class="lv-channel">
          <Container>
              <h3 class="title">LVTV 专属频道</h3>
              <div class="channel-list">
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_wdpd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg135"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">舞蹈频道</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_yypd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg225"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">音乐频道</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_djpd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg135"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">电竞频道</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_typd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg225"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">体育频道</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_cppd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg135"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">彩票频道</p>
                          </div>
                      </div>
                  </div>
                  <div class="item">
                      <div class="item-t">
                          <div class="avatar"><img src="~assets/images/content/lvtv_zhpd.png" alt=""></div>
                          <div class="bag-opa"></div>
                          <span class="shadow deg135"></span>
                          <div class="info">
                            <div class="img"><img src="~assets/images/content/play.png" alt=""></div>
                            <p class="caption">综合频道</p>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
      <div class="lv-starteam">
          <Container>
               <div class="lv-starteam-bg">
                   <h3 class="title">专业的造星团队</h3>
                    <div class="lv-starteam-content">
                        <div class="left">
                            <h2>钻石级导师开启你的追梦之旅</h2>
                                <p>多维度的训练方式，专业的经纪团队，多渠道的商演机会，工业化的造星工厂</p>
                                <p>如果你有极强的表现欲望</p>
                                <p>如果你热爱游戏，唱歌，跳舞</p>
                                <p>如果你有特殊才艺或技能</p>
                                <p>如果你想实现梦想</p>
                                <p>请与我们联络</p>
                                <!-- <div class="link"><nuxt-link to="/contactus">申请加入LV</nuxt-link></div> -->
                        </div>
                        <div class="right">
                            <img class="img1" src="~assets/images/content/zxtd_3.png" alt="">
                            <img class="img2" src="~assets/images/content/zxtd_4.png" alt="">
                            <img class="img3" src="~assets/images/content/zxtd_1.png" alt="">
                            <img class="img4" src="~assets/images/content/zxtd_2.png" alt="">
                        </div>
                    </div>
               </div>
          </Container>
      </div>
      <footerlink></footerlink>
    </div>
</template>

<script>
    import $ from 'jquery'
    import 'animate.css'
    import * as swiperAni from '../../plugins/swiper.animate.min.js'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import { mapGetters } from 'vuex'
    export default {
    //   asyncData ({ app,params }) {
    //     console.log(app)
    //     return app.$axios.get(`/OpenAPI/V1/Nav/getListByItemId`,{type:'hot'})
    //       .then((res) => {
    //        // console.log(res,'------')
    //         return { data: res.data.data }
    //       })
    //   },
        layout (context) {
            return context.userAgent;
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
        computed:{
            ...mapGetters([
                'getAgent'
            ])  
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
              console.log(JSON.stringify(nodes))

              this.nodes=nodes;
              this.edges=edges
            },
            revealOnScroll(tt,t){
                $(".revealOnScroll:not(.animated)").each(function () {
                    var $this = $(this), 
                        offsetTop = $this.offset().top; 
                    if(t + tt > offsetTop) { 
                        if ($this.data('timeout')) { 
                            window.setTimeout(function(){
                                $this.addClass('animated ' + $this.data('animation')); 
                            }, parseInt($this.data('timeout')));
                        } else {
                            $this.addClass('animated ' + $this.data('animation'));
                        } 
                    }   
                })
            }
        },
        created(){
         // this.getdata()
        },
        mounted(){
          //console.log(this)
            // this.mapData()
            if(this.getAgent == 'mobile'){
                window.location.href = '/'
            }
            this.height = document.documentElement.clientHeight;
            var mySwiper = new Swiper('.swiper-container', {
                // autoplay:{
                //     delay:5000
                // },
                autoplay:false,
                speed:500,
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on:{
                    init: function(){
                        swiperAni.swiperAnimateCache(this); //隐藏动画元素 
                        swiperAni.swiperAnimate(this); //初始化完成开始动画
                    }, 
                    slideChangeTransitionEnd: function(){ 
                        swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    } 
                }
            })

            let tt = document.documentElement.clientHeight;
            let that = this;
            let win_height_padded = tt * 1.1;
            window.addEventListener('scroll',function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop; 
                var top_div = document.getElementById( "header" );
                if( t >= 80 ) {
                    top_div.style.background = "#27272E";
                } else {
                    top_div.style.background = "transparent";
                }

                that.revealOnScroll(tt,t);
            },false)
        },
        beforeDestroy(){
            if (window.removeEventListener) {
                window.removeEventListener("scroll",this,false);
            }
        },
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
                bottom:30%;
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
                transition: all 0.3s linear;
                img{
                    width:100%;
                    display:block;
                    transition: all 0.3s linear;
                }
                .intro{
                    .name{
                        font-size:$font-size-small * 2;
                        margin-right:15px;
                    }
                    .info{
                        font-size:$font-size-large;
                    }
                }
                // &:hover{
                //     transform: translateY(-5px);
                // }
                // &:hover img{
                //     box-shadow: 0 0 10px #101010;
                // }
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
          margin-bottom: 35px;
          color: $title-color;
          font-size: $font-size-base*2;
          text-align: center;
        }
      }
    }
    .lv-channel{
        width:100%;
        height:876px;
        background:$body-background;
        padding:50px 0;
        color:#fff;
        .title{
            text-align: center;
            font-size:$font-size-base * 2;
            margin-bottom:53px;
        }
        .channel-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            .item{
                width:33.3%;
                padding:0 48px;
                margin-bottom:50px;
                position: relative;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
                will-change: transform;
                transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                transition: all 0.2s linear;
                // cursor: pointer;
                .item-t{
                    width:300px;
                    height:300px;
                    position: relative;
                    .bag-opa{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:#000;
                        opacity: 0.2;
                    }
                    .shadow{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        z-index: 1;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        transition: banckground 0.2s linear;
                    }
                    .shadow.deg135{
                        background-image: -webkit-linear-gradient(135deg,rgba(0,0,0,0.9),transparent 40%);
                        background-image: linear-gradient(135deg,rgba(0,0,0,0.9),transparent 40%);
                    }
                    .shadow.deg225{
                        background-image: -webkit-linear-gradient(225deg,rgba(0,0,0,0.9),transparent 40%);
                        background-image: linear-gradient(225deg,rgba(0,0,0,0.9),transparent 40%);
                    }
                    .info{
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        text-align: center;
                        padding-top:118px;
                        .caption{
                            margin-top:58px;
                            font-size:28px;
                        }
                    }
                    &:after{
                        display:block;
                        content:"";
                        width:100%;
                        height:22px;
                        background:url(~assets/images/content/floating-card-shadow.png) no-repeat;
                        background-size:100%;
                        position: absolute;
                        top:100%;
                        left:0;
                        z-index:-1;
                    }
                }
                // &:hover{
                //     transform: rotateX(10deg) rotateY(5deg);
                // }
                // &:hover .shadow.deg135{
                //     background-image: -webkit-linear-gradient(155deg,rgba(0,0,0,0.9),transparent 50%);
                //     background-image: linear-gradient(155deg,rgba(0,0,0,0.9),transparent 50%);
                // }
                // &:hover .shadow.deg225{
                //     background-image: -webkit-linear-gradient(245deg,rgba(0,0,0,0.9),transparent 50%);
                //     background-image: linear-gradient(245deg,rgba(0,0,0,0.9),transparent 50%);
                // }
            }
        }
    }
    .lv-starteam{
        width:100%;
        height:860px;
        padding-top:90px;
        background: #0d0d11;
        color:#fff;
        .title{
            font-size:28px;
            text-align: center;
        }
        .lv-starteam-bg{
            width:100%;
            height:100%;
            background: url(~assets/images/content/nrzz_wzbj.png) no-repeat 180px 150px  #0d0d11;
            overflow:hidden;
        }
        .lv-starteam-content{
            width:100%;
            margin-top:73px;
            .left{
                width:680px;
                float:left;
                h2{
                    font-size:40px;
                    margin-bottom:25px;
                }
                p{
                    font-size:20px;
                    margin-bottom:25px;
                }
                .link{
                    margin-top:80px;
                    a{
                        display: block;
                        width:245px;
                        height:65px;
                        background:#FFE95C;
                        border-radius:50px;
                        text-align: center;
                        line-height: 65px;
                        color:#000;
                        font-size:20px;
                    }
                }
            }
            .right{
                width:500px;
                float:right;
                .img1{
                    transform: translateX(20px);
                }
                .img2{
                    transform: translate(50px,-20px);
                }
                .img3{
                    transform: translateX(-80px);
                }
                .img4{
                    transform: translate(230px,-300px);
                }
            }
        }
    }
}
</style>
