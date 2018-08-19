<template>
    <div class="swiper-slide lv-celebrity">
        <Container>
            <div class="lv-celebrity-section">
                <h3 class="celebrity-title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0s">LV独家签约网红主播人数超过千人</h3>
                <img src="../../assets/images/content/force.png" class="ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.1s" alt="">
            </div>
        </Container>
        <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="20"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
    >
      </vue-particles>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
#particles-js {
    // background-image: url("./assets/sky.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

