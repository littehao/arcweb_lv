<template>
     <div class="part1">
        <div class="classproduct-left">
            <div class="top">
                <div class="title">
                    <span>01</span>
                    <div>
                        <h3>棋牌游戏</h3>
                        <p>Live Video</p>
                    </div>
                </div>
                <div class="info">
                    <p>努力提升用户体验，改变了目前游戏类直播产品不能很好融合的行业痛点，让玩家一边看直播，一边下注成为可能，开奖信息实时公布，实时的下注倒计时提醒</p>
                </div>
            </div>
            <div class="bottom">
                <div class="item"><img src="~assets/images/classproduct/tx_1_1.png" alt=""></div>
                <div class="item"><img src="~assets/images/classproduct/tx_1_2.png" alt=""></div>
                <div class="item"><img src="~assets/images/classproduct/tx_1_3.png" alt=""></div>
            </div>
        </div>
        <div class="classproduct-right">
            <img src="~assets/images/classproduct/yxfl_1.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">
.part1{
    display: flex;
    align-items: center;
    padding:320px 0;
    .classproduct-left{
        width:487px;
        color:#fff;
        float:left;
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
                margin-bottom:10px;
            }
            p{
                font-size:28px;
            }
        }
        .info{
            font-size:16px;
            line-height:35px;
            padding-left:10px;
            padding-bottom:10px;
        }
        .bottom{
            display: flex;
            align-items: center;
            .item{
                margin-right: 65px;
            }
        }
    }
    .classproduct-right{
        width:683px;
        color:#fff;
        float:right;
        img{
            width:100%;;
        }
    }
}    
</style>

