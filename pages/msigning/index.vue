<template>
    <div class="contactus">
        <div class="contactus-content">
            <h1 class="form-title  ">申请加入造星计划</h1>
            <p class="form-info">请在以下填写您的个人资料，提交完成后我们会尽快与您联系！</p>
            <div class="form">
              <Form :model="formTop" label-position="top">
                <FormItem >
                  <p name="label" class="form-item-label">姓名<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.name" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">区号+电话号码<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.mobile" type="text" :number="true"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">Facebook</p>
                  <Input v-model="formTop.facebook" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">Instagram</p>
                  <Input v-model="formTop.ins" type="text"></Input>
                </FormItem>
                <FormItem >
                    <p name="label" class="form-item-label">近期照片三张<span class="form-item-required">*</span></p>
                    <div class="imgInputer">
                        <div class="item">
                            <imgInputer v-model="formTop.avatar" accept="image/*" placeholder="大头照"></imgInputer>
                        </div>
                        <div class="item">
                            <imgInputer v-model="formTop.half_length_photo" accept="image/*" placeholder="半身照"></imgInputer>
                        </div>
                        <div class="item">
                            <imgInputer v-model="formTop.full_body_photo" accept="image/*" placeholder="全身照"></imgInputer>
                        </div>
                    </div>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">自我介绍<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.introduction" type="textarea" :rows="rows" :autosize="false"></Input>
                </FormItem>
                  <Button  class="form-btn" @click="submit">{{submittext}}</Button>
                <FormItem >
                </FormItem>
              </Form>
            </div>
          </div>
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
                rows:5,
                style:{
                    height:0,
                },
                formTop: {
                  name: '',//姓名
                  mobile: '',//电话
                  facebook: '',//fachbook
                  ins:'',//instagram
                  introduction:'',//留言
                  avatar: '',
                  half_length_photo: '',
                  full_body_photo:'',
                },
                http:'',
                submittext:'提交',
                disabled:true,
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
          updata(){
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                let param = new FormData(); //创建form对象
                param.append('name',this.formTop.name);//断点传输
                param.append('mobile',this.formTop.mobile);
                param.append('facebook',this.formTop.facebook);
                param.append('ins',this.formTop.ins);
                param.append('introduction',this.formTop.introduction);
                param.append('avatar',this.formTop.avatar);
                param.append('half_length_photo',this.formTop.half_length_photo);
                param.append('full_body_photo',this.formTop.full_body_photo);
                let that=this;
                this.submittext = '提交中...'
                axios.post(`${this.http}/OpenAPI/v1/Anchor/guestToAnthor`,param,config)
                .then(res=>{
                    console.log(res)
                    this.submittext = '提交'
                    this.disabled = true;
                    if(res.data.code == 0){
                        this.$Message.success('上传成功！')
                        this.formTop.name = '';
                        this.formTop.mobile = '';
                        this.formTop.facebook = '';
                        this.formTop.ins = '';
                        this.formTop.introduction = '';
                        this.formTop.avatar = '';
                        this.formTop.half_length_photo = '';
                        this.formTop.full_body_photo = '';
                    }else{
                        this.$Message.error(res.data.msg)
                    }
                })
          },
          submit(){
            if(this.disabled){
                this.disabled = false;
                if(!this.formTop.name || !this.formTop.mobile  ||  !this.formTop.introduction){
                this.$Message.error('*为必填内容')
                return;
                }
                if(!this.formTop.avatar || !this.formTop.half_length_photo || !this.formTop.full_body_photo){
                    this.$Message.error('照片要上传三张哟')
                    return;
                }
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                let mobile = this.formTop.mobile;
                    mobile = mobile.toString();
                if(!myreg.test(mobile) && mobile.length < 5){
                    this.$Message.error('手机号格式不正确')
                    return ;
                }
                this.updata();
            }
            
          },
        }
    }
</script>

<style  lang="scss">
 .contactus{
   width: 100%;
   background: url("~assets/images/signing/signingbg.png") no-repeat center;
   background-size:cover;
   .contactus-content{
     height: auto;
     width: 100%;
     padding-top:50px;
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
      //  margin-bottom: 30px;
       width:90%;
       margin:0 auto 30px;
       word-break:break-all;
     }
     .form{
       width: 90%;
       height: auto;
       margin: 0 auto;
       border-radius: 4px;
       background: rgba(255,255,255,.1);
       padding:30px 20px;
       .imgInputer{
          //  display: flex;
           .img-inputer{
               width:100%;
               margin:0 auto;
           }
           .item:nth-child(2){
              //  margin:0 13px;
           }
           .img-inputer__icon{
               background:url(~assets/images/signing/signingadd.png) no-repeat center;
               color:#f0f0f0;
               background-size:20px;
               width:30px;
               height:30px;
               font-size:0 !important;
           }
       }
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
         width:150px ;
         margin:0 auto;
         display: block;
       }
     }
   }
 }
</style>
