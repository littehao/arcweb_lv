webpackJsonp([16],{"/s08":function(t,o,e){"use strict";var n=e("Dd8w"),a=e.n(n),s=e("mtWM"),r=e.n(s),c=e("NYxO");o.a={layout:function(t){return t.userAgent},data:function(){return{rows:8,style:{height:0},formTop:{name:"",tel:"",email:"",othercall:"",address:"",program:[],message:""},http:""}},computed:a()({},Object(c.mapGetters)(["getAgent"])),mounted:function(){var t="www.katoong.com"==window.location.host;this.http=t?"https://api.katoong.com":"https://api.testfordemo.com","mobile"==this.getAgent&&(window.location.href="/"),this.style.height=document.documentElement.clientHeight+"px";document.documentElement.clientHeight;window.addEventListener("scroll",function(){var t=document.documentElement.scrollTop||document.body.scrollTop,o=document.getElementById("header");o.style.background=t>=80?"#27272E":"transparent"},!1)},beforeDestroy:function(){window.removeEventListener&&window.removeEventListener("scroll",this,!1)},methods:{getData:function(){var t=this;this.$jsonp(this.http+"/OpenAPI/v1/Config/contactUs",this.formTop).then(function(o){console.log(o),o?1==o.code?t.$Message.error(o.msg):(t.$Message.success(t.$t("contactus.prompt1")),t.formTop.name="",t.formTop.email="",t.formTop.tel="",t.formTop.address="",t.formTop.program=[],t.formTop.message="",t.formTop.othercall=""):t.$Message.success(t.$t("contactus.prompt2"))})},asyncData:function(){return r.a.get(this.http+"/OpenAPI/v1/Config/contactUs",{params:this.formTop}).then(function(t){console.log(t)})},submit:function(){if(this.formTop.name&&this.formTop.tel&&this.formTop.email&&this.formTop.program&&this.formTop.address&&this.formTop.message)if(isNaN(this.formTop.tel))this.$Message.error(this.$t("contactus.prompt4"));else{!this.formTop.email||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.formTop.email)?this.getData():this.$Message.error(this.$t("contactus.prompt5"))}else this.$Message.error(this.$t("contactus.prompt3"))}}}},SAHy:function(t,o,e){var n=e("dySi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("rjj0").default)("95d130c2",n,!0,{sourceMap:!1})},dySi:function(t,o,e){var n=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"\n.contactus {\n  width: 100%;\n  background: url("+n(e("ywlI"))+") no-repeat center;\n  background-size: cover;\n}\n.contactus .contactus-content {\n    height: auto;\n    width: 100%;\n    padding-top: 120px;\n    padding-bottom: 40px;\n}\n.contactus .contactus-content .form-title {\n      color: #fff;\n      font-size: 24px;\n      text-align: center;\n      line-height: 30px;\n      padding: 25px 0;\n}\n.contactus .contactus-content .form-info {\n      color: #fff;\n      font-size: 16px;\n      line-height: 25px;\n      text-align: center;\n      margin-bottom: 25px;\n}\n.contactus .contactus-content .form {\n      width: 660px;\n      height: auto;\n      margin: 0 auto;\n      border-radius: 4px;\n      background: rgba(255, 255, 255, .3);\n      padding: 50px;\n}\n.contactus .contactus-content .form .form-item-label {\n        color: #fff;\n        font-size: 16px;\n}\n.contactus .contactus-content .form .form-item-label .form-item-required {\n          color: red;\n          font-size: 16px;\n          line-height: 20px;\n          display: inline-block;\n          vertical-align: middle;\n}\n.contactus .contactus-content .form .form-check {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -webkit-box-align: left;\n            -ms-flex-align: left;\n                align-items: left;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n.contactus .contactus-content .form .form-check .ivu-checkbox-group {\n          width: 100%;\n}\n.contactus .contactus-content .form .form-check .ivu-checkbox-group span {\n            color: #fff;\n}\n.contactus .contactus-content .form .form-check .ivu-checkbox-group .ivu-checkbox-inner {\n            background-color: transparent;\n}\n.contactus .contactus-content .form .form-check .ivu-checkbox-group .ivu-checkbox-wrapper {\n            margin-right: 100px;\n            width: 180px;\n}\n.contactus .contactus-content .form .form-btn {\n        background-color: #FFE95C;\n        border-radius: 50px;\n        color: #000000;\n        font-size: 16px;\n        border-color: transparent;\n        min-width: 150px;\n}\n",""])},oZck:function(t,o,e){"use strict";var n={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"contactus"},[e("Container",[e("div",{staticClass:"contactus-content"},[e("h1",{staticClass:"form-title animated fadeInUp"},[t._v(t._s(t.$t("contactus.title")))]),e("p",{staticClass:"form-info animated fadeInUp"},[t._v(t._s(t.$t("contactus.intro")))]),e("div",{staticClass:"form animated bounceIn"},[e("Form",{attrs:{model:t.formTop,"label-position":"top"}},[e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.name"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("Input",{attrs:{type:"text"},model:{value:t.formTop.name,callback:function(o){t.$set(t.formTop,"name",o)},expression:"formTop.name"}})],1),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.tel"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("Input",{attrs:{type:"text",number:!0},model:{value:t.formTop.tel,callback:function(o){t.$set(t.formTop,"tel",o)},expression:"formTop.tel"}})],1),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.email"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("Input",{attrs:{type:"email"},model:{value:t.formTop.email,callback:function(o){t.$set(t.formTop,"email",o)},expression:"formTop.email"}})],1),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.other")))]),e("Input",{attrs:{type:"text"},model:{value:t.formTop.othercall,callback:function(o){t.$set(t.formTop,"othercall",o)},expression:"formTop.othercall"}})],1),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.address"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("Input",{attrs:{type:"text"},model:{value:t.formTop.address,callback:function(o){t.$set(t.formTop,"address",o)},expression:"formTop.address"}})],1),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.programtitle"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("div",{staticClass:"form-check"},[e("CheckboxGroup",{model:{value:t.formTop.program,callback:function(o){t.$set(t.formTop,"program",o)},expression:"formTop.program"}},[e("Checkbox",{attrs:{label:t.$t("contactus.program[0]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[1]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[2]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[3]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[4]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[5]")}}),e("Checkbox",{attrs:{label:t.$t("contactus.program[6]")}})],1)],1)]),e("FormItem",[e("p",{staticClass:"form-item-label",attrs:{name:"label"}},[t._v(t._s(t.$t("contactus.msg"))),e("span",{staticClass:"form-item-required"},[t._v("*")])]),e("Input",{attrs:{type:"textarea",rows:t.rows,autosize:!1},model:{value:t.formTop.message,callback:function(o){t.$set(t.formTop,"message",o)},expression:"formTop.message"}})],1),e("FormItem",[e("Button",{staticClass:"form-btn",on:{click:t.submit}},[t._v(t._s(t.$t("contactus.button_text")))])],1)],1)],1)])]),e("footerlink")],1)},staticRenderFns:[]};o.a=n},rZBg:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("/s08"),a=e("oZck");var s=function(t){e("SAHy")},r=e("VU/8")(n.a,a.a,!1,s,null,null);o.default=r.exports},ywlI:function(t,o,e){t.exports=e.p+"img/lxwm_bj.50c1896.png"}});
//# sourceMappingURL=16.07f2c2f88f60483874fb.js.map