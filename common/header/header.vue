<template>
    <header class="header">
      <Container>
        <div class="content">
          <div class="logo">
            <img src="../../assets/images/public/logo.png" alt="">
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li class="item active">
                <nuxt-link to="/">首页</nuxt-link>
              </li>
              <li class="item ">
                <nuxt-link to="/">游戏分类</nuxt-link>
              </li>
              <li class="item ">
                <nuxt-link to="/">关于</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
</template>

<script>
    export default {
        // name: "header"
    }
</script>

<style  lang="scss">
 $header-height:80px;
  .header{
    height:$header-height;
    width: 100%;
    background-color: $body-background;
    .content{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;

    }
    .logo{
      height: 100%;
      width: 150px;
      margin-right: 50px;
     img{
       width: 100%;
       margin-top: 15px;
     }
    }
    .nav{
      height: 100%;
      max-width: 1000px;
      margin-left: 350px;
      &-list{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
      }
      .item{
        position: relative;
        height: 100%;
        width: auto;
        line-height:$header-height;
        white-space: nowrap;
        margin: 0 5px;

       .nuxt-link-active{
         display: inline-block;
         height: 40px;
         min-width: 100px;
         line-height: 40px;
         text-align: center;
         font-size: $font-size-large;
         color: $text-color-white;
       }
      }
      .item.active {
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            display: block;
            width: 50px;
            height: 3px;
            background-color: $border-color-active;
          }
        .nuxt-link-active{
          color:$text-color;

          border-radius: 50px;
          background-color: $active-background;
        }
      }
    }
  }
</style>
