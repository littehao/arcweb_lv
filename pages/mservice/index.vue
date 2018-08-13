<template>

    <div class="lv-service">
        <div class="lv-service-banner" :style="style">
            <div class="lv-service-content">
                <div>
                    <h3 class="animated fadeInUp">Live Video</h3>
                    <p class="animated fadeInUp" >一站式综合博娱直播系统<br>开创者与定义者</p>
                    <div class="line"></div>
                    <p class="animated fadeInUp">为每位客户提供最专业与最高品质的服务是我们的目标。您的满意，即是我们继续往前的最大动力。</p>
                    <dl class="text animated fadeInUp">
                        <dt>优质服务</dt>
                        <dd>API放线</dd>
                        <dd>直播+系统包网</dd>
                        <dd>直播+游戏 系统包网</dd>
                        <dd>LV游戏接口+直播</dd>
                        <dd>LV直播系统接口+游戏</dd>
                        <dd>直播服务+解决方案</dd>
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
            <h3>我们的服务支持</h3>
                <ul class="lv-service-ul">
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_api.png" alt=""></div>
                        <div class="t">API放线</div>
                    </div>
                    <div class="info">
                        提供完整的 API 发布、管理、维护生命周期管理。您只需简单操作，即可快速、低成本、低风险的开放数据或服务
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbbw.png" alt=""></div>
                        <div class="t">直播+ 系统包网</div>
                    </div>
                    <div class="info">
                        多维度实时监测，通过数据分析对于可疑数据进行预警提醒，让您免受损失
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbyx.png" alt=""></div>
                        <div class="t">直播+游戏 系统包网</div>
                    </div>
                    <div class="info">
                        不论是新创立的公司，还是存在于行业里很久的品牌公司，我们都将提供一站式一体化服务，将产品与服务有效结合，为您带来最好的服务体验。
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_yxzb.png" alt=""></div>
                        <div class="t">LV游戏接口+直播</div>
                    </div>
                    <div class="info">
                        全球关系网给我们带来巨大优势，为我们的游戏供应商我们提供最有价值的市场反馈，以此来提高、革新更好的产品，确保运营商精准的商业利润，以及博大精深的企业文化
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_jkyx.png" alt=""></div>
                        <div class="t">LV直播系统接口+游戏</div>
                    </div>
                    <div class="info">
                        提供完整的 API 发布、管理、维护生命周期管理。您只需简单操作，即可快速、低成本、低风险的开放数据或服务
                    </div>
                </li>
                <li class="item">
                    <div class="title">
                        <div class="img"><img src="~assets/images/service/fwzc_icon_zbjj.png" alt=""></div>
                        <div class="t">直播服务+解决方案</div>
                    </div>
                    <div class="info">
                        全球关系网给我们带来巨大优势，为我们的游戏供应商我们提供最有价值的市场反馈，以此来提高、革新更好的产品，确保运营商精准的商业利润，以及博大精深的企业文化
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
                    height:75px;
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
