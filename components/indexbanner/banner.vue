<template>
    <div class="lv-banner">
        <div class="fl-part animated">
            <div class="part part1 layer fl-part1" data-depth="1.0" style="background-image: url(~assets/images/sy_yuansu_1.png)"></div>
            <div class="part part2 layer fl-part2" data-depth="0.9" style="background-image: url(~assets/images/sy_yuansu_2.png)"></div>
            <div class="part part3 layer fl-part3" data-depth="0.8" style="background-image: url(~assets/images/sy_yuansu_3.png)"></div>
        </div>
        <div class="fr-part animated">
            <div class="part part1 layer fr-part1" data-depth="1.0" style="background-image: url(~assets/images/sy_yuansu_4.png)"></div>
            <div class="part part2 layer fr-part2" data-depth="0.9" style="background-image: url(~assets/images/sy_yuansu_5.png)"></div>
            <div class="part part3 layer fr-part3" data-depth="0.8" style="background-image: url(~assets/images/sy_yuansu_6.png)"></div>
            <div class="part part4 layer fr-part4" data-depth="0.8" style="background-image: url(~assets/images/sy_yuansu_7.png)"></div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        
    }
</script>

<style lang="less" scoped>
.container{
    width:100%;
    height:100%;
    background:url(~assets/images/sy_banner_1.png) center;
    background-size:cover;
    position: relative;
    .fl-part{
        width:50%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
    }
    .fr-part{
        width:50%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
    }
    .part{
        position: absolute;
        background-repeat: no-repeat;
        backface-visibility:hidden;
    }
    .fl-part1{
        width:383px;
        height:465px;
        top:128px;
        left:0;
    }
    .fl-part2{
        width:225px;
        height:396px;
        top:226px;
        left:290px;
    }
    .fl-part3{
        width:397px;
        height:470px;
        top:365px;
        left:110px;
    }

    .fr-part1{
        width:228px;
        height:427px;
        top:130px;
        right:159px;
    }
    .fr-part2{
        width:215px;
        height:413px;
        top:250px;
        right:140px;
    }
    .fr-part3{
        width:354px;
        height:546px;
        top:238px;
        right:226px;
    }
    .fr-part4{
        width:470px;
        height:286px;
        top:565px;
        right:85px;
    }
}

</style>


