<template>
   <footer class="footer">
     <Container>
       <p><span>LVTV-the inventor of live egaming system Copyright</span> <img src="../../assets/images/public/logo.png" alt="">  <span>© 2017-2018 System All Rights Reserved</span></p>
      <!--<input type="file" class="files" @change="open"/>-->
     </Container>
   </footer>
</template>

<script>
    export default {
        data(){
          return{

          }
        },

        methods:{
          open(e){
            console.log(e.target.files[0],'------')
           let r = new FileReader();
            r.readAsDataURL(e.target.files[0]);
            r.onload = function(e) {
              console.log(e,'------')

            }

            this.test(e.target.files[0])
          },
          test(data){
            let config = {
              headers:{'Content-Type':'multipart/form-data'}
            };
            let param = new FormData(); //创建form对象
            param.append('token','0b62bf23e2b0c407a35abf923facef7f');//断点传输
            param.append('video',data);
            this.$axios.post(`/OpenAPI/V1/user/approveCheck`,param,config)
                  .then((res) => {
                   console.log(res)
                  })
          }
        },
        mounted(){

        }

    }
</script>

<style  lang="scss">
  $footer-height:45px;
  $footer-bg:#0F0E0C;
  $footer-text-color:#2A4560;
.footer{
  width: 100%;
  height: $footer-height;
  background-color:$footer-bg;
  p{

    width: 100%;
    text-align: center;
   display: flex;
    align-items: center;
    justify-content: center;
    span{
      display: inline-block;
      height: 100%;
      color: $footer-text-color;
      font-size: $font-size-base;
      line-height: $footer-height;
    }
    img{
      position: relative;
      display: inline-block;
      width: 100px;
      height: auto;
      margin: 0 10px;
    }
  }
}
</style>
