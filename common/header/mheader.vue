<template>
    <div class="m-header">
        <div class="logo"><nuxt-link to="/"><img src="~assets/images/public/logo.png" alt=""></nuxt-link></div>
        <div class="m-menu">
            <button type="button" class="button" @click="downShow"></button>
            <div class="menu-down" :class="{active:show}">
                <ul>
                    <li v-for="item in nav" :key="item.title"><nuxt-link :to="item.path">{{item.title}}</nuxt-link></li>
                    <li><a class="nav-link" href="https://m.katoong.com" target="_blank">演示站</a></li>
                </ul> 
            </div>
        </div>
    </div>
</template>


<script>
    export default {
      data(){
        return {
            show:false,
            nav:[
            {
              title:'首页',
              path:'/'
            },
            {
              title:'产品种类',
              path:'/mclassproduct'
            },
            {
              title:'内容制作',
              path:'/mcontent'
            },
            {
              title:'服务支持',
              path:'/mservice'
            },
            {
              title:'关于我们',
              path:'/mabout'
            },
            {
              title:'合作联系',
              path:'/mcontactus'
            },
            // {
            //   title:'演示站',
            //   path:'/'
            // },
          ],
        }
      },
      methods:{
          downShow(){
              this.show = !this.show;
          }
      },
      watch:{
          $route(){
              this.show = false;
          }
      }
    }
</script>

<style  lang="scss">
 .m-header{
     width:100%;
     height:50px;
     background:rgba(0,0,0,0.3);
     display:flex;
     align-items: center;
     padding:0 20px;
     position: fixed;
     top:0;
     left:0;
     z-index:10;
     .logo{
         flex: 2;
         img{
             height:35px;
         }
     }
     .m-menu{
         .button{
             width:38px;
             height:38px;
             background:url(~assets/images/home/menu.png) no-repeat center;
             background-size:25px;
             border:0;
             outline: none;
             display:block;
         }
         .menu-down{
             position: fixed;
             left:0;
             top:50px;
             width:100%;
             height:0px;
             overflow: hidden;
             background:#1c1c23;
             transition: height 0.3s linear;
             li{
                 width:100%;
                 height:45px;
                 line-height:45px;
                 border-bottom:1px solid #666666;
                 a{ 
                     display: block;
                     color:#fff;
                     font-size:14px;
                     padding:0 20px;
                 }
             }
             li:last-of-type{
                 border-bottom: 0;
                 padding:8px 0;
                 height:50px;
                 text-align: center;
                 a{
                     display:inline-block;
                     width:85px;
                     height:30px;
                     background:#FFE95C;
                     color:#000000;
                     border-radius:50px;
                     line-height: 30px;
                 }
             }
         }
         .active{
             height:320px;
         }
     }
 }
</style>
