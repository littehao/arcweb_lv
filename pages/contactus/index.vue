<template>
    <div class="contactus">
        <Container>
          <div class="contactus-content">
            <h1 class="form-title animated fadeInUp">联系我们</h1>
            <p class="form-info animated fadeInUp">如您有兴趣进一步了解Live Video 的服务支援或产品，请填妥下方表格，将有专人尽速与您联系。</p>
            <div class="form animated bounceIn">
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
                  <p name="label" class="form-item-label">电子邮件<span class="form-item-required">*</span></p>

                  <Input v-model="formTop.email" type="email"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">其他联系方式</p>

                  <Input v-model="formTop.othercall" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">公司网站地址<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.address" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">合作方案<span class="form-item-required">*</span></p>
                  <div class="form-check">
                    <CheckboxGroup  v-model="formTop.program">
                      <Checkbox label="LV品牌API接入"></Checkbox>
                      <Checkbox label="“直播+游戏” 系统包网"></Checkbox>
                      <Checkbox label="“直播+” 系统包网"></Checkbox>
                      <Checkbox label="“直播+” 游戏服务"></Checkbox>
                      <Checkbox label="“游戏+”直播服务"></Checkbox>
                      <Checkbox label="“直播+”解决方案"></Checkbox>
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
        <Lfooter></Lfooter>
    </div>
</template>

<script>
    import axios from 'axios'
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
            let hosttest=window.location.host=='www.katoong.com';
            this.http = hosttest?'https://api.katoong.com':'https://api.testfordemo.com';
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
          getData(){
            this.$jsonp(`${this.http}/OpenAPI/v1/Config/contactUs`,this.formTop)
            .then( res => {
              console.log(res)
              if(res){
                    if(res.code == 1){
                        this.$Message.error(res.msg)
                    }else{
                        this.$Message.success('提交成功');
                        this.formTop.name = '';
                        this.formTop.email = '';
                        this.formTop.tel = '';
                        this.formTop.address = '';
                        this.formTop.program = [];
                        this.formTop.message = '';
                        this.formTop.othercall = '';
                    }
              }else{
                this.$Message.success('接口请求错误');
              }
            })
          },
          asyncData () {
            return axios.get(`${this.http}/OpenAPI/v1/Config/contactUs`,{
              params:this.formTop
            })
            .then((res) => {
              console.log(res)
            })
          },
          submit(){
            if(!this.formTop.name || !this.formTop.tel || !this.formTop.email || !this.formTop.program || !this.formTop.address ||  !this.formTop.message){
              this.$Message.error('*为必填内容')
              return;
            }
            if(isNaN(this.formTop.tel)){
                this.$Message.error('手机号必须是数字')
                return;
            }
            let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            if(this.formTop.email && !reg.test(this.formTop.email)){
              this.$Message.error('邮箱格式不正确')
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
            margin-right: 100px;
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
