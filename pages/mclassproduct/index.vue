<template>
    <div class="m-classproduct">
        <div class="lv-classproduct-content1">
            <div class="lv-classproduct-banner" :style="style" :class="{enbg:$i18n.locale == 'en'}" >
                <!-- <img src="~assets/images/classproduct/banner.png" alt=""> -->
                <div class="productbtn"><a target="_blank" href="https://m.katoong.com/" :class="{enbg:$i18n.locale == 'en'}"></a></div>
            </div>
            <div class="classproduct-part">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_1.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>01</span>
                                <div>
                                    <h3>{{$t('classproduct.content[0].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                                <p>
                                  {{$t('classproduct.content[0].text')}}
                                </p>
                            </div>
                        </div>
                        <div class="bottom revealOnScroll" data-animation="fadeInUp">
                            <div class="item"><img src="~assets/images/classproduct/tx_1_1.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_1_2.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_1_3.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lv-classproduct-content2">
            <div class="classproduct-part1">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_2.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>02</span>
                                <div>
                                    <h3>{{$t('classproduct.content[1].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                              <p>{{$t('classproduct.content[1].text')}}</p>
                            </div>
                        </div>
                        <div class="bottom revealOnScroll" data-animation="fadeInUp">
                            <div class="item"><img src="~assets/images/classproduct/tx_2_1.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_2_2.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_2_3.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_3.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>03</span>
                                <div>
                                    <h3>{{$t('classproduct.content[2].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                              <p>{{$t('classproduct.content[2].text')}}</p>
                            </div>
                        </div>
                        <div class="bottom revealOnScroll" data-animation="fadeInUp">
                            <div class="item"><img src="~assets/images/classproduct/tx_3_1.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_3_2.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_3_3.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_4.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>04</span>
                                <div>
                                    <h3>{{$t('classproduct.content[3].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                              <p>{{$t('classproduct.content[3].text')}}</p>
                            </div>
                        </div>
                        <div class="bottom revealOnScroll" data-animation="fadeInUp">
                            <div class="item"><img src="~assets/images/classproduct/tx_4_1.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_4_2.png" alt=""></div>
                            <div class="item"><img src="~assets/images/classproduct/tx_4_3.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_5.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>05</span>
                                <div>
                                    <h3>{{$t('classproduct.content[4].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                              <p>{{$t('classproduct.content[4].text')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_6.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>06</span>
                                <div>
                                    <h3>{{$t('classproduct.content[5].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                              <p>{{$t('classproduct.content[5].text')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_7.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>07</span>
                                <div>
                                    <h3>{{$t('classproduct.content[6].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                                <p>
                                   {{$t('classproduct.content[6].text')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="classproduct-part2">
                <div class="part">
                    <div class="classproduct-right revealOnScroll" data-animation="fadeInUp">
                        <img src="~assets/images/classproduct/yxfl_8.png" alt="">
                    </div>
                    <div class="classproduct-left">
                        <div class="top">
                            <div class="title revealOnScroll" data-animation="fadeInUp">
                                <span>08</span>
                                <div>
                                    <h3>{{$t('classproduct.content[7].title')}}</h3>
                                    <p>Live Video</p>
                                </div>
                            </div>
                            <div class="info revealOnScroll" data-animation="fadeInUp">
                                <p>
                                   {{$t('classproduct.content[7].text')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape1"></div>
            <div class="shape2"></div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import 'animate.css'
import { mapGetters } from 'vuex'
export default {
    layout (context) {
        return context.userAgent;
    },
    data(){
        return {
            style:{
                height:0,
            }
        }
    },
    computed:{
        ...mapGetters([
            'getAgent'
        ])
    },
    mounted(){
        if(this.getAgent == 'default'){
            window.location.href = '/'
        }
        this.style.height = document.documentElement.clientHeight + 'px';
        let tt = document.documentElement.clientHeight;
        let that = this;
        let win_height_padded = tt * 1.1;
        // window.addEventListener('scroll',function(){
        //     var t = document.documentElement.scrollTop || document.body.scrollTop;
        //     that.revealOnScroll(tt,t);
        // },false)
    },
    beforeDestroy(){
        // if (window.removeEventListener) {
        //     window.removeEventListener("scroll",this,false);
        // }
    },
    methods:{
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
    }
}
</script>

<style lang="scss">
.m-classproduct{
    width:100%;
    .lv-classproduct-content1{
        width:100%;
        background:url(~assets/images/classproduct/bg.png) no-repeat center bottom #1C1C23;
        background-size:cover;
        .lv-classproduct-banner{
            width:100%;
            background:url(~assets/images/classproduct/productbg.png) no-repeat center;
            background-size:100%;
            position: relative;
            .productbtn{
                position: absolute;
                bottom: 50px;
                left:0;
                width:100%;
                text-align: center;
                a{
                    width:122px;
                    height:50px;
                    margin:0 auto;
                    display: block;
                    background:url(~assets/images/classproduct/productbtn.png) no-repeat center;
                    background-size:100%;
                }
                a.enbg{
                    background:url(~assets/images/classproduct/productbtn_en.png) no-repeat center;
                    background-size:100%;
                }
            }
        }
        .lv-classproduct-banner.enbg{
            background:url(~assets/images/classproduct/productbg_en.png) no-repeat center;
            background-size:100%;
        }
        .part{
            padding-top:120px;
        }
    }
    .lv-classproduct-content2{
        background-color:#1C1C23;
        position: relative;
        z-index: 1;
        overflow:hidden;
        .classproduct-part1{
            background:url(~assets/images/classproduct/yxfl_ys_3.png) no-repeat;
            background-position:-100px top;
            background-size:300%;
            padding-top:100px;
            position: relative;
            z-index: 10;
        }
        .classproduct-part2{
            position: relative;
            z-index: 10;
        }
        .shape1{
            position: absolute;
            top:550px;
            left:0;
            background:url(~assets/images/classproduct/shape1.png) no-repeat;
            width:733px;
            height:1500px;
        }
        .shape2{
            position: absolute;
            top:1600px;
            right:0;
            background:url(~assets/images/classproduct/shape2.png) no-repeat;
            width:758px;
            height:1547px;
        }
    }
    .part{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom:120px;
        .classproduct-left{
            width:80%;
            margin:0 auto;
            color:#fff;
        }
        .classproduct-right{
            width:100%;
            color:#fff;
            img{
                width:80%;
                display:block;
                margin:0 auto;
            }
        }
    }
    .top{
        margin-bottom:30px;
        border-left:1px dashed #fff;
    }
    .title{
        display: flex;
        align-items: center;
        margin-bottom:21px;
        height:72px;
        span{
            font-size:90px;
            font-weight:400;
            position: relative;
            height:72px;
            display: flex;
            padding-left:10px;
            line-height:68px;
        }
        span:before{
            display:block;
            content:"";
            width:5px;
            height:100%;
            background:#fff;
            position: absolute;
            top:0px;
            left:-1px;
        }
        h3{
            font-size:30px;
        }
        p{
            font-size:28px;
        }
    }
    .info{
        font-size:16px;
        line-height:25px;
        padding-left:10px;
        padding-bottom:10px;
    }
    .bottom{
        display: flex;
        align-items: center;
        .item{
            margin-right:25px;
            img{
                width:60px;
            }
        }
    }
}
</style>
