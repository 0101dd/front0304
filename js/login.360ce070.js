(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"2da6":function(t,i,e){},"4bd4":function(t,i,e){"use strict";var n=e("5530"),r=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("d3b7"),e("159b"),e("7db0"),e("58df")),a=e("7e2b"),o=e("3206");i["a"]=Object(r["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var i=Object.values(t).includes(!0);this.$emit("input",!i)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var i=this,e=function(t){return t.$watch("hasError",(function(e){i.$set(i.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(i.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var i=this.inputs.find((function(i){return i._uid===t._uid}));if(i){var e=this.watchers.find((function(t){return t._uid===i._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==i._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==i._uid})),this.$delete(this.errorBag,i._uid)}}},render:function(t){var i=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return i.$emit("submit",t)}}},this.$slots.default)}})},a55b:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-app",[n("div",{attrs:{id:"login"}},[n("div",{staticClass:"overlay"},[n("v-img",{staticStyle:{position:"relative",left:"62%"},attrs:{src:e("d0a2"),width:"40%",height:"100%",id:"zhuzi"}}),n("v-form",{ref:"form",on:{submit:function(i){return i.preventDefault(),t.login.apply(null,arguments)}},model:{value:t.valid,callback:function(i){t.valid=i},expression:"valid"}},[n("div",{staticClass:"form-text"},[n("p",[t._v("帳號")]),n("v-text-field",{attrs:{rules:t.nameRules,counter:15,label:"請輸入帳號",required:""},model:{value:t.form.account,callback:function(i){t.$set(t.form,"account",i)},expression:"form.account"}}),n("p",[t._v("密碼")]),n("v-text-field",{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",rules:[t.passwordRules.required],type:t.show1?"text":"password",name:"input-10-1",label:"請輸入密碼",counter:"",color:"primary"},on:{"click:append":function(i){t.show1=!t.show1}},model:{value:t.form.password,callback:function(i){t.$set(t.form,"password",i)},expression:"form.password"}}),n("v-btn",{staticClass:"mt-6",attrs:{type:"submit",color:"primary",rounded:"",ripple:!1}},[t._v(" 登入 ")])],1)])],1)])])},r=[],a={data:function(){return{valid:!0,show1:!1,form:{account:"",password:""},passwordRules:{required:function(t){return!!t||"密碼爲必填"},length:function(t){return t.length>=4&&t.length<=20||"帳號至少 4 個字數"}},nameRules:[function(t){return!!t||"帳號爲必填"},function(t){return t.length>=4&&t.length<=20||"帳號至少 4 個字數"}]}},computed:{progress:function(){return Math.min(100,10*this.value.length)},color:function(){return["error","warning","success"][Math.floor(this.progress/40)]}},methods:{login:function(){this.$store.dispatch("user/login",this.form)}}},o=a,s=(e("fdd0"),e("2877")),u=e("6544"),d=e.n(u),l=e("7496"),c=e("8336"),f=e("4bd4"),h=e("adda"),p=e("8654"),m=Object(s["a"])(o,n,r,!1,null,"6db42d83",null);i["default"]=m.exports;d()(m,{VApp:l["a"],VBtn:c["a"],VForm:f["a"],VImg:h["a"],VTextField:p["a"]})},d0a2:function(t,i,e){t.exports=e.p+"img/zhuzi.76f26d76.png"},fdd0:function(t,i,e){"use strict";e("2da6")}}]);
//# sourceMappingURL=login.360ce070.js.map