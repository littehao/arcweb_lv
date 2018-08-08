<template>
    <div class="contactus">
        <Container>
          <div class="contactus-content">
            <h1 class="form-title">联系我们</h1>
            <p class="form-info">请在以下填写您的个人资料，或直接通过本公司电子邮箱地址：market@livevideo.com 进行联系！</p>
            <div class="form">
              <Form :model="formTop" label-position="top">
                <FormItem >
                  <p name="label" class="form-item-label">姓名<span class="form-item-required">*</span></p>
                  <Input v-model="formTop.input1"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">电话号码 </p>

                  <Input v-model="formTop.input2"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">电子邮件 <span class="form-item-required">*</span></p>

                  <Input v-model="formTop.input3"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">其他联系方式 </p>

                  <Input v-model="formTop.input3"></Input>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">合作方案 <span class="form-item-required">*</span></p>
                  <div class="form-check">
                    <CheckboxGroup  >
                      <Checkbox label="棋牌游戏"></Checkbox>
                      <Checkbox label="老虎机"></Checkbox>
                      <Checkbox label="数字彩票"></Checkbox>
                      <Checkbox label="电子竞技"></Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup  >
                      <Checkbox label="接机电玩"></Checkbox>
                      <Checkbox label="体育投注"></Checkbox>
                      <Checkbox label="lv抓抓乐"></Checkbox>
                      <Checkbox label="其他"></Checkbox>
                    </CheckboxGroup>
                  </div>
                </FormItem>
                <FormItem >
                  <p name="label" class="form-item-label">留言 </p>

                  <Input v-model="formTop.input3" type="textarea" :autosize="{minRows: 5,maxRows: 8}"></Input>
                </FormItem>
                <FormItem >
                  <Button  class="form-btn">提交</Button>

                </FormItem>
              </Form>
            </div>
          </div>
        </Container>
    </div>
</template>

<script>
    export default {
        name: "index",
       components:{},
      data(){
          return{
            formTop: {
              input1: '',
              input2: '',
              input3: ''
            }
        }
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
         width: 300px;
         align-items: left;
         justify-content: space-between;
        .ivu-checkbox-group{
          width: 100px;
          span{
            color:$text-color-white;

          }
          .ivu-checkbox-inner{
            background-color: transparent;
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
