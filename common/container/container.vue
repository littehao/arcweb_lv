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
<style  lang="scss">

 .container{
   height: 100%;
   width:$container-width;
   margin-right: auto;
   margin-left: auto;
   padding-left: 15px;
   padding-right: 15px;
   //background-color: @body-background;
 }
</style>
