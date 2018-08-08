<template>
  <div class="layout">
    <Header></Header>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  body{
    height: 100%;
    /*width: 100%;*/
    min-width:1200px;
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
<script>
  // import Header from "../common/header/header";
  export default {
    components: {
      // Header
    }
  }
</script>
