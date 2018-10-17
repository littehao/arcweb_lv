<template>
    <div class="contactus">
        <Container>
          <div class="contactus-content">
            <h1 class="form-title">{{$t('signing.title')}}</h1>
            <p class="form-info">{{$t('signing.intro')}}</p>
            <div class="form animated bounceIn">
              <Form :model="formTop" label-position="top">
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('signing.name')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.name" type="text"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('signing.tel')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.mobile" type="text" :number="true"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">Email<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.email" type="text"></Input>
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
                  <p name="label" class="form-item-label">{{$t('signing.account')}}ID</p>
                  <Input v-model="formTop.account" type="text"></Input>
                </FormItem>
                <FormItem >
                    <p name="label" class="form-item-label">{{$t('signing.pic')}}<span class="form-item-required">*</span></p>
                    <div class="imgInputer">
                        <div class="item">
                            <imgInputer v-model="formTop.avatar" accept="image/*" :placeholder="$t('signing.pic1')"></imgInputer>
                        </div>
                        <div class="item">
                            <imgInputer v-model="formTop.half_length_photo" accept="image/*" :placeholder="$t('signing.pic2')"></imgInputer>
                        </div>
                        <div class="item">
                            <imgInputer v-model="formTop.full_body_photo" accept="image/*" :placeholder="$t('signing.pic3')"></imgInputer>
                        </div>
                    </div>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">{{$t('signing.msg')}}<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.introduction" type="textarea" :rows="rows" :autosize="false"></Input>
                </FormItem>
                  <Button  class="form-btn" @click="submit">{{submittext}}</Button>
                <FormItem >
                </FormItem>
              </Form>
            </div>
          </div>
        </Container>
        <footerlink></footerlink>
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
                  mobile: '',//电话
                  email:'',
                  facebook: '',//fachbook
                  ins:'',//instagram
                  account:'',//平台id
                  introduction:'',//留言
                  avatar: '',
                  half_length_photo: '',
                  full_body_photo:'',
                },
                http:'',
                submittext:this.$t('signing.button_text'),
                disabled:true,
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
          updata(){
                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                let param = new FormData(); //创建form对象
                param.append('name',this.formTop.name);//断点传输
                param.append('mobile',this.formTop.mobile);
                param.append('email',this.formTop.email);
                param.append('facebook',this.formTop.facebook);
                param.append('ins',this.formTop.ins);
                param.append('user_id',this.formTop.account);
                param.append('introduction',this.formTop.introduction);
                param.append('avatar',this.formTop.avatar);
                param.append('half_length_photo',this.formTop.half_length_photo);
                param.append('full_body_photo',this.formTop.full_body_photo);
                let that=this;
                this.submittext = this.$t('signing.prompt1')
                axios.post(`${this.http}/OpenAPI/v1/Anchor/guestToAnthor`,param,config)
                .then(res=>{
                    console.log(res)
                    this.submittext = this.$t('signing.button_text')
                    this.disabled = true;
                    if(res.data.code == 0){
                        this.$Message.success(this.$t('signing.prompt2'))
                        this.formTop.name = '';
                        this.formTop.mobile = '';
                        this.formTop.email = '';
                        this.formTop.facebook = '';
                        this.formTop.ins = '';
                        this.formTop.account = '';
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
                if(!this.formTop.name || !this.formTop.mobile || !this.formTop.email  ||  !this.formTop.introduction){
                this.$Message.error(this.$t('signing.prompt3'))
                this.disabled = true;
                return;
                }
                let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                if(this.formTop.email && !reg.test(this.formTop.email)){
                this.$Message.error(this.$t('contactus.prompt5'))
                this.disabled = true;
                return;
                }
                if(!this.formTop.avatar || !this.formTop.half_length_photo || !this.formTop.full_body_photo){
                    this.$Message.error(this.$t('signing.prompt4'))
                    this.disabled = true;
                    return;
                }
                var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
                let mobile = this.formTop.mobile;
                    mobile = mobile.toString();
                if(!myreg.test(mobile) && mobile.length < 5){
                    this.$Message.error(this.$t('signing.prompt5'))
                    this.disabled = true;
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
   background: url("../../assets/images/signing/signingbg.jpg") no-repeat center;
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
       .imgInputer{
           display: flex;
           .img-inputer{
               width:178px;
           }
           .item:nth-child(2){
               margin:0 13px;
           }
           .img-inputer__icon{
               background:url("../../assets/images/signing/signingadd.png") no-repeat center;
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
         width:150px ;
         display:block;
         margin:0 auto;
       }
     }
   }
 }
</style>
