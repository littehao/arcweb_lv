<template>
    <div class="contactus">
        <div class="contactus-content">
            <h1 class="form-title">{{$t('contactus.title')}}</h1>
            <p class="form-info">{{$t('contactus.intro')}}</p>
            <div class="form">
              <Form :model="formTop" label-position="top">
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.name')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.name" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.tel')}}<span class="form-item-required">*</span></p>

                  <Input v-model="formTop.tel" type="text" :number="true"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.email')}}<span class="form-item-required">*</span></p>

                  <Input v-model="formTop.email" type="email"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.other')}}</p>

                  <Input v-model="formTop.othercall" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.address')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.address" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.programtitle')}}<span class="form-item-required">*</span></p>
                  <div class="form-check">
                    <CheckboxGroup  v-model="formTop.program">
                      <Checkbox :label="$t('contactus.program[0]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[1]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[2]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[3]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[4]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[5]')"></Checkbox>
                      <Checkbox :label="$t('contactus.program[6]')"></Checkbox>
                    </CheckboxGroup>
                  </div>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('contactus.msg')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.message" type="textarea" :autosize="{minRows: 5,maxRows: 8}"></Input>
                </FormItem>
                <FormItem >
                  <Button  class="form-btn" @click="submit">{{$t('contactus.button_text')}}</Button>
                </FormItem>
              </Form>
            </div>
          </div>
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
                style:{
                    height:0,
                },
                formTop: {
                  name: '',//姓名
                  tel: '',//电话
                  email: '',//邮箱
                  othercall:'',//其他联系方式
                  address:'',//公司地址
                  program:[],//合适方案
                  message:'',//留言
                },
                http:''
            }
        },
        computed:{
            ...mapGetters([
                'getAgent'
            ])
        },
        mounted(){
            let NODE_ENV=process.env.NODE_ENV=='development';
            let hosttest=location.host=='node.testfordemo.com';
            this.http = NODE_ENV?'https://api.testfordemo.com':hosttest?'https://api.testfordemo.com':'https://api.katoong.com';
            if(this.getAgent == 'default'){
                window.location.href = '/'
            }
            this.style.height = document.documentElement.clientHeight + 'px';
        },
        methods:{
         getData(){
           
            this.$jsonp(`${this.http}/OpenAPI/v1/Config/contactUs`,this.formTop)
            .then( res => {
              console.log(res)
              if(res){
                    if(res.code == 1){
                        this.$Message.error(res.msg)
                    }else{
                        let that = this;
                        this.$Message.success(that.$t('contactus.prompt1'));
                        this.formTop.name = '';
                        this.formTop.email = '';
                        this.formTop.tel = '';
                        this.formTop.address = '';
                        this.formTop.program = [];
                        this.formTop.message = '';
                        this.formTop.othercall = '';
                    }
              }else{
                let that = this;
                this.$Message.success(that.$t('contactus.prompt2'));
              }
            })
          },
          submit(){
            if(!this.formTop.name || !this.formTop.tel || !this.formTop.email || !this.formTop.program || !this.formTop.address ||  !this.formTop.message){
              let that = this;
              this.$Message.success(that.$t('contactus.prompt3'));
              return;
            }
            if(isNaN(this.formTop.tel)){
                let that = this;
                this.$Message.success(that.$t('contactus.prompt4'));
                return;
            }
            let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            if(this.formTop.email &&!reg.test(this.formTop.email)){
              let that = this;
              this.$Message.success(that.$t('contactus.prompt5'));
              return;
            }
            this.getData();
          },
        }
    }
</script>

<style  lang="scss">
 .contactus{
   width: 100%;
   background-image: url("../../assets/images/contactus/lxwm_bj.png");
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
       width:90%;
       margin:0 auto;
       word-break:break-all;
     }
     .form{
       width: 90%;
       height: auto;
       margin: 0 auto;
       border-radius: 4px;
       background: rgba(255,255,255,.1);
       padding:30px 20px;
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
            margin-right: 70px;
            width:180px;
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
