<template>
    <div class="layout">
        <Mheader></Mheader>
        <m-banner v-if="show"></m-banner>
        <nuxt/>
        <Mfooter></Mfooter>
    </div>
</template>

<script>
    import mBanner from '~/components/homebanner/mhomebanner'
    export default {
        components: {
            mBanner
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
    }
</script>

<style  lang="scss">
body{
    height: 100%;
    width:100%;
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
    background:#1c1c23;
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
