<template>
  <div class="layout">
    <Lheader></Lheader>
    <lv-banner v-if="show" v-model="show">
      <div class="control-down" @click="controldown">
          <div class="down-page" style="display:block;">
              <i class="icon-darr"></i>
          </div>
      </div>
    </lv-banner>
    <nuxt/>
    <Lfooter></Lfooter>
  </div>
</template>
<script>
  import lvBanner from '~/components/homebanner/banner'
  export default {
    components: {
      lvBanner
    },
    computed:{
      show(){
        if(this.$route.name == 'index'){
          return true;
        }else{
          return false;
        }
      }
    },
    methods:{
      controldown(){
          let tt = document.documentElement.clientHeight;
          $('html,body').animate({scrollTop:tt},500);
      }
    }
  }
</script>

<style lang="scss">
  body{
    height: 100%;
    min-width:$container-width;
    &:after{
      content: '';
      clear: both;
      display: table;
    }
    &:before{
      content: '';
      display: table;
    }
  }
  html,#__nuxt,#__layout,.layout{
    height: 100%;
    /*width: 100%;*/
  }
html
{
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}


</style>

