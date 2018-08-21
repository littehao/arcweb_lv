<template>
   <div class="footer" id="footer-section">
     <Container>
        <div class="footer-content">
            <div class="footer-logo"><img src="../../assets/images/public/logo.png" alt=""></div>
            <div class="footer-nav">
              <div class="nuxtnav">
                <nuxt-link  target="_blank" to="/">首页</nuxt-link>
                <nuxt-link  target="_blank" to="/classproduct">产品种类</nuxt-link>
                <nuxt-link  target="_blank" to="/content">内容制作</nuxt-link>
                <nuxt-link  target="_blank" to="/service">服务支持</nuxt-link>
                <nuxt-link  target="_blank" to="/about">关于我们</nuxt-link>
                <nuxt-link  target="_blank" to="/contactus">合作联系</nuxt-link>
                <a  target="_blank" href="https://www.solantec.net">演示站</a>
              </div>
              <div class="copy">LVTV-the inventor of live egaming system Copyright © 2017-2018 System All Rights Reserved</div>
            </div>
        </div>
    </Container>
   </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
#footer-section{
    position: relative;
    z-index: 1;
    height: auto;
    width:100%;
    background:#1c1c23;
    border-top:1px solid #272727;
    .footer-content{
      width: 100%;
      display:flex;
      align-items: start;
      justify-content: start;
      padding: 20px 0;
      // height: 220px;
      .footer-logo{
        flex:2;
        img{
          width:120px;
        }
      }
      .footer-nav{
        text-align: right;
        a{
          color:#fff;
          font-size:14px;
          margin-left: 20px;
          &:hover{
            color:#FFE95C;
          }
        } 
        .copy{
          margin-top:15px;
          color:#506a84;
          font-size:14px;
        }
      }
    }
    .language{
      width: 200px;
    }
  }
</style>
