<template>
    <div class="lv-about">
        <div class="lv-about-banner" :style="style">
            <div class="lv-about-intro">
                <h3>关于Live Video</h3>
                <div class="text">LIVE VIDEO是全球领先的直播互动综合博娱系统供应商，游戏品类包括棋牌类游戏、电子游戏、彩票游戏、休闲游戏</div>
                <div class="text">更有时下最热门的线上抓娃娃机、线上推币机，种类众多，玩法多元。</div>
                <div class="text">我们真正定义直播+博彩娱乐新时代，以直播互动为核心，为全球用户带来全新的互动游戏投注体验。</div>
                <div class="text">我们也将陆续推出直播+体育，电竞、真人视讯、现场竞技等多元化博娱游戏，LIVE VIDEO敬邀全球用户共享直播互动游戏的乐趣。</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
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
.lv-about{
    .lv-about-banner{
        width:100%;
        background:url(~assets/images/about/gywm_bj_1.png) no-repeat;
        background-size:cover;
        position: relative;
        .lv-about-intro{
            position: absolute;
            top:50%;
            right:0;
            margin-top:-225px;
            width:1050px;
            height:450px;
            background:rgba(0,0,0,0.5);
            color:#fff;
            padding:58px 58px 0 58px;
            h3{
                font-size:36px;
                margin-bottom:15px;
            }
            .text{
                font-size:20px;
                margin-bottom:20px;
                line-height:30px;
            }
        }
    }
}
</style>
