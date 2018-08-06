<template>
    <div class="container">
      <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "Container"
    }
</script>
<style  lang="less">

 .container{
   height: 100%;
  // width: @container-width;
   margin-right: auto;
   margin-left: auto;
   //background-color: @body-background;
 }
</style>
