(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],l=0,b=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&b.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-113d1cf8":"603ca32a","chunk-2d0e5e97":"00eea011"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var i=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0371":function(e,t,n){},1716:function(e,t,n){},"1ba8":function(e,t,n){"use strict";n("d3ec")},3974:function(e,t,n){"use strict";n("1716")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad");var r=n("7a23"),a={id:"app"};function o(e,t,n,o,u,c){var s=Object(r["M"])("router-view"),i=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])("div",a,[Object(r["m"])(i,null,{default:Object(r["bb"])((function(){return[Object(r["m"])(s,{key:e.$route.path})]})),_:1})])}var u={name:"App"};u.render=o;var c=u,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i={class:"home"};function l(e,t,n,a,o,u){var c=Object(r["M"])("SideBar"),s=Object(r["M"])("el-container"),l=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])("div",i,[Object(r["m"])(l,null,{default:Object(r["bb"])((function(){return[Object(r["m"])(s,{style:{border:"1px solid #eee"}},{default:Object(r["bb"])((function(){return[Object(r["m"])(c)]})),_:1})]})),_:1})])}var d=n("84be"),b=n.n(d),m=Object(r["fb"])("data-v-3eb3821c");Object(r["G"])("data-v-3eb3821c");var f=Object(r["m"])("div",{class:"nav-img"},[Object(r["m"])("img",{src:b.a,alt:"element-icon"})],-1),p=Object(r["m"])("i",{class:"el-icon-message"},null,-1),j=Object(r["l"])("Hello"),O=Object(r["m"])("i",{class:"el-icon-message"},null,-1),g=Object(r["l"])("Service"),h=Object(r["m"])("i",{class:"el-icon-message"},null,-1),v=Object(r["l"])("Login");Object(r["E"])();var w=m((function(e,t,n,a,o,u){var c=Object(r["M"])("el-menu-item"),s=Object(r["M"])("el-menu"),i=Object(r["M"])("el-aside"),l=Object(r["M"])("TopBar"),d=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(d,null,{default:m((function(){return[Object(r["m"])(i,{class:["aside",{isCollapse:o.collapsed}],style:{width:o.collapsed?"60px":"200px"}},{default:m((function(){return[f,Object(r["m"])(s,{class:"side-menu",collapse:o.collapsed,"default-openeds":["1"],"unique-opened":""},{default:m((function(){return[Object(r["m"])(c,{index:"1"},{title:m((function(){return[j]})),default:m((function(){return[p]})),_:1}),Object(r["m"])(c,{index:"2"},{title:m((function(){return[g]})),default:m((function(){return[O]})),_:1}),Object(r["m"])(c,{index:"3"},{title:m((function(){return[v]})),default:m((function(){return[h]})),_:1})]})),_:1},8,["collapse"])]})),_:1},8,["class","style"]),Object(r["m"])(l,{onHandleMenuCollapse:u.handleMenuCollapse,collapsed:o.collapsed},null,8,["onHandleMenuCollapse","collapsed"])]})),_:1})})),k=(n("25f0"),Object(r["fb"])("data-v-21c2b278"));Object(r["G"])("data-v-21c2b278");var _=Object(r["l"])("Home"),y=Object(r["l"])(" User Board"),x=Object(r["l"])(" Tasks"),M=Object(r["l"])("Register"),R=Object(r["l"])("Login"),U=Object(r["m"])("i",{class:"el-icon-user"},null,-1),A=Object(r["m"])("i",{class:"el-icon-right"},null,-1);Object(r["E"])();var S=k((function(e,t,n,a,o,u){var c=Object(r["M"])("el-menu-item"),s=Object(r["M"])("router-link"),i=Object(r["M"])("el-menu"),l=Object(r["M"])("el-header"),d=Object(r["M"])("Main"),b=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(b,null,{default:k((function(){return[Object(r["m"])(l,{style:{"text-align":"right","font-size":"12px"}},{default:k((function(){return[Object(r["m"])(i,{"default-active":o.activeIndex,class:"el-menu-demo",mode:"horizontal",onSelect:u.handleSelect},{default:k((function(){return[Object(r["m"])(c,{index:"1"},{default:k((function(){return[Object(r["m"])("div",{onClick:t[1]||(t[1]=function(){return u.handleMenuCollapse&&u.handleMenuCollapse.apply(u,arguments)}),class:"toggle-icon"},[Object(r["m"])("i",{class:n.collapsed?"el-icon-s-unfold":"el-icon-s-fold"},null,2)])]})),_:1}),Object(r["m"])(c,{index:"2"},{default:k((function(){return[Object(r["m"])(s,{to:"/public"},{default:k((function(){return[_]})),_:1})]})),_:1}),u.showAdminBoard?(Object(r["D"])(),Object(r["i"])(c,{key:0,index:"3"},{default:k((function(){return[Object(r["m"])(s,{to:"/board-admin"},{default:k((function(){return[Object(r["l"])(Object(r["Q"])(u.roleUser.toString())+" Admin Board ",1)]})),_:1})]})),_:1})):Object(r["j"])("",!0),u.showModeratorBoard?(Object(r["D"])(),Object(r["i"])(c,{key:1,index:"3"},{default:k((function(){return[Object(r["m"])(s,{to:"/board-mod"},{default:k((function(){return[Object(r["l"])(Object(r["Q"])(u.roleUser.toString())+" Mod Board ",1)]})),_:1})]})),_:1})):Object(r["j"])("",!0),u.showUserBoard||u.showAdminBoard?(Object(r["D"])(),Object(r["i"])(c,{key:2,index:"4"},{default:k((function(){return[Object(r["m"])(s,{to:"/board-user"},{default:k((function(){return[y]})),_:1})]})),_:1})):Object(r["j"])("",!0),Object(r["m"])(c,{index:"5"},{default:k((function(){return[Object(r["m"])(s,{to:{name:"tasks"}},{default:k((function(){return[x]})),_:1})]})),_:1}),u.currentUser?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])(c,{key:3,index:"6"},{default:k((function(){return[Object(r["m"])(s,{to:"/register"},{default:k((function(){return[M]})),_:1})]})),_:1})),u.currentUser?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])(c,{key:4,index:"7"},{default:k((function(){return[Object(r["m"])(s,{to:"/login"},{default:k((function(){return[R]})),_:1})]})),_:1})),u.currentUser?(Object(r["D"])(),Object(r["i"])(c,{key:5,index:"6"},{default:k((function(){return[U,Object(r["m"])(s,{to:"/profile"},{default:k((function(){return[Object(r["l"])(Object(r["Q"])(u.currentUser.username)+" profile",1)]})),_:1})]})),_:1})):Object(r["j"])("",!0),u.currentUser?(Object(r["D"])(),Object(r["i"])(c,{key:6,index:"7"},{default:k((function(){return[A,Object(r["m"])("a",{onClick:t[2]||(t[2]=Object(r["eb"])((function(){return u.logOut&&u.logOut.apply(u,arguments)}),["prevent"]))},"LogOut")]})),_:1})):Object(r["j"])("",!0)]})),_:1},8,["default-active","onSelect"])]})),_:1}),Object(r["m"])(d)]})),_:1})}));n("2532");function P(e,t,n,a,o,u){var c=Object(r["M"])("router-view"),s=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])(s,null,{default:Object(r["bb"])((function(){return[Object(r["m"])(c,{key:e.$route.path,name:"public"}),u.currentUser?(Object(r["D"])(),Object(r["i"])(c,{key:e.$route.path,name:"profile"})):Object(r["j"])("",!0),Object(r["m"])(c,{key:e.$route.path,name:"tasks"})]})),_:1})}var C={name:"Main",components:{},data:function(){return{}},computed:{currentUser:function(){return this.$store.state.auth.user}}};C.render=P;var B=C,F={name:"TopBar",components:{Main:B},props:{collapsed:Boolean},data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleMenuCollapse:function(){this.$emit("handleMenuCollapse")},handleSelect:function(e,t){console.log(e,t)},logOut:function(){this.$store.dispatch("auth/LOGOUT"),this.$router.push("/")}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("MODERATOR")},showUserBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("USER")},roleUser:function(){return this.$store.state.auth.user.roles}},emits:["handleMenuCollapse"]};n("3974");F.render=S,F.__scopeId="data-v-21c2b278";var I=F,T={name:"SideBar",components:{TopBar:I},data:function(){return{collapsed:!1}},methods:{handleMenuCollapse:function(){this.collapsed=!this.collapsed}}};n("befe");T.render=w,T.__scopeId="data-v-3eb3821c";var $=T,D={name:"Home",components:{SideBar:$}};D.render=l;var E=D,L=Object(r["fb"])("data-v-691633cb");Object(r["G"])("data-v-691633cb");var V={class:"card-login"},G=Object(r["m"])("span",null,"Register Form",-1),H={class:"card-login"},Q={class:"btn-login-form"},N={class:"spinner-border spinner-border-sm"},q=Object(r["l"])("Login"),z={class:"not-account"},J=Object(r["m"])("p",null,"Not register?",-1),K=Object(r["l"])("   ");Object(r["E"])();var Y=L((function(e,t,n,a,o,u){var c=Object(r["M"])("el-col"),s=Object(r["M"])("el-row"),i=Object(r["M"])("el-alert"),l=Object(r["M"])("el-input"),d=Object(r["M"])("el-form-item"),b=Object(r["M"])("el-button"),m=Object(r["M"])("el-form"),f=Object(r["M"])("el-card");return Object(r["D"])(),Object(r["i"])("div",V,[Object(r["m"])(s,{class:"card-title"},{default:L((function(){return[Object(r["m"])(c,null,{default:L((function(){return[G]})),_:1})]})),_:1}),Object(r["m"])("div",H,[Object(r["m"])(f,{class:"box-card"},{default:L((function(){return[o.message?(Object(r["D"])(),Object(r["i"])(i,{key:0,title:o.message,type:"error",value:o.message},null,8,["title","value"])):Object(r["j"])("",!0),Object(r["m"])(m,{model:o.loginForm,rules:o.rules,ref:"loginForm","status-icon":"","label-position":o.labelPosition,"label-width":"100px"},{default:L((function(){return[Object(r["m"])(d,{label:"Username",prop:"username"},{default:L((function(){return[Object(r["m"])(l,{modelValue:o.loginForm.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.loginForm.username=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(d,{label:"Password",prop:"password"},{default:L((function(){return[Object(r["m"])(l,{type:"password",modelValue:o.loginForm.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.loginForm.password=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(d,null,{default:L((function(){return[Object(r["m"])("div",Q,[Object(r["m"])(b,{type:"primary",disabled:o.loading,plain:"",onClick:t[3]||(t[3]=Object(r["eb"])((function(e){return u.login(o.loginForm)}),["prevent"]))},{default:L((function(){return[Object(r["cb"])(Object(r["m"])("span",N,null,512),[[r["Y"],o.loading]]),q]})),_:1},8,["disabled"])]),Object(r["m"])("div",z,[J,K,Object(r["m"])("a",{onClick:t[4]||(t[4]=Object(r["eb"])((function(){return u.redirectRegister&&u.redirectRegister.apply(u,arguments)}),["prevent"]))}," Create an account. ")])]})),_:1})]})),_:1},8,["model","rules","label-position"])]})),_:1})])])})),W={name:"Login",data:function(){var e=function(e,t,n){""===t?n(new Error("Please input the password")):n()};return{loading:!1,message:"",labelPosition:"top",loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"Please input your email",trigger:"blur"}],password:[{required:!0,validator:e,trigger:"blur"}]},methods:{}}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{login:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/LOGIN",e).then((function(){t.$router.push("/profile")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))},redirectRegister:function(){this.$router.push("/register")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!"),t.$router.push("/")}))}}};n("c843");W.render=Y,W.__scopeId="data-v-691633cb";var X=W,Z=Object(r["fb"])("data-v-4be8c37c");Object(r["G"])("data-v-4be8c37c");var ee={class:"card-register"},te=Object(r["m"])("span",null,"Register Form",-1),ne={class:"btn-register-form"},re={class:"spinner-border spinner-border-sm"},ae=Object(r["l"])("Register"),oe={class:"had-account"},ue=Object(r["m"])("p",null,"Had account?",-1),ce=Object(r["l"])("   ");Object(r["E"])();var se=Z((function(e,t,n,a,o,u){var c=Object(r["M"])("el-col"),s=Object(r["M"])("el-row"),i=Object(r["M"])("el-alert"),l=Object(r["M"])("el-input"),d=Object(r["M"])("el-form-item"),b=Object(r["M"])("el-button"),m=Object(r["M"])("el-form"),f=Object(r["M"])("el-card");return Object(r["D"])(),Object(r["i"])("div",ee,[Object(r["m"])(s,{class:"card-title"},{default:Z((function(){return[Object(r["m"])(c,null,{default:Z((function(){return[te]})),_:1})]})),_:1}),Object(r["m"])("div",null,[Object(r["m"])(f,{class:"box-card"},{default:Z((function(){return[o.message?(Object(r["D"])(),Object(r["i"])(i,{key:0,title:o.message,type:o.successful?"success":"error"},null,8,["title","type"])):Object(r["j"])("",!0),Object(r["m"])(m,{model:o.registerForm,rules:o.rules,ref:"registerForm","status-icon":"","label-position":o.labelPosition,"label-width":"100px"},{default:Z((function(){return[Object(r["m"])(d,{label:"Username",prop:"username"},{default:Z((function(){return[Object(r["m"])(l,{modelValue:o.registerForm.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.registerForm.username=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(d,{label:"Email",prop:"email"},{default:Z((function(){return[Object(r["m"])(l,{modelValue:o.registerForm.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.registerForm.email=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(d,{label:"Password",prop:"password"},{default:Z((function(){return[Object(r["m"])(l,{type:"password",modelValue:o.registerForm.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.registerForm.password=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(d,null,{default:Z((function(){return[Object(r["m"])("div",ne,[Object(r["m"])(b,{plain:!0,type:"primary",disabled:o.loading,onClick:t[4]||(t[4]=Object(r["eb"])((function(e){return u.handleRegister(o.registerForm)}),["prevent"]))},{default:Z((function(){return[Object(r["cb"])(Object(r["m"])("span",re,null,512),[[r["Y"],o.loading]]),ae]})),_:1},8,["disabled"])]),Object(r["m"])("div",oe,[ue,ce,Object(r["m"])("a",{onClick:t[5]||(t[5]=Object(r["eb"])((function(){return u.redirectLogin&&u.redirectLogin.apply(u,arguments)}),["prevent"]))}," Login. ")])]})),_:1})]})),_:1},8,["model","rules","label-position"])]})),_:1})])])})),ie={name:"Register",data:function(){var e=this,t=function(t,n,r){""===n?r(new Error("Please input the password")):(""!==e.registerForm.confirmPass&&e.$refs.registerForm.validateField("confirmPass"),r())};return{successful:!1,loading:!1,message:"",labelPosition:"top",registerForm:{username:"",email:"",password:""},rules:{username:[{required:!0,message:"Please input your username",trigger:"blur"}],email:[{type:"email",required:!0,message:"Please input your email",trigger:"blur"}],password:[{required:!0,validator:t,trigger:"blur"}]}}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,console.log(e),this.$store.dispatch("auth/REGISTER",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1,t.username="",t.email="",t.password="",t.confirmPass=""}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))},redirectLogin:function(){this.$router.push("/login")},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!")}))}}};n("1ba8");ie.render=se,ie.__scopeId="data-v-4be8c37c";var le=ie,de=Object(r["fb"])("data-v-0e388ad2");Object(r["G"])("data-v-0e388ad2");var be={key:0},me={class:"username"},fe=Object(r["l"])(" PROFILE "),pe=Object(r["m"])("strong",null,"Token:",-1),je=Object(r["m"])("strong",null,"Id:",-1),Oe=Object(r["m"])("strong",null,"Email:",-1),ge=Object(r["m"])("strong",null,"Authorities:",-1);Object(r["E"])();var he=de((function(e,t,n,a,o,u){return u.currentUser?(Object(r["D"])(),Object(r["i"])("div",be,[Object(r["m"])("header",null,[Object(r["m"])("h3",null,[Object(r["m"])("strong",me,Object(r["Q"])(u.currentUser.username),1),fe])]),Object(r["m"])("p",null,[pe,Object(r["l"])(" "+Object(r["Q"])(u.currentUser.accessToken.substring(0,100))+" ... ",1)]),Object(r["m"])("p",null,[je,Object(r["l"])(" "+Object(r["Q"])(u.currentUser.id),1)]),Object(r["m"])("p",null,[Oe,Object(r["l"])(" "+Object(r["Q"])(u.currentUser.email),1)]),ge,Object(r["m"])("ul",null,[(Object(r["D"])(!0),Object(r["i"])(r["b"],null,Object(r["K"])(u.currentUser.roles,(function(e){return Object(r["D"])(),Object(r["i"])("li",{key:e},Object(r["Q"])(e),1)})),128))])])):Object(r["j"])("",!0)})),ve={name:"Profile",data:function(){return{}},computed:{currentUser:function(){return alert(this.$store.state.auth.user.roles),this.$store.state.auth.user}}};n("7d42");ve.render=he,ve.__scopeId="data-v-0e388ad2";var we=ve,ke=Object(r["l"])("Click to redirect home page");function _e(e,t,n,a,o,u){var c=Object(r["M"])("el-button");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("h1",null,Object(r["Q"])(o.boardAuth),1),Object(r["m"])(c,{type:"primary",onClick:u.redirectHome},{default:Object(r["bb"])((function(){return[ke]})),_:1},8,["onClick"])],64)}var ye=n("1da1"),xe=(n("96cf"),n("bc3a")),Me=n.n(xe),Re=n("a78e"),Ue=n.n(Re),Ae="COOKIE_BEARER";function Se(){return Pe.apply(this,arguments)}function Pe(){return Pe=Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ue.a.get(Ae);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Pe.apply(this,arguments)}function Ce(){return Be.apply(this,arguments)}function Be(){return Be=Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ue.a.getJSON(Ae);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Be.apply(this,arguments)}function Fe(){return Ie.apply(this,arguments)}function Ie(){return Ie=Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ue.a.remove(Ae);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),Ie.apply(this,arguments)}function Te(){var e=Ce();return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var $e=Me.a.create({baseURL:"/api",timeout:1e3,headers:Te()}),De={getPublicContent:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/auth/all");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getUserBoard:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/auth/user");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getModeratorBoard:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/auth/mod");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getAdminBoard:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/auth/admin");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getPM:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.get("/auth/admin/projects");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},Ee={name:"BoardAdmin",data:function(){return{boardAuth:""}},created:function(){var e=this;De.getAdminBoard().then((function(t){console.log("ADMIN",t.data),e.boardAuth=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},methods:{redirectHome:function(){this.$router.push("/public")}}};Ee.render=_e;var Le=Ee,Ve=Object(r["l"])("Click to redirect home page");function Ge(e,t,n,a,o,u){var c=Object(r["M"])("el-button");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("h1",null,Object(r["Q"])(o.boardAuth),1),Object(r["m"])(c,{type:"primary",onClick:u.redirectHome},{default:Object(r["bb"])((function(){return[Ve]})),_:1},8,["onClick"])],64)}var He={name:"BoardModerator",data:function(){return{boardAuth:""}},created:function(){var e=this;De.getModeratorBoard().then((function(t){e.boardAuth=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},methods:{redirectHome:function(){this.$router.push("/public")}}};He.render=Ge;var Qe=He,Ne=Object(r["l"])("Click to redirect home page");function qe(e,t,n,a,o,u){var c=Object(r["M"])("el-button");return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("h1",null,Object(r["Q"])(o.boardAuth),1),Object(r["m"])(c,{type:"primary",onClick:u.redirectHome},{default:Object(r["bb"])((function(){return[Ne]})),_:1},8,["onClick"])],64)}var ze={name:"BoardPublic",data:function(){return{boardAuth:""}},created:function(){var e=this;De.getUserBoard().then((function(t){e.boardAuth=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},methods:{redirectHome:function(){this.$router.push("/public")}}};ze.render=qe;var Je=ze,Ke=n("cf05"),Ye=n.n(Ke),We=Object(r["m"])("img",{src:Ye.a,alt:""},null,-1);function Xe(e,t,n,a,o,u){return Object(r["D"])(),Object(r["i"])(r["b"],null,[Object(r["m"])("h1",null,Object(r["Q"])(o.boardAuth),1),We],64)}var Ze={name:"BoardPublic",components:{},data:function(){return{boardAuth:""}},created:function(){var e=this;De.getPublicContent().then((function(t){e.boardAuth=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}};Ze.render=Xe;var et=Ze,tt=function(){return n.e("chunk-113d1cf8").then(n.bind(null,"eb1f"))},nt=function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))},rt=[{path:"/",component:E,children:[{path:"/profile",name:"profile",components:{profile:we}},{path:"/public",name:"public",components:{public:et}},{path:"/tasks",name:"tasks",components:{tasks:tt}}]},{path:"/home",name:"home",component:E},{path:"/login",name:"login",component:X},{path:"/register",component:le},{path:"/board-admin",name:"boardAuthorizated",component:Le},{path:"/board-mod",name:"moderator",component:Qe},{path:"/board-user",name:"user",component:Je},{path:"/:pathMatch(.*)*",name:"NotFound",component:nt}],at=Object(s["a"])({history:Object(s["b"])("/"),routes:rt}),ot=at,ut=n("5502"),ct=Me.a.create({baseURL:"/api",timeout:5e3,headers:{"Content-Type":"application/json"},responseType:"json"}),st={login:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.post("/signin",{username:e.username,password:e.password}).then((function(e){return e.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},logout:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Fe();case 2:case"end":return e.stop()}}),e)})))()},register:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct.post("/signup",{username:e.username,email:e.email,password:e.password});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},it=Ce();console.log("JSON ",it);var lt=it?{status:{loggedIn:!0},user:it}:{status:{loggedIn:!1},user:null},dt={namespaced:!0,state:lt,actions:{LOGIN:function(e,t){return Object(ye["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,st.login(t).then((function(e){return console.log(e),r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},LOGOUT:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,st.logout();case 3:n("logout");case 4:case"end":return t.stop()}}),t)})))()},REGISTER:function(e,t){return Object(ye["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,st.register(t).then((function(e){return console.log("success"),r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return console.log("false",e.message),r("registerFailure"),Promise.reject(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},getters:{},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},bt=Me.a.create({baseURL:"/api",timeout:1e3,headers:Te()}),mt={getAllTasks:function(){return bt.get("/auth/tasks")},saveTask:function(){return Object(ye["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,bt.post("/auth/task/save");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},getTaskById:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,bt.get("/auth/task/id/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getAdminBoard:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,bt.put("/auth/task/id/".concat(e,"/edit"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},ft={tasks:[]},pt={tasks:function(e){return e.tasks}},jt={getAllTasks:function(e){return Object(ye["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,mt.getAllTasks().then((function(e){n("SET_GET_ALL_TASKS",e.data)})).catch((function(e){return Promise.reject(e)}));case 3:case"end":return t.stop()}}),t)})))()}},Ot={SET_GET_ALL_TASKS:function(e,t){e.tasks=t}},gt={state:ft,getters:pt,actions:jt,mutations:Ot},ht={modules:{auth:dt,task:gt}},vt=Object(ut["a"])(ht),wt=vt,kt=n("3fd4");n("7dd6");ot.beforeEach((function(e,t,n){var r=["/login","/register","/home","/"],a=!r.includes(e.path),o=Se;a&&!o?n("/login"):n()})),Object(r["h"])(c).use(kt["a"]).use(wt).use(ot).mount("#app")},"7d42":function(e,t,n){"use strict";n("9528")},"84be":function(e,t,n){e.exports=n.p+"static/img/element.128df252.svg"},9528:function(e,t,n){},befe:function(e,t,n){"use strict";n("db0b")},c843:function(e,t,n){"use strict";n("0371")},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.82b9c7a5.png"},d3ec:function(e,t,n){},db0b:function(e,t,n){}});
//# sourceMappingURL=app.844ec99c.js.map