(function(e){function t(t){for(var r,a,o=t[0],i=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function o(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"00c8a76e","chunk-2d0d03d6":"af98f928","chunk-2d0e5991":"c69b4a36","chunk-7a50b8ac":"3b63eb28"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-7a50b8ac":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-2d0a4c1e":"31d6cfe0","chunk-2d0d03d6":"31d6cfe0","chunk-2d0e5991":"31d6cfe0","chunk-7a50b8ac":"c0531d01"}[e]+".css",s=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(m)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad");var r=n("7a23"),a={id:"app"},s={class:"navbar navbar-expand navbar-dark bg-dark"},c=Object(r["m"])("a",{href:"/",class:"navbar-brand"},"bezKoder",-1),o={class:"navbar-nav mr-auto"},i={class:"nav-item"},u=Object(r["l"])(" Home "),l={key:0,class:"nav-item"},d=Object(r["l"])("Admin Board"),m={key:1,class:"nav-item"},b=Object(r["l"])("Moderator Board"),f={class:"nav-item"},g=Object(r["l"])("User"),p={key:0,class:"navbar-nav ml-auto"},j={class:"nav-item"},O=Object(r["l"])(" Sign Up "),h={class:"nav-item"},v=Object(r["l"])(" Login "),k={key:1,class:"navbar-nav ml-auto"},y={class:"nav-item"},w={class:"nav-item"},S=Object(r["l"])(" LogOut "),M={class:"container"};function _(e,t,n,_,E,I){var U=Object(r["M"])("font-awesome-icon"),P=Object(r["M"])("router-link"),x=Object(r["M"])("router-view");return Object(r["D"])(),Object(r["i"])("div",a,[Object(r["m"])("nav",s,[c,Object(r["m"])("div",o,[Object(r["m"])("li",i,[Object(r["m"])(P,{to:"/home",class:"nav-link"},{default:Object(r["cb"])((function(){return[Object(r["m"])(U,{icon:"home"}),u]})),_:1})]),I.showAdminBoard?(Object(r["D"])(),Object(r["i"])("li",l,[Object(r["m"])(P,{to:"/admin",class:"nav-link"},{default:Object(r["cb"])((function(){return[d]})),_:1})])):Object(r["j"])("",!0),I.showModeratorBoard?(Object(r["D"])(),Object(r["i"])("li",m,[Object(r["m"])(P,{to:"/mod",class:"nav-link"},{default:Object(r["cb"])((function(){return[b]})),_:1})])):Object(r["j"])("",!0),Object(r["m"])("li",f,[I.currentUser?(Object(r["D"])(),Object(r["i"])(P,{key:0,to:"/user",class:"nav-link"},{default:Object(r["cb"])((function(){return[g]})),_:1})):Object(r["j"])("",!0)])]),I.currentUser?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])("div",p,[Object(r["m"])("li",j,[Object(r["m"])(P,{to:"/register",class:"nav-link"},{default:Object(r["cb"])((function(){return[Object(r["m"])(U,{icon:"user-plus"}),O]})),_:1})]),Object(r["m"])("li",h,[Object(r["m"])(P,{to:"/login",class:"nav-link"},{default:Object(r["cb"])((function(){return[Object(r["m"])(U,{icon:"sign-in-alt"}),v]})),_:1})])])),I.currentUser?(Object(r["D"])(),Object(r["i"])("div",k,[Object(r["m"])("li",y,[Object(r["m"])(P,{to:"/profile",class:"nav-link"},{default:Object(r["cb"])((function(){return[Object(r["m"])(U,{icon:"user"}),Object(r["l"])(" "+Object(r["Q"])(I.currentUser.username),1)]})),_:1})]),Object(r["m"])("li",w,[Object(r["m"])("a",{class:"nav-link",onClick:t[1]||(t[1]=Object(r["fb"])((function(){return I.logOut&&I.logOut.apply(I,arguments)}),["prevent"]))},[Object(r["m"])(U,{icon:"sign-out-alt"}),S])])])):Object(r["j"])("",!0)]),Object(r["m"])("div",M,[Object(r["m"])(x)])])}n("2532");var E={computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}};E.render=_;var I=E,U=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),P=Object(r["gb"])("data-v-bc4d34d0");Object(r["G"])("data-v-bc4d34d0");var x={class:"service"},D=Object(r["m"])("h2",null,"REST service call results",-1);Object(r["E"])();var L=P((function(e,t,n,a,s,c){return Object(r["D"])(),Object(r["i"])("div",x,[Object(r["m"])("h1",null,Object(r["Q"])(e.msg),1),D,Object(r["m"])("button",{onClick:t[1]||(t[1]=function(t){return e.callHelloApi()})}," CALL Spring Boot REST backend service "),Object(r["m"])("h4",null,"Backend response: "+Object(r["Q"])(e.backendResponse),1)])})),A=n("bc3a"),T=n.n(A),B=T.a.create({baseURL:"/api",timeout:1e3,headers:{"Content-Type":"application/json"}}),R={hello:function(){return B.get("/hello")},login:function(e){return B.post("/auth/signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},register:function(e){return B.post("/auth/signup",{username:e.username,email:e.email,password:e.password})},getSecured:function(e,t){return B.get("/auth/admin",{auth:{username:e,password:t}})}},C=Object(r["n"])({name:"Service",data:function(){return{msg:"HowTo call REST-Services:",backendResponse:""}},methods:{callHelloApi:function(){var e=this;R.hello().then((function(e){return e.data})).then((function(t){e.backendResponse=t}))}}});n("9548");C.render=L,C.__scopeId="data-v-bc4d34d0";var F=C,q={class:"container"},$={class:"jumbotron"};function N(e,t,n,a,s,c){return Object(r["D"])(),Object(r["i"])("div",q,[Object(r["m"])("header",$,[Object(r["m"])("h3",null,Object(r["Q"])(s.content),1)])])}n("25f0");var H=n("ed02"),Q={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;H["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}};Q.render=N;var J=Q,G=Object(r["gb"])("data-v-e1130688");Object(r["G"])("data-v-e1130688");var z={class:"col-md-12"},K={class:"card card-container"},Y=Object(r["m"])("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),V={class:"form-group"},W=Object(r["m"])("label",{for:"username"},"Username",-1),X={class:"form-group"},Z=Object(r["m"])("label",{for:"password"},"Password",-1),ee={class:"form-group"},te={class:"spinner-border spinner-border-sm"},ne=Object(r["m"])("span",null,"Login",-1),re={class:"form-group"},ae={key:0,class:"alert alert-danger",role:"alert"};Object(r["E"])();var se=G((function(e,t,n,a,s,c){var o=Object(r["M"])("Field"),i=Object(r["M"])("ErrorMessage"),u=Object(r["M"])("Form");return Object(r["D"])(),Object(r["i"])("div",z,[Object(r["m"])("div",K,[Y,Object(r["m"])(u,{onSubmit:c.handleLogin,"validation-schema":s.schema},{default:G((function(){return[Object(r["m"])("div",V,[W,Object(r["m"])(o,{name:"username",type:"text",class:"form-control"}),Object(r["m"])(i,{name:"username",class:"error-feedback"})]),Object(r["m"])("div",X,[Z,Object(r["m"])(o,{name:"password",type:"password",class:"form-control"}),Object(r["m"])(i,{name:"password",class:"error-feedback"})]),Object(r["m"])("div",ee,[Object(r["m"])("button",{class:"btn btn-primary btn-block",disabled:s.loading},[Object(r["db"])(Object(r["m"])("span",te,null,512),[[r["Y"],s.loading]]),ne],8,["disabled"])]),Object(r["m"])("div",re,[s.message?(Object(r["D"])(),Object(r["i"])("div",ae,Object(r["Q"])(s.message),1)):Object(r["j"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])})),ce=n("7bb1"),oe=n("506a"),ie={name:"Login",components:{Form:ce["c"],Field:ce["b"],ErrorMessage:ce["a"]},data:function(){var e=oe["a"]().shape({username:oe["b"]().required("Username is required!"),password:oe["b"]().required("Password is required!")});return{loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){t.$router.push("/profile")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};ie.render=se,ie.__scopeId="data-v-e1130688";var ue=ie,le=Object(r["gb"])("data-v-2360fd50");Object(r["G"])("data-v-2360fd50");var de={class:"col-md-12"},me={class:"card card-container"},be=Object(r["m"])("img",{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",class:"profile-img-card"},null,-1),fe={key:0},ge={class:"form-group"},pe=Object(r["m"])("label",{for:"username"},"Username",-1),je={class:"form-group"},Oe=Object(r["m"])("label",{for:"email"},"Email",-1),he={class:"form-group"},ve=Object(r["m"])("label",{for:"password"},"Password",-1),ke={class:"form-group"},ye={class:"spinner-border spinner-border-sm"},we=Object(r["l"])(" Sign Up ");Object(r["E"])();var Se=le((function(e,t,n,a,s,c){var o=Object(r["M"])("Field"),i=Object(r["M"])("ErrorMessage"),u=Object(r["M"])("Form");return Object(r["D"])(),Object(r["i"])("div",de,[Object(r["m"])("div",me,[be,Object(r["m"])(u,{onSubmit:c.handleRegister,"validation-schema":s.schema},{default:le((function(){return[s.successful?Object(r["j"])("",!0):(Object(r["D"])(),Object(r["i"])("div",fe,[Object(r["m"])("div",ge,[pe,Object(r["m"])(o,{name:"username",type:"text",class:"form-control"}),Object(r["m"])(i,{name:"username",class:"error-feedback"})]),Object(r["m"])("div",je,[Oe,Object(r["m"])(o,{name:"email",type:"email",class:"form-control"}),Object(r["m"])(i,{name:"email",class:"error-feedback"})]),Object(r["m"])("div",he,[ve,Object(r["m"])(o,{name:"password",type:"password",class:"form-control"}),Object(r["m"])(i,{name:"password",class:"error-feedback"})]),Object(r["m"])("div",ke,[Object(r["m"])("button",{class:"btn btn-primary btn-block",disabled:s.loading},[Object(r["db"])(Object(r["m"])("span",ye,null,512),[[r["Y"],s.loading]]),we],8,["disabled"])])]))]})),_:1},8,["onSubmit","validation-schema"]),s.message?(Object(r["D"])(),Object(r["i"])("div",{key:0,class:["alert",s.successful?"alert-success":"alert-danger"]},Object(r["Q"])(s.message),3)):Object(r["j"])("",!0)])])})),Me={name:"Register",components:{Form:ce["c"],Field:ce["b"],ErrorMessage:ce["a"]},data:function(){var e=oe["a"]().shape({username:oe["b"]().required("Username is required!").min(3,"Must be at least 3 characters!").max(20,"Must be maximum 20 characters!"),email:oe["b"]().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:oe["b"]().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))}}};Me.render=Se,Me.__scopeId="data-v-2360fd50";var _e=Me,Ee=function(){return n.e("chunk-2d0d03d6").then(n.bind(null,"66aa"))},Ie=function(){return n.e("chunk-7a50b8ac").then(n.bind(null,"5535"))},Ue=function(){return n.e("chunk-2d0e5991").then(n.bind(null,"94bb"))},Pe=function(){return n.e("chunk-2d0a4c1e").then(n.bind(null,"0899"))},xe=[{path:"/",component:J},{path:"/home",component:J},{path:"/callservice",component:F},{path:"/login",component:ue},{path:"/register",component:_e},{path:"/profile",name:"profile",component:Ee},{path:"/admin",name:"admin",component:Ie},{path:"/mod",name:"moderator",component:Ue},{path:"/user",name:"user",component:Pe}],De=Object(U["a"])({history:Object(U["b"])("/"),routes:xe}),Le=De,Ae=n("5502"),Te=JSON.parse(localStorage.getItem("user")),Be=Te?{status:{loggedIn:!0},user:Te}:{status:{loggedIn:!1},user:null},Re={namespaced:!0,state:Be,actions:{login:function(e,t){var n=e.commit;return R.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;R.logout(),t("logout")},register:function(e,t){var n=e.commit;return R.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},getters:{},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Ce=Object(Ae["a"])({modules:{auth:Re}}),Fe=Ce,qe=n("3fd4");n("7dd6"),n("7b17"),n("ab8b");Le.beforeEach((function(e,t,n){var r=["/login","/register","/home"],a=!r.includes(e.path),s=localStorage.getItem("user");a&&!s?n("/login"):n()})),Object(r["h"])(I).use(qe["a"]).use(Fe).use(Le).mount("#app")},9548:function(e,t,n){"use strict";n("efce")},ed02:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r);function s(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var c=a.a.create({baseURL:"/api",timeout:1e3});t["a"]={getPublicContent:function(){return c.get("/test/all")},getUserBoard:function(){return c.get("/test/user",{headers:s()})},getModeratorBoard:function(){return c.get("/test/mod",{headers:s()})},getAdminBoard:function(){return c.get("/test/admin",{headers:s()})}}},efce:function(e,t,n){}});
//# sourceMappingURL=app.2dd6d879.js.map