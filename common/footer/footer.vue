<template>
   <footer class="footer">
     <Container>
       <p>LVTV-the inventor of live egaming system Copyright © 2017-2018 System All Rights Reserved</p>

     </Container>
   </footer>
</template>

<script>
    export default {
        name: "lvfooter"
    }
</script>

<style scoped lang="scss">
  $footer-height:45px;
  $footer-bg:#0F0E0C;
  $footer-text-color:#2A4560;
.footer{
  width: 100%;
  height: $footer-height;
  background-color:$footer-bg;
  p{

    width: 100%;
    text-align: center;
    color: $footer-text-color;
    font-size: $font-size-base;
    line-height: $footer-height;
  }
}
</style>
