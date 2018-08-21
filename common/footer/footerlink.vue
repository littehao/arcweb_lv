<template>
   <div class="footer" id="footer-section">
     <Container>
        <div class="footer-content">
            <div class="language"></div>
            <ul class="list">
                <li>
                <nuxt-link  target="_blank" to="/">首页</nuxt-link>
                </li>
                <li>
                <nuxt-link  target="_blank" to="/classproduct">产品种类</nuxt-link>
                </li>
                <li>
                <nuxt-link  target="_blank" to="/content">内容制作</nuxt-link>
                </li>
                <li>
                <nuxt-link  target="_blank" to="/service">服务支持</nuxt-link>
                </li>
            </ul>
            <ul class="list">
                <li>
                <nuxt-link  target="_blank" to="/about">关于我们</nuxt-link>
                </li>
                <li>
                <nuxt-link  target="_blank" to="/contactus">合作联系</nuxt-link>
                </li>
                <li>
                <a  target="_blank" href="https://www.solantec.net">演示站</a>
                </li>
            </ul>
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
      height: 220px;
    }
    .language{
      width: 200px;
    }
    .list{
      min-width: 150px;
      max-width: 200px;
      height: auto;
      li{
        a{
          width: 100%;
          line-height: 25px;
          text-align: left;
          font-size: $font-size-large;
          color:#7887A7;
        }
      }
    }
  }
</style>
