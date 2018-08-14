<template>
    <div class="contactus">
        <Container>
          <div class="contactus-content">
            <h1 class="form-title">联系我们2</h1>
            <p class="form-info">请在以下填写您的个人资料，或直接通过本公司电子邮箱地址：market@livevideo.com 进行联系！</p>
            <div class="form">
              <Form :model="formTop" label-position="top">
                <FormItem >
                  <p name="label" class="form-item-label">姓名<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.name" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">电话号码<span class="form-item-required">*</span></p>

                  <Input v-model="formTop.tel" type="text" :number="true"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">电子邮件 <span class="form-item-required">*</span></p>

                  <Input v-model="formTop.email" type="email"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">其他联系方式 </p>

                  <Input v-model="formTop.othercall" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">合作方案 <span class="form-item-required">*</span></p>
                  <div class="form-check">
                    <CheckboxGroup  v-model="formTop.program">
                      <Checkbox label="棋牌游戏"></Checkbox>
                      <Checkbox label="老虎机"></Checkbox>
                      <Checkbox label="数字彩票"></Checkbox>
                      <Checkbox label="电子竞技"></Checkbox>
                      <Checkbox label="接机电玩"></Checkbox>
                      <Checkbox label="体育投注"></Checkbox>
                      <Checkbox label="lv抓抓乐"></Checkbox>
                      <Checkbox label="其他"></Checkbox>
                    </CheckboxGroup>
                  </div>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">留言<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.message" type="textarea" :rows="rows" :autosize="false"></Input>
                </FormItem>
                <FormItem >
                  <Button  class="form-btn" @click="submit">提交</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </Container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        layout (context) {
            return context.userAgent;
        },
        data(){
            return {
                rows:8,
                style:{
                    height:0,
                },
                formTop: {
                  name: null,//姓名
                  tel: null,//电话
                  email: null,//邮箱
                  othercall:null,//其他联系方式
                  program:[],//合适方案
                  message:'',//留言
                }
            }
        },
        computed:{
            ...mapGetters([
                'getAgent'
            ])  
        },
        mounted(){
            if(this.getAgent == 'mobile'){
                window.location.href = '/'
            }
            this.style.height = document.documentElement.clientHeight + 'px';

            let tt = document.documentElement.clientHeight;
            window.addEventListener('scroll',function(){
                var t = document.documentElement.scrollTop || document.body.scrollTop; 
                var top_div = document.getElementById( "header" );
                if( t >= 80 ) {
                    top_div.style.background = "#27272E";
                } else {
                    top_div.style.background = "transparent";
                }
            },false)
        },
        beforeDestroy(){
            if (window.removeEventListener) {
                window.removeEventListener("scroll",this,false);
            }
        },
        methods:{
          asyncData (params) {
           return this.$http.get(`/OpenAPI/v1/Config/contactUs`,this.formTop)
            .then((res)=>{
              console.log(res)
              if(res){
                    if(res.code == 1){
                        this.$Message.error(res.msg)
                    }else{
                        this.$Message.success('提交成功');
                        this.formTop.name = '';
                        this.formTop.email = '';
                        this.formTop.tel = '';
                        this.formTop.program = [];
                        this.formTop.message = '';
                        this.formTop.othercall = '';
                    }
              }else{
                this.$Message.success('接口请求错误');
              }
            })  
          },
          submit(){
            if(!this.formTop.name || !this.formTop.tel || !this.formTop.email || !this.formTop.program || !this.formTop.message){
              this.$Message.error('*为必填内容')
              return;
            }
            this.asyncData();
          },
        }
    }
</script>

<style  lang="scss">
 .contactus{
   width: 100%;
   background: url("../../assets/images/contactus/lxwm_bj.png") no-repeat center;
   background-size:cover;
   .contactus-content{
     height: auto;
     width: 100%;
     padding-top: 120px;
     padding-bottom: 40px;
     .form-title{
       color: $title-color;
       font-size: $font-size-small*2;
       text-align: center;
       line-height: 30px;
       padding: 25px 0;
     }
     .form-info{
       color:$text-color-white;
      font-size: $font-size-large;
       line-height: 25px;
       text-align: center;
       margin-bottom: 25px;
     }
     .form{
       width: 660px;
       height: auto;
       margin: 0 auto;
       border-radius: 4px;
       background: rgba(255,255,255,.3);
       padding:50px;
       .form-item-label{
         color: $text-color-white;
         font-size: $font-size-large;
          .form-item-required{
            color: red;
            font-size: $font-size-large;
            line-height: 20px;
            display: inline-block;
            vertical-align: middle;
          }
       }
       .form-check{
         display: flex;
         width: 100%;
         align-items: left;
         justify-content: space-between;
        .ivu-checkbox-group{
          width: 100%;
          span{
            color:$text-color-white;

          }
          .ivu-checkbox-inner{
            background-color: transparent;
          }
          .ivu-checkbox-wrapper{
            margin-right: 200px;
          }
        }
       }
       .form-btn{
         background-color: $active-background;
         border-radius: 50px;
         color: $text-color;
         font-size: $font-size-large;

         border-color: transparent;
         min-width:150px ;
       }
     }
   }
 }
</style>
