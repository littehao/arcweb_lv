<template>
    <section id="home">
      <lv-banner></lv-banner>
    </section>
</template>

<script>
import lvBanner from '~/components/homebanner/banner'
export default {
    name: "index",
    components:{
        lvBanner
    }
}
</script>

<style lang="scss">
#home{
  height: 100%;
  width: 100%;
  background-color: $body-background;
  padding-top: 80px;
}
</style>
