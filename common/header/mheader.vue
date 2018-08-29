<template>
    <div class="m-header">
        <div class="logo"><nuxt-link to="/"><img src="~assets/images/public/logo.png" alt=""></nuxt-link></div>
        <div class="m-menu">
            <button type="button" class="button" @click="downShow"></button>
            <div class="menu-down" :class="{active:show}">
                <ul>
                    <li class="item" :class="{active:activeindex == 0}">
                        <nuxt-link class="nav-link" :to="getLocalizedRoute('index')">{{ $t('nav_labels[0].title') }}</nuxt-link>
                    </li>
                    <li class="item" :class="{active:activeindex == 1}">
                        <nuxt-link class="nav-link"  :to="getLocalizedRoute('mclassproduct')">{{ $t('nav_labels[1].title') }}</nuxt-link>
                    </li>
                    <li class="item" :class="{active:activeindex == 2}">
                        <nuxt-link class="nav-link"  :to="getLocalizedRoute('mcontent')">{{ $t('nav_labels[2].title') }}</nuxt-link>
                    </li>
                    <li class="item" :class="{active:activeindex == 3}">
                        <nuxt-link class="nav-link"  :to="getLocalizedRoute('mservice')">{{ $t('nav_labels[3].title') }}</nuxt-link>
                    </li>
                    <li class="item" :class="{active:activeindex == 4}">
                        <nuxt-link class="nav-link"  :to="getLocalizedRoute('mabout')">{{ $t('nav_labels[4].title') }}</nuxt-link>
                    </li>
                    <li class="item" :class="{active:activeindex == 5}">
                        <nuxt-link class="nav-link"  :to="getLocalizedRoute('mcontactus')">{{ $t('nav_labels[5].title') }}</nuxt-link>
                    </li>
                    <li class="item language">
                        <span class="language_text" v-for ="locale in locales" :key="locale.code" v-if="locale.code === $i18n.locale" @click="active = !active">{{ locale.name }}</span>
                        <div class="change_down" :class="{active:active}">
                        <nuxt-link
                        v-for="locale in locales"
                        :to="getSwitchLocaleRoute(locale.code)"
                        :key="locale.code">
                        {{ locale.name }}
                        </nuxt-link>
                        </div>
                    </li>
                    <!-- <li v-for="item in nav" :key="item.title"><nuxt-link :to="item.path">{{item.title}}</nuxt-link></li> -->
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
            activeindex:0,
            active:false,
            nav:[
            {
              title:'首页',
              path:'/'
            },
            {
              title:'直播游戏',
              path:'/mclassproduct'
            },
            {
              title:'内容媒体',
              path:'/mcontent'
            },
            {
              title:'服务支援',
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
     z-index:20;
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
             opacity: 0;
             z-index: -1;
             background:#1c1c23;
             transition: all 0.3s linear;
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
             .language{
                 color:#fff;
                 height:auto;
                 span{
                     display:block;
                     padding:0 20px;
                     font-size:14px;
                     border-bottom:1px solid #3a3a3a;
                 }
                 .change_down{
                     line-height: 35px;
                     height:0;
                     overflow: hidden;
                     transition: all 0.2s linear;
                     a{
                         color:#a7a7a7;
                     }
                     padding-left:20px;
                 }
                 .change_down.active{
                     height:105px;
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
            height:auto;
            opacity: 1;
            z-index: 1;
         }
     }
 }
</style>
