<template>
    <div class="container">
      <span></span>
      <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "container"
    }
</script>
<style  lang="scss">

 .container{
   /*height: 100%;*/
   width:$container-width;
   margin-right: auto;
   margin-left: auto;
   position: relative;
   z-index: 11;
 }
</style>
