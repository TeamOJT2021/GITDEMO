(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,b=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a=[];function o(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-13be0746":"e76f68d5","chunk-2d217357":"1d7d56ca","chunk-3dc39a7b":"e36dc213","chunk-5c36a9ba":"5d56e07c","chunk-5d381644":"f243162b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}c[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13af":function(e,t,n){},"19c0":function(e,t,n){"use strict";n("af2d")},"384d":function(e,t,n){"use strict";n("aa82")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad");var r=n("7a23"),c={id:"app"};function a(e,t,n,a,o,u){var s=Object(r["M"])("router-view"),i=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])("div",c,[Object(r["m"])(i,null,{default:Object(r["cb"])((function(){return[Object(r["m"])(s)]})),_:1})])}var o={name:"App"};o.render=a;var u=o,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i={class:"home"};function l(e,t,n,c,a,o){var u=Object(r["M"])("SideBar"),s=Object(r["M"])("el-container"),l=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])("div",i,[Object(r["m"])(l,null,{default:Object(r["cb"])((function(){return[Object(r["m"])(s,{style:{border:"1px solid #eee"}},{default:Object(r["cb"])((function(){return[Object(r["m"])(u)]})),_:1})]})),_:1})])}var d=n("84be"),b=n.n(d),m=Object(r["gb"])("data-v-3eb3821c");Object(r["G"])("data-v-3eb3821c");var f=Object(r["m"])("div",{class:"nav-img"},[Object(r["m"])("img",{src:b.a,alt:"element-icon"})],-1),p=Object(r["m"])("i",{class:"el-icon-message"},null,-1),O=Object(r["l"])("Hello"),j=Object(r["m"])("i",{class:"el-icon-message"},null,-1),g=Object(r["l"])("Service"),h=Object(r["m"])("i",{class:"el-icon-message"},null,-1),v=Object(r["l"])("Login");Object(r["E"])();var M=m((function(e,t,n,c,a,o){var u=Object(r["M"])("el-menu-item"),s=Object(r["M"])("el-menu"),i=Object(r["M"])("el-aside"),l=Object(r["M"])("TopBar"),d=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(d,null,{default:m((function(){return[Object(r["m"])(i,{class:["aside",{isCollapse:a.collapsed}],style:{width:a.collapsed?"60px":"200px"}},{default:m((function(){return[f,Object(r["m"])(s,{class:"side-menu",collapse:a.collapsed,"default-openeds":["1"],"unique-opened":""},{default:m((function(){return[Object(r["m"])(u,{index:"1"},{title:m((function(){return[O]})),default:m((function(){return[p]})),_:1}),Object(r["m"])(u,{index:"2"},{title:m((function(){return[g]})),default:m((function(){return[j]})),_:1}),Object(r["m"])(u,{index:"3"},{title:m((function(){return[v]})),default:m((function(){return[h]})),_:1})]})),_:1},8,["collapse"])]})),_:1},8,["class","style"]),Object(r["m"])(l,{onHandleMenuCollapse:o.handleMenuCollapse,collapsed:a.collapsed},null,8,["onHandleMenuCollapse","collapsed"])]})),_:1})})),_=Object(r["gb"])("data-v-1e9dacf8");Object(r["G"])("data-v-1e9dacf8");var y=Object(r["l"])("Home"),k=Object(r["l"])(" Admin Board "),w=Object(r["l"])(" Mod Board "),x=Object(r["l"])(" User Board"),P=Object(r["l"])("Register"),S=Object(r["l"])("Login"),I=Object(r["m"])("i",{class:"el-icon-user"},null,-1),U=Object(r["m"])("i",{class:"el-icon-right"},null,-1);Object(r["E"])();var E=_((function(e,t,n,c,a,o){var u=Object(r["M"])("el-menu-item"),s=Object(r["M"])("router-link"),i=Object(r["M"])("el-menu"),l=Object(r["M"])("el-header"),d=Object(r["M"])("Main"),b=Object(r["M"])("el-container");return Object(r["D"])(),Object(r["i"])(b,null,{default:_((function(){return[Object(r["m"])(l,{style:{"text-align":"right","font-size":"12px"}},{default:_((function(){return[Object(r["m"])(i,{"default-active":a.activeIndex,class:"el-menu-demo",mode:"horizontal",onSelect:o.handleSelect},{default:_((function(){return[Object(r["m"])(u,{index:"1"},{default:_((function(){return[Object(r["m"])("div",{onClick:t[1]||(t[1]=function(){return o.handleMenuCollapse&&o.handleMenuCollapse.apply(o,arguments)}),class:"toggle-icon"},[Object(r["m"])("i",{class:n.collapsed?"el-icon-s-unfold":"el-icon-s-fold"},null,2)])]})),_:1}),Object(r["m"])(u,{index:"2"},{default:_((function(){return[Object(r["m"])(s,{to:"/public"},{default:_((function(){return[y]})),_:1})]})),_:1}),o.showAdminBoard?(Object(r["D"])(),Object(r["i"])(u,{key:0,index:"3"},{default:_((function(){return[Object(r["m"])(s,{to:"/board-admin"},{default:_((function(){return[k]})),_:1})]})),_:1})):Object(r["j"])("",!0),o.showModeratorBoard?(Object(r["D"])(),Object(r["i"])(u,{key:1,index:"3"},{default:_((function(){return[Object(r["m"])(s,{to:"/board-mod"},{default:_((function(){return[w]})),_:1})]})),_:1})):Object(r["j"])("",!0),Object(r["m"])(u,{index:"4"},{default:_((function(){return[Object(r["m"])(s,{to:"/board-user"},{default:_((function(){return[x]})),_:1})]})),_:1}),o.currentUser?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])(u,{key:2,index:"5",style:{"margin-left":"507px"}},{default:_((function(){return[Object(r["m"])(s,{to:"/register"},{default:_((function(){return[P]})),_:1})]})),_:1})),o.currentUser?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])(u,{key:3,index:"6"},{default:_((function(){return[Object(r["m"])(s,{to:"/login"},{default:_((function(){return[S]})),_:1})]})),_:1})),o.currentUser?(Object(r["D"])(),Object(r["i"])(u,{key:4,index:"5",style:{"margin-left":"507px"}},{default:_((function(){return[I,Object(r["m"])(s,{to:"/profile"},{default:_((function(){return[Object(r["l"])(Object(r["Q"])(o.currentUser.username)+" profile",1)]})),_:1})]})),_:1})):Object(r["j"])("",!0),o.currentUser?(Object(r["D"])(),Object(r["i"])(u,{key:5,index:"6"},{default:_((function(){return[U,Object(r["m"])("a",{onClick:t[2]||(t[2]=Object(r["fb"])((function(){return o.logOut&&o.logOut.apply(o,arguments)}),["prevent"]))},"LogOut")]})),_:1})):Object(r["j"])("",!0)]})),_:1},8,["default-active","onSelect"])]})),_:1}),Object(r["m"])(d)]})),_:1})}));n("2532");function C(e,t,n,c,a,o){var u=Object(r["M"])("router-view"),s=Object(r["M"])("el-main");return Object(r["D"])(),Object(r["i"])(s,null,{default:Object(r["cb"])((function(){return[Object(r["m"])(u,{key:e.$route.fullPath,name:"Public"}),Object(r["m"])(u,{key:e.$route.fullPath,name:"Profile"})]})),_:1})}var T={name:"Main",components:{},data:function(){return{}}};T.render=C;var D=T,F={name:"TopBar",components:{Main:D},props:{collapsed:Boolean},data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleMenuCollapse:function(){this.$emit("handleMenuCollapse")},handleSelect:function(e,t){console.log(e,t)},logOut:function(){this.$store.dispatch("auth/LOGOUT"),this.$router.push("/login")}},computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")},roleUser:function(){return this.$store.state.auth.user.roles}},emits:["handleMenuCollapse"]};n("19c0");F.render=E,F.__scopeId="data-v-1e9dacf8";var $=F,B={name:"SideBar",components:{TopBar:$},data:function(){return{collapsed:!1}},methods:{handleMenuCollapse:function(){this.collapsed=!this.collapsed}}};n("befe");B.render=M,B.__scopeId="data-v-3eb3821c";var L=B,R={name:"Home",components:{SideBar:L}};R.render=l;var q=R,G=Object(r["gb"])("data-v-bd7c286a");Object(r["G"])("data-v-bd7c286a");var A={class:"card-login"},N=Object(r["m"])("div",{class:"card-header"},[Object(r["m"])("span",null,"Login Form")],-1),V={class:"btn-login-form"},H={class:"spinner-border spinner-border-sm"},J=Object(r["l"])("Login"),z=Object(r["l"])(" Sign Up");Object(r["E"])();var K=G((function(e,t,n,c,a,o){var u=Object(r["M"])("el-alert"),s=Object(r["M"])("el-input"),i=Object(r["M"])("el-form-item"),l=Object(r["M"])("el-button"),d=Object(r["M"])("router-link"),b=Object(r["M"])("el-form"),m=Object(r["M"])("el-card");return Object(r["D"])(),Object(r["i"])("div",A,[Object(r["m"])(m,{class:"box-card"},{header:G((function(){return[N]})),default:G((function(){return[a.message?(Object(r["D"])(),Object(r["i"])(u,{key:0,title:"error alert",type:"error",value:a.message},null,8,["value"])):Object(r["j"])("",!0),Object(r["m"])(b,{model:a.ruleForm,rules:a.rules,ref:"ruleForm","status-icon":"","label-position":a.labelPosition,"label-width":"100px"},{default:G((function(){return[Object(r["m"])(i,{label:"Username",prop:"username"},{default:G((function(){return[Object(r["m"])(s,{modelValue:a.ruleForm.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.ruleForm.username=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(i,{label:"Password",prop:"password"},{default:G((function(){return[Object(r["m"])(s,{type:"password",modelValue:a.ruleForm.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.ruleForm.password=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Object(r["m"])(i,null,{default:G((function(){return[Object(r["m"])("div",V,[Object(r["m"])(l,{to:"/",type:"success",disabled:a.loading,plain:"",onClick:Object(r["fb"])(o.login,["prevent"])},{default:G((function(){return[Object(r["db"])(Object(r["m"])("span",H,null,512),[[r["Y"],a.loading]]),J]})),_:1},8,["disabled","onClick"]),Object(r["m"])(d,{to:"/signup"},{default:G((function(){return[Object(r["m"])(l,{type:"danger",plain:""},{default:G((function(){return[z]})),_:1})]})),_:1})])]})),_:1})]})),_:1},8,["model","rules","label-position"])]})),_:1})])})),Q=(n("25f0"),{name:"Login",data:function(){var e=function(e,t,n){""===t?n(new Error("Please input the password")):n()};return{loading:!1,message:"",labelPosition:"top",ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"Please input your email",trigger:"blur"}],password:[{required:!0,validator:e,trigger:"blur"}]}}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{login:function(){var e=this;this.loading=!0,this.$store.dispatch("auth/LOGIN",{username:this.username,password:this.password}).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!"),t.$router.push("/")}))}}});n("c0c9");Q.render=K,Q.__scopeId="data-v-bd7c286a";var Y=Q,W=Object(r["gb"])("data-v-0c3164d0");Object(r["G"])("data-v-0c3164d0");var X={class:"col-md-12"},Z={class:"card card-container"},ee=Object(r["m"])("h1",null,"Register",-1),te={key:0},ne={class:"form-group"},re=Object(r["m"])("label",{for:"username"},"Username",-1),ce={class:"form-group"},ae=Object(r["m"])("label",{for:"email"},"Email",-1),oe={class:"form-group"},ue=Object(r["m"])("label",{for:"password"},"Password",-1),se={class:"form-group"},ie={class:"spinner-border spinner-border-sm"},le=Object(r["l"])(" Sign Up "),de=Object(r["l"])("Click to redirect login page ");Object(r["E"])();var be=W((function(e,t,n,c,a,o){var u=Object(r["M"])("Field"),s=Object(r["M"])("ErrorMessage"),i=Object(r["M"])("Form"),l=Object(r["M"])("el-button");return Object(r["D"])(),Object(r["i"])("div",X,[Object(r["m"])("div",Z,[ee,Object(r["m"])(i,{class:"form",onSubmit:o.handleRegister,"validation-schema":a.schema},{default:W((function(){return[a.successful?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])("div",te,[Object(r["m"])("div",ne,[re,Object(r["m"])(u,{name:"username",type:"text",class:"form-control"}),Object(r["m"])(s,{name:"username",class:"error-feedback"})]),Object(r["m"])("div",ce,[ae,Object(r["m"])(u,{name:"email",type:"email",class:"form-control"}),Object(r["m"])(s,{name:"email",class:"error-feedback"})]),Object(r["m"])("div",oe,[ue,Object(r["m"])(u,{name:"password",type:"password",class:"form-control"}),Object(r["m"])(s,{name:"password",class:"error-feedback"})]),Object(r["m"])("div",se,[Object(r["m"])("button",{class:"btn btn-primary btn-block",disabled:a.loading},[Object(r["db"])(Object(r["m"])("span",ie,null,512),[[r["Y"],a.loading]]),le],8,["disabled"])])]))]})),_:1},8,["onSubmit","validation-schema"]),a.message?(Object(r["D"])(),Object(r["i"])("div",{key:0,class:["alert",a.successful?"alert-success":"alert-danger"]},[Object(r["l"])(Object(r["Q"])(a.message)+" ",1),Object(r["m"])("div",null,[Object(r["m"])(l,{class:"btn-success-register",onClick:o.homePage},{default:W((function(){return[de]})),_:1},8,["onClick"])])],2)):Object(r["j"])("",!0)])])})),me=n("7bb1"),fe=n("506a"),pe={name:"Register",components:{Form:me["c"],Field:me["b"],ErrorMessage:me["a"]},data:function(){var e=fe["a"]().shape({username:fe["b"]().required("Username is required!").min(3,"Must be at least 3 characters!").max(20,"Must be maximum 20 characters!"),email:fe["b"]().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:fe["b"]().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/REGISTER",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))},homePage:function(){this.$router.push("/login")}}};n("384d");pe.render=be,pe.__scopeId="data-v-0c3164d0";var Oe=pe,je=function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},ge=function(){return n.e("chunk-5d381644").then(n.bind(null,"b295"))},he=function(){return n.e("chunk-3dc39a7b").then(n.bind(null,"77f5"))},ve=function(){return n.e("chunk-13be0746").then(n.bind(null,"9a40"))},Me=function(){return n.e("chunk-5c36a9ba").then(n.bind(null,"08cf"))},_e=[{path:"/",component:q,children:[{path:"/profile",name:"profile",components:{Profile:je}},{path:"/public",name:"public",components:{Public:Me}}]},{path:"/home",name:"home",component:q},{path:"/login",name:"login",component:Y},{path:"/register",component:Oe},{path:"/board-admin",name:"boardAuthorizated",component:ge},{path:"/board-mod",name:"moderator",component:he},{path:"/board-user",name:"user",component:ve}],ye=Object(s["a"])({history:Object(s["b"])("/"),routes:_e}),ke=ye,we=n("5502"),xe=n("a78e"),Pe=n.n(xe),Se=n("bc3a"),Ie=n.n(Se),Ue=n("5f87"),Ee=n("82ca"),Ce=Ie.a.create({baseURL:"/api",timeout:1e3,headers:Object(Ee["a"])()}),Te={hello:function(){return Ce.get("/hello")},login:function(e){return Ce.post("/signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&Object(Ue["d"])({accessToken:e.data.accessToken,roles:e.data.roles,username:e.data.username}),e.data}))},logout:function(){Object(Ue["c"])()},register:function(e){return Ce.post("/signup",{username:e.username,email:e.email,password:e.password})}},De=Pe.a.getJSON("TOKEN");console.log("JSON ",De);var Fe=De?{status:{loggedIn:!0},user:De}:{status:{loggedIn:!1},user:null},$e={namespaced:!0,state:Fe,actions:{LOGIN:function(e,t){var n=e.commit;return Te.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},LOGOUT:function(e){var t=e.commit;Te.logout(),t("logout")},REGISTER:function(e,t){var n=e.commit;return Te.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},getters:{},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Be=Object(we["a"])({modules:{auth:$e}}),Le=Be,Re=n("3fd4");n("7dd6"),n("7b17"),n("ab8b");ke.beforeEach((function(e,t,n){var r=["/login","/register","/home"],c=!r.includes(e.path),a=Ue["b"];c&&!a?n("/login"):n()})),Object(r["h"])(u).use(Re["a"]).use(Le).use(ke).mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n("a78e"),c=n.n(r),a="TOKEN";function o(){return c.a.get(a)}function u(){return c.a.getJSON(a)}function s(e){return c.a.set(a,e)}function i(){return c.a.remove(a)}},"82ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("5f87");function c(){var e=Object(r["a"])();return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}},"84be":function(e,t,n){e.exports=n.p+"static/img/element.128df252.svg"},aa82:function(e,t,n){},af2d:function(e,t,n){},befe:function(e,t,n){"use strict";n("db0b")},c0c9:function(e,t,n){"use strict";n("13af")},db0b:function(e,t,n){}});
//# sourceMappingURL=app.e0f8ea3c.js.map