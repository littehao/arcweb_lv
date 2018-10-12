<template>
    <div class="lv-home">
        <Mhome v-if="currentView == 'mobile'"></Mhome>


        <Lhome v-else-if="currentView == 'default'"></Lhome>
    </div>
</template>


<script type="text/javascript">
import { mapGetters } from 'vuex';
import Lhome from './home/index';
import Mhome from './mhome/index';
export default {
    layout (context) {
        return context.userAgent;
    },
    computed:{
        ...mapGetters([
            'getAgent'
        ])
    },
    data(){
        return {
            currentView:null,
        }
    },
    created(){
        this.currentView = this.getAgent
    },
    components:{
        Lhome,
        Mhome
    }
}
</script>
<style lang="scss">
  .lv-home{
    /*transition: all 0.5s linear;*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width:640px) {
      .lv-home{
          height:auto;
      }
  }
</style>
