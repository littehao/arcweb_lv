<template>
    <div class="lv-service">
        <div class="lv-service-banner" :style="style">
            <Container>
                <div class="lv-service-content">
                    <div>
                        <h3>Live Video</h3>
                        <p>一站式综合博娱直播系统的开创者与定义者</p>
                    </div>
                </div>
                <div class="control-down">
                    <div class="down-page">
                        <i class="icon-darr"></i>
                    </div>
                </div>
            </Container>
        </div>
        <div class="lv-service-list">
             <Container>
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
             </Container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "service",
        data(){
            return {
                style:{
                    height:0,
                }
            }
        },
        mounted(){
            this.style.height = document.documentElement.clientHeight + 'px';
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
        .lv-service-content{
            width:70%;
            height:100%;
            display:flex;
            align-items: center;
            flex-wrap: wrap;
            text-align: center;
            letter-spacing: 5px;
            h3{
                font-size:48px;
                color:#fff;
                padding:15px 0;
                width:100%;
            }
            p{
                font-size:34px;
                color:#fff;
                width:100%;
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
        height:972px;
        background:url(~assets/images/service/fwzc_bj_2.png) no-repeat;
        background-size:cover;
        padding-top:103px;
        h3{
            font-size:40px;
            color:#fff;
            text-align: center;
            font-weight:400;
        }
        .lv-service-ul{
            display:flex;
            flex-wrap: wrap;
            margin-top:55px;
            .item{
                width:50%;
                padding:0 100px 0 50px;
                margin-bottom:100px;
                color:#fff;
                .title{
                    display:flex;
                    align-items: center;
                    margin-bottom:20px;
                    .img{
                        margin-right:20px;
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
