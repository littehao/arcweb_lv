<template>

    <div class="lv-service">
        <div class="lv-service-banner" :style="style">
            <div class="lv-service-content">
                <div>
                    <h3 class="animated fadeInUp">LIVE VIDEO</h3>
                    <p class="animated fadeInUp" >{{$t('service.banner_text')}}</p>
                    <div class="line"></div>
                    <p class="animated fadeInUp">{{$t('service.mbanner_text')}}</p>
                    <dl class="text animated fadeInUp">
                        <dt>{{$t('service.mservice_mintitle')}}</dt>
                        <dd>{{$t('service.content[0].title')}}</dd>
                        <dd>{{$t('service.content[1].title')}}</dd>
                        <dd>{{$t('service.content[2].title')}}</dd>
                        <dd>{{$t('service.content[3].title')}}</dd>
                        <dd>{{$t('service.content[4].title')}}</dd>
                        <dd>{{$t('service.content[5].title')}}</dd>
                    </dl>
                </div>
            </div>
            <div class="control-down" @click="controldown">
                <div class="down-page">
                    <i class="icon-darr"></i>
                </div>
            </div>
        </div>
        <div class="lv-service-list">
            <h3>{{$t('service.service_title')}}</h3>
                <ul class="lv-service-ul">
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_api.png" alt=""></div>
                        <div class="t">{{$t('service.content[0].title')}}</div>
                    </div>
                    <div class="info">
                      {{$t('service.content[0].intro')}}
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbbw.png" alt=""></div>
                        <div class="t">{{$t('service.content[1].title')}}</div>
                    </div>
                    <div class="info">
                      {{$t('service.content[1].intro')}}
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbyx.png" alt=""></div>
                        <div class="t">{{$t('service.content[2].title')}}</div>
                    </div>
                    <div class="info">
                      {{$t('service.content[2].intro')}}
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_yxzb.png" alt=""></div>
                        <div class="t">{{$t('service.content[3].title')}}</div>
                    </div>
                    <div class="info">
                      {{$t('service.content[3].intro')}}
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_jkyx.png" alt=""></div>
                        <div class="t">{{$t('service.content[4].title')}}
                        </div>
                    </div>
                    <div class="info">
                      {{$t('service.content[4].intro')}}
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbjj.png" alt=""></div>
                        <div class="t">{{$t('service.content[5].title')}}
                        </div>
                    </div>
                    <div class="info">
                      {{$t('service.content[5].intro')}}
                    </div>
                </li>
            </ul>
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
            window.addEventListener('scroll',function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                that.revealOnScroll(tt,t);
            },false)
        },
        beforeDestroy(){
            if (window.removeEventListener) {
                window.removeEventListener("scroll",this,false);
            }
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
            },
            controldown(){
                let tt = document.documentElement.clientHeight;
                $('html,body').animate({scrollTop:tt},500);
            }
        }
    }
</script>

<style lang="scss">
.lv-service{
    width:100%;
    .lv-service-banner{
        width:100%;
        background:url(~assets/images/service/fwzc_bj_1.png) no-repeat right center;
        background-size:cover;
        position: relative;
        padding-top:100px;
        .lv-service-content{
            width:80%;
            padding:30px 10px;
            margin:0px auto;
            display:flex;
            align-items: center;
            flex-wrap: wrap;
            background:rgba(0,0,0,0.4);
            h3{
                font-size:20px;
                color:#fff;
                width:100%;
                letter-spacing: 3px;
            }
            p{
                font-size:14px;
                color:#fff;
                width:100%;
                letter-spacing: 2px;
            }
            .line{
                width:100%;
                height:1px;
                background:#fff;
                margin:10px 0;
            }
            .text{
                margin-top:50px;
                color:#fff;
                dt{
                    font-size:20px;
                }
                dd{
                    font-size:14px;
                    line-height: 35px;
                    display: flex;
                    align-items: center;
                    &:before{
                        display:inline-block;
                        content:"";
                        width:5px;
                        height:5px;
                        background:#fff;
                        border-radius:50%;
                        margin:0 20px;
                    }
                }
            }
        }
        .control-down{
            width: 51px;
            height: 57px;
            position: absolute;
            top: 89%;
            left: 50%;
            z-index: 999;
            margin: 0 0 0 -25px;
            cursor: pointer;
            text-align: center;
            .down-page {
                width: 51px;
                height: 57px;
                background-position: 0 -83px;
                animation: wave 1.5s both infinite;
                transition: all 1s;
                .icon-darr {
                    margin: 20px 0 0;
                    width: 29px;
                    height: 17px;
                    background-image: url(~assets/images/home/down.png);
                    background-repeat: no-repeat;
                    background-position:center;
                    background-size:100%;
                    display: inline-block
                }

            }
        }
    }
    .lv-service-list{
        width:100%;
        height:auto;
        background:url(~assets/images/service/fwzc_bj_2.png) no-repeat;
        background-size:cover;
        padding-top:50px;
        h3{
            font-size:30px;
            color:#fff;
            text-align: center;
            font-weight:400;
        }
        .lv-service-ul{
            display:flex;
            flex-wrap: wrap;
            margin-top:55px;
            .item{
                width:100%;
                margin-bottom:100px;
                color:#fff;
                padding:0 10%;
                .title{
                    margin-bottom:20px;
                    text-align: center;
                    .img{
                        margin-right:20px;
                        margin-bottom:15px;
                    }
                    .t{
                        font-size:24px;
                    }
                }
                .info{
                    font-size:16px;
                    line-height:25px;
                    color:#ccc;
                    height:auto;
                }
            }
        }
    }
}
@keyframes wave {
    0%,100% {
        transform: translate3d(0,0,0)
    }

    50% {
        transform: translate3d(0,15px,0)
    }
}

</style>
