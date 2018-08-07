<template>
    <header class="header">
      <Container>
        <div class="content">
          <div class="logo">
            <img src="../../assets/images/public/logo.png" alt="">
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <li class="item "  :class="{active:active==index}" v-for="(item,index) of router" :key="index">
                <nuxt-link class="nav-link" target="_blank" :to="item.path">{{item.title}}</nuxt-link>
              </li>

            </ul>
          </nav>
        </div>
      </Container>
    </header>
</template>

<script>
    export default {
      data(){
        return {
          active:0,
          router:[
            {
              title:'首页',
              path:'/'
            },
            {
              title:'产品种类',
              path:'/classproduct'
            },
            {
              title:'内容制作',
              path:'/content'
            },
            {
              title:'服务支持',
              path:'/service'
            },
            {
              title:'关于我们',
              path:'/about'
            },
            {
              title:'合作联系',
              path:'/contactus'
            },
            {
              title:'演示站',
              path:'/demostation'
            },
          ]
        }
      },
      methods:{
        mapRouter(){
          let path=this.$route.path;
         let test= this.router.findIndex((item,index)=>{
           return path==item.path

          })
          this.active=test
        }
      },
      mounted(){
        this.mapRouter()
      }
    }
</script>

<style  lang="scss">
 $header-height:80px;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    height:$header-height;
    width: 100%;
    background-color:transparent;
    z-index: 200;
    .content{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

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
      /*margin-left: 350px;*/
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

       .nav-link{
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
        .nav-link{
          color:$text-color;

          border-radius: 50px;
          background-color: $active-background;
        }
      }
    }
  }
</style>
