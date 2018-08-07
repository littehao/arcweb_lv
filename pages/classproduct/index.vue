<template>
    <div class="lv-classproduct">
        <div class="lv-classproduct-content1">
            <div class="lv-classproduct-banner">
                <img src="~assets/images/classproduct/banner.png" alt="">
            </div>
            <div class="classproduct-part">
                <Container>
                    <product-part1></product-part1>
                </Container>
            </div>
        </div>
        <div class="lv-classproduct-content2">
            <div class="classproduct-part">
                <Container>
                    <product-part2></product-part2>
                </Container>
            </div>
        </div>
    </div>
</template>

<script>
import productPart1 from '~/components/classproduct/part1'
import productPart2 from '~/components/classproduct/part2'
export default {
    name: "index",
    components:{
        productPart1,
        productPart2,
    }
}
</script>

<style lang="scss">
.lv-classproduct{
    width:100%;
    min-width:1200px;
    .lv-classproduct-content1{
        width:100%;
        background:url(~assets/images/classproduct/bg.png) no-repeat center bottom #1C1C23;
        background-size:100%;
        .lv-classproduct-banner{
            width:100%;
            img{
                width:100%;
                display: block;
            }
        }
    }
    .lv-classproduct-content2{
        background-color:#1C1C23;
    }
}
</style>
