<template>
    <div class="lv-home">
        <Mhome v-if="currentView == 'mobile'"></Mhome>
        <Lhome v-else-if="currentView == 'default'"></Lhome>
    </div>
</template>


<script type="text/javascript">
import { mapGetters } from 'vuex'
import Lhome from './home/index'
import Mhome from './mhome/index'
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

