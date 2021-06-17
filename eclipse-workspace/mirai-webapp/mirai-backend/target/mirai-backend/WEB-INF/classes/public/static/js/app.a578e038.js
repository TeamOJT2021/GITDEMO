(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,m=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function o(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"00c8a76e","chunk-2d0c85f8":"f8efde6e","chunk-2d0d03d6":"af98f928","chunk-2d0e5991":"c69b4a36"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad");var r=n("7a23"),a=Object(r["m"])("div",{id:"nav"},null,-1);function s(e,t,n,s,o,c){var i=Object(r["M"])("router-view");return Object(r["D"])(),Object(r["i"])(r["b"],null,[a,Object(r["m"])(i)],64)}var o={name:"App",components:{}};n("ac9a");o.render=s;var c=o,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(r["gb"])("data-v-bc4d34d0");Object(r["G"])("data-v-bc4d34d0");var l={class:"service"},d=Object(r["m"])("h2",null,"REST service call results",-1);Object(r["E"])();var m=u((function(e,t,n,a,s,o){return Object(r["D"])(),Object(r["i"])("div",l,[Object(r["m"])("h1",null,Object(r["Q"])(e.msg),1),d,Object(r["m"])("button",{onClick:t[1]||(t[1]=function(t){return e.callHelloApi()})}," CALL Spring Boot REST backend service "),Object(r["m"])("h4",null,"Backend response: "+Object(r["Q"])(e.backendResponse),1)])})),b=n("d4ec"),f=n("bee2"),g=n("bc3a"),p=n.n(g),h=p.a.create({baseURL:"/api",timeout:1e3,headers:{"Content-Type":"application/json"}}),j=function(){function e(){Object(b["a"])(this,e)}return Object(f["a"])(e,[{key:"hello",value:function(){return h.get("/hello")}},{key:"login",value:function(e){return p.a.post("/auth/signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return p.a.post("/auth/signup",{username:e.username,email:e.email,password:e.password})}},{key:"getSecured",value:function(e,t){return h.get("/auth/admin",{auth:{username:e,password:t}})}}]),e}(),v=new j,O=Object(r["n"])({name:"Service",data:function(){return{msg:"HowTo call REST-Services:",backendResponse:""}},methods:{callHelloApi:function(){var e=this;v.hello().then((function(e){return e.data})).then((function(t){e.backendResponse=t}))}}});n("9548");O.render=m,O.__scopeId="data-v-bc4d34d0";var y=O,k={class:"container"},w={class:"jumbotron"};function S(e,t,n,a,s,o){return Object(r["D"])(),Object(r["i"])("div",k,[Object(r["m"])("header",w,[Object(r["m"])("h3",null,Object(r["Q"])(s.content),1)])])}n("25f0");var I=n("ed02"),M={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;I["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}};M.render=S;var P=M,E=Object(r["gb"])("data-v-e1130688");Object(r["G"])("data-v-e1130688");var x={class:"col-md-12"},_={class:"card card-container"},F=Object(r["m"])("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),T={class:"form-group"},q=Object(r["m"])("label",{for:"username"},"Username",-1),R={class:"form-group"},L=Object(r["m"])("label",{for:"password"},"Password",-1),D={class:"form-group"},U={class:"spinner-border spinner-border-sm"},A=Object(r["m"])("span",null,"Login",-1),C={class:"form-group"},$={key:0,class:"alert alert-danger",role:"alert"};Object(r["E"])();var B=E((function(e,t,n,a,s,o){var c=Object(r["M"])("Field"),i=Object(r["M"])("ErrorMessage"),u=Object(r["M"])("Form");return Object(r["D"])(),Object(r["i"])("div",x,[Object(r["m"])("div",_,[F,Object(r["m"])(u,{onSubmit:o.handleLogin,"validation-schema":s.schema},{default:E((function(){return[Object(r["m"])("div",T,[q,Object(r["m"])(c,{name:"username",type:"text",class:"form-control"}),Object(r["m"])(i,{name:"username",class:"error-feedback"})]),Object(r["m"])("div",R,[L,Object(r["m"])(c,{name:"password",type:"password",class:"form-control"}),Object(r["m"])(i,{name:"password",class:"error-feedback"})]),Object(r["m"])("div",D,[Object(r["m"])("button",{class:"btn btn-primary btn-block",disabled:s.loading},[Object(r["db"])(Object(r["m"])("span",U,null,512),[[r["Y"],s.loading]]),A],8,["disabled"])]),Object(r["m"])("div",C,[s.message?(Object(r["D"])(),Object(r["i"])("div",$,Object(r["Q"])(s.message),1)):Object(r["j"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])})),J=n("7bb1"),Q=n("506a"),H={name:"Login",components:{Form:J["c"],Field:J["b"],ErrorMessage:J["a"]},data:function(){var e=Q["a"]().shape({username:Q["b"]().required("Username is required!"),password:Q["b"]().required("Password is required!")});return{loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){t.$router.push("/profile")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};H.render=B,H.__scopeId="data-v-e1130688";var G=H,N=Object(r["gb"])("data-v-2360fd50");Object(r["G"])("data-v-2360fd50");var Y={class:"col-md-12"},z={class:"card card-container"},K=Object(r["m"])("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),V={key:0},W={class:"form-group"},X=Object(r["m"])("label",{for:"username"},"Username",-1),Z={class:"form-group"},ee=Object(r["m"])("label",{for:"email"},"Email",-1),te={class:"form-group"},ne=Object(r["m"])("label",{for:"password"},"Password",-1),re={class:"form-group"},ae={class:"spinner-border spinner-border-sm"},se=Object(r["l"])(" Sign Up ");Object(r["E"])();var oe=N((function(e,t,n,a,s,o){var c=Object(r["M"])("Field"),i=Object(r["M"])("ErrorMessage"),u=Object(r["M"])("Form");return Object(r["D"])(),Object(r["i"])("div",Y,[Object(r["m"])("div",z,[K,Object(r["m"])(u,{onSubmit:o.handleRegister,"validation-schema":s.schema},{default:N((function(){return[s.successful?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])("div",V,[Object(r["m"])("div",W,[X,Object(r["m"])(c,{name:"username",type:"text",class:"form-control"}),Object(r["m"])(i,{name:"username",class:"error-feedback"})]),Object(r["m"])("div",Z,[ee,Object(r["m"])(c,{name:"email",type:"email",class:"form-control"}),Object(r["m"])(i,{name:"email",class:"error-feedback"})]),Object(r["m"])("div",te,[ne,Object(r["m"])(c,{name:"password",type:"password",class:"form-control"}),Object(r["m"])(i,{name:"password",class:"error-feedback"})]),Object(r["m"])("div",re,[Object(r["m"])("button",{class:"btn btn-primary btn-block",disabled:s.loading},[Object(r["db"])(Object(r["m"])("span",ae,null,512),[[r["Y"],s.loading]]),se],8,["disabled"])])]))]})),_:1},8,["onSubmit","validation-schema"]),s.message?(Object(r["D"])(),Object(r["i"])("div",{key:0,class:["alert",s.successful?"alert-success":"alert-danger"]},Object(r["Q"])(s.message),3)):Object(r["j"])("",!0)])])})),ce={name:"Register",components:{Form:J["c"],Field:J["b"],ErrorMessage:J["a"]},data:function(){var e=Q["a"]().shape({username:Q["b"]().required("Username is required!").min(3,"Must be at least 3 characters!").max(20,"Must be maximum 20 characters!"),email:Q["b"]().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:Q["b"]().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))}}};ce.render=oe,ce.__scopeId="data-v-2360fd50";var ie=ce,ue=function(){return n.e("chunk-2d0d03d6").then(n.bind(null,"66aa"))},le=function(){return n.e("chunk-2d0c85f8").then(n.bind(null,"5535"))},de=function(){return n.e("chunk-2d0e5991").then(n.bind(null,"94bb"))},me=function(){return n.e("chunk-2d0a4c1e").then(n.bind(null,"0899"))},be=[{path:"/",component:P},{path:"/home",component:P},{path:"/callservice",component:y},{path:"/login",component:G},{path:"/register",component:ie},{path:"/profile",name:"profile",component:ue},{path:"/admin",name:"admin",component:le},{path:"/mod",name:"moderator",component:de},{path:"/user",name:"user",component:me}],fe=Object(i["a"])({history:Object(i["b"])("/"),routes:be}),ge=fe,pe=n("5502"),he=JSON.parse(localStorage.getItem("user")),je=he?{status:{loggedIn:!0},user:he}:{status:{loggedIn:!1},user:null},ve={namespaced:!0,state:je,actions:{login:function(e,t){var n=e.commit;return v.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;v.logout(),t("logout")},register:function(e,t){var n=e.commit;return v.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},getters:{},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Oe=Object(pe["a"])({modules:{auth:ve}}),ye=Oe,ke=n("3fd4");n("7dd6"),n("7b17"),n("ab8b");ge.beforeEach((function(e,t,n){var r=["/login","/register","/home"],a=!r.includes(e.path),s=localStorage.getItem("user");a&&!s?n("/login"):n()})),Object(r["h"])(c).use(ke["a"]).use(ye).use(ge).mount("#app")},9548:function(e,t,n){"use strict";n("efce")},ac9a:function(e,t,n){"use strict";n("fc6c")},ed02:function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),s=n("bc3a"),o=n.n(s);function c(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var i=o.a.create({baseURL:"/api",timeout:1e3}),u=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getPublicContent",value:function(){return i.get("/test/all")}},{key:"getUserBoard",value:function(){return i.get("/test/user",{headers:c()})}},{key:"getModeratorBoard",value:function(){return i.get("/test/mod",{headers:c()})}},{key:"getAdminBoard",value:function(){return i.get("/test/admin",{headers:c()})}}]),e}();t["a"]=new u},efce:function(e,t,n){},fc6c:function(e,t,n){}});
//# sourceMappingURL=app.a578e038.js.map