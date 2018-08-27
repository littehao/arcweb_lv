<template>
   <footer class="m-footer">
    <div class="share">
      <a href="javascrip:void(0);"><img src="~assets/images/footer/footer-fb.png" alt=""></a>
      <a href="javascrip:void(0);"><img src="~assets/images/footer/footer-ytb.png" alt=""></a>
      <a href="javascrip:void(0);"><img src="~assets/images/footer/footer-sky.png" alt=""></a>
      <a href="javascrip:void(0);"><img src="~assets/images/footer/footer-wb.png" alt=""></a>
    </div>
    <p>Copyright © 2017-2018 System All Rights Reserved</p>
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
  // height: $footer-height;
  background-color:$footer-bg;
  padding:10px 0;
  .share{
    text-align: center;
    a{
      display: inline-block;
      margin:0 10px;
    }
  }
  p{
    width: 100%;
    height:100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#506a84;
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
