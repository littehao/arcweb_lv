<template>
  <!--<Affix @on-change="change" >-->
    <header class="header" id="header">
      <Container>
        <div class="content">
          <div class="logo">
            <nuxt-link to="/"><img src="../../assets/images/public/logo.png" alt=""></nuxt-link>
          </div>
          <nav class="nav">
            <ul class="nav-list">
              <!-- <li class="item "  :class="{active:active==index}" v-for="(item,index) of nav_labels" :key="index">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute({name:item.name})">{{item.title}}</nuxt-link>
              </li> -->
              <li class="item" :class="{active:activeindex == 0}">
                <nuxt-link class="nav-link" :to="getLocalizedRoute('index')">{{ $t('nav_labels[0].title') }}</nuxt-link>
              </li>
              <li class="item" :class="{active:activeindex == 1}">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute('classproduct')">{{ $t('nav_labels[1].title') }}</nuxt-link>
              </li>
              <li class="item" :class="{active:activeindex == 2}">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute('content')">{{ $t('nav_labels[2].title') }}</nuxt-link>
              </li>
              <li class="item" :class="{active:activeindex == 3}">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute('service')">{{ $t('nav_labels[3].title') }}</nuxt-link>
              </li>
              <li class="item" :class="{active:activeindex == 4}">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute('about')">{{ $t('nav_labels[4].title') }}</nuxt-link>
              </li>
              <li class="item" :class="{active:activeindex == 5}">
                <nuxt-link class="nav-link"  :to="getLocalizedRoute('contactus')">{{ $t('nav_labels[5].title') }}</nuxt-link>
              </li>
              <li class="item language">
                <span class="language_text" v-for ="locale in locales" :key="locale.code" v-if="locale.code === $i18n.locale">{{ locale.name }}</span>
                <div class="change_down">
                  <nuxt-link
                  v-for="locale in locales"
                  :to="getSwitchLocaleRoute(locale.code)"
                  :key="locale.code">
                  {{ locale.name }}
                </nuxt-link>
                </div>
              </li>
              <li class="item active-a"><a class="nav-link " href="https://api.katoong.com/test/merchant_login_test.php?demo=1" target="_blank">{{ $t('nav_try.title') }}</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  <!--</Affix>-->

</template>

<script>
    export default {
      data(){
        return {
          nav_labels:this.$t('nav_labels'),
          activeindex:0,
          bgstatus:false
        }
      },
      methods:{
        getactive(){
          let str = this.$route.path;
          var index = str .lastIndexOf("\/");
          str  = str .substring(index + 1, str .length);
          switch(str){
            case '':
             this.activeindex = 0;
            break;
            case 'classproduct':
             this.activeindex = 1;
            break;
            case 'content':
             this.activeindex = 2;
            break;
            case 'service':
             this.activeindex = 3;
            break;
            case 'about':
             this.activeindex = 4;
            break;
            case 'contactus':
             this.activeindex = 5;
            break;
          }
        },
        change(status){
          this.bgstatus=status
          alert(status)
        }
      },
      mounted(){
        this.getactive();
        let tt = document.documentElement.clientHeight;
        let datel = 0;
      },
      watch:{
        '$route.path':function () {
          this.getactive();
        }
      }
    }
</script>

<style  lang="scss">
 $header-height:80px;
 .header.bg{
   background-color:transparent;

 }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    height:$header-height;
    width: 100%;
    //background-color: $body-background;
    background-color:transparent;

    z-index: 200;
    transition: all 0.4s linear;
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
         padding:0 25px;
         line-height: 40px;
         text-align: center;
         font-size: $font-size-large;
         color: $text-color-white;
       }
      }
      .language{
        font-size:$font-size-large;
        color:#fff;
        min-width: 100px;
        position: relative;
        cursor: pointer;
        margin-right:20px;
        padding-left:10px;
        display: flex;
        align-items: center;
        .language_text{
          // letter-spacing: 2px;
          display: inline-block;
          height:40px;
          line-height: 40px;
          margin-top:-4px;
        }
        .change_down{
          background:rgba(255,255,255,0.3);
          position: absolute;
          top:70px;
          left:8px;
          width:100%;
          border-radius: 3px;
          text-align: center;
          display:none;
          a{
            line-height: 35px;
            display:block;
            color:#fff;
            // letter-spacing:1px;
            &:hover{
              color:#FFE95C;
            }
          }
          &:before{
            position: absolute;
            top:-16px;
            left:38%;
            display:block;
            content:"";
            width:0;
            height:0;
            border-style:solid;
            border-width: 8px;
            border-color: transparent transparent rgba(255,255,255,0.3);
          }
        }
        &:after{
            position: absolute;
            top:43%;
            right:0;
            display:block;
            content:"";
            width:0;
            height:0;
            border-style:solid;
            border-width: 8px;
            border-color: #fff transparent transparent;
        }
        &:hover .change_down{
          display: block;
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

      }
      .item:hover{
        .nav-link{
          color:$text-color;
          border-radius: 50px;
          background-color: $active-background;
        }
      }
      .item.active-a a{
        color:$text-color;
        border-radius: 50px;
        background-color: $active-background;
      }
    }
  }
</style>
