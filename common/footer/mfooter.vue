<template>
   <footer class="m-footer">
     <p><img src="../../assets/images/public/logo.png" alt=""></p>
   </footer>
</template>

<script>
    export default {
        data(){
          return{

          }
        }
    }
</script>

<style  lang="scss">
  $footer-height:45px;
  $footer-bg:#0F0E0C;
  $footer-text-color:#2A4560;
.m-footer{
  width: 100%;
  height: $footer-height;
  background-color:$footer-bg;
  p{

    width: 100%;
    height:100%;
    text-align: center;
   display: flex;
    align-items: center;
    justify-content: center;
    span{
      display: inline-block;
      height: 100%;
      color: $footer-text-color;
      font-size: $font-size-base;
      line-height: $footer-height;
    }
    img{
      position: relative;
      display: inline-block;
      width: 100px;
      height: auto;
      margin: 0 10px;
    }
  }
}
</style>
