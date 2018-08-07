<template>
    <section id="home">
      <lv-banner></lv-banner>
      <div id="content">
        <Container>
          <div class="card-info">
            <div class="card-info-left">

            </div>
            <div class="card-info-right">

            </div>
          </div>
        </Container>
      </div>
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
  #content{
    height: auto;
    width: 100%;
    .card-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-left{
      
      }
      &-right{

      }
    }
  }
}
</style>
